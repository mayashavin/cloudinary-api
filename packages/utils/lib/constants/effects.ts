export const Brightness = {
  Auto: 'auto_brightness',
  Default: 'brightness',
  Hsb: 'hsb'
} as const

export const Contrast = {
  Default: 'contrast',
  Auto: 'auto_contrast'
} as const

export const ColorChannel = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const

export const ColorFilter = {
  Negate: 'negate',
  Sepia: 'sepia',
  Grayscale: 'grayscale',
  Blackwhite: 'blackwhite',
  Tint: 'tint',
} as const

export const ColorAdjustment = {
  Hue: 'hue',
  Saturation: 'saturation',
  Colorize: 'colorize',
  ReplaceColor: 'replace_color',
  Recolor: 'recolor',
  Theme: 'theme',
  Vibrance: "vibrance",
  AutoColor: 'auto_color',
  Vectorize: 'vectorize',
  Improve: 'improve',
  FillLight: 'fill_light',
  Outline: 'outline',
  CutOut: 'cut_out',
  Cartoonify: 'cartoonify',
  Fade: 'fade',
  StyleTransfer: 'style_transfer',
  Lightroom: 'lightroom',
  Art: 'art',
  ViesusCorrect: 'viesus_correct',
  Gamma: 'gamma',
  Screen: 'screen',
  Multiply: 'multiply',
  Overlay: 'overlay',
  AntiRemoval: 'anti_removal',
  Bgremoval: 'bgremoval',
  MakeTransparent: 'make_transparent',
  OpacityThreshold: 'opacity_threshold',
  Trim: 'trim',
  Shadow: 'shadow',
  Distort: 'distort',
  Shear: 'shear',
  Displace: 'displace',
  OilPaint: 'oil_paint',
  Redeye: 'redeye',
  AdvRedeye: 'adv_redeye',
  Vignette: 'vignette',
  Gradient_fade: 'gradient_fade',
  Sharpen: 'sharpen',
  UnsharpMask: 'unsharp_mask',
  OrderedDither: 'ordered_dither',
  Loop: 'loop',
} as const

export const Colorblind = {
  Assist:'assist_colorblind',
  Simulate: 'simulate_colorblind'
} as const

export const PixelateEffects = {
  Default: 'pixelate',
  Region: 'pixelate_region',
  Faces: 'pixelate_faces'
} as const

export const BlurEffects = {
  Default: 'blur',
  Region: 'blur_region',
  Faces: 'blur_faces'
} as const

export const VideoEffects = {
  Accelerate: 'accelerate',
  Reverse: 'reverse',
  Boomerang: 'boomerang',
  Loop: 'loop',
  ProgressBar: 'progressbar',
  Transparent: 'transparent',
  Preview: 'preview',
  Transition: 'transition',
  Noise: 'noise',
  Deshake: 'deshake',
  Volume: 'volume'
}

export const ArtisticFilters = {
  AlDente: 'al_dente',
  Athena: 'athena',
  Audrey: 'audrey',
  Aurora: 'aurora',
  Daguerre: 'daguerre',
  Eucalyptus: 'eucalyptus', 
  Fes: 'fes', 
  Frost: 'frost', 
  Hairspray: 'hairspray', 
  Hokusai: 'hokusai',
  Incognito: 'incognito',
  Linen: 'linen',
  Peacock: 'peacock',
  Primavera: 'primavera',
  quartz: 'quartz', 
  RedRock: 'red_rock', 
  Refresh: 'refresh', 
  Sizzle: 'sizzle', 
  Sonnet: 'sonnet', 
  Ukulele: 'ukulele', 
  Zorro: 'zorro'
}
