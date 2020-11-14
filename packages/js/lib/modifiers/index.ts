import { MODIFIERS } from '../constants'
import { effect } from './effect'

export type Modification = Array<string | string[]>

export const getResize = (options):string => {
  const hasResize = options.resize || options.width || options.height

  if (!hasResize) return ''

  const { resize } = require('./resize')
    
  return resize(options.resize || { width: options.width, height: options.height, type: options.crop })
}

export const getBorder = (options):string => {
  if (!options.border) return ''

  const { border } = require('./border')

  const borderModification = (typeof options.border === 'string') ? `bo_${options.border}` : border(options.border)

  return borderModification
}

export const getModifications = (options):string[] => {
  const result = []

  result.push(getResize(options))
  result.push(getBorder(options))

  for (let modifier in options) {
    const value = options[modifier]
    const mapping = MODIFIERS[modifier]

    if (!mapping) continue

    result.push(`${mapping}_${value}`)
  }

  result.push(effect(options.effect))

  return result.filter(Boolean)
}

export const modify = (options):Modification => {
  const modifications:Modification = getModifications(options)

  //chaining
  const chainedModifiers = options.transformation || options.chaining

  if (chainedModifiers && Array.isArray(chainedModifiers)) {
    chainedModifiers.forEach(chained => {
      const chainedModification = getModifications(chained)

      chainedModification.length > 0 && modifications.push(chainedModification)
    })
  }

  return modifications
}

export default modify