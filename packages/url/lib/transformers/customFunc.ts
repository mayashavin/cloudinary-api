import type { CustomFunction } from '../types/transformation/CustomFunc'

export const customFunction = ({ type, source }: CustomFunction) => {
  if (!type || !source) return ''

  const functionType = `fn_${type}`

  return `${functionType}:${source}`
}