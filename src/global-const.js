import metrics from "./metrics";
import Colors from "./colors";
import { scale } from "./method/scale";
import Object from './method/object'

const DEFAULT_GLOBAL_CONST = {
  PADDING: metrics.padding,
  SAFE_AREA_BACKGROUND_COLOR: Colors.white,
  BACKGROUND_COLOR: Colors.white,

  // BUTTON STYLE
  ACTIVE_BUTTON_COLOR: Colors.turqoise,
  ACTIVE_BUTTON_TITLE_COLOR: Colors.white,
  DISABLE_BUTTON_COLOR: Colors.carara,
  DISABLE_BUTTON_TITLE_COLOR: Colors.black,
  BUTTON_TITLE_SIZE: scale(15),
  BUTTON_HEIGHT_SIZE: scale(50),
  BUTTON_LOADING_COLOR: Colors.turqoise,

  // FONT STYLE
  FONT_SIZE: scale(14)
}

let globalConst = {
  ...DEFAULT_GLOBAL_CONST,
}

export function setGlobalPaddingSize(value) {
  globalConst = Object.appendObject(globalConst, 'PADDING', value)
}
export function setGlobalSafeAreaBackgroundColor(value) {
  globalConst = Object.appendObject(globalConst, 'SAFE_AREA_BACKGROUND_COLOR', value)
}
export function setGlobalBackgroundColor(value) {
  globalConst = Object.appendObject(globalConst, 'BACKGROUND_COLOR', value)
}

export function setGlobalActiveButtonColor(value) {
  globalConst = Object.appendObject(globalConst, 'ACTIVE_BUTTON_COLOR', value)
}
export function setGlobalActiveButtonTitleColor(value) {
  globalConst = Object.appendObject(globalConst, 'ACTIVE_BUTTON_TITLE_COLOR', value)
}
export function setGlobalDisableButtonColor(value) {
  globalConst = Object.appendObject(globalConst, 'DISABLE_BUTTON_COLOR', value)
}
export function setGlobalDisableButtonTitleColor(value) {
  globalConst = Object.appendObject(globalConst, 'DISABLE_BUTTON_TITLE_COLOR', value)
}
export function setGlobalButtonTitleSize(value) {
  globalConst = Object.appendObject(globalConst, 'BUTTON_TITLE_SIZE', value)
}
export function setGlobalButtonHeightSize(value) {
  globalConst = Object.appendObject(globalConst, 'BUTTON_HEIGHT_SIZE', value)
}
export function setGlobalButtonLoadingColor(value) {
  globalConst = Object.appendObject(globalConst, 'BUTTON_LOADING_COLOR', value)
}

export function setGlobalFontSize(value) {
  globalConst = Object.appendObject(globalConst, 'FONT_SIZE', value)
}

export function getDefaultValue() {
  return DEFAULT_GLOBAL_CONST
}

export function getValue() {
  return globalConst
}
