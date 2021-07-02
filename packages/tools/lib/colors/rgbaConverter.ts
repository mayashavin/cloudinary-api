import { RGBA } from '../types/RGBA'

const toHEXValue = (num):string => num.toString(16)
const SEPARATION = ','

export const parseRGBAColorStr = (rgba: string): number[] => {
  const sep = rgba.includes(SEPARATION) ? SEPARATION : " ";
  const indexToParse = rgba.indexOf('(')
  const colors:string[] = rgba.substr(indexToParse + 1).split(")")[0].split(sep)

  // Strip the slash if using space-separated syntax
  if (colors.includes("/")) {
    colors.splice(3, 1)
  }

  const mappedColors = colors.map((color, index) => {
    if (!color.includes("%")) return +color

    // Convert %s to 0–255
    const pixels = +(color.substr(0, color.length - 1)) / 100

    return index < 3 ? Math.round(pixels * 255) : pixels
  })

  return mappedColors
}

export const RGBAToHexA = (rgba:string):RGBA => {
  const colors:number[] = parseRGBAColorStr(rgba)

  const colorIndex:string[] = ["red", "green", "blue", "alpha"]

  const RGBAObj:RGBA = colors.reduce((obj:any, color:number , index: number) => {
    const value = toHEXValue(index === 3 ? Math.round(color * 255) : color)

    obj[colorIndex[index]] = value.length === 1 ? `0${value}` : value
    return obj
  }, {})

  return RGBAObj
}

export const RGBAToHSL = (rgba : string) => {
  const colors:number[] = parseRGBAColorStr(rgba)

  const mappedRGB = colors.map(color => color / 255)  

  if (mappedRGB.length > 3) { mappedRGB.pop() }

  const channel = {
    min: Math.min(...mappedRGB),
    max: Math.max(...mappedRGB),
  };

  const hue = calculateHue(channel, { red: mappedRGB[0], green: mappedRGB[1], blue: mappedRGB[2] })
  const lightness = calculateLightness(channel)
  const saturation = calculateSaturation(channel)

  return {
    hue,
    lightness,
    saturation,
    alpha: colors[3]
  }
}

const calculateHue = (channel, colors) => {
  const delta = channel.max - channel.min

  if (delta === 0) return 0

  let baseHue = (colors.red - colors.green) / delta + 4

  if (channel.max === colors.red) {
    baseHue = (colors.green - colors.blue) / delta % 6
  } else if (channel.max === colors.green) {
    baseHue = (colors.blue - colors.red) / delta + 2
  }

  const roundHue = Math.round(baseHue * 60)

  return roundHue < 0 ? roundHue + 360 : roundHue
}

const calculateLightness = (channel):number => +(((channel.max + channel.min) / 2) * 100).toFixed(1)

const calculateSaturation = (channel):number => {
  const delta = channel.max - channel.min

  if (delta === 0) return 0

  const lightness = (channel.max + channel.min) / 2

  const saturation = delta / (1 - Math.abs(2 * lightness - 1))

  return +(saturation * 100).toFixed(1)
}
