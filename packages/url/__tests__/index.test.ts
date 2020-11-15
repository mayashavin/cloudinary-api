import { buildUrl, buildVideoUrl, getConfig, setConfig } from '../lib/index'

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
  })
})