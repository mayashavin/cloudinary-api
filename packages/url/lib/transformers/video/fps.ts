import { FPS, FPSType } from "../../types/transformation/Fps"
import { toString } from "../../utils"

export const fps = (value?: FPS):string => {
  const isObj = typeof value === 'object'
  if (!value || (isObj && !(value as FPSType).min)) return ''
  
  const range = isObj ? toString([(value as FPSType).min, (value as FPSType).max], '-') : value
  
  return `fps_${range}`
}