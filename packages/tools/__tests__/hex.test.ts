import Hex from '../lib/colors/hex'

describe('Hex', () => {
  let instance;

  beforeEach(() => {
    instance = new Hex('rgba(255,25,2,0.5)')
  });

  it('toString()', () => {
    expect(instance.toString()).toBe('ff190280')
  })

  it('toPrefixString() takes default prefix', () => {
    expect(instance.toPrefixString()).toBe('#ff190280')
  })

  it('toPrefixString() takes prefix', () => {
    expect(instance.toPrefixString('rgba:')).toBe('rgba:ff190280')
  })
});