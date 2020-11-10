/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import Colors from '../colors';
import { ValueText } from '../styled/share.styled';
import metrics from '../metrics';
import { getIconByType, isEmptyOrSpaces } from '../method/helper';
// import CustomInput from '../custom-input'
import CustomInput from '../custom-input';
import { GlobalConst, PlaceholderText } from '../..';
import { ItemContainer } from './styled';

const Item = props => {
  const {
    item,
    keyValue,
    keyDescription,
    keyOther,
    multiSelect,
    isSelected,
    onPressItem,
    initialValue,
  } = props;
  const [otherText, setOtherText] = useState('');

  useEffect(() => {
    if (!keyDescription && !isEmptyOrSpaces(keyOther)) {
      if (!multiSelect) {
        setOtherText(initialValue);
      } else {
        // const valueSplit = initialValue.split(' - ')
        if (item.toLowerCase() === keyOther.toLowerCase()) {
          const otherData = initialValue.find(value => value.includes(item))
          if (otherData) {
            const otherSplitData = otherData.split(" - ")
            if (otherSplitData.length > 0) {
              otherSplitData.splice(0, 1)
              setOtherText(otherSplitData.join(', '))
            }
          }
        }
      }
    }
  }, []);

  let isOther = false
  if (multiSelect) {
    if (!isEmptyOrSpaces(keyOther)) {
      isOther = item.toLowerCase() === keyOther.toLowerCase();
    }
  } else {
    isOther = !isEmptyOrSpaces(keyOther) && ((!keyDescription && item.toLowerCase().includes(keyOther)) || (keyDescription && item[keyDescription].toLowerCase() === keyOther));
  }
  
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

  const onChange = (text) => {
    let temp = item;
    if (isOther) {
      if (keyDescription) {
        temp = { ...item, [keyValue]: otherText };
      } else {
        temp = `${keyOther} - ${typeof text === 'string' ? text : otherText}`;
      }
    }
    onPressItem(temp);
  }

  return (
    <View style={{ backgroundColor: 'white'}}>
      <ItemContainer
        activeOpacity={0.8}
        style={[itemStyle]}
        onPress={onChange}>
        <Text style={[{ flex: 1 }, itemTitleStyle]}>{keyDescription ? item[keyDescription] : item.includes(keyOther) ? keyOther : item}</Text>
        <Icons
          name={isSelected ? iconSelectName : iconUnselectName}
          size={isSelected ? iconSelectSize : iconUnselectSize}
          color={isSelected ? iconSelectColor : iconUnselectColor}
          style={isSelected ? iconSelectStyle : iconUnselectStyle}
        />
      </ItemContainer>
      {isSelected && isOther ? (
        <CustomInput
          placeholder={''}
          label={undefined}
          containerStyle={{marginHorizontal: 10}}
          labelType={undefined}
          underlineWidth={1}
          defaultValue={otherText}
          onChangeText={(text) => {
            setOtherText(text);
            onChange(text);
          }}
          isRequired={false}
          forceErrorMessage={''}
          autoCorrect={false}
          autoCapitalize='none'
        />
      ) : undefined}
    </View>
  );
};

Item.propTypes = {
  item: PropTypes.any,
  keyValue: PropTypes.string,
  keyDescription: PropTypes.string,
  multiSelect: PropTypes.bool,
  isSelected: PropTypes.bool,
  onPressItem: PropTypes.func,
  keyOther: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
};

Item.defaultProps = {
  multiSelect: false,
  keyValue: null,
  keyDescription: null,
  item: null,
  initialValue: null,
};

export default Item;
