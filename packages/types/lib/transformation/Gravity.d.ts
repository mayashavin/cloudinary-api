import { Compass, Gravity as GravityConsts } from '@cld-apis/utils'

export type Gravity = typeof GravityConsts[keyof typeof GravityConsts]

export type CompassGravity = typeof Compass[keyof typeof Compass]