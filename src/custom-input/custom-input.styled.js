import styled from 'styled-components/native'
import Colors from '../colors'

export const TopContainer = styled.View`
`;

export const RowContainer = styled.View`
  flex-direction: row;
`

export const Label = styled.Text`
  font-size: 12px;
  color: ${Colors.slate_grey};
`

export const ErrorLabel = styled.Text`
  font-size: 12px;
  color: ${Colors.alertError};
  text-align: right;
`

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: ${Colors.slate_grey};
  height: 40px;
  text-align-vertical: center;
`

export const StyledTextInputContainer = styled.View`
  flexDirection: row;
  align-items: center;
`