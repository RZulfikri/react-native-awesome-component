/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  View,
} from 'react-native';
import ModalList from './Modal';
import CustomInput from '../custom-input';
import { GlobalConst } from '../..';

const CustomSelect = props => {
  const {
    label,
    placeholder,
    isRequired,
    value,
    error,
    data,
    onChangeValue,
    style,
    textStyle,
    rightIcon,
    labelType,
    multiSelect,
    keyValue,
    keyDescription,
    selectedPickerColor,
    unSelectedPickerColor,
    multiSeparator,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  let valueText = value;

  if (multiSelect && value) {
    const temp =
      keyValue && keyDescription
        ? value.map(
            item =>
              data.find(dataItem => dataItem[keyValue] === item)[
                keyDescription
              ],
          )
        : value;
    valueText = temp.join(multiSeparator);
  } else if (keyDescription && keyValue && value) {
    valueText = data.find(item => item[keyValue] === value)[keyDescription];
  }

  return (
    <View>
      <CustomInput
        placeholder={placeholder}
        label={label}
        labelType={labelType}
        underlineWidth={1}
        onPress={() => setModalVisible(true)}
        isRequired={isRequired}
        defaultValue={valueText}
      />
      <ModalList
        data={data}
        multiSelect={multiSelect}
        keyDescription={keyDescription}
        keyValue={keyValue}
        initialValue={multiSelect && !value ? [] : value}
        modalVisible={modalVisible}
        onSubmit={selectValue => {
          onChangeValue(selectValue);
        }}
        selectedPickerColor={selectedPickerColor}
        unSelectedPickerColor={unSelectedPickerColor}
        closeModal={() => setModalVisible(false)}
        label={label}
      />
    </View>
  );
};

CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  data: PropTypes.array.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  textStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  rightIcon: PropTypes.string,
  keyValue: PropTypes.string,
  keyDescription: PropTypes.string,
  multiSelect: PropTypes.bool,
  multiSeparator: PropTypes.string,
  selectedPickerColor: PropTypes.string,
  unSelectedPickerColor: PropTypes.string,
  labelType: PropTypes.oneOf(['top-label', 'default', 'left-label', 'right-label'])
};

CustomSelect.defaultProps = {
  label: '',
  placeholder: '',
  isRequired: false,
  error: null,
  rightIcon: '',
  textStyle: null,
  value: null,
  style: undefined,
  keyValue: null,
  keyDescription: null,
  multiSelect: false,
  multiSeparator: ', ',
  labelType: 'top-label',
  unSelectedPickerColor: GlobalConst.getValue().CUSTOM_SELECT_SELECTED_COLOR,
  selectedPickerColor: GlobalConst.getValue().CUSTOM_SELECT_UNSELECTED_COLOR,
};

export default CustomSelect;
