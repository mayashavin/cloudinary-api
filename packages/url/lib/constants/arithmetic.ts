export const ArithmeticExpression = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow",
} as const


export const PredefinedVariables = {
  width: 'w',
  height: 'h',
  x: 'x',
  y: 'y',
  quality: 'q',
  if: 'if',
  aspectRatio: 'ar',
  rotate: 'a',
  opacity: 'o',
  radius: 'r',
  dpr: 'dpr',
  effect: 'e',
  border: 'bo',
  currentPage: 'cp',
  preview: 'preview:duration',
  duration: 'du',
  faceCount: 'fc',
  initialAspectRatio: 'iar',
  initialDuration: 'idu',
  initialHeight: 'ih',
  initialWidth: 'iw',
  pageCount: 'pc',
  pageX: 'px',
  pageY: 'py',
  tags: 'tags',
} as const

export const Prefix = '$' as const

export const PreDefinedPatterns = `(${Object.keys(PredefinedVariables).join('|')})`

export const AcceptNumbericVars = ['quality', 'if', 'rotate', 'zoom', 'opacity', 'radius', 'effect', 'dpr']