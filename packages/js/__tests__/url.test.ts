import { url, getPrefix, getPathToAsset, getVersion, getSignature } from '../lib/url'

describe('Url', () => {
  describe('getPrefix()', () => {
    it('should return a prefix with res.cloudinary as default', () => {
      expect(getPrefix("example", {
        cloudName: 'demo',
      })).toEqual('https://res.cloudinary.com/demo')
    })

    it('should return prefix with private cdn', () => {
      expect(getPrefix("example", {
        cloudName: 'demo',
        privateCdn: true
      })).toBe('https://demo-res.cloudinary.com')
    })

    it('should return prefix with secure domain', () => {
      expect(getPrefix('example', {
        cloudName: 'demo',
        secureDistribution: 'test.com'
      })).toBe('https://test.com/demo')
    })

    it('should return custom private prefix if private and has custom domain', () => {
      expect(getPrefix('example', {
        cloudName: 'demo',
        secureDistribution: 'test.com',
        privateCdn: true,
      })).toBe('https://test.com')
    })

    it('should ignore custome secure domain if secure is disabled', () => {
      expect(getPrefix('example', {
        cloudName: 'demo',
        secure: false,
        secureDistribution: 'test.com',
      })).toBe('http://res.cloudinary.com/demo')
    })

    it('should take cname if secure is disabled and cname is available', () => {
      expect(getPrefix('example', {
        cloudName: 'demo',
        secure: false,
        secureDistribution: 'test.com',
        cname: 'example.js'
      })).toBe('http://example.js/demo')
    })

    it('should not take secure domain if it is akamaihd or res.cloudinary', () => {
      expect(getPrefix('example', {
        cloudName: 'demo',
        secureDistribution: 'cloudinary-a.akamaihd.net',
      })).toBe('https://res.cloudinary.com/demo')
    })
  })

  describe('getVersion()', () => {
    it('should force the default version', () => {
      expect(getVersion('a', {
        forceVersion: true
      })).toEqual('v1')
    })

    it('should force the version when passed', () => {
      expect(getVersion('a', {
        version: 2,
        forceVersion: true
      })).toEqual('v2')
    });

    it('should not force version when not enabled ', () => {
      expect(getVersion('a', {})).toEqual('')
    });

    it('should not force a version when it is a url ', () => {
      expect(getVersion('https://hello', {
        forceVersion: true,
      })).toEqual('')
    });
    
    it('should not force a version when it already contains a version ', () => {
      expect(getVersion('v3/a', {
        forceVersion: true,
      })).toEqual('')
    });
  })

  describe('getPathToAsset()', () => {
    it('should return an encoded url if publicId is url', () => {
      expect(getPathToAsset('https://上海+中國.com', {})).toBe('https://%E4%B8%8A%E6%B5%B7%2B%E4%B8%AD%E5%9C%8B.com')
    })

    it('should return public id without extension and suffix', () => {
      expect(getPathToAsset('example', {})).toBe('example')
    })

    it('should return publicid path with new extension', () => {
      expect(getPathToAsset('example.gif', { format: '.jpg' })).toBe('example.jpg')
    })

    it('should return publicId with suffix', () => {
      expect(getPathToAsset('example', { urlSuffix: 'hello' })).toBe('example/hello')
    })
  })

  describe('getSignature()', () => {
    it('should return empty string if not signature passed', () => {
      expect(getSignature()).toBe('')
    })

    it('should return formatted signature', () => {
      expect(getSignature('jsdhfkljdhfs')).toBe('s--jsdhfkljdhfs--')
    })

    it('should return right formatted signature', () => {
      expect(getSignature('s--jsdhfkljdhfs--')).toBe('s--jsdhfkljdhfs--')
    })
  })

  describe('url()', () => {
    it('should return delivery url', () => {
      expect(url('example', {
        cloudName: 'demo',
        width: 500,
        height: 500,
        aspectRatio: '16:9',
        crop: 'scale',
        forceVersion: true
      })).toBe('https://res.cloudinary.com/demo/image/upload/c_scale,w_500,h_500,q_auto,ar_16:9,f_auto/v1/example')
    })

    it('should return fetch delivery url', () => {
      expect(url('example', {
        cloudName: 'demo',
        width: 500,
        height: 500,
        aspectRatio: '16:9',
        crop: 'scale',
        forceVersion: true,
        type: 'fetch'
      })).toBe('https://res.cloudinary.com/demo/image/fetch/c_scale,w_500,h_500,q_auto,ar_16:9,f_auto/v1/example')
    })

    it('should return fetch deliver url with target format', () => {
      expect(url('example', {
        cloudName: 'demo',
        width: 500,
        height: 500,
        aspectRatio: '16:9',
        crop: 'scale',
        type: 'fetch',
        format: 'png'
      })).toBe('https://res.cloudinary.com/demo/image/fetch/c_scale,w_500,h_500,q_auto,ar_16:9,f_png/example')
    })
  })
})
