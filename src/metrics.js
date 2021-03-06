import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('screen');

const size = {
  h1: 12,
  h2: 14,
  h3: 16,
  h4: 18,
  h5: 28,
  h6: 36,
  h7: 48,
}

const metrics = {
  padding: 10,
  title: 24,
  headerHeight: 55,
  font: size,
  screenWidth: width,
  screenHeight: height,
}

export default metrics;