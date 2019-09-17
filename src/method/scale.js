import { Dimensions } from 'react-native'

const DESIGN_WIDTH = 375;
const { width } = Dimensions.get('screen')

function Scale(scaleWidth) {
  return (scaleWidth * width) / DESIGN_WIDTH
}

export default Scale