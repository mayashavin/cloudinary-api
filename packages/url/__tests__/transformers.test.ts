import { transform, getBorder, getTransformations, getResize, toTransformationStr, getPosition } from '../lib/transformers'
import { resize } from '../lib/transformers/resize'
import { border } from '../lib/transformers/border'
import { position } from '../lib/transformers/position'
import { effect } from '../lib/transformers/effect'

describe('Modifiers', () => {
  describe('transform()', () => {
    it('returns valid mapping', () => {
      const options = {
        width: 500,
        height: 500,
        aspectRatio: '16:9',
        crop: 'scale'
      }

      expect(transform(options)).toEqual([
        'c_scale,w_500,h_500,ar_16:9',
      ])
    })

    it('returns modifications with chained', () => {
      const options = {
        width: 500,
        height: 500,
        aspectRatio: '16:9',
        crop: 'scale',
        chaining: [{
          bitRate: 12,
          effect: 'grayscale'
        }, {
          effect: 'pixelate',
          border: {
            width: 1,
            type: 'dashed',
            color: '#fff'
          }
        }]
      }

      expect(transform(options)).toEqual([
        'c_scale,w_500,h_500,ar_16:9',
        ['br_12','e_grayscale'],
        ['bo_1px_dashed_#fff', 'e_pixelate']
      ])
    })
  })

  describe('getBorder()', () => {
    it('will return a default color and size if only width', () => {
      const options = {
        border: {
          width: 10
        }
      }

      expect(getBorder(options)).toEqual('bo_10px_solid_black')
    })

    it('returns the mapped string value if border is a string', () => {
      const options = {
        border: '10px_dotted_black'
      }

      expect(getBorder(options)).toEqual('bo_10px_dotted_black')
    })
  })

  describe('getTransformations()', () => {
    it('only return the valid fields', () => {
      const options = {
        bitRate: 12,
        cloudName: 'demo',
        customFunction: 'func',
        format: 'auto',
        fallbackContent: '<div>hello</div>',
      }

      expect(getTransformations(options)).toEqual([
        'br_12',
        'fn_func',
        'f_auto'
      ])
    })
  })

  describe('getResize()', () => {
    it('should prioritize resize field', () => {
      const options = {
        resize: {
          type: 'crop',
          width: 10,
          height: 10
        },
        width: 20
      }

      expect(getResize(options)).toEqual('c_crop,w_10,h_10')
    })

    it('should support width field', () => {
      const options = {
        width: 20
      }

      expect(getResize(options)).toEqual('w_20')
    })

    it('should support height field', () => {
      const options = {
        height: 20
      }

      expect(getResize(options)).toEqual('h_20')
    })

    it('should support width, height, aspectRatio and crop field', () => {
      const options = {
        height: 20,
        width: 20,
        crop: 'scale',
        aspectRatio: '1:1'
      }

      expect(getResize(options)).toEqual('c_scale,w_20,h_20,ar_1:1')
    })
  })  

  describe('toTransformationStr()', () => {
    it('returns modifications with chained', () => {
      const options = {
        width: 500,
        height: 500,
        aspectRatio: '16:9',
        crop: 'scale',
        chaining: [{
          bitRate: 12,
          effect: 'grayscale'
        }, {
          effect: 'pixelate',
          border: {
            width: 1,
            type: 'dashed',
            color: '#fff'
          }
        }]
      }

      expect(toTransformationStr(transform(options))).toEqual(
        'c_scale,w_500,h_500,ar_16:9/br_12,e_grayscale/bo_1px_dashed_#fff,e_pixelate'
      )
    })
  })

  describe('getPosition()', () => {
    it('should prioritize position field', () => {
      const options = {
        position: {
          x: 10,
          y: 10,
        },
        x: 20,
        y: 20
      }

      expect(getPosition(options)).toEqual('x_10,y_10')
    })

    it('should take x field', () => {
      expect(getPosition({
        x: 10
      })).toBe('x_10')
    })

    it('should take y field', () => {
      expect(getPosition({ y: 10 })).toBe('y_10')
    })
  })
})

describe('resize()', () => {
  it('should return with all options', () => {
    expect(resize({type: 'crop', width: 10, height: 20})).toEqual('c_crop,w_10,h_20')
  })

  it('should return only type and height', () => {
    expect(resize({ type: 'crop', height: 20 })).toEqual('c_crop,h_20')
  })

  it('should return only type and width', () => {
    expect(resize({ type: 'crop', width: '10' })).toEqual('c_crop,w_10')
  })

  it('should not return crop when only width and height', () => {
    expect(resize({ width:10, height: 10 })).toEqual('w_10,h_10')
  })
})

describe('border', () => {
  it('should return a default type and color if only width is passed', () => {
    expect(border({ width: 10 })).toEqual('bo_10px_solid_black')
  })

  it('should return options', () => {
    expect(border({ type: 'dotted', color: 'blue', width: 10 })).toEqual('bo_10px_dotted_blue')
  })
})

describe('position', () => {
  it('should return full options string', () => {
    expect(position({ x: 10, y: 10 })).toBe('x_10,y_10')
  })

  it('should return x only', () => {
    expect(position({ x: 10 })).toBe('x_10')
  })

  it('should return y only', () => {
    expect(position({ y: 10 })).toBe('y_10')
  })

  it('should return empty string', () => {
    expect(position({})).toBe('')
  })
})

describe('effect', () => {
  it('should return legal string for array input', () => {
    expect(effect(['grayscale', 'tint:80'])).toBe('e_grayscale:tint:80')
  })

  it('should return legal string for string input', () => {
    expect(effect('grayscale:tint')).toBe('e_grayscale:tint')
  })

  it('should return empty string', () => {
    expect(effect('')).toBe('')
  })
})