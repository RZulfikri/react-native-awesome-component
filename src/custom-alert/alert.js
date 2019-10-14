import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import Modal from "react-native-modal"
import { Container } from '../styled/share.styled'
import { Title, Message, ImageContainer, ImageAlert } from './styled'
import CustomButton from '../custom-button'
import Colors from '../colors'
import * as scale from '../method/scale'
import Icons from 'react-native-vector-icons/FontAwesome5'

const ALERT_TYPE = {
  success: 'success',
  info: 'info',
  error: 'error'
}

class Alert extends PureComponent {
  static propTypes = {
    enableDismiss: PropTypes.bool,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    messageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    singleButtonContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    singleButtonTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    multiButtonContainerStyle: PropTypes.shape({ confirm: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), cancel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) }),
    multiButtonTitleStyle: PropTypes.shape({ confirm: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), cancel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) }),
    customConfiguration: PropTypes.shape({
      enableDismiss: PropTypes.bool,
      type: PropTypes.string,
      imgError: PropTypes.any,
      imgSuccess: PropTypes.any,
      imgInfo: PropTypes.any,
      successColor: PropTypes.string,
      errorColor: PropTypes.string,
      infoColor: PropTypes.string,
      title: PropTypes.string,
      message: PropTypes.string,
      confirm: PropTypes.shape({
        title: PropTypes.string,
        callback: PropTypes.func,
      }),
      cancel: PropTypes.shape({
        title: PropTypes.string,
        callback: PropTypes.func,
      })
    })
  }

  static defaultProps = {
    enableDismiss: true,
    containerStyle: {},
    titleStyle: {},
    messageStyle: {},
    imageStyle: {},
    singleButtonContainerStyle: {},
    singleButtonTitleStyle: {},
    multiButtonContainerStyle: {
      confirm: {},
      cancel: {}
    },
    multiButtonTitleStyle: {
      confirm: {},
      cancel: {}
    }
  }

  constructor(props) {
    super(props)
    const { customConfiguration } = props
    let option = {
      enableDismiss: true,
      type: ALERT_TYPE.success,
      imgError: undefined,
      imgSuccess: undefined,
      imgInfo: undefined,
      successColor: Colors.alertSuccess,
      errorColor: Colors.alertError,
      infoColor: Colors.alertInfo,
      title: 'Put alert title here',
      message: undefined,
      confirm: {
        title: 'OK',
        callback: () => null
      },
      cancel: {
        title: 'CANCEL',
        callback: () => null
      },
    }
    this.state = {
      visible: false,
      option: customConfiguration ? customConfiguration : option,
      customStyle: undefined,
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  show(configuration, customStyleConfiguration) {
    let { option, customStyle } = this.state
    if (configuration) {
      option = configuration
    }

    if (customStyleConfiguration) {
      customStyle = customStyleConfiguration
    }

    this.setState({ visible: true, option, customStyle })
  }

  hide() {
    this.setState({ visible: false, customStyle: undefined })
  }

  onConfirm() {
    const { confirm } = this.state.option
    this.hide()
    if (confirm.callback) {
      confirm.callback()
    }
  }

  onCancel() {
    const { cancel } = this.state.option
    this.hide()
    if (cancel.callback) {
      cancel.callback()
    }
  }

  renderButton() {
    const { customStyle, option } = this.state
    const { confirm, cancel, type, successColor, infoColor, errorColor } = option
    const { singleButtonContainerStyle, singleButtonTitleStyle, multiButtonContainerStyle, multiButtonTitleStyle } = customStyle ? customStyle : this.props

    let color = Colors.slate_grey

    switch (type) {
      case ALERT_TYPE.success: {
        color = successColor
        break;
      }

      case ALERT_TYPE.info: {
        color = infoColor
        break;
      }

      case ALERT_TYPE.error: {
        color = errorColor
        break;
      }
    }

    if (confirm && cancel) {
      return (
        <View style={{ marginTop: 13 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <CustomButton
              title={confirm.title}
              activeColor={color}
              containerStyle={[multiButtonContainerStyle && multiButtonContainerStyle.success ? multiButtonContainerStyle.success : {}]}
              activeTitleStyle={[{ fontSize: 16, color: Colors.white }, multiButtonTitleStyle && multiButtonTitleStyle.success ? multiButtonTitleStyle.success : {}]}
              onPress={this.onConfirm}
              height={48}
              radius={5}
              width={scale.scale(200)}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <CustomButton
              title={cancel.title}
              activeColor={'transparent'}
              containerStyle={[multiButtonContainerStyle && multiButtonContainerStyle.error ? multiButtonContainerStyle.error : {}]}
              activeTitleStyle={[{ fontSize: 16, color: Colors.slate_grey }, multiButtonTitleStyle && multiButtonTitleStyle.error ? multiButtonTitleStyle.error : {}]}
              onPress={this.onCancel}
              height={48}
              radius={5}
              width={scale.scale(200)}
            />
          </View>
        </View>
      )
    }

    if (confirm) {
      return (
        <View style={{ borderTopWidth: 1, borderTopColor: Colors.very_light_pink, marginTop: 17 }}>
          <CustomButton
            title={confirm.title}
            activeColor={'transparent'}
            containerStyle={[singleButtonContainerStyle]}
            activeTitleStyle={[{ fontSize: 16, color: color }, singleButtonTitleStyle]}
            onPress={this.onConfirm}
            height={48}
          />
        </View>
      )
    }

    return <View />
  }

  renderIcon() {
    const { option, customStyle } = this.state
    const { type, imgSuccess, imgInfo, imgError, successColor, infoColor, errorColor } = option
    const { imageStyle } = customStyle ? customStyle : this.props

    switch (type) {
      case ALERT_TYPE.success: {
        if (imgSuccess) {
          return <ImageAlert source={imgSuccess} style={imageStyle} resizeMethod='resize' resizeMode='contain' />
        } else {
          return <Icons name={'check-circle'} size={50} color={successColor} />
        }
      }

      case ALERT_TYPE.info: {
        if (imgInfo) {
          return <ImageAlert source={imgInfo} style={imageStyle} resizeMethod='resize' resizeMode='contain' />
        } else {
          return <Icons name={'info-circle'} size={50} color={infoColor} />
        }
      }

      case ALERT_TYPE.error: {
        if (imgError) {
          return <ImageAlert source={imgError} style={imageStyle} resizeMethod='resize' resizeMode='contain' />
        } else {
          return <Icons name={'times-circle'} size={50} color={errorColor} />
        }
      }
    }
  }

  render() {
    const { visible, option, customStyle } = this.state
    const { enableDismiss, containerStyle, titleStyle, messageStyle } = customStyle ? customStyle : this.props

    let isDismiss = option.enableDismiss !== undefined ? option.enableDismiss : enableDismiss
    return (
      <View>
        <Modal
          isVisible={visible}
          onBackdropPress={isDismiss ? this.hide : () => null}
          style={{ justifyContent: 'center', alignItems: 'center' }}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          onBackButtonPress={isDismiss ? this.hide : () => null}
        >
          <Container style={[{ width: '85%', borderRadius: 5 }, containerStyle]}>
            <ImageContainer>
              {this.renderIcon()}
            </ImageContainer>
            <Title style={[titleStyle]}>{option.title}</Title>
            {option.message && <Message style={[messageStyle]}>{option.message}</Message>}
            {this.renderButton(option)}
          </Container>
        </Modal>
      </View>
    )
  }
}

export default Alert