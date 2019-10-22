import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle, ImageStyle, FlatListProps, TextInputProps } from 'react-native'

/**
 * CLASS COMPONENT
 */

type ResizeMethodType = "auto" | "resize" | "scale"
type ResizeModeType = "cover" | "contain" | "stretch" | "repeat" | "center"
type HeaderIconType = 'ant-design' | 'entypo' | 'evil-icons' | 'feather' | 'font-awesome' | 'font-awesome5' | 'fontisto' | 'foundation' | 'ionicons' | 'material-community' | 'material-icons' | 'octicons'
type AlertType = 'success' | 'error' | 'info'
type DatepickerType = 'time' | 'date' | 'datetime'

type CustomInputLabelType = 'top-label' | 'default' | 'left-label' | 'right-label'
type CustomInputType = 'email' | 'password' | 'phone' | 'number' | 'text' | 'text-area'

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
  renderActiveTitle: () => void;
  renderDisableTitle: () => void;
  renderLoading: () => void;
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

interface ICustomStepBar {
  maxStep: number;
  currentStep: number;
  roundCorner: boolean;
  separator: boolean;
  activeColor: string;
  inactiveColor: string;
}

interface ICustomContainerView {
  image: string;
  imageStyle: StyleProp<ImageStyle>;
  title: string;
  titleStyle: StyleProp<TextStyle>;
  message: string;
  messageStyle: StyleProp<TextStyle>;
  customButton: () => void;
  hideImage: boolean;
  hideButton: boolean;
  hideTitle: boolean;
  hideMessage: boolean;
  onRefresh: () => void;
}

interface IMetaPage {
  current_page: number;
  next_page: number;
}

interface ICustomFlatList {
  data: any[];
  fetchFunction: () => void;
  renderItem: () => void;
  renderEmpty: () => any;
  renderNoConnection: () => any;
  renderError: () => any;
  meta: IMetaPage;
}

interface ICustomSelect {
  placeholder: string;
  value: string;
  data: any[];
  onChangeValue: (value: string) => void;
  textStyle: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
  label: string;
  isRequired?: boolean;
  error?: any; 
  rightIcon?: string;
  keyValue?: string;
  keyDescription?: string;
  multiSelect?: boolean;
  multiSeparator?: string; 
}

interface ICustomDatepicker {
  placeholder: string;
  value: string | Date;
  onDateChange: (date: Date) => void;
  textStyle: StyleProp<TextStyle>;
  label: string;
  isRequired?: boolean;
  error?: any;
  dateFormat?: string;
  locale?: string;
  mode?: DatepickerType;
  initialDate?: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  style: StyleProp<ViewStyle>;
}
interface ICustomInput extends TextInputProps {
  minLength: number;
  labelType: CustomInputLabelType,
  label: string;
  inputType: CustomInputType;
  labelStyle: StyleProp<TextStyle>;
  errorLabelStyle: StyleProp<TextStyle>;
  underlineWidth: number;
  underlineColor: string;
  isRequired: boolean;
  focusColor: string;
  errorColor: string;
  validateOnChange: boolean;

  // ERROR MESSAGE
  passwordRegex: any;
  forceErrorMessage: string;
  errorEmail: string;
  errorPassword: string;
  errorRequired: (label: string) => string | string;
  errorMinimum: (label: string, min: number) => string | string;
  errorMaximum: (label: string, max: number) => string | string;
}

export class PlaceholderImage extends React.Component<IPlaceholderImageProps> { }
export class PlaceholderText extends React.Component<TextProps> { }
export class CustomButton extends React.Component<ICustomButtonProps> { }
export class CustomHeader extends React.Component<ICustomHeaderProps> { }
export class ConnectionHandler extends React.Component<ICustomHeaderProps> { }
export class CutomAlert extends React.Component<ICustomAlert> { }
export class CustomStepBar extends React.Component<ICustomStepBar> { }
export class EmptyContainer extends React.Component<ICustomContainerView> { }
export class ErrorContainer extends React.Component<ICustomContainerView> { }
export class NoConnectionContainer extends React.Component<ICustomContainerView> { }
export class CustomFlatList extends React.Component<ICustomFlatList> { }
export class CustomSelect extends React.Component<ICustomSelect> { }
export class CustomDatepicker extends React.Component<ICustomDatepicker> { }
export class CustomInput extends React.Component<ICustomInput> { }

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
  appendChildToView: (currentView: any, childView: any) => any;
  appendPropsToView: (currentView: any, key: string, value: any) => any;
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

  // CUSTOM STEP BAR
  CUSTOM_STEP_BAR_HEIGHT: number;
  CUSTOM_STEP_BAR_ACTIVE_COLOR: string;
  CUSTOM_STEP_BAR_INACTIVE_COLOR: string;
  CUSTOM_STEP_BAR_SEPARATOR: boolean;
  CUSTOM_STEP_BAR_ROUND_CORNER: boolean;

  // EMPTY CONTAINER
  EMPTY_CONTAINER_TITLE: string;
  EMPTY_CONTAINER_MESSAGE: string;
  EMPTY_CONTAINER_IMAGE: any;
  EMPTY_CONTAINER_TITLE_STYLE: StyleProp<TextStyle>;
  EMPTY_CONTAINER_MESSAGE_STYLE: StyleProp<TextStyle>;
  EMPTY_CONTAINER_IMAGE_STYLE: StyleProp<ImageStyle>;
  EMPTY_CONTAINER_BUTTON: any; // value must be view instance such as <CustomButton />

  // ERROR CONTAINER
  ERROR_CONTAINER_TITLE: string;
  ERROR_CONTAINER_MESSAGE: string;
  ERROR_CONTAINER_IMAGE: any;
  ERROR_CONTAINER_TITLE_STYLE: StyleProp<TextStyle>;
  ERROR_CONTAINER_MESSAGE_STYLE: StyleProp<TextStyle>;
  ERROR_CONTAINER_IMAGE_STYLE: StyleProp<ImageStyle>;
  ERROR_CONTAINER_BUTTON: any; // value must be view instance such as <CustomButton />

  // NO CONNECTION CONTAINER
  NO_CONNECTION_CONTAINER_TITLE: string;
  NO_CONNECTION_CONTAINER_MESSAGE: string;
  NO_CONNECTION_CONTAINER_IMAGE: any;
  NO_CONNECTION_CONTAINER_TITLE_STYLE: StyleProp<TextStyle>;
  NO_CONNECTION_CONTAINER_MESSAGE_STYLE: StyleProp<TextStyle>;
  NO_CONNECTION_CONTAINER_IMAGE_STYLE: StyleProp<ImageStyle>;
  NO_CONNECTION_CONTAINER_BUTTON: any; // value must be view instance such as <CustomButton />

  // CUSTOM FLAT LIST
  FLATLIST_EMPTY_CONTAINER: any; // make sure you have onRefresh props to pass refresh function
  FLATLIST_ERROR_CONTAINER: any; // make sure you have onRefresh props to pass refresh function
  FLATLIST_NO_CONNECTION_CONTAINER: any; // make sure you have onRefresh props to pass refresh function

  // CUSTOM INPUT
  CUSTOM_INPUT_LABEL_TYPE: string;
  CUSTOM_INPUT_LABEL_STYLE: StyleProp<TextStyle>;
  CUSTOM_INPUT_TEXT_INPUT_STYLE: StyleProp<TextStyle>;
  CUSTOM_INPUT_ERROR_LABEL_STYLE: StyleProp<TextStyle>;
  CUSTOM_INPUT_UNDERLINE_WIDTH: number;
  CUSTOM_INPUT_UNDERLINE_COLOR: string;
  CUSTOM_INPUT_FOCUS_COLOR: string;
  CUSTOM_INPUT_ERROR_COLOR: string;
  CUSTOM_INPUT_VALIDATE_ON_CHANGE: boolean;
  CUSTOM_INPUT_PASSWORD_REGEX: any;
  CUSTOM_INPUT_ERROR_MESSAGE_EMAIL: string;
  CUSTOM_INPUT_ERROR_MESSAGE_PASSWORD: string;
  CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED: (label: string) => string | string;
  CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM: (label: string, min: number) => string | string;
  CUSTOM_INPUT_ERROR_MESSAGE_MAXIMUM: (label: string, min: number) => string | string;
}

interface IGlobalConst {
  getValue: () => IGlobalConstValue;
  getDefaultValue: () => IGlobalConstValue;
  // CUSTOM BUTTON
  setGlobalActiveButtonColor: (color: string) => void;
  setGlobalActiveButtonTitleColor: (color: string) => void;
  setGlobalDisableButtonColor: (color: string) => void;
  setGlobalDisableButtonTitleColor: (color: string) => void;
  setGlobalButtonTitleSize: (size: number) => void;
  setGlobalButtonHeightSize: (size: number) => void;
  setGlobalButtonLoadingColor: (color: string) => void;
  // GLOBAL STYLE
  setGlobalPaddingSize: (size: number) => void;
  setGlobalSafeAreaBackgroundColor: (color: string) => void;
  setGlobalBackgroundColor: (color: string) => void;
  setGlobalFontSize: (size: number) => void;
  setGlobalTypography: (H1?: number, H2?: number, H3?: number, H4?: number, H5?: number, H6?: number, H7?: number) => void;
  // CUSTOM HEADER
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
  // CONNECTION HANDLER
  setGlobalConnectionHandlerSuccessTitle: (value: string) => void;
  setGlobalConnectionHandlerSuccessMessage: (value: string) => void;
  setGlobalConnectionHandlerErrorTitle: (value: string) => void;
  setGlobalConnectionHandlerErrorMessage: (value: string) => void;
  // CUSTOM STEP BAR
  setGlobalCustomStepBarHeight: (value: number) => void;
  setGlobalCustomStepBarActiveColor: (value: string) => void;
  setGlobalCustomStepBarInactiveColor: (value: string) => void;
  setGlobalCustomStepBarSeparator: (value: boolean) => void;
  setGlobalCustomStepBarRoundCorner: (value: boolean) => void;
  // EMPTY CONTAINER
  setGlobalEmptyContainerTitle: (value: string) => void;
  setGlobalEmptyContainerMessage: (value: string) => void;
  setGlobalEmptyContainerImage: (value: any) => void;
  setGlobalEmptyContainerButton: (value: any) => void;
  setGlobalEmptyContainerTitleStyle: (value: object) => void;
  setGlobalEmptyContainerMessageStyle: (value: object) => void;
  setGlobalEmptyContainerImageStyle: (value: object) => void;
  // ERROR CONTAINER
  setGlobalErrorContainerTitle: (value: string) => void;
  setGlobalErrorContainerMessage: (value: string) => void;
  setGlobalErrorContainerImage: (value: any) => void;
  setGlobalErrorContainerButton: (value: any) => void;
  setGlobalErrorContainerTitleStyle: (value: object) => void;
  setGlobalErrorContainerMessageStyle: (value: object) => void;
  setGlobalErrorContainerImageStyle: (value: object) => void;
  // NO CONNECTION CONTAINER
  setGlobalNoConnectionContainerTitle: (value: string) => void;
  setGlobalNoConnectionContainerMessage: (value: string) => void;
  setGlobalNoConnectionContainerImage: (value: any) => void;
  setGlobalNoConnectionContainerButton: (value: any) => void;
  setGlobalNoConnectionContainerTitleStyle: (value: object) => void;
  setGlobalNoConnectionContainerMessageStyle: (value: object) => void;
  setGlobalNoConnectionContainerImageStyle: (value: object) => void;
  // CUSTOM FLAT LIST
  setGlobalFlatlistEmptyContainer: (value: any) => void;
  setGlobalFlatlistErrorContainer: (value: any) => void;
  setGlobalFlatlistNoConnectionContainer: (value: any) => void;
  // CUSTOM INPUT
  setGlobalCustomInputLabelType: (value: CustomInputLabelType) => void;
  setGlobalCustomInputLabelStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomInputTextInputStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomInputErrorLabelStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomInputUnderlineWidth: (value: number) => void;
  setGlobalCustomInputUnderlineColor: (value: string) => void;
  setGlobalCustomInputFocusColor: (value: string) => void;
  setGlobalCustomInpuErrorColor: (value: string) => void;
  setGlobalCustomInputValidateOnChange: (value: boolean) => void;
  setGlobalCustomInputPasswordRegex: (value: any) => void;
  setGlobalCustomInputErrorMessageEmail: (value: string) => void;
  setGlobalCustomInputErrorMessagePassword: (value: string) => void;
  setGlobalCustomInputErrorMessageRequired: (value: any) => void;
  setGlobalCustomInputErrorMessageMinimum: (value: any) => void;
  setGlobalCustomInputErrorMessageMaximum: (value: any) => void;
}

export const GlobalConst: IGlobalConst
