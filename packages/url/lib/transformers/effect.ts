export const effect = (value: string | string[]):string => {
  if (!value || value.length === 0) return ''

  const effectValue = typeof value === 'string' ? value : value.join(':')

  return `e_${effectValue}`
}