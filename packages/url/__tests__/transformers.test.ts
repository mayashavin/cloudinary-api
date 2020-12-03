import { transform, getBorder, getTransformations, getResize, toTransformationStr, getPosition } from '../lib/transformers'
import { resize } from '../lib/transformers/resize'
import { border } from '../lib/transformers/border'
import { position } from '../lib/transformers/position'
import { effect } from '../lib/transformers/effect'
import { flags } from '../lib/transformers/flags'
import { convert } from '../lib/transformers/expression'
import { TransformerVideoOption } from '@cld-apis/types'
import { Brightness } from '@cld-apis/utils'

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

    it('returns valid mapping with variables', () => {
      const options = {
        width: '$big',
        height: 'initialWidth + 20',
        aspectRatio: '16:9',
        crop: 'scale'
      }

      expect(transform(options)).toEqual([
        'c_scale,w_$big,h_iw_add_20,ar_16:9',
      ])
    })

    it('returns valid mapping with rotation variables', () => {
      const options = {
        rotate: 'initialWidth / 2'
      }

      expect(transform(options)).toEqual([
        'a_iw_div_2',
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
          effect: {
            name: 'grayscale'
          }
        }, {
          effect: {
            name: 'pixelate'
          },
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

    it('should transform video url', () => {
      const options:TransformerVideoOption = {
        audioCodec: 'aac',
        colorSpace: 'srgb',
        effect: {
          name: Brightness.Auto,
          value: 50
        },
        flags: ['animated', 'waveform'],
        gravity: 'auto'
      }
      expect(transform(options)).toEqual([
        'ac_aac',
        'cs_srgb',
        'g_auto',
        'e_auto_brightness:50',
        'fl_animated:waveform'
      ])
    });
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
          effect: {
           name: 'grayscale'
          }
        }, {
          effect: {
            name: 'pixelate'
          },
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
    expect(border({ color: 'blue', width: 10 })).toEqual('bo_10px_solid_blue')
  })

  it('should return empty string', () => {
    expect(border({ width: '' })).toBe('')
  });

  it('should return converted expression', () => {
    expect(border({ width: 'initialWidth + 3 / 10' })).toBe('bo_iw_add_3_div_10_solid_black')
  });
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
    expect(effect({
      name: 'grayscale',
      value: ['tint','80']
    })).toBe('e_grayscale:tint:80')
  })

  it('should return legal string for string value input', () => {
    expect(effect({
      name: 'grayscale',
      value: 'tint'
    })).toBe('e_grayscale:tint')
  });

  // it('should return empty string if there is no name passed', () => {
  //   expect(effect({
  //     name: '',
  //     value: 'tint'
  //   })).toBe('')
  // });

  it('should return effect string without value', () => {
    expect(effect({
      name: 'grayscale',
    })).toBe('e_grayscale')
  });
})

describe('flags', () => {
  it('should return empty string for empty string', () => {
    expect(flags()).toBe('')
  });

  it('should return empty string for empty array', () => {
    expect(flags([])).toBe('')
  });

  it('should return legal string for none-empty string', () => {
    expect(flags('awebp')).toBe('fl_awebp')
  });

  it('should return legal string for non-empty array', () => {
    expect(flags(['awebp', 'any_format'])).toBe('fl_awebp:any_format')
  });
})

describe('expression', () => {
  it('should not parse empty expression', () => {
    expect(convert('')).toBe('')
  });

  it('should convert arithmetic expression', () => {
    expect(convert('a + 100 / 3')).toBe('a_add_100_div_3')
  })

  it('should convert pre defined variables', () => {
    expect(convert('initialWidth + 100 / 3')).toBe('iw_add_100_div_3')
  });

  it('should not convert variable with prefix $ ', () => {
    expect(convert('$initialWidth + 100 / 3')).toBe('$initialWidth_add_100_div_3')
  });
  
});