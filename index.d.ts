import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle, ImageStyle, FlatListProps, TextInputProps, ListRenderItem, ImageProps } from 'react-native'

/**
 * CLASS COMPONENT
 */

type ResizeMethodType = "auto" | "resize" | "scale"
type ResizeModeType = "cover" | "contain" | "stretch" | "repeat" | "center"
type IconType = 'ant-design' | 'entypo' | 'evil-icons' | 'feather' | 'font-awesome' | 'font-awesome5' | 'fontisto' | 'foundation' | 'ionicons' | 'material-community' | 'material-icons' | 'octicons'
type AlertType = 'success' | 'error' | 'info' | 'custom-confirm'
type DatepickerType = 'time' | 'date' | 'datetime'

type CustomInputLabelType = 'top-label' | 'default' | 'left-label' | 'right-label'
type CustomInputType = 'email' | 'password' | 'phone' | 'number' | 'text' | 'text-area' | 'phone-country'
type CustomPhoneInputSelectBevavior = 'on-select' | 'on-done'

interface ISimpleCountryResponse {
  id: number;
  name: string;
  code: string;
  callingCode: string;
}

interface ISimpleCountryFlagResponse {
  id: number;
  name: string;
  nameWithFlag: string;
  flag: string;
  code: string;
  callingCode: string;
}

interface IPlaceholderImageProps extends ImageProps {
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
  disableAnimation?: boolean;
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
  renderTitle: () => void;
  titleStyle: StyleProp<TextStyle>;
  iconLeft: string;
  titleLeftt: string;
  renderLeft: () => void;
  onPressLeft: () => void;
  iconRight: string;
  titleRight: string;
  renderRight: () => void;
  onPressRight: () => void;
  iconType: IconType;
  showBorder: boolean;
  borderBottomWidth: number;
  borderBottomColor: string;
  backImage: string, 
  backImageStyle: StyleProp<ImageStyle>;
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
  iconType: IconType;
  iconName: string;
  iconSize: number;
  iconStyle: StyleProp<ImageStyle>;
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
  iconType: IconType;
  iconSuccessName: string;
  iconInfoName: string;
  iconErrorName: string;
  iconSuccessSize: number;
  iconInfoSize: number;
  iconErrorSize: number;
  iconSuccessStyle: StyleProp<ImageStyle>;
  iconInfoStyle: StyleProp<ImageStyle>;
  iconErrorStyle: StyleProp<ImageStyle>;
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

interface ICustomFlatList<ItemT> extends FlatListProps<ItemT> {
  data: any[];
  fetchFunction: () => void;
  renderItem: ListRenderItem<ItemT>;
  renderEmpty: () => any;
  renderNoConnection: () => any;
  renderError: () => any;
  meta: IMetaPage;
  style: StyleProp<ViewStyle>;
  contentContainerStyle: StyleProp<ViewStyle>;
  placeholderCount?: number;
  loading: boolean;
  error: boolean;
  disableRenderNoConnection?: boolean;
  disableRenderEmpty?: boolean;
  disableRenderError?: boolean;
}

interface ICustomSelect {
  setRef: (ref: any) => void;
  placeholder: string;
  value: string;
  data: any[];
  onChangeValue: (value: string) => void;
  label: string;
  isRequired?: boolean;
  error?: any;
  rightIcon?: string;
  keyValue?: string;
  keyDescription?: string;
  multiSelect?: boolean;
  labelType?: CustomInputLabelType;
  selectedPickerColor?: string;
  unSelectedPickerColor?: string;
  selectTitle: string;
  disabled: boolean;
  keyOther?: string;
  onChangeValidation: (hasError: boolean) => void;
  renderItem: ({ item, index, onPressItem, isSelected }) => void;
  renderHeader: ({ label, leftAction, rightAction }) => void;
}

interface ICustomDatepicker {
  placeholder: string;
  value: string | Date;
  onDateChange: (date: Date) => void;
  // textStyle: StyleProp<TextStyle>;
  label: string;
  isRequired?: boolean;
  error?: string;
  dateFormat?: string;
  locale?: string;
  mode?: DatepickerType;
  initialDate?: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  style: StyleProp<ViewStyle>;
  labelType?: CustomInputLabelType;
  rightIcon: string;
  disabled: boolean;
  onChangeValidation: () => boolean;
}
interface ICustomInput extends TextInputProps {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
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
  onPress?: () => void;
  onChangeValidation: (status: boolean) => void;
  containerStyle: StyleProp<ViewStyle>;
  showLength: boolean;
  lengthLabelStyle: StyleProp<TextStyle>;

  // ERROR MESSAGE
  passwordRegex: any;
  forceErrorMessage: string;
  errorEmail: string;
  errorPassword: string;
  errorRequired: (label: string) => string | string;
  errorMinimum: (label: string, min: number) => string | string;
  errorMaximum: (label: string, max: number) => string | string;
  errorMinimumNumber: (label: string, min: number) => string | string;
  errorMaximumNumber: (label: string, max: number) => string | string;
  hideError: boolean;

  // ACTION BUTTON
  renderLeftAction: () => any,
  renderRightAction: () => any,

  // PROPS FOR PHONE COUNTRY TYPE
  valueCountry: ISimpleCountryFlagResponse;
  onSelectCountry: () => void;
  countryPlaceholder: string;
  countrySelectionLabel: string;
  countryValueLabel: string;
  renderCountry: () => any;
  renderCountryHeader: () => any;
  countryLabelStyle: StyleProp<TextStyle>;
  selectBehavior: CustomPhoneInputSelectBevavior;
}

interface ICustomView {
  isError: boolean;
  fetchRequest: () => void;
  renderMainContent: () => void;
  renderErrorContent: () => void;
  renderNoInternetContent: () => void;
}

interface IPlaceholderTextProps extends TextProps {
  disableAnimation?: boolean;
}

interface ILoadingModal {

}

export class PlaceholderImage extends React.Component<IPlaceholderImageProps> { }
export class PlaceholderText extends React.Component<IPlaceholderTextProps> { }
export class CustomButton extends React.Component<ICustomButtonProps> { }
export class CustomHeader extends React.Component<ICustomHeaderProps> { }
export class ConnectionHandler extends React.Component<ICustomHeaderProps> { }
export class CustomAlert extends React.Component<ICustomAlert> { }
export class CustomStepBar extends React.Component<ICustomStepBar> { }
export class EmptyContainer extends React.Component<ICustomContainerView> { }
export class ErrorContainer extends React.Component<ICustomContainerView> { }
export class NoConnectionContainer extends React.Component<ICustomContainerView> { }
export class CustomFlatList<ItemT> extends React.Component<ICustomFlatList<ItemT>> { }
export class CustomSelect extends React.Component<ICustomSelect> { }
export class CustomDatepicker extends React.Component<ICustomDatepicker> { }
export class CustomInput extends React.Component<ICustomInput> { }
export class CustomView extends React.Component<ICustomView> { }
export class LoadingModal extends React.Component<ILoadingModal> { }

/**
 * STYLED COMPONENT
 */

declare class Container extends React.Component<IContainerProps> { }
declare class FlexContainer extends React.Component<IContainerProps> { }
declare class SafeContainer extends React.Component<IContainerProps> { }
declare class TouchableContainer extends React.Component<IContainerProps> { }
declare class H1 extends React.Component<TextProps> { }
declare class H2 extends React.Component<TextProps> { }
declare class H3 extends React.Component<TextProps> { }
declare class H4 extends React.Component<TextProps> { }
declare class H5 extends React.Component<TextProps> { }
declare class H6 extends React.Component<TextProps> { }
declare class H7 extends React.Component<TextProps> { }

interface IStyled {
  Container: Container;
  FlexContainer: FlexContainer;
  SafeContainer: SafeContainer;
  TouchableContainer: TouchableContainer;
  H1: H1;
  H2: H2;
  H3: H3;
  H4: H4;
  H5: H5;
  H6: H6;
  H7: H7;
}

export const Styled: IStyled

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
  compareValues: (key: string, order: mergeOrder, isDate: boolean, isTimeToken: boolean) => any[]
}

interface IHelper {
  getFileNameFromPath: (path: string) => void;
  getFileNameFromURL: (url: string) => void;
  getIconByType: (iconType: IconType) => any;
  getSimpleCountryList: (useFlag: boolean) => ISimpleCountryResponse | ISimpleCountryFlagResponse
}

interface IAlertHandler {
  // setAlertInstance: (alert: any) => void;
  showAlert: (options: ICustomAlertConfiguration, style?: ICustomAlertStyleConfiguration) => void;
  hideAlert: () => void;
}

interface IApiHelper {
  responseMonitoring: (response: any, callback200: (response: any) => void, callback400: (response: any) => void, callback500: (response: any) => void) => any
}

interface ILoadingHelper {
  setLoadingInstance: (loading: any) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

interface IMethod {
  Math: IMath;
  Scale: IScale;
  Object: IObject;
  Array: IArray;
  Helper: IHelper;
  AlertHandler: IAlertHandler;
  ApiHelper: IApiHelper,
  LoadingHelper: ILoadingHelper
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
  ACTIVE_BUTTON_TITLE_STYLE: StyleProp<TextStyle>;
  DISABLE_BUTTON_COLOR: string;
  DISABLE_BUTTON_TITLE_COLOR: string;
  DISABLE_BUTTON_TITLE_STYLE: StyleProp<TextStyle>;
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
  HEADER_TITLE_STYLE: StyleProp<TextStyle>;
  HEADER_LEFT_ICON_NAME: string;
  HEADER_LEFT_ICON_SIZE: number;
  HEADER_LEFT_ICON_COLOR: string;
  HEADER_LEFT_BACK_ICON_IMAGE: any,
  HEADER_LEFT_BACK_ICON_IMAGE_STYLE: StyleProp<ImageStyle>;
  HEADER_LEFT_ACTION_TITLE_SIZE: number;
  HEADER_LEFT_ACTION_TITLE_COLOR: string;
  HEADER_RIGHT_ICON_SIZE: number;
  HEADER_RIGHT_ICON_COLOR: string;
  HEADER_RIGHT_ACTION_TITLE_SIZE: number;
  HEADER_RIGHT_ACTION_TITLE_COLOR: string;
  HEADER_ICON_TYPE: string;
  HEADER_SHOW_BORDER: boolean;
  HEADER_BOTTOM_WIDTH: number;
  HEADER_BOTTOM_COLOR: string;

  // CONNECTION HANDLER
  CONNECTION_SUCCESS_TITLE: string;
  CONNECTION_SUCCESS_MESSAGE: string;
  CONNECTION_ERROR_TITLE: string;
  CONNECTION_ERROR_MESSAGE: string;
  CONNECTION_200_ALERT_TITLE: string;
  CONNECTION_200_ALERT_MESSAGE: string;
  CONNECTION_400_ALERT_TITLE: string;
  CONNECTION_400_ALERT_MESSAGE: string;
  CONNECTION_500_ALERT_TITLE: string;
  CONNECTION_500_ALERT_MESSAGE: string;

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

  // CUSTOM SELECT
  CUSTOM_SELECT_BACKGROUND_COLOR: string;
  CUSTOM_SELECT_ICON_TYPE: IconType;
  CUSTOM_SELECT_RIGHT_ICON_NAME: string;
  CUSTOM_SELECT_RIGHT_ICON_COLOR: string;
  CUSTOM_SELECT_RIGHT_ICON_SIZE: number;
  CUSTOM_SELECT_RIGHT_ICON_STYLE: StyleProp<ImageStyle>;
  CUSTOM_SELECT_RIGHT_RENDER: any;
  CUSTOM_SELECT_HEADER_TITLE_STYLE: StyleProp<TextStyle>;
  CUSTOM_SELECT_HEADER_BACKGROUND_COLOR: string;
  CUSTOM_SELECT_HEADER_LEFT_ICON_NAME: string;
  CUSTOM_SELECT_HEADER_LEFT_ICON_SIZE: number;
  CUSTOM_SELECT_HEADER_LEFT_ICON_COLOR: string;
  CUSTOM_SELECT_HEADER_LEFT_ICON_STYLE: StyleProp<ImageStyle>;
  CUSTOM_SELECT_HEADER_RIGHT_ICON_NAME: string;
  CUSTOM_SELECT_HEADER_RIGHT_ICON_SIZE: number;
  CUSTOM_SELECT_HEADER_RIGHT_ICON_COLOR: string;
  CUSTOM_SELECT_HEADER_RIGHT_ICON_STYLE: StyleProp<ImageStyle>;
  CUSTOM_SELECT_HEADER_RENDER_LEFT: any;
  CUSTOM_SELECT_HEADER_RENDER_RIGHT: any;
  CUSTOM_SELECT_HEADER_RENDER: any;
  CUSTOM_SELECT_ITEM_RENDER: any;
  CUSTOM_SELECT_ITEM_TITLE_STYLE: StyleProp<TextStyle>;
  CUSTOM_SELECT_ITEM_STYLE: StyleProp<ViewStyle>;
  CUSTOM_SELECT_ITEM_SELECT_ICON_NAME: string;
  CUSTOM_SELECT_ITEM_SELECT_ICON_COLOR: string;
  CUSTOM_SELECT_ITEM_SELECT_ICON_SIZE: number;
  CUSTOM_SELECT_ITEM_SELECT_ICON_STYLE: StyleProp<ImageStyle>;
  CUSTOM_SELECT_ITEM_UNSELECT_ICON_NAME: string;
  CUSTOM_SELECT_ITEM_UNSELECT_ICON_COLOR: string;
  CUSTOM_SELECT_ITEM_UNSELECT_ICON_SIZE: number;
  CUSTOM_SELECT_ITEM_UNSELECT_ICON_STYLE: StyleProp<ImageStyle>;
  CUSTOM_SELECT_ITEM_MULTI_RENDER: any;
  CUSTOM_SELECT_ITEM_MULTI_TITLE_STYLE: StyleProp<TextStyle>;
  CUSTOM_SELECT_ITEM_MULTI_STYLE: StyleProp<ViewStyle>;
  CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_NAME: string;
  CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_COLOR: string;
  CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_SIZE: number;
  CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_STYLE: StyleProp<ImageStyle>;
  CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_NAME: string;
  CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_COLOR: string;
  CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_SIZE: number;
  CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_STYLE: StyleProp<ImageStyle>;

  // CUSTOM INPUT
  CUSTOM_INPUT_LABEL_TYPE: string;
  CUSTOM_INPUT_LABEL_STYLE: StyleProp<TextStyle>;
  CUSTOM_INPUT_PLACEHOLDER_COLOR: string;
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
  CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM_NUMBER: (label: string, min: number) => string | string;
  CUSTOM_INPUT_ERROR_MESSAGE_MAXIMUM_NUMBER: (label: string, min: number) => string | string;
  CUSTOM_INPUT_PHONE_COUNTRY_PLACEHODLER: string;
  CUSTOM_INPUT_PHONE_COUNTRY_SELECT_LABEL: string;
  CUSTOM_INPUT_PHONE_TOP_COUNTRY: [any]
  CUSTOM_INPUT_PHONE_SELECT_BEHAVIOR: CustomPhoneInputSelectBevavior;
  CUSTOM_INPUT_PHONE_COUNTRY_LABEL_STYLE: StyleProp<TextStyle>;

  // CUSTOM DATEPICKER
  CUSTOM_DATE_PICKER_ICON_TYPE: string;
  CUSTOM_DATE_PICKER_RIGHT_ICON_NAME: string;
  CUSTOM_DATE_PICKER_RIGHT_ICON_COLOR: string;
  CUSTOM_DATE_PICKER_RIGHT_ICON_SIZE: number;
  CUSTOM_DATE_PICKER_RIGHT_ICON_STYLE: StyleProp<TextStyle>;
  CUSTOM_DATE_PICKER_RIGHT_RENDER: any
}

interface IGlobalConst {
  getValue: () => IGlobalConstValue;
  getDefaultValue: () => IGlobalConstValue;
  // CUSTOM BUTTON
  setGlobalActiveButtonColor: (color: string) => void;
  setGlobalActiveButtonTitleColor: (color: string) => void;
  setGlobalActiveButtonTitleStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalDisableButtonColor: (color: string) => void;
  setGlobalDisableButtonTitleColor: (color: string) => void;
  setGlobalDisableButtonTitleStyle: (value: StyleProp<TextStyle>) => void;
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
  setGlobalHeaderTitleStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalHeaderLeftIconName: (value: string) => void;
  setGlobalHeaderLeftIconSize: (value: number) => void;
  setGlobalHeaderLeftIconColor: (value: string) => void;
  setGlobalHeaderLeftActionTitleSize: (value: number) => void;
  setGlobalHeaderLeftActionTitleColor: (value: string) => void;
  setGlobalHeaderRightIconSize: (value: number) => void;
  setGlobalHeaderRightIconColor: (value: string) => void;
  setGlobalHeaderRightActionTitleSize: (value: number) => void;
  setGlobalHeaderRightActionTitleColor: (value: string) => void;
  setGlobalIconType: (value: IconType) => void;
  setGlobalHeaderBackIconImage: (value: any) => void;
  setGlobalHeaderBackIconImageStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalHeaderShowBorder: (value: boolean) => void;
  setGlobalHeaderBottomWidth: (value: number) => void;
  setGlobalHeaderBottomColor: (value: string) => void;
  // CONNECTION HANDLER
  setGlobalConnectionHandlerSuccessTitle: (value: string) => void;
  setGlobalConnectionHandlerSuccessMessage: (value: string) => void;
  setGlobalConnectionHandlerErrorTitle: (value: string) => void;
  setGlobalConnectionHandlerErrorMessage: (value: string) => void;
  setGlobalConnectionHandler200AlertTitle: (value: string) => void;
  setGlobalConnectionHandler200AlertMessage: (value: string) => void;
  setGlobalConnectionHandler400AlertTitle: (value: string) => void;
  setGlobalConnectionHandler400AlertMessage: (value: string) => void;
  setGlobalConnectionHandler500AlertTitle: (value: string) => void;
  setGlobalConnectionHandler500AlertMessage: (value: string) => void;
  setGlobalConnectionCloseInterval: (value: number) => void;
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
  // CUSTOM SELECT
  setGlobalCustomSelectBackgroundColor: (value: string) => void;
  setGlobalCustomSelectIconType: (value: IconType) => void;
  setGlobalCustomSelectRightIconName: (value: string) => void;
  setGlobalCustomSelectRightIconColor: (value: string) => void;
  setGlobalCustomSelectRightIconSize: (value: number) => void;
  setGlobalCustomSelectRightIconStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalCustomSelectRightRender: (value: any) => void;
  setGlobalCustomSelectHeaderTitleStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomSelectHeaderBackgroundColor: (value: string) => void;
  setGlobalCustomSelectHeaderLeftIconName: (value: string) => void;
  setGlobalCustomSelectHeaderLeftIconSize: (value: number) => void;
  setGlobalCustomSelectHeaderLeftIconColor: (value: string) => void;
  setGlobalCustomSelectHeaderLeftIconStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalCustomSelectHeaderRightIconName: (value: string) => void;
  setGlobalCustomSelectHeaderRightIconSize: (value: number) => void;
  setGlobalCustomSelectHeaderRightIconColor: (value: string) => void;
  setGlobalCustomSelectHeaderRightIconStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalCustomSelectHeaderRenderLeft: (value: any) => void;
  setGlobalCustomSelectHeaderRenderRight: (value: any) => void;
  setGlobalCustomSelectHeaderRender: (value: any) => void;
  setGlobalCustomSelectItemRender: (value: any) => void;
  setGlobalCustomSelectItemTitleStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomSelectItemStyle: (value: StyleProp<ViewStyle>) => void;
  setGlobalCustomSelectItemSelectIconName: (value: string) => void;
  setGlobalCustomSelectItemSelectIconColor: (value: string) => void;
  setGlobalCustomSelectItemSelectIconSize: (value: number) => void;
  setGlobalCustomSelectItemSelectIconStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalCustomSelectItemUnselectIconName: (value: string) => void;
  setGlobalCustomSelectItemUnselectIconSize: (value: string) => void;
  setGlobalCustomSelectItemUnselectIconColor: (value: number) => void;
  setGlobalCustomSelectItemUnselectIconStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalCustomSelectItemMultiRender: (value: any) => void;
  setGlobalCustomSelectItemMultiTitleStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomSelectItemMultiStyle: (value: StyleProp<ViewStyle>) => void;
  setGlobalCustomSelectItemMultiSelectIconName: (value: string) => void;
  setGlobalCustomSelectItemMultiSelectIconColor: (value: string) => void;
  setGlobalCustomSelectItemMultiSelectIconSize: (value: number) => void;
  setGlobalCustomSelectItemMultiSelectIconStyle: (value: StyleProp<ImageStyle>) => void;
  setGlobalCustomSelectItemMultiUnselectIconName: (value: string) => void;
  setGlobalCustomSelectItemMultiUnselectIconSize: (value: string) => void;
  setGlobalCustomSelectItemMultiUnselectIconColor: (value: number) => void;
  setGlobalCustomSelectItemMultiUnselectIconStyle: (value: StyleProp<ImageStyle>) => void;
  // CUSTOM INPUT
  setGlobalCustomInputLabelType: (value: CustomInputLabelType) => void;
  setGlobalCustomInputLabelStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomInputPlaceholderColor: (value: string) => void;
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
  setGlobalCustomInputErrorMessageMinimumNumber: (value: any) => void;
  setGlobalCustomInputErrorMessageMaximumNumber: (value: any) => void;
  setGlobalCustomInputPhoneCountryPlaceholder: (value: string) => void;
  setGlobalCustomInputPhoneCountrySelectLabel: (value: string) => void;
  setGlobalCustomInputPhoneCountryLabelStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomInputPhoneTopCountry: (value: [any]) => void;
  setGlobalCustomInputPhoneSelectBehavior: (value: CustomPhoneInputSelectBevavior) => void;
  // CUSTOM DATE PICKER
  setGlobalCustomDatePickerIconType: (value: string) => void;
  setGlobalCustomDatePickerRightIconName: (value: string) => void;
  setGlobalCustomDatePickerRightIconColor: (value: string) => void;
  setGlobalCustomDatePickerRightIconSize: (value: number) => void;
  setGlobalCustomDatePickerRightIconStyle: (value: StyleProp<TextStyle>) => void;
  setGlobalCustomDatePickerRightRender: (value: any) => void;
}

export const GlobalConst: IGlobalConst
