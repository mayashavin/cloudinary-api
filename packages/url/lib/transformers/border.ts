import type { Border } from '@cld-apis/types'
import { convert } from './expression'

export const border = ({ type = 'solid', color = 'black', width }: Border) => {
  if (!width) return ''

  const formattedValue = isNaN(width as number) ? convert(width as string) : `${width}px`
  return `bo_${formattedValue}_${type}_${color}`
}