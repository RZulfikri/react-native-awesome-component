import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native'

/**
 * CLASS COMPONENT
 */

type ResizeMethodType = "auto" | "resize" | "scale"
type ResizeModeType = "cover" | "contain" | "stretch" | "repeat" | "center"
type HeaderIconType = 'ant-design' | 'entypo' | 'evil-icons' | 'feather' | 'font-awesome' | 'font-awesome5' | 'fontisto' | 'foundation' | 'ionicons' | 'material-community' | 'material-icons' | 'octicons'
type AlertType = 'success' | 'error' | 'info'


interface IPlaceholderImageProps {
  uri?: string;
  width?: number;
  height?: number;
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
  defaultSource?: string | number;
  resizeMethod?: ResizeMethodType;
  resizeMode?: ResizeModeType;
  isCard?: boolean;
}

interface IContainerProps {
  isCard?: boolean;
  padded?: boolean;
  padding?: number;
  disableVerticalPadding?: boolean;
  disableHorizontalPadding?: boolean;
  style?: StyleProp<ViewStyle>;
}

interface ICustomButtonProps {
  loading: boolean;
  disabled: boolean;
  title: string;
  onPress: () => void;
  activeColor: string;
  disabledColor: string;
  width: number;
  height: number;
  radius: number;
  borderWidth: number;
  borderColor: string;
  containerStyle: StyleProp<ViewStyle>;
  activeTitleStyle: TextProps;
  disableTitleStyle: TextProps;
  loadingColor: string;
  isCard: boolean
}

interface ICustomHeaderProps {
  navigation: any;
  height: number;
  backgroundColor: string;
  iphoneXPadding: boolean;
  isCard: boolean;
  title: string;
  iconLeft: string;
  titleLeftt: string;
  renderLeft: () => void;
  onPressLeft: () => void;
  iconRight: string;
  titleRight: string;
  renderRight: () => void;
  onPressRight: () => void;
  iconType: HeaderIconType;
}

interface IConnectionHandler {
  onChangeState: (isConnected: boolean) => void
}

interface ICustomAlertMultiButtonAction {
  title: string,
  callback: () => void,
}

interface ICustomAlertMultiButtonStyle {
  confirm: StyleProp<ViewStyle> | TextProps;
  cancel: StyleProp<ViewStyle> | TextProps;
}

interface ICustomAlertConfiguration {
  enableDismiss: boolean;
  type: AlertType;
  imgError: any;
  imgSuccess: any;
  imgInfo: any;
  successColor: string;
  errorColor: string;
  infoColor: string;
  title: string;
  message: string;
  confirm: ICustomAlertMultiButtonAction;
  cancel: ICustomAlertMultiButtonAction;
}

interface ICustomAlert {
  enableDismiss: boolean;
  containerStyle: StyleProp<ViewStyle>;
  titleStyle: TextProps;
  messageStyle: TextProps;
  imageStyle: ImageStyle;
  singleButtonContainerStyle: StyleProp<ViewStyle>;
  singleButtonTitleStyle: TextProps;
  multiButtonContainerStyle: ICustomAlertMultiButtonStyle;
  multiButtonTitleStyle: ICustomAlertMultiButtonStyle;
  customConfiguration: ICustomAlertConfiguration;
}

interface ICustomAlertStyleConfiguration {
  containerStyle: StyleProp<ViewStyle>;
  titleStyle: TextProps;
  messageStyle: TextProps;
  imageStyle: ImageStyle;
  singleButtonContainerStyle: StyleProp<ViewStyle>;
  singleButtonTitleStyle: TextProps;
  multiButtonContainerStyle: ICustomAlertMultiButtonStyle;
  multiButtonTitleStyle: ICustomAlertMultiButtonStyle;
  customConfiguration: ICustomAlertConfiguration;
}

export class PlaceholderImage extends React.Component<IPlaceholderImageProps> { }
export class PlaceholderText extends React.Component<TextProps> { }
export class CustomButton extends React.Component<ICustomButtonProps> { }
export class CustomHeader extends React.Component<ICustomHeaderProps> { }
export class ConnectionHandler extends React.Component<ICustomHeaderProps> { }
export class CutomAlert extends React.Component<ICustomAlert> { }


/**
 * STYLED COMPONENT
 */

class Container extends React.Component<IContainerProps> { }
class FlexContainer extends React.Component<IContainerProps> { }
class SafeContainer extends React.Component<IContainerProps> { }
class TouchableContainer extends React.Component<IContainerProps> { }
class H1 extends React.Component<TextProps> { }
class H2 extends React.Component<TextProps> { }
class H3 extends React.Component<TextProps> { }
class H4 extends React.Component<TextProps> { }
class H5 extends React.Component<TextProps> { }
class H6 extends React.Component<TextProps> { }
class H7 extends React.Component<TextProps> { }

export const Styled = {
  Container,
  FlexContainer,
  SafeContainer,
  TouchableContainer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
}

/**
 * METHOD
 */

interface IMath {
  getRandomInt: (min: number, max: number) => void;
}

interface IScale {
  scale: (value: number) => number;
  scaleHeight: (value: number) => number;
  setDesignWidth: (designWidth: number) => void;
  setDesignHeight: (designHeight: number) => void;
}

