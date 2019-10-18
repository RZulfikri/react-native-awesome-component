import { Dimensions } from 'react-native'

let DESIGN_WIDTH = 375;
let DESIGN_HEIGHT = 640;
const { width, height } = Dimensions.get('screen')

export function setDesignWidth(designWidth) {
  DESIGN_WIDTH = designWidth
}

export function setDesignHeight(designHeight) {
  DESIGN_HEIGHT = designHeight
}

export function scale(scaleWidth) {
  return (scaleWidth * width) / DESIGN_WIDTH
}

export function scaleHeight(scaleHeight) {
  return (scaleHeight * height) / DESIGN_HEIGHT
}
