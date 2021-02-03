import type { Position } from '@cld-apis/types'
import { formatValue } from './expression'

export const position = ({ x, y }: Position) => {
  const xAxis = x ? `x_${formatValue(x)}` : ''
  const yAxis = y ? `y_${formatValue(y)}` : ''

  return [xAxis, yAxis].filter(Boolean).join()
}