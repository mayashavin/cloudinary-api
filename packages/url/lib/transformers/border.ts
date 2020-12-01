import { Border } from '../types/transformation/Border'
import { convert } from './expression'

export const border = ({ type = 'solid', color = 'black', width }: Border) => {
  if (width) {
    const formattedValue = isNaN(width as number) ? convert(width as string) : `${width}px`
    return `bo_${formattedValue}_${type}_${color}`
  }

  return ''
}