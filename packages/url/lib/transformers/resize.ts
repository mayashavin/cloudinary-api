import { Resize } from "@cld-apis/types"
import { formatValue } from "./expression"


export const resize = ({ type, width, height, aspectRatio }: Resize) => {
  const w = width ? `w_${formatValue(width)}` : ''
  const h = height ? `h_${formatValue(height)}` : ''
  const crop = type ? `c_${type}` : ''
  const ar = aspectRatio ? `ar_${formatValue(aspectRatio)}` : ''

  return [ crop, w, h, ar ].filter(Boolean).join()
}
