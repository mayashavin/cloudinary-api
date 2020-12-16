import { NamedColors } from "./constants"

export const colorify = (value: string, prefix: string = 'rgb:') => {
  if (!value) return ''

  if (Object.values(NamedColors).includes(value)) return value

  const color = value.startsWith('#') ? value.slice(1) : value

  if (color.length < 3 || color.length > 8) {
    throw new Error('HEX Color should be 3-4 digits for RGB/RGBA, or 6-8 digits for RGB/RGBA triplet/quadruplet')
  }

  return `${prefix}${color}`
}