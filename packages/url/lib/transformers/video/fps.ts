export const fps = (value: string | string[]):string => {
  if (Array.isArray(value)) return value.join('-')
  
  return value || ''
}