/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import Colors from '../colors';
import metrics from '../metrics';
import { GlobalConst, CustomHeader } from '../..';
import { getIconByType } from '../method/helper';
import { ActionContainer } from './styled';

const ModalHeader = props => {
  const { title, closeModal, onSubmit } = props;

  const iconType = GlobalConst.getValue().CUSTOM_SELECT_ICON_TYPE
  const backgroundColor = GlobalConst.getValue().CUSTOM_SELECT_HEADER_BACKGROUND_COLOR
  const leftIconName = GlobalConst.getValue().CUSTOM_SELECT_HEADER_LEFT_ICON_NAME
  const leftIconColor = GlobalConst.getValue().CUSTOM_SELECT_HEADER_LEFT_ICON_COLOR
  const leftIconSize = GlobalConst.getValue().CUSTOM_SELECT_HEADER_LEFT_ICON_SIZE
  const leftIconStyle = GlobalConst.getValue().CUSTOM_SELECT_HEADER_LEFT_ICON_STYLE
  const rightIconName = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RIGHT_ICON_NAME
  const rightIconColor = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RIGHT_ICON_COLOR
  const rightIconSize = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RIGHT_ICON_SIZE
  const rightIconStyle = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RIGHT_ICON_STYLE
  const titleStyle = GlobalConst.getValue().CUSTOM_SELECT_HEADER_TITLE_STYLE
  const renderRight = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RENDER_RIGHT
  const renderLeft = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RENDER_LEFT

  const Icons = getIconByType(iconType)

  return (
    <CustomHeader
      isCard={true}
      backgroundColor={backgroundColor}
      title={title}
      titleStyle={[titleStyle]}
      renderLeft={() => {
        if (renderLeft && typeof renderLeft === 'function') {
          return renderLeft({ callback: closeModal })
        } else {
          return (
            <ActionContainer onPress={closeModal}>
              <Icons name={leftIconName} size={leftIconSize} color={leftIconColor} style={leftIconStyle} />
            </ActionContainer>
          )
        }
      }}
      renderRight={() => {
        if (renderRight && typeof renderRight === 'function') {
          return renderRight({ callback: onSubmit })
        } else {
          return (
            <ActionContainer onPress={onSubmit}>
              <Icons name={rightIconName} size={rightIconSize} color={rightIconColor} style={rightIconStyle} />
            </ActionContainer>
          )
        }
      }}
    />
  )
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalHeader;
