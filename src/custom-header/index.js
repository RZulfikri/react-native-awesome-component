import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Platform, View, Image } from 'react-native'
import { Container } from '../styled/share.styled'
import * as Obj from '../method/object'
import * as GlobalConst from '../global-const'
import { LeftContainer, LeftTouchableContainer, TitleContainer, ActionTitle, Title, RightContainer, RightTouchableContainer } from './styled'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { getIconByType } from '../method/helper'

function getSideContent(iconName, iconType, actionTitle, type) {

  if ((type === 'left') && (iconName === GlobalConst.getValue().HEADER_LEFT_ICON_NAME) && (iconType === GlobalConst.getValue().HEADER_ICON_TYPE) && (GlobalConst.getValue().HEADER_LEFT_BACK_ICON_IMAGE !== undefined)) {
    const globalBackIconImage = GlobalConst.getValue().HEADER_LEFT_BACK_ICON_IMAGE
    const globalBackIconImageStyle = GlobalConst.getValue().HEADER_LEFT_BACK_ICON_IMAGE_STYLE
    return <Image source={globalBackIconImage} style={[globalBackIconImageStyle]} />
  } else {
    if (actionTitle) {
      let actionTitleStyle = {
        fontSize: type === 'left' ? GlobalConst.getValue().HEADER_LEFT_ACTION_TITLE_SIZE : GlobalConst.getValue().HEADER_RIGHT_ACTION_TITLE_SIZE,
        color: type === 'left' ? GlobalConst.getValue().HEADER_LEFT_ACTION_TITLE_COLOR : GlobalConst.getValue().HEADER_RIGHT_ACTION_TITLE_COLOR
      }
      return <ActionTitle style={[actionTitleStyle]}>{actionTitle}</ActionTitle>
    }

    if (iconName) {
      const Icon = getIconByType(iconType)
      let iconSize = type === 'left' ? GlobalConst.getValue().HEADER_LEFT_ICON_SIZE : GlobalConst.getValue().HEADER_RIGHT_ICON_SIZE
      let iconColor = type === 'left' ? GlobalConst.getValue().HEADER_LEFT_ICON_COLOR : GlobalConst.getValue().HEADER_RIGHT_ICON_COLOR
      return <Icon name={iconName} size={iconSize} color={iconColor} />
    }
  }
}

const CustomHeader = (props) => {
  let {
    navigation,
    height,
    backgroundColor,
    isCard,
    iphoneXPadding,
    title,
    titleStyle,
    iconLeft,
    titleLeft,
    renderLeft,
    onPressLeft,
    iconRight,
    titleRight,
    renderRight,
    onPressRight,
    iconType,
  } = props

  const headerPaddingTop = Platform.OS === 'ios' ? getStatusBarHeight() : 0 
  let headerTitle = ''
  let isFirstRoute = false

  if (navigation) {
    isFirstRoute = navigation.isFirstRouteInParent()
    headerTitle = navigation.state.routeName
  }

  if (title) {
    headerTitle = title
  }

  let containerStyle = {
    height: GlobalConst.getValue().HEADER_HEIGHT + headerPaddingTop,
    backgroundColor: GlobalConst.getValue().HEADER_BACKGROUND,
    flexDirection: 'row',
  }

  let leftContainerStyle = {
    top: headerPaddingTop,
    height: GlobalConst.getValue().HEADER_HEIGHT,
    paddingHorizontal: GlobalConst.getValue().PADDING,
  }

  let rightContainerStyle = {
    top: headerPaddingTop,
    height: GlobalConst.getValue().HEADER_HEIGHT,
    paddingHorizontal: GlobalConst.getValue().PADDING,
  }

  const headerTitleStyle = {
    ...GlobalConst.getValue().HEADER_TITLE_STYLE,
    fontSize: GlobalConst.getValue().HEADER_TITLE_SIZE,
    color: GlobalConst.getValue().HEADER_TITLE_COLOR,
  }

  if (iconLeft === undefined && !isFirstRoute) {
    iconLeft = GlobalConst.getValue().HEADER_LEFT_ICON_NAME
    iconType = GlobalConst.getValue().HEADER_ICON_TYPE
  }

  containerStyle = Obj.appendObject(containerStyle, 'height', height + headerPaddingTop)
  containerStyle = Obj.appendObject(containerStyle, 'backgroundColor', backgroundColor)

  leftContainerStyle = Obj.appendObject(leftContainerStyle, 'height', height)
  rightContainerStyle = Obj.appendObject(rightContainerStyle, 'height', height)

  const enableLeftAction = iconLeft || titleLeft
  const enableRightAction = iconRight || titleRight

  let leftActionPress = navigation ? () => navigation.goBack() : () => null
  let rightActionPress = () => null

  if (onPressLeft) {
    leftActionPress = onPressLeft
  }

  if (onPressRight) {
    rightActionPress = onPressRight
  }

  return (
    <Container style={[containerStyle, { paddingTop: headerPaddingTop }]} isCard={isCard}>
      {renderLeft ? (
        <LeftContainer style={[leftContainerStyle]}>
          {renderLeft()}
        </LeftContainer>
      ) : (
          <LeftTouchableContainer style={[leftContainerStyle]} activeOpacity={0.8} disabled={!enableLeftAction} onPress={leftActionPress}>
            {getSideContent(iconLeft, iconType, titleLeft, 'left')}
          </LeftTouchableContainer>
        )}
      <TitleContainer>
        <Title style={[headerTitleStyle, titleStyle]}>
          {headerTitle}
        </Title>
      </TitleContainer>
      {renderRight ? (
        <RightContainer style={[rightContainerStyle]} >
          {renderRight()}
        </RightContainer>
      ) : (
          <RightTouchableContainer style={[rightContainerStyle]} activeOpacity={0.8} disabled={!enableRightAction} onPress={rightActionPress}>
            {getSideContent(iconRight, iconType, titleRight, 'right')}
          </RightTouchableContainer>
        )}
    </Container >
  )
}

CustomHeader.propTypes = {
  navigation: PropTypes.any,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  iphoneXPadding: PropTypes.bool,
  isCard: PropTypes.bool,

  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  iconLeft: PropTypes.string,
  titleLeftt: PropTypes.string,
  renderLeft: PropTypes.func,
  onPressLeft: PropTypes.func,

  iconRight: PropTypes.string,
  titleRight: PropTypes.string,
  renderRight: PropTypes.func,
  onPressRight: PropTypes.func,

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
  ])
}

CustomHeader.defaultProps = {
  iphoneXPadding: true,
  isCard: true,
  titleStyle: {},
}

export default CustomHeader