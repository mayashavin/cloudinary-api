export type Effect = string | string[]

export const effect = (value: Effect):string => {
  if (!value || value.length === 0) return ''

  const effectValue = typeof value === 'string' ? value : value.join(':')

  return `e_${effectValue}`
}