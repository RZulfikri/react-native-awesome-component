import * as Fonts from '~/App/Themes/Fonts'

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}


const metrics = {
  padding: 10,
  title: 24,
  font: Fonts && Fonts.size ? Fonts.size : size
}

export default metrics;