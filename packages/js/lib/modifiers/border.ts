type BorderType = 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'

export const border = ({ type = 'solid', color = 'black', width }: { type?: BorderType, color?: string, width: number | string }) => {
  if (width) {
    return `bo_${width}px_${type}_${color}`
  }

  return ''
}