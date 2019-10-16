import {
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
} from './src/styled/share.styled'
import * as Obj from './src/method/object'
import * as Scale from './src/method/scale'
import * as Math from './src/method/math'
import * as Arr from './src/method/array'
import * as Helper from './src/method/helper'
import * as GlobalConst from './src/global-const'
import PlaceholderImage from './src/placeholder-image'
import PlaceholderText from './src/placeholder-text'
import CustomButton from './src/custom-button'
import CustomHeader from './src/custom-header'
import ConnectionHandler from './src/connection-handler'
import CustomAlert from './src/custom-alert'
import CustomStepBar from './src/custom-step-bar'
import CustomFlatList from './src/custom-flatlist'
import * as AlertHandler from './src/custom-alert/alert-handler'

const Styled = {
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

const Method = {
  Scale,
  Math,
  Object: Obj,
  Array: Arr,
  Helper: Helper,
  AlertHandler,
}

export {
  PlaceholderImage,
  PlaceholderText,
  CustomButton,
  CustomHeader,
  TouchableContainer,
  ConnectionHandler,
  CustomAlert,
  CustomStepBar,
  CustomFlatList,

  Styled,
  Method,
  GlobalConst,
}
