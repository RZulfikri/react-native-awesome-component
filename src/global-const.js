import metrics from "./metrics";
import Colors from "./colors";
import { scale } from "./method/scale";
import * as Object from './method/object'

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
  FONT_SIZE: scale(14),
  H1: metrics.font.h1,
  H2: metrics.font.h2,
  H3: metrics.font.h3,
  H4: metrics.font.h4,
  H5: metrics.font.h5,
  H6: metrics.font.h6,
  H7: metrics.font.h7,

  // HEADER STYLE
  HEADER_HEIGHT: metrics.headerHeight,
  HEADER_BACKGROUND: Colors.white,
  HEADER_TITLE_SIZE: 20,
  HEADER_TITLE_COLOR: Colors.black,
  HEADER_LEFT_ICON_NAME: 'arrow-left',
  HEADER_LEFT_ICON_SIZE: 20,
  HEADER_LEFT_ICON_COLOR: Colors.black,
  HEADER_LEFT_ACTION_TITLE_SIZE: 15,
  HEADER_LEFT_ACTION_TITLE_COLOR: Colors.black,
  HEADER_RIGHT_ICON_SIZE: 20,
  HEADER_RIGHT_ICON_COLOR: Colors.black,
  HEADER_RIGHT_ACTION_TITLE_SIZE: 17,
  HEADER_RIGHT_ACTION_TITLE_COLOR: Colors.black,
  HEADER_ICON_TYPE: 'font-awesome5',

  // CONNECTION HANDLER
  CONNECTION_SUCCESS_TITLE: 'Connected',
  CONNECTION_SUCCESS_MESSAGE: 'Connected to the internet',
  CONNECTION_ERROR_TITLE: 'Disconected',
  CONNECTION_ERROR_MESSAGE: 'No internet connection',
}

let globalConst = {
  ...DEFAULT_GLOBAL_CONST,
}

// STYLED FUNCTION
export function setGlobalPaddingSize(value) {
  globalConst = Object.appendObject(globalConst, 'PADDING', value)
}
export function setGlobalSafeAreaBackgroundColor(value) {
  globalConst = Object.appendObject(globalConst, 'SAFE_AREA_BACKGROUND_COLOR', value)
}
export function setGlobalBackgroundColor(value) {
  globalConst = Object.appendObject(globalConst, 'BACKGROUND_COLOR', value)
}

// BUTTON FUNCTION
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

// FONT/TEXT FUNCTION
export function setGlobalFontSize(value) {
  globalConst = Object.appendObject(globalConst, 'FONT_SIZE', value)
}
export function setGlobalTypography(H1, H2, H3, H4, H5, H6, H7) {
  if (H1) {
    globalConst = Object.appendObject(globalConst, 'H1', H1)
  }
  if (H2) {
    globalConst = Object.appendObject(globalConst, 'H2', H2)
  }
  if (H3) {
    globalConst = Object.appendObject(globalConst, 'H3', H3)
  }
  if (H4) {
    globalConst = Object.appendObject(globalConst, 'H4', H4)
  }
  if (H5) {
    globalConst = Object.appendObject(globalConst, 'H5', H5)
  }
  if (H6) {
    globalConst = Object.appendObject(globalConst, 'H6', H6)
  }
  if (H7) {
    globalConst = Object.appendObject(globalConst, 'H7', H7)
  }
}

// HEADER FUNCTION
export function setGlobalHeaderHeightSize(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_HEIGHT', value)
}
export function setGlobalHeaderBackgroundColor(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_BACKGROUND', value)
}
export function setGlobalHeaderTitleSize(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_TITLE_SIZE', value)
}
export function setGlobalHeaderTitleColor(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_TITLE_COLOR', value)
}
export function setGlobalHeaderLeftIconName(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_ICON_NAME', value)
}
export function setGlobalHeaderLeftIconSize(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_ICON_SIZE', value)
}
export function setGlobalHeaderLeftIconColor(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_ICON_COLOR', value)
}
export function setGlobalHeaderLeftActionTitleSize(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_ACTION_TITLE_SIZE', value)
}
export function setGlobalHeaderLeftActionTitleColor(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_ACTION_TITLE_COLOR', value)
}
export function setGlobalHeaderRightIconSize(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_RIGHT_ICON_SIZE', value)
}
export function setGlobalHeaderRightIconColor(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_RIGHT_ICON_COLOR', value)
}
export function setGlobalHeaderRightActionTitleSize(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_RIGHT_ACTION_TITLE_SIZE', value)
}
export function setGlobalHeaderRightActionTitleColor(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_RIGHT_ACTION_TITLE_COLOR', value)
}
export function setGlobalHeaderIconType(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_ICON_TYPE', value)
}

// CONNECTION HANDLER
export function setGlobalConnectionHandlerSuccessTitle(value) {
  globalConst = Object.appendObject(globalConst, 'CONNECTION_SUCCESS_TITLE', value)
}
export function setGlobalConnectionHandlerSuccessMessage(value) {
  globalConst = Object.appendObject(globalConst, 'CONNECTION_SUCCESS_MESSAGE', value)
}
export function setGlobalConnectionHandlerErrorTitle(value) {
  globalConst = Object.appendObject(globalConst, 'CONNECTION_ERROR_TITLE', value)
}
export function setGlobalConnectionHandlerErrorMessage(value) {
  globalConst = Object.appendObject(globalConst, 'CONNECTION_ERROR_MESSAGE', value)
}

// FUNCTION GET DEFAULT/VALUE
export function getDefaultValue() {
  return DEFAULT_GLOBAL_CONST
}

export function getValue() {
  return globalConst
}
