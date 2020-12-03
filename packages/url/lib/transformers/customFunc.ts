import type { CustomFunction } from '@cld-apis/types'

export const customFunction = ({ type, source }: CustomFunction) => {
  if (!type || !source) return ''

  const functionType = `fn_${type}`

  return `${functionType}:${source}`
}