import { colorify } from '../lib/colorify'

describe('Colorify text', () => {
  it('should return empty string', () => {
    expect(colorify('')).toBe('')
  });

  it('should return string with default prefix', () => {
    expect(colorify('12234')).toBe('rgb:12234')
  });

  it('should return color replaced #', () => {
    expect(colorify('#ffffff')).toBe('rgb:ffffff')
  });

  it('should return color string with custom prefix', () => {
    expect(colorify('#123', 'cus')).toBe('cus123')
  });

  it('should return as is if it is named color', () => {
    expect(colorify('red')).toBe('red')
  });

  it('should throw error if color is not valid HEX (smaller than 3)', () => {
    expect(() => colorify('12')).toThrowError('HEX Color should be 3-4 digits for RGB/RGBA, or 6-8 digits for RGB/RGBA triplet/quadruplet')
  });

  it('should throw error if color is not valid HEX (larger than 8)', () => {
    expect(() => colorify('123456789')).toThrowError('HEX Color should be 3-4 digits for RGB/RGBA, or 6-8 digits for RGB/RGBA triplet/quadruplet')
  });
});