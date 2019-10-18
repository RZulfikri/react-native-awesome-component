import styled from 'styled-components/native'
import Colors from '../colors'
import Metricts from '../metrics'

export const Title = styled.Text`
  font-size: ${Metricts.font.h4};
  text-align: center;
  color: ${Colors.pastel_red};
  margin-top: 20;
  width: 80%;
`

export const Message = styled.Text`
  font-size: ${Metricts.font.h2};
  text-align: center;
  color: ${Colors.warm_grey};
  margin-top: 15;
  width: 80%;
`

export const ImageContainer = styled.Image`
  width: 80;
  height: 80;
`