import React from 'react'
import { View } from 'react-native'
import metrics from "./metrics";
import Colors from "./colors";
import { scale } from "./method/scale";
import * as Object from './method/object'

import EmptyContainer from './custom-flatlist/empty-container'
import ErrorContainer from './custom-flatlist/error-container'
import NoConnectionContainer from './custom-flatlist/no-connection-container'
import CustomButton from './custom-button';

const DEFAULT_GLOBAL_CONST = {
  PADDING: metrics.padding,
  SAFE_AREA_BACKGROUND_COLOR: Colors.white,
  BACKGROUND_COLOR: Colors.white,

  // BUTTON STYLE
  ACTIVE_BUTTON_COLOR: Colors.turqoise,
  ACTIVE_BUTTON_TITLE_COLOR: Colors.white,
  ACTIVE_BUTTON_TITLE_STYLE: {},
  DISABLE_BUTTON_COLOR: Colors.carara,
  DISABLE_BUTTON_TITLE_COLOR: Colors.black,
  DISABLE_BUTTON_TITLE_STYLE: {},
  BUTTON_TITLE_SIZE: scale(15),
  BUTTON_HEIGHT_SIZE: scale(50),
  BUTTON_LOADING_COLOR: Colors.turqoise,

  // FONT STYLE
  FONT_SIZE: scale(14),
  FONT_SMALL_SIZE: scale(12),
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
  HEADER_TITLE_STYLE: {fontSize: 20, color: Colors.black},
  HEADER_LEFT_ICON_NAME: 'arrow-left',
  HEADER_LEFT_ICON_SIZE: 20,
  HEADER_LEFT_ICON_COLOR: Colors.black,
  HEADER_LEFT_BACK_ICON_IMAGE: undefined,
  HEADER_LEFT_BACK_ICON_IMAGE_STYLE: {width: 24, height: 24},
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

  // CUSTOM STEP BAR
  CUSTOM_STEP_BAR_HEIGHT: 8,
  CUSTOM_STEP_BAR_ACTIVE_COLOR: Colors.kermit_green,
  CUSTOM_STEP_BAR_INACTIVE_COLOR: Colors.very_light_pink_two,
  CUSTOM_STEP_BAR_SEPARATOR: true,
  CUSTOM_STEP_BAR_ROUND_CORNER: true,

  // EMPTY CONTAINER
  EMPTY_CONTAINER_TITLE: 'No Item Found',
  EMPTY_CONTAINER_MESSAGE: `We apologize, we don't have any item that you request for.`,
  EMPTY_CONTAINER_IMAGE: undefined,
  EMPTY_CONTAINER_TITLE_STYLE: {},
  EMPTY_CONTAINER_MESSAGE_STYLE: {},
  EMPTY_CONTAINER_IMAGE_STYLE: {},
  EMPTY_CONTAINER_BUTTON: undefined, // value must be view instance such as <CustomButton />

  // ERROR CONTAINER
  ERROR_CONTAINER_TITLE: 'Sorry something went wrong',
  ERROR_CONTAINER_MESSAGE: 'We apologize for the inconvenience, please try again later.',
  ERROR_CONTAINER_IMAGE: undefined,
  ERROR_CONTAINER_TITLE_STYLE: {},
  ERROR_CONTAINER_MESSAGE_STYLE: {},
  ERROR_CONTAINER_IMAGE_STYLE: {},
  ERROR_CONTAINER_BUTTON: undefined, // value must be view instance such as <CustomButton />

  // NO CONNECTION CONTAINER
  NO_CONNECTION_CONTAINER_TITLE: 'No Internet Connection',
  NO_CONNECTION_CONTAINER_MESSAGE: 'You are not connected to the internet. Make sure your mobile data or Wi-Fi is on.',
  NO_CONNECTION_CONTAINER_IMAGE: undefined,
  NO_CONNECTION_CONTAINER_TITLE_STYLE: {},
  NO_CONNECTION_CONTAINER_MESSAGE_STYLE: {},
  NO_CONNECTION_CONTAINER_IMAGE_STYLE: {},
  NO_CONNECTION_CONTAINER_BUTTON: undefined, // value must be view instance such as <CustomButton />

  // CUSTOM FLAT LIST
  FLATLIST_EMPTY_CONTAINER: <EmptyContainer />, // make sure you have onRefresh props to pass refresh function
  FLATLIST_ERROR_CONTAINER: <ErrorContainer />, // make sure you have onRefresh props to pass refresh function
  FLATLIST_NO_CONNECTION_CONTAINER: <NoConnectionContainer />, // make sure you have onRefresh props to pass refresh function

  // CUSTOM SELECT
  CUSTOM_SELECT_SELECTED_COLOR: Colors.warm_grey,
  CUSTOM_SELECT_UNSELECTED_COLOR: Colors.warm_grey,
  CUSTOM_SELECT_HEADER_BACKGROUND_COLOR: Colors.white,
  CUSTOM_SELECT_HEADER_COLOR: Colors.warm_grey,

  // CUSTOM INPUT
  CUSTOM_INPUT_LABEL_TYPE: 'default',
  CUSTOM_INPUT_LABEL_STYLE: {},
  CUSTOM_INPUT_PLACEHOLDER_COLOR: undefined,
  CUSTOM_INPUT_TEXT_INPUT_STYLE: {},
  CUSTOM_INPUT_ERROR_LABEL_STYLE: {},
  CUSTOM_INPUT_UNDERLINE_WIDTH: 1,
  CUSTOM_INPUT_UNDERLINE_COLOR: Colors.very_light_pink_five,
  CUSTOM_INPUT_FOCUS_COLOR: Colors.alertSuccess,
  CUSTOM_INPUT_ERROR_COLOR: Colors.alertError,
  CUSTOM_INPUT_VALIDATE_ON_CHANGE: true,
  CUSTOM_INPUT_PASSWORD_REGEX: new RegExp('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
  CUSTOM_INPUT_ERROR_MESSAGE_EMAIL: 'Invalid email address',
  CUSTOM_INPUT_ERROR_MESSAGE_PASSWORD: 'Password must contain letters and number.',
  CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED: (label) => label ? `${label} is required` : 'This field is required',
  CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM: (label, min) => label ? `${label} must have at least ${min} characters` : `This field must have at least ${min} characters`,
  CUSTOM_INPUT_ERROR_MESSAGE_MAXIMUM: (label, max) => label ? `${label} must have at least ${max} characters` : `This field maximum have ${max} characters`,
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
export function setGlobalActiveButtonTitleStyle(value) {
  globalConst = Object.appendObject(globalConst, 'ACTIVE_BUTTON_TITLE_STYLE', value)
}
export function setGlobalDisableButtonColor(value) {
  globalConst = Object.appendObject(globalConst, 'DISABLE_BUTTON_COLOR', value)
}
export function setGlobalDisableButtonTitleColor(value) {
  globalConst = Object.appendObject(globalConst, 'DISABLE_BUTTON_TITLE_COLOR', value)
}
export function setGlobalDisableButtonTitleStyle(value) {
  globalConst = Object.appendObject(globalConst, 'DISABLE_BUTTON_TITLE_STYLE', value)
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
export function setGlobalHeaderTitleStyle(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_TITLE_STYLE', value)
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
export function setGlobalHeaderBackIconImage(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_BACK_ICON_IMAGE', value)
}
export function setGlobalHeaderBackIconImageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'HEADER_LEFT_BACK_ICON_IMAGE_STYLE', value)
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

// CUSTOM STEP BAR
export function setGlobalCustomStepBarHeight(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_STEP_BAR_HEIGHT', value)
}
export function setGlobalCustomStepBarActiveColor(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_STEP_BAR_ACTIVE_COLOR', value)
}
export function setGlobalCustomStepBarInactiveColor(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_STEP_BAR_INACTIVE_COLOR', value)
}
export function setGlobalCustomStepBarSeparator(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_STEP_BAR_SEPARATOR', value)
}
export function setGlobalCustomStepBarRoundCorner(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_STEP_BAR_ROUND_CORNER', value)
}

// EMPTY CONTAINER
export function setGlobalEmptyContainerTitle(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_TITLE', value)
}
export function setGlobalEmptyContainerMessage(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_MESSAGE', value)
}
export function setGlobalEmptyContainerImage(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_IMAGE', value)
}
export function setGlobalEmptyContainerButton(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_BUTTON', value)
}
export function setGlobalEmptyContainerTitleStyle(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_TITLE_STYLE', value)
}
export function setGlobalEmptyContainerMessageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_MESSAGE_STYLE', value)
}
export function setGlobalEmptyContainerImageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'EMPTY_CONTAINER_IMAGE_STYLE', value)
}

// ERROR CONTAINER
export function setGlobalErrorContainerTitle(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_TITLE', value)
}
export function setGlobalErrorContainerMessage(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_MESSAGE', value)
}
export function setGlobalErrorContainerImage(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_IMAGE', value)
}
export function setGlobalErrorContainerButton(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_BUTTON', value)
}
export function setGlobalErrorContainerTitleStyle(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_TITLE_STYLE', value)
}
export function setGlobalErrorContainerMessageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_MESSAGE_STYLE', value)
}
export function setGlobalErrorContainerImageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'ERROR_CONTAINER_IMAGE_STYLE', value)
}

// NO CONNECTION CONTAINER
export function setGlobalNoConnectionContainerTitle(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_TITLE', value)
}
export function setGlobalNoConnectionContainerMessage(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_MESSAGE', value)
}
export function setGlobalNoConnectionContainerImage(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_IMAGE', value)
}
export function setGlobalNoConnectionContainerButton(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_BUTTON', value)
}
export function setGlobalNoConnectionContainerTitleStyle(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_TITLE_STYLE', value)
}
export function setGlobalNoConnectionContainerMessageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_MESSAGE_STYLE', value)
}
export function setGlobalNoConnectionContainerImageStyle(value) {
  globalConst = Object.appendObject(globalConst, 'NO_CONNECTION_CONTAINER_IMAGE_STYLE', value)
}

// CUSTOM FLAT LIST
export function setGlobalFlatlistEmptyContainer(value) {
  globalConst = Object.appendObject(globalConst, 'FLATLIST_EMPTY_CONTAINER', value)
}
export function setGlobalFlatlistErrorContainer(value) {
  globalConst = Object.appendObject(globalConst, 'FLATLIST_ERROR_CONTAINER', value)
}
export function setGlobalFlatlistNoConnectionContainer(value) {
  globalConst = Object.appendObject(globalConst, 'FLATLIST_NO_CONNECTION_CONTAINER', value)
}

// CUSTOM INPUT
export function setGlobalCustomInputLabelType(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_LABEL_TYPE', value)
}
export function setGlobalCustomInputLabelStyle(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_LABEL_STYLE', value)
}
export function setGlobalCustomInputPlaceholderColor(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_PLACEHOLDER_COLOR', value)
}
export function setGlobalCustomInputTextInputStyle(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_TEXT_INPUT_STYLE', value)
}
export function setGlobalCustomInputErrorLabelStyle(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_LABEL_STYLE', value)
}
export function setGlobalCustomInputUnderlineWidth(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_UNDERLINE_WIDTH', value)
}
export function setGlobalCustomInputUnderlineColor(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_UNDERLINE_COLOR', value)
}
export function setGlobalCustomInputFocusColor(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_FOCUS_COLOR', value)
}
export function setGlobalCustomInpuErrorColor(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_COLOR', value)
}
export function setGlobalCustomInputValidateOnChange(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_VALIDATE_ON_CHANGE', value)
}
export function setGlobalCustomInputPasswordRegex(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_PASSWORD_REGEX', value)
}
export function setGlobalCustomInputErrorMessageEmail(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_MESSAGE_EMAIL', value)
}
export function setGlobalCustomInputErrorMessagePassword(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_MESSAGE_PASSWORD', value)
}
export function setGlobalCustomInputErrorMessageRequired(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED', value)
}
export function setGlobalCustomInputErrorMessageMinimum(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM', value)
}
export function setGlobalCustomInputErrorMessageMaximum(value) {
  globalConst = Object.appendObject(globalConst, 'CUSTOM_INPUT_ERROR_MESSAGE_MAXIMUM', value)
}

// FUNCTION GET DEFAULT/VALUE
export function getDefaultValue() {
  return DEFAULT_GLOBAL_CONST
}

export function getValue() {
  return globalConst
}
