import { buildImageUrl, buildUrl, buildVideoUrl, extractPublicId, getConfig, setConfig, Transformer } from '../lib/index'
import { extractPublicId as originalExtractPublicId } from '../lib/url'
import { transform, toTransformationStr } from '../lib/transformers'

describe('General tests', () => {
  it('configurations', () => {
    setConfig({
      cloudName: 'demo'
    })

    expect(getConfig()).toEqual({
      cloudName: 'demo'
    })
  })

  describe('buildUrl()', () => {
    it('should return default transformation', () => {
      expect(buildUrl('example', {
        cloud: {
          cloudName: 'demo'
        }
      })).toBe('https://res.cloudinary.com/demo/image/upload/q_auto,f_auto/example')
    });
    it('should return right url with configurations', () => {
      setConfig({
        cloudName: 'm'
      })

      expect(buildUrl('example', {
        transformations: {
          resize: {
            type: 'scale',
            width: 200
          }         
        }
      })).toEqual('https://res.cloudinary.com/m/image/upload/c_scale,w_200,q_auto,f_auto/example') 
    });

    it('should return right url with personalized configurations', () => {
      setConfig({
        cloudName: 'm'
      })

      expect(buildUrl('example', {
        transformations: {
          resize: {
            type: 'scale',
            width: 200
          }         
        },
        cloud: {
          cloudName: 'demo'
        }
      })).toEqual('https://res.cloudinary.com/demo/image/upload/c_scale,w_200,q_auto,f_auto/example') 

      expect(getConfig()).toEqual({
        cloudName: 'm'
      })
    });
})

  describe('buildVideoUrl()', () => {
    it('should return url with default config when no cloud', () => {
      setConfig({
        cloudName: 'demo'
      })

      expect(buildVideoUrl('example', { transformations: {} })).toBe('https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/example')
    });

    it('should return url with default config', () => {
      setConfig({
        cloudName: 'demo'
      })

      expect(buildVideoUrl('example', {})).toBe('https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/example')
    });

    it('should return right url format for video', () => {
      expect(buildVideoUrl('example', {
        transformations: {
          resize: {
            type: 'scale',
            width: 200
          }         
        },
        cloud: {
          cloudName: 'demo'
        }
      })).toEqual('https://res.cloudinary.com/demo/video/upload/c_scale,w_200,q_auto,f_auto/example') 

    })
  });

  describe('buildImageUrl()', () => {
    
    it('should return url with default config when no cloud', () => {
      setConfig({
        cloudName: 'demo'
      })

      expect(buildImageUrl('example', { transformations: {} })).toBe('https://res.cloudinary.com/demo/image/upload/q_auto,f_auto/example')
    });
    it('should return url with default config', () => {
      setConfig({
        cloudName: 'demo'
      })

      expect(buildImageUrl('example', {})).toBe('https://res.cloudinary.com/demo/image/upload/q_auto,f_auto/example')
    });

    it('should return url with cloud config', () => {

      expect(buildImageUrl('example', {
        cloud: {
          cloudName: 'demo'
        },
        transformations: {
          rotate: 10,
        }
      })).toBe('https://res.cloudinary.com/demo/image/upload/q_auto,a_10,f_auto/example')
    });
  });

  describe('exports', () => {
    it('should export extractPublicId', () => {
      expect(extractPublicId).toEqual(originalExtractPublicId)
    });

    it('should export transform', () => {
      expect(Transformer.transform).toEqual(transform)
    });

    it('should export toTransformationStr', () => {
      expect(Transformer.toString).toEqual(toTransformationStr)
    });
  });

})