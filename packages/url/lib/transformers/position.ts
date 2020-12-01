import { Position } from '../types/transformation/Position'
import { formatValue } from './expression'

export const position = ({ x, y }: Position) => {
  const xAxis = x ? `x_${formatValue(x)}` : ''
  const yAxis = y ? `y_${formatValue(y)}` : ''

  return [xAxis, yAxis].filter(Boolean).join()
}