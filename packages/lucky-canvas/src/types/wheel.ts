import {
  FontType,
  ImgType,
  BackgroundType,
  FontExtendType
} from './index'

export type PrizeFontType = FontType & FontExtendType

export type ButtonFontType = FontType & {}

export type BlockImgType = ImgType & {
  rotate?: boolean
}

export type PrizeImgType = ImgType & {}

export type ButtonImgType = ImgType & {}

export type BlockType = {
  padding?: string
  background?: BackgroundType
  imgs?: Array<BlockImgType>
}

export type PrizeType = {
  range?: number
  background?: BackgroundType
  fonts?: Array<PrizeFontType>
  imgs?: Array<PrizeImgType>
}

export type ButtonType = {
  radius?: string
  pointer?: boolean
  background?: BackgroundType
  fonts?: Array<ButtonFontType>
  imgs?: Array<ButtonImgType>
}

export type DefaultConfigType = {
  gutter?: string | number
  offsetDegree?: number
  speed?: number
  speedFunction?: string
  accelerationTime?: number
  decelerationTime?: number
  stopRange?: number
}

export type DefaultStyleType = {
  background?: BackgroundType
  fontColor?: PrizeFontType['fontColor']
  fontSize?: PrizeFontType['fontSize']
  fontStyle?: PrizeFontType['fontStyle']
  fontWeight?: PrizeFontType['fontWeight']
  lineHeight?: PrizeFontType['lineHeight']
  wordWrap?: PrizeFontType['wordWrap']
  lengthLimit?: PrizeFontType['lengthLimit']
  lineClamp?: PrizeFontType['lineClamp']
}

export type StartCallbackType = (e: MouseEvent) => void
export type EndCallbackType = (prize: object) => void

export default interface LuckyWheelConfig {
  blocks?: Array<BlockType>
  prizes?: Array<PrizeType>
  buttons?: Array<ButtonType>
  defaultConfig?: DefaultConfigType
  defaultStyle?: DefaultStyleType
  start?: StartCallbackType
  end?: EndCallbackType
}