interface IObject {
  appendObject: (currentObject: object, key: string, value: any) => void;
}


type mergeOrder = "asc" | "desc"

interface IArray {
  mergeAndReplace: (oldArray: any[], newArray: any[], key: string, sortId?: string, sortOrder?: mergeOrder, isDate?: boolean) => any[]
  compareValues: (key: string, order: mergeOrder, isDate: boolean) => any[]
}

interface IHelper {
  getFileNameFromPath: (path: string) => void;
  getFileNameFromURL: (url: string) => void;
}

interface IAlertHandler {
  // setAlertInstance: (alert: any) => void;
  showAlert: (options: ICustomAlertConfiguration, style?: ICustomAlertStyleConfiguration) => void;
  hideAlert: () => void;
}

interface IMethod {
  Math: IMath;
  Scale: IScale;
  Object: IObject;
  Array: IArray;
  Helper: IHelper;
  AlertHandler: IAlertHandler;
}

export const Method: IMethod

/**
 * GLOBAL CONST
 */

interface IGlobalConstValue {
  PADDING: number;
  SAFE_AREA_BACKGROUND_COLOR: string;
  BACKGROUND_COLOR: string;

  // BUTTON STYLE
  ACTIVE_BUTTON_COLOR: string;
  ACTIVE_BUTTON_TITLE_COLOR: string;
  DISABLE_BUTTON_COLOR: string;
  DISABLE_BUTTON_TITLE_COLOR: string;
  BUTTON_TITLE_SIZE: number;
  BUTTON_HEIGHT_SIZE: number;
  BUTTON_LOADING_COLOR: string;

  // FONT STYLE
  FONT_SIZE: number;
  H1: number;
  H2: number;
  H3: number;
  H4: number;
  H5: number;
  H6: number;
  H7: number;

  // HEADER STYLE
  HEADER_HEIGHT: number;
  HEADER_BACKGROUND: string;
  HEADER_TITLE_SIZE: number;
  HEADER_TITLE_COLOR: string;
  HEADER_LEFT_ICON_NAME: string;
  HEADER_LEFT_ICON_SIZE: number;
  HEADER_LEFT_ICON_COLOR: string;
  HEADER_LEFT_ACTION_TITLE_SIZE: number;
  HEADER_LEFT_ACTION_TITLE_COLOR: string;
  HEADER_RIGHT_ICON_SIZE: number;
  HEADER_RIGHT_ICON_COLOR: string;
  HEADER_RIGHT_ACTION_TITLE_SIZE: number;
  HEADER_RIGHT_ACTION_TITLE_COLOR: string;
  HEADER_ICON_TYPE: string;

  // CONNECTION HANDLER
  CONNECTION_SUCCESS_TITLE: string;
  CONNECTION_SUCCESS_MESSAGE: string;
  CONNECTION_ERROR_TITLE: string;
  CONNECTION_ERROR_MESSAGE: string;
}

interface IGlobalConst {
  getValue: () => IGlobalConstValue;
  getDefaultValue: () => IGlobalConstValue;
  setGlobalActiveButtonColor: (color: string) => void;
  setGlobalActiveButtonTitleColor: (color: string) => void;
  setGlobalDisableButtonColor: (color: string) => void;
  setGlobalDisableButtonTitleColor: (color: string) => void;
  setGlobalButtonTitleSize: (size: number) => void;
  setGlobalButtonHeightSize: (size: number) => void;
  setGlobalButtonLoadingColor: (color: string) => void;
  setGlobalPaddingSize: (size: number) => void;
  setGlobalSafeAreaBackgroundColor: (color: string) => void;
  setGlobalBackgroundColor: (color: string) => void;
  setGlobalFontSize: (size: number) => void;
  setGlobalTypography: (H1?: number, H2?: number, H3?: number, H4?: number, H5?: number, H6?: number, H7?: number) => void;
  setGlobalHeaderHeightSize: (value: number) => void;
  setGlobalHeaderBackgroundColor: (value: string) => void;
  setGlobalHeaderTitleSize: (value: number) => void;
  setGlobalHeaderTitleColor: (value: string) => void;
  setGlobalHeaderLeftIconName: (value: string) => void;
  setGlobalHeaderLeftIconSize: (value: number) => void;
  setGlobalHeaderLeftIconColor: (value: string) => void;
  setGlobalHeaderLeftActionTitleSize: (value: number) => void;
  setGlobalHeaderLeftActionTitleColor: (value: string) => void;
  setGlobalHeaderRightIconSize: (value: number) => void;
  setGlobalHeaderRightIconColor: (value: string) => void;
  setGlobalHeaderRightActionTitleSize: (value: number) => void;
  setGlobalHeaderRightActionTitleColor: (value: string) => void;
  setGlobalHeaderIconType: (value: HeaderIconType) => void;
  setGlobalConnectionHandlerSuccessTitle: (value: string) => void;
  setGlobalConnectionHandlerSuccessMessage: (value: string) => void;
  setGlobalConnectionHandlerErrorTitle: (value: string) => void;
  setGlobalConnectionHandlerErrorMessage: (value: string) => void;
}

export const GlobalConst: IGlobalConst
