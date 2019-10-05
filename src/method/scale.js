import { Dimensions } from 'react-native'

let DESIGN_WIDTH = 375;
const { width } = Dimensions.get('screen')

export function setDesignWidth(designWidth) {
  DESIGN_WIDTH = designWidth
}

function Scale(scaleWidth) {
  return (scaleWidth * width) / DESIGN_WIDTH
}

export default Scale