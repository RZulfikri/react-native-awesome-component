import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native'

/**
 * CLASS COMPONENT
 */

type ResizeMethodType = "auto" | "resize" | "scale"
type ResizeModeType = "cover" | "contain" | "stretch" | "repeat" | "center"

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

export class PlaceholderImage extends React.Component<IPlaceholderImageProps> { }
export class PlaceholderText extends React.Component<TextProps> { }
export class CustomButton extends React.Component<ICustomButtonProps> { }

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
  setDesignWidth: (designWidth: number) => void;
}

interface IObject {
  appendObject: (currentObject: object, key: string, value: any) => void;
}

interface IMethod {
  Math: IMath;
  Scale: IScale;
  Object: IObject;
}

export const Method: IMethod

/**
 * GLOBAL CONST
 */

interface IGlobalVonstValue {
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
  FONT_SIZE: number
}

interface IGlobalConst {
  getValue: () => IGlobalVonstValue;
  getDefaultValue: () => IGlobalVonstValue;
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
}

export const GlobalConst: IGlobalConst
