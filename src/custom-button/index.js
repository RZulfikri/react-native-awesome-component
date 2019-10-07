import React from 'react'
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import PropTypes from 'prop-types'
import { Container, TouchableContainer } from '../styled/share.styled'
import * as GlobalConst from '../global-const'
import * as Object from '../method/object'

const Button = (props) => {
  const styles = {
    buttonContainer: {
      backgroundColor: GlobalConst.getValue().ACTIVE_BUTTON_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
      height: GlobalConst.getValue().BUTTON_HEIGHT_SIZE,
    },
    disableButtonStyle: {
      backgroundColor: GlobalConst.getValue().DISABLE_BUTTON_COLOR,
    },
    activeTitleStyle: {
      color: GlobalConst.getValue().ACTIVE_BUTTON_TITLE_COLOR,
      fontSize: GlobalConst.getValue().BUTTON_TITLE_SIZE,
    },
    disableTitleStyle: {
      color: GlobalConst.getValue().DISABLE_BUTTON_TITLE_COLOR,
    }
  }

  const {
    disabled,
    loading,
    title,
    onPress,
    containerStyle,
    activeTitleStyle,
    disableTitleStyle,

    activeColor,
    disabledColor,
    width,
    height,
    radius,
    borderWidth,
    borderColor,
    loadingColor,
    isCard,
  } = props
  let customContainerStyle = {
    ...containerStyle,
  }

  customContainerStyle = Object.appendObject(customContainerStyle, 'backgroundColor', activeColor)
  customContainerStyle = Object.appendObject(customContainerStyle, 'width', width)
  customContainerStyle = Object.appendObject(customContainerStyle, 'height', height)
  customContainerStyle = Object.appendObject(customContainerStyle, 'borderRadius', radius)
  customContainerStyle = Object.appendObject(customContainerStyle, 'borderWidth', borderWidth)
  customContainerStyle = Object.appendObject(customContainerStyle, 'borderColor', borderColor)


  if (disabled || loading) {
    customContainerStyle = Object.appendObject(customContainerStyle, 'backgroundColor', disabledColor)

    if (loading) {
      return (
        <Container
          isCard={isCard}
          style={[styles.buttonContainer, styles.disableButtonStyle, customContainerStyle]}
        >
          <ActivityIndicator size='small' color={loadingColor ? loadingColor : GlobalConst.getValue().BUTTON_LOADING_COLOR} />
        </Container>
      )
    } else {
      return (
        <Container
          isCard={isCard}
          style={[styles.buttonContainer, styles.disableButtonStyle, customContainerStyle]}
        >
          <Text style={[styles.disableTitleStyle, disableTitleStyle]} >{title}</Text>
        </Container>
      )
    }
  } else {
    return (
      <TouchableContainer
        isCard={isCard}
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles.buttonContainer, customContainerStyle]}
      >
        <Text style={[styles.activeTitleStyle, activeTitleStyle]}>{title}</Text>
      </TouchableContainer>
    )
  }
}

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func,
  activeColor: PropTypes.string,
  disabledColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  containerStyle: ViewStyle,
  activeTitleStyle: TextStyle,
  disableTitleStyle: TextStyle,
  loadingColor: PropTypes.string,
  isCard: PropTypes.bool,
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  titlr: 'Button Title',
  onPress: () => null,
  isCard: false,
}

export default Button