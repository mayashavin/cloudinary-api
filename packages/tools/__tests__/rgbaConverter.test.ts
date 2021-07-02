import { RGBAToHexA } from '../lib/colors/rgbaConverter'

describe('RGBAToHexA', () => {
  it('converts from rgba(num, num, num, float)', () => {
    expect(RGBAToHexA("rgba(255,25,2,0.5)")).toEqual({
      red: "ff",
      green: "19",
      blue: "02",
      alpha: "80"
    })
  })

  it('converts from rgba(num num num / float)', () => {
    expect(RGBAToHexA("rgba(255 25 2 / 0.5)")).toEqual({
      red: "ff",
      green: "19",
      blue: "02",
      alpha: "80"
    })
  })

  it('converts from rgba(%, %, %, float)', () => {
    expect(RGBAToHexA("rgba(50%,30%,10%,0.5)")).toEqual({
      red: "80",
      green: "4d",
      blue: "1a",
      alpha: "80"
    })
  })

  it('converts from rgba(%, %, %, %)', () => {
    expect(RGBAToHexA("rgba(50%,30%,10%,50%)")).toEqual({
      red: "80",
      green: "4d",
      blue: "1a",
      alpha: "80"
    })
  })

  it('converts from rgba(% % % / float)', () => {
    expect(RGBAToHexA("rgba(50% 30% 10% / 0.5)")).toEqual({
      red: "80",
      green: "4d",
      blue: "1a",
      alpha: "80"
    })
  })

  it('converts from rgba(% % % / %)', () => {
    expect(RGBAToHexA("rgba(50% 30% 10% / 50%)")).toEqual({
      red: "80",
      green: "4d",
      blue: "1a",
      alpha: "80"
    })
  })
});