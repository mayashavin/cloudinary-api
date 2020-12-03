import { ConditionOperators } from '@cld-apis/utils'
import { TransformerOption } from '../options/TransformerOption'

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