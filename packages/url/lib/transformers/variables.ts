import { Formats, Prefix } from "../constants/variable";
import { ValueAssignable } from '@cld-apis/utils'
import { StringValue, Variable } from "@cld-apis/types";
import { toString } from "../utils";
import { convert, hasArithmeticExpression } from "./expression";

export const convertStringValueType = (value: StringValue):string => {
  if (!value || !value.expression) return ''

  const expression = Array.isArray(value.expression) ? toString(value.expression) : value.expression

  const isArithmetic = hasArithmeticExpression(expression)
  const convertedExpression = convert(expression)
  const format = Formats[value.formatAs] || ''

  const mappedExpression = convertedExpression && !isArithmetic ? `!${convertedExpression}!` : convertedExpression
  
  return toString([mappedExpression, format], '_')
}

export const computeVariable = (variable: Variable):string => {
  const name = `${Prefix}${variable.name}`
  let value: number | string = variable.value as number

  if (isNaN(variable.value as number)) {
    if (Array.isArray(variable.value)) {
      value = toString(variable.value)
    } else {
      value = convertStringValueType(variable.value as StringValue)
    }
  }

  const varValue = toString([ValueAssignable[variable.assignFrom], value], ':')

  return varValue ? toString([name, varValue], '_') : ''
}

export const variables = (value?: Variable | Variable[]):string => {
  if (!value) return ''

  if (!Array.isArray(value)) return computeVariable(value)

  return toString(value.map((variable:Variable):string => computeVariable(variable)), ',')
}