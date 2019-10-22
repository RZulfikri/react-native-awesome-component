/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../colors';
import { ValueText } from '../styled/share.styled';
import metrics from '../metrics';

const Item = props => {
  const {
    item,
    keyValue,
    keyDescription,
    multiSelect,
    isSelected,
    onPressItem,
  } = props;
  const checkedIcon = multiSelect ? 'check-box' : 'radio-button-checked';
  const uncheckedIcon = multiSelect
    ? 'check-box-outline-blank'
    : 'radio-button-unchecked';
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: Colors.carara,
        borderBottomColor: Colors.carara,
        flexDirection: 'row',
        alignItems: 'center',
        padding: metrics.padding,
        backgroundColor: 'white',
      }}
      onPress={() => {
        onPressItem(keyValue ? item[keyValue] : item, isSelected);
      }}>
      <ValueText isEmpty={false}>
        {keyDescription ? item[keyDescription] : item}
      </ValueText>
      <Icon
        name={isSelected ? checkedIcon : uncheckedIcon}
        size={20}
        color={Colors.warm_grey}
      />
    </TouchableOpacity>
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
