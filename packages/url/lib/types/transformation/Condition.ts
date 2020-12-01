import { ConditionOperators } from '../../constants/condition'
import { TransformerOption } from '../CldOptions'

export type Expression = {
  characteristic: string | string[],
  operator: keyof typeof ConditionOperators,
  value: string | number,
}

export type ConditionExpression = {
  expression?: Expression[],
  transformations: TransformerOption[]
}

export type Condition = {
  if: ConditionExpression,
  else?: ConditionExpression
}