import { toString } from '../lib/utils'

describe('Utils', () => {
  describe('toString()', () => {
    it('should returns array without any falsy value', () => {
      expect(toString([null, '', false, true, 'hello'])).toBe('true:hello')
    });

    it('should returns string with given separation', () => {
      expect(toString(['hello', 'yeah'], '&')).toBe('hello&yeah')
    });
  });
});