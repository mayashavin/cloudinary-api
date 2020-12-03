import transform, { toTransformationStr } from ".";
import { ConditionOperators } from "@cld-apis/utils";
import { ConditionalParams } from '../constants/condition'
import { Condition, ConditionExpression, Expression } from "@cld-apis/types";
import { toString } from "../utils";

export const computeCondition = (conditionObj: ConditionExpression): { expression: string, transformations: string } => {
  const expression = conditionObj.expression ? toString(conditionObj.expression.map(exp => computeConditionExpression(exp)), '_and_') : ''

  const transformations = conditionObj.transformations.map(transformation => toTransformationStr(transform(transformation)))

  return {
    expression,
    transformations: toString(transformations, '/')
  }
}

export const mapCharacteristic = (expression: string) => ConditionalParams[expression] || expression

export const computeConditionExpression = (expression: Expression) => {
  const characteristic = Array.isArray(expression.characteristic) ? toString((expression.characteristic as string[]).map(mapCharacteristic)) : mapCharacteristic(expression.characteristic as string)  
  const operator = ConditionOperators[expression.operator]
  const value = isNaN(expression.value as number) ? `!${expression.value}!` : expression.value

  return toString([characteristic, operator, value], '_')
}

export const condition = (conditionObj?: Condition):string | string[] => {
  if (!conditionObj || !conditionObj.if || !conditionObj.if.expression) return ''

  const ifCondition = computeCondition(conditionObj.if)
  const elseCondition = conditionObj.else ? computeCondition(conditionObj.else) : null

  const formattedIf = toString([`if_${ifCondition.expression}`, ifCondition.transformations ], '/')
  const formattedElse = elseCondition ? toString(['if_else', elseCondition.transformations], '/') : ''

  return [ toString([formattedIf, formattedElse, 'if_end'], '/') ]
}