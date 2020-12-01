import { Gravity as GravityConsts } from '../../constants/gravity'

export type Gravity = typeof GravityConsts[keyof typeof GravityConsts]