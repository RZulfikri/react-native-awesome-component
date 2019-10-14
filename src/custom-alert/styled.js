import styled from 'styled-components/native'
import Colors from '../colors'

export const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.slate_grey};
  text-align: center;
  text-align-vertical: center;
  margin-vertical: 7px;
`

export const Message = styled.Text`
  font-size: 14px;
  color: ${Colors.warm_grey};
  text-align: center;
  text-align-vertical: center;
  margin-vertical: 7px;
`

export const ImageContainer = styled.View`
  marginTop: 20px;
  justify-content: center;
  align-items: center;
`

export const ImageAlert = styled.Image`
  width: 48px;
  height: 48px;
`