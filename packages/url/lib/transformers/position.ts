
export interface Position{
  x?: number,
  y?: number
}

export const position = ({ x, y }: Position) => {
  const xAxis = x ? `x_${x}` : ''
  const yAxis = y ? `y_${y}` : ''

  return [xAxis, yAxis].filter(Boolean).join()
}