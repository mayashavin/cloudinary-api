import { Offset } from '@cld-apis/types'

export const offset = (obj?: Offset) => {
  if (!obj) return ''

  const start = obj.start ? `so_${obj.start}` : ''
  const end = obj.end ? `eo_${obj.end}` : ''
  const duration = obj.duration ? `du_${obj.duration}` : ''

  return [start, end, duration].filter(Boolean).join(',')
}