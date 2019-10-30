/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Colors from '../colors';
import { ValueText } from '../styled/share.styled';
import metrics from '../metrics';
import { getIconByType } from '../method/helper';
import { GlobalConst, PlaceholderText } from '../..';
import { ItemContainer } from './styled';

const Item = props => {
  const {
    item,
    keyValue,
    keyDescription,
    multiSelect,
    isSelected,
    onPressItem,
    selectedPickerColor,
    unSelectedPickerColor,
  } = props;

  const iconType = GlobalConst.getValue().CUSTOM_SELECT_ICON_TYPE
  const iconSelectName = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_NAME : GlobalConst.getValue().CUSTOM_SELECT_ITEM_SELECT_ICON_NAME
  const iconSelectSize = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_SIZE : GlobalConst.getValue().CUSTOM_SELECT_ITEM_SELECT_ICON_SIZE
  const iconSelectColor = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_COLOR : GlobalConst.getValue().CUSTOM_SELECT_ITEM_SELECT_ICON_COLOR
  const iconSelectStyle = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_STYLE : GlobalConst.getValue().CUSTOM_SELECT_ITEM_SELECT_ICON_STYLE

  const iconUnselectName = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_NAME : GlobalConst.getValue().CUSTOM_SELECT_ITEM_UNSELECT_ICON_NAME
  const iconUnselectSize = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_SIZE : GlobalConst.getValue().CUSTOM_SELECT_ITEM_UNSELECT_ICON_SIZE
  const iconUnselectColor = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_COLOR : GlobalConst.getValue().CUSTOM_SELECT_ITEM_UNSELECT_ICON_COLOR
  const iconUnselectStyle = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_STYLE : GlobalConst.getValue().CUSTOM_SELECT_ITEM_UNSELECT_ICON_STYLE

  const itemStyle = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_STYLE : GlobalConst.getValue().CUSTOM_SELECT_ITEM_STYLE
  const itemTitleStyle = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_TITLE_STYLE : GlobalConst.getValue().CUSTOM_SELECT_ITEM_TITLE_STYLE

  const Icons = getIconByType(iconType)

  return (
    <ItemContainer
      activeOpacity={0.8}
      style={[itemStyle]}
      onPress={() => onPressItem(item, isSelected)}>
      <Text style={[{ flex: 1 }, itemTitleStyle]}>{keyDescription ? item[keyDescription] : item}</Text>
      <Icons
        name={isSelected ? iconSelectName : iconUnselectName}
        size={isSelected ? iconSelectSize : iconUnselectSize}
        color={isSelected ? iconSelectColor : iconUnselectColor}
        style={isSelected ? iconSelectStyle : iconUnselectStyle}
      />
    </ItemContainer>
  );
};

Item.propTypes = {
  item: PropTypes.any,
  keyValue: PropTypes.string,
  keyDescription: PropTypes.string,
  multiSelect: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  onPressItem: PropTypes.func.isRequired,
};

Item.defaultProps = {
  multiSelect: false,
  keyValue: null,
  keyDescription: null,
  item: null,
};

export default Item;
