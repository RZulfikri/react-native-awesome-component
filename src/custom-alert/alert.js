import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal"
import { Container } from '../styled/share.styled'
import { Title, Message, ImageContainer, ImageAlert } from './styled'
import CustomButton from '../custom-button'
import Colors from '../colors'
import * as scale from '../method/scale'
import { getIconByType } from '../method/helper'

const ALERT_TYPE = {
  success: 'success',
  info: 'info',
  error: 'error',
  customConfirm: 'custom-confirm',
}

class Alert extends PureComponent {
  static propTypes = {
    enableDismiss: PropTypes.bool,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconType: PropTypes.oneOf([
      'ant-design',
      'entypo',
      'evil-icons',
      'feather',
      'font-awesome',
      'font-awesome5',
      'fontisto',
      'foundation',
      'ionicons',
      'material-community',
      'material-icons',
      'octicons',
    ]),
    iconSuccessName: PropTypes.string,
    iconInfoName: PropTypes.string,
    iconErrorName: PropTypes.string,
    iconSuccessSize: PropTypes.number,
    iconInfoSize: PropTypes.number,
    iconErrorSize: PropTypes.number,
    iconSuccessStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconInfoStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    iconErrorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
      iconType: PropTypes.oneOf([
        'ant-design',
        'entypo',
        'evil-icons',
        'feather',
        'font-awesome',
        'font-awesome5',
        'fontisto',
        'foundation',
        'ionicons',
        'material-community',
        'material-icons',
        'octicons',
      ]),
      iconName: PropTypes.string,
      iconSize: PropTypes.number,
      iconStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
    iconType: 'font-awesome5',
    iconSuccessName: 'check-circle',
    iconInfoName: 'info-circle',
    iconErrorName: 'times-circle',
    iconSuccessSize: 50,
    iconInfoSize: 50,
    iconErrorSize: 50,
    iconSuccessStyle: {},
    iconInfoStyle: {},
    iconErrorStyle: {},
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
      iconType: undefined,
      iconName: undefined,
      iconSize: undefined,
      iconStyle: {},
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

  oldOption
  oldCustomStyle

  show(configuration, customStyleConfiguration) {
    let { option, customStyle } = this.state
    if (configuration) {
      this.oldOption = option
      option = {
        ...option,
        ...configuration,
      }
    }

    if (customStyleConfiguration) {
      this.oldCustomStyle = customStyle
      customStyle = {
        ...customStyle,
        ...customStyleConfiguration
      }
    }

    this.setState({ visible: true, option, customStyle })
  }

  hide() {
    this.setState({ visible: false, customStyle: undefined, option: this.oldOption, customStyle: this.oldCustomStyle })
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
    const { type, imgSuccess, imgInfo, imgError, successColor, infoColor, errorColor, iconName, iconSize, iconStyle } = option
    const { iconSuccessName, iconInfoName, iconErrorName, iconSuccessSize, iconInfoSize, iconErrorSize, iconSuccessStyle, iconInfoStyle, iconErrorStyle } = this.props
    const { imageStyle } = customStyle ? customStyle : this.props

    const uIconType = option.iconType ? option.iconType : this.props.iconType

    const Icons = getIconByType(uIconType)

    switch (type) {
      case ALERT_TYPE.success: {
        if (imgSuccess) {
          return <ImageAlert source={imgSuccess} style={imageStyle} resizeMethod='resize' resizeMode='contain' />
        } else {
          return <Icons name={iconName ? iconName : iconSuccessName} size={iconSize ? iconSize : iconSuccessSize} color={successColor} style={[iconSuccessStyle, iconStyle]} />
        }
      }

      case ALERT_TYPE.info: {
        if (imgInfo) {
          return <ImageAlert source={imgInfo} style={imageStyle} resizeMethod='resize' resizeMode='contain' />
        } else {
          return <Icons name={iconName ? iconName : iconInfoName} size={iconSize ? iconSize : iconInfoSize} color={infoColor} style={[iconInfoStyle, iconStyle]} />
        }
      }

      case ALERT_TYPE.error: {
        if (imgError) {
          return <ImageAlert source={imgError} style={imageStyle} resizeMethod='resize' resizeMode='contain' />
        } else {
          return <Icons name={iconName ? iconName : iconErrorName} size={iconSize ? iconSize : iconErrorSize} color={errorColor} style={[iconErrorStyle, iconStyle]} />
        }
      }
    }
  }

  render() {
    const { visible, option, customStyle } = this.state
    const { enableDismiss, containerStyle, titleStyle, messageStyle, multiButtonTitleStyle } = customStyle ? customStyle : this.props
    const { type, confirm, cancel } = option
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
          {type === ALERT_TYPE.customConfirm ? (
            <Container padded padding={23} style={[{ width: scale.scale(320), borderRadius: 5 }, containerStyle]}>
              <Title style={[titleStyle, { textAlign: 'left' }]}>{option.title}</Title>
              {option.message && <Message style={[messageStyle, { textAlign: 'left' }]}>{option.message}</Message>}
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: scale.scale(25) }}>
                {cancel && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={this.onCancel}
                    style={{ marginRight: 28 }}
                  >
                    <Text
                      style={[multiButtonTitleStyle && multiButtonTitleStyle.cancel ? multiButtonTitleStyle.cancel : {}]}
                    >
                      {cancel.title}
                    </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.onConfirm}
                >
                  <Text
                    style={[{color: Colors.dark_slate_blue}, multiButtonTitleStyle && multiButtonTitleStyle.confirm ? multiButtonTitleStyle.confirm : {}]}
                  >
                    {confirm.title}
                  </Text>
                </TouchableOpacity>
              </View>
            </Container>
          ) : (
              <Container style={[{ width: '85%', borderRadius: 5 }, containerStyle]}>
                <ImageContainer>
                  {this.renderIcon()}
                </ImageContainer>
                <Title style={[titleStyle]}>{option.title}</Title>
                {option.message && <Message style={[messageStyle]}>{option.message}</Message>}
                {this.renderButton(option)}
              </Container>
            )}
        </Modal>
      </View>
    )
  }
}

export default Alert