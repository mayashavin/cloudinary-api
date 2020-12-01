import { ArithmeticExpression, PreDefinedPatterns, PredefinedVariables } from '../constants/arithmetic'
import { Prefix } from '../constants/variable'

const OPERATORS_REGEX = `((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))`

const mapArithmeticExpression = (orgExpression: string):string => {
  const regex = new RegExp(OPERATORS_REGEX, 'g')

  return orgExpression.replace(regex, (match:string) => ArithmeticExpression[match])
} 

const mapPredefinedVariables = (orgExpression: string):string => {
  const regex = new RegExp(PreDefinedPatterns, 'g')

  return orgExpression.replace(regex, (match:string, p, index: number) => orgExpression[index - 1] === Prefix ? match : PredefinedVariables[match])
}

export const formatValue = (value: string | number) => isNaN(value as number) ? convert(value as string) : value

export const convert = (expression: string):string => {
  if (!expression) return ''

  const mappedArithmetic = mapArithmeticExpression(expression)
  const converted = mapPredefinedVariables(mappedArithmetic)

  return converted.replace(/[ _]+/g, '_')  
}

export const hasArithmeticExpression = (expression: string):boolean => {
  const regex = new RegExp(OPERATORS_REGEX, 'g')

  return regex.test(expression)
}