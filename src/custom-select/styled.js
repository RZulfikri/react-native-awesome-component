import styled from 'styled-components/native'
import Colors from '../colors'
import metrics from '../metrics'

export const ActionContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const ItemContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.veryLightPink};
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${Colors.white};
`