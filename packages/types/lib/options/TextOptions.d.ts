import { Gravity, Position, ResizeType } from "../transformation";
import { CompassGravity } from "../transformation";

type TextOffset = {
  top?: number,
  bottom?: number,
  left?: number,
  right?: number
}

export type TextOptions = {
  font?: string,
  placementDirection?: CompassGravity,
  position?: Position,
  color?: string,
  size?: string | number,
  extraConfig?: string
}

export interface SocialText extends TextOptions {
  value: string
}

export interface TextArea extends TextOptions {
  width: number
}

export interface SocialImage {
  publicId: string,
  width?: number,
  height?: number,
  resizeFocus?: Gravity,
  cropMode?: ResizeType
}

export interface SocialCard {
  tagline?: SocialText
  title: SocialText,
  text: TextArea,
  image: SocialImage
}