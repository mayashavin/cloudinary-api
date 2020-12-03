import { UPLOAD_PREFIX } from '../lib/constants';
import { buildApiUrl, createSignature, toRequestParamString } from '../lib/utils'

describe('Utils', () => {
  describe('buildApiUrl()', () => {
    it('should return api url with default resource type', () => {
      expect(buildApiUrl('demo')).toEqual(`${UPLOAD_PREFIX}/v1_1/demo/auto/upload`)
    });

    it('should return api with the passed resouce and cloud', () => {
      expect(buildApiUrl('demo', 'image')).toEqual(`${UPLOAD_PREFIX}/v1_1/demo/image/upload`)
    });
  })

  describe('toRequestParamString()', () => {
    it('should return without cloudname, file, resourceType and apiKey', () => {
      // const mockDate = new Date(1466424490000)
      // const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate as unknown as string)
      spyOn(Date.prototype, 'getTime').and.returnValue(1466424490000)

      expect(toRequestParamString({
        cloudName: 'demo',
        file: 'abce',
        resourceType: 'auto',
        apiKey: '1234',
        publicId: 'example',
        prefix: 'folder',
        eager: 'w_400,h_300,c_pad|w_260,h_200,c_crop'
      })).toEqual('eager=w_400,h_300,c_pad|w_260,h_200,c_crop&prefix=folder&publicId=example&timestamp=1466424490')
    });
  })

  describe('createSignature()', () => {
    it('should return SHA256 hexadecimal result', () => {
      expect(createSignature('eager=w_400,h_300,c_pad|w_260,h_200,c_crop&public_id=sample_image&timestamp=1315060510', 'abcd')).toBe('cc927e1290f9e3ae4c1a741eda21a4630b4ce80f9ce0bc0296337d25cf40f91e')
    });
  })
})