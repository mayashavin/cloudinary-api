import { TRANSFORMERS } from '../constants'
import { AcceptNumbericVars } from '../constants/arithmetic'
import { effect } from './effect'
import { formatValue } from './expression'
import { flags } from './flags'
import { rawTransformation } from './rawTransformation'
import { variables } from './variables'

export type Transformation = Array<string | string[]>

export const getResize = (options):string => {
  const hasResize = options.resize || options.width || options.height || options.aspectRatio

  if (!hasResize) return ''

  const { resize } = require('./resize')
    
  return resize(options.resize || { width: options.width, height: options.height, type: options.crop, aspectRatio: options.aspectRatio })
}

export const getBorder = (options):string => {
  if (!options.border) return ''

  const { border } = require('./border')

  const borderModification = (typeof options.border === 'string') ? `bo_${options.border}` : border(options.border)

  return borderModification
}

export const getPosition = (options): string => {
  if (!options.x && !options.y && !options.position) return ''

  const { position } = require('./position')

  return position(options.position || { x: options.x, y: options.y })
}

export const getTransformations = (options):string[] => {
  const result = []

  result.push(variables(options.variables))
  result.push(getResize(options))
  result.push(getBorder(options))
  result.push(getPosition(options))

  for (let modifier in options) {
    const value = options[modifier]
    const mapping = TRANSFORMERS[modifier]

    if (!mapping || !value) continue

    const isAcceptedNumberic = AcceptNumbericVars.includes(modifier)

    result.push(`${mapping}_${isAcceptedNumberic ? formatValue(value) : value}`)
  }

  result.push(effect(options.effect))
  result.push(flags(options.flags))
  result.push(rawTransformation(options.rawTransformation))
  return result.filter(Boolean)
}

export const transform = (options):Transformation => {
  const transformations:Transformation = getTransformations(options)

  //chaining
  const chainedTransformations = options.transformation || options.chaining

  if (chainedTransformations && Array.isArray(chainedTransformations)) {
    chainedTransformations.forEach(chained => {
      const chainedTransformation = getTransformations(chained)

      chainedTransformation.length > 0 && transformations.push(chainedTransformation)
    })
  }

  return transformations.filter(Boolean)
}

export const toTransformationStr = (transformations: Transformation):string => transformations.reduce<string>((str: string, transformation: string | string[]):string => {
    const isChained = Array.isArray(transformation)
    const separation = isChained ? '/' : ','

    return `${str}${str ? separation : ''}${transformation.toString()}`
  }, '')

export default transform