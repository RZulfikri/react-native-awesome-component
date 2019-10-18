import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { FlexContainer } from '../styled/share.styled'
import FeatherIcons from 'react-native-vector-icons/Feather'
import * as Scale from '../method/scale'
import Colors from '../colors'
import CustomButton from '../custom-button'
import { Title, Message, ImageContainer } from './styled'
import * as GlobalConst from '../global-const'

const ErrorContainer = (props) => {
  const { image, title, message, customButton,
    imageStyle, titleStyle, messageStyle,
    hideImage, hideButton, hideTitle, hideMessage, onRefresh } = props

  let renderImage, renderTitle, renderMessage, renderButton

  const imgSrc = image ? image : GlobalConst.getValue().ERROR_CONTAINER_IMAGE
  const globalImageStyle = GlobalConst.getValue().ERROR_CONTAINER_IMAGE_STYLE
  const globalTitleStyle = GlobalConst.getValue().ERROR_CONTAINER_TITLE_STYLE
  const globalMessageStyle = GlobalConst.getValue().ERROR_CONTAINER_MESSAGE_STYLE  
  const globalButton = GlobalConst.getValue().ERROR_CONTAINER_BUTTON

  renderImage = (
    <FeatherIcons
      name='alert-circle'
      size={80}
      color={Colors.warm_grey}
    />
  )

  renderTitle = (
    <Title style={[globalTitleStyle, titleStyle]}>
      {GlobalConst.getDefaultValue().ERROR_CONTAINER_TITLE}
    </Title>
  )

  renderMessage = (
    <Message style={[globalMessageStyle, messageStyle]}>
      {GlobalConst.getDefaultValue().ERROR_CONTAINER_MESSAGE}
    </Message>
  )

  renderButton = (
    <CustomButton
      title='Try again'
      height={40}
      borderColor={Colors.very_light_pink_four}
      borderWidth={1}
      activeColor={Colors.white}
      activeTitleStyle={{ color: Colors.slate_grey }}
    />
  )

  if (title) {
    renderTitle = (
      <Title style={[globalTitleStyle, titleStyle]}>
        {title}
      </Title>
    )
  }

  if (message) {
    renderMessage = (
      <Message style={[globalMessageStyle, messageStyle]}>
        {message}
      </Message>
    )
  }

  if (globalButton) {
    renderButton = globalButton
  }

  if (customButton) {
    renderButton = customButton()
  }

  if (imgSrc) {
    renderImage = <ImageContainer source={imgSrc} style={[globalImageStyle, imageStyle]} resizeMethod={'resize'} resizeMode={'contain'} />
  }

  if (renderButton) {
    renderButton = {
      ...renderButton,
      props: {
        ...renderButton.props,
        onPress: onRefresh
      }
    }
  }

  return (
    <FlexContainer padded style={{ paddingTop: Scale.scaleHeight(175), backgroundColor: Colors.very_light_pink_three }}>
      <View style={{ alignItems: 'center' }}>
        {!hideImage && renderImage}
        {!hideTitle && renderTitle}
        {!hideMessage && renderMessage}
        {!hideButton && (
          <View style={{ width: 140, marginTop: 20 }}>
            {renderButton}
          </View>
        )}
      </View>
    </FlexContainer>
  )
}

ErrorContainer.propTypes = {
  image: PropTypes.string,
  imageStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  message: PropTypes.string,
  messageStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  customButton: PropTypes.any,
  hideImage: PropTypes.bool,
  hideButton: PropTypes.bool,
  hideTitle: PropTypes.bool,
  hideMessage: PropTypes.bool,
  onRefresh: PropTypes.func,
}

ErrorContainer.defaultProps = {
  hideImage: false,
  hideButton: false,
  titleStyle: {},
  imageStyle: {},
  messageStyle: {},
  onRefresh: () => null
}

export default ErrorContainer