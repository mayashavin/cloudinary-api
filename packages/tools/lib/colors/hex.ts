
import { RGBAToHexA } from './rgbaConverter'
import { RGBA } from '../types/RGBA'

export class Hex implements RGBA {
  red: string
  green: string
  blue: string
  alpha?: string = ''

  constructor(rgba:string) {
    const colors = RGBAToHexA(rgba)

    this.red = colors.red
    this.green = colors.green
    this.blue = colors.blue
    this.alpha = colors.alpha || ''
  }

  toString():string {
    return `${this.red}${this.green}${this.blue}${this.alpha}`
  }

  toPrefixString(prefix: string = '#'):string {
    return `${prefix}${this.toString()}`
  }
}

export default Hex