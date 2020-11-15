type BorderType = 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'

export interface Border {
  width: number | string,
  type?: BorderType,
  color?: string
}

export const border = ({ type = 'solid', color = 'black', width }: Border) => {
  if (width) {
    return `bo_${width}px_${type}_${color}`
  }

  return ''
}