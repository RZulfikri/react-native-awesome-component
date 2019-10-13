import styled from 'styled-components/native'

const LeftTouchableContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`

const LeftContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`

const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const RightTouchableContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  z-index: 1;
`

const RightContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  z-index: 1;
`

const Title = styled.Text`
  text-align-vertical: center;
`

const ActionTitle = styled.Text`
`

export {
  LeftTouchableContainer,
  LeftContainer,
  TitleContainer,
  RightTouchableContainer,
  RightContainer,
  Title,
  ActionTitle,
}