export const ConditionOperators = {
  equal: "eq",
  notEqual: "ne",
  lessThan: "lt",
  greaterThan: "gt",
  lessOrEqual: "lte",
  greaterOrEqual: "gte",
  include: "in",
  notInclude: "nin",
} as const

export const ConditionalParams = {
  width: 'w',
  initialWidth: 'iw',
  height: 'h',
  initialHeight: 'ih',
  aspectRatio: 'ar',
  intialAspectRatio: 'iar',
  context: 'ctx',
  metadata: 'md',
  tags: 'tags',
  trimmedAspectRatio: 'tar',
  currentPage: 'cp',
  faceCount: 'fc',
  pageCount: 'pc',
  pageXOffset: 'px',
  pageYOffset: 'py',
  initialDensity: 'idn',
  illustration: 'ils',
  pageNames: 'pgnames' // layers in TIFF 
} as const
