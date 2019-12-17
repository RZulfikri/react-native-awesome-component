/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  View,
} from 'react-native';
import ModalList from './Modal';
import CustomInput from '../custom-input';
import { GlobalConst } from '../..';
import Colors from '../colors';
import { getIconByType, stringEquals, isEmptyOrSpaces } from '../method/helper'

const CustomSelect = props => {
  const {
    label,
    placeholder,
    isRequired,
    value,
    error,
    data,
    onChangeValue,
    rightIcon,
    labelType,
    multiSelect,
    keyValue,
    keyDescription,
    selectedPickerColor,
    unSelectedPickerColor,
    selectTitle,
    disabled,
    keyOther,
    onChangeValidation,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  // const [dataList, setdataList] = useState(data);

  let valueText = '';

  if (value) {
    if (multiSelect && Array.isArray(value)) {
      if (keyDescription) {
        const arrayString = value.map((item) => item[keyDescription])
        valueText = arrayString.join(', ')
      } else {
        valueText = value.join(', ')
      }
    } else {
      if (keyDescription) {
        if (!isEmptyOrSpaces(keyOther) && stringEquals(value[keyDescription], keyOther)) {
          valueText = value[keyValue]
        } else {
          valueText = value[keyDescription]
        }
      } else {
        valueText = value;
      }
    }
  }

  const iconType = GlobalConst.getValue().CUSTOM_SELECT_ICON_TYPE
  const rightIconName = rightIcon ? rightIcon : GlobalConst.getValue().CUSTOM_SELECT_RIGHT_ICON_NAME
  const rightIconSize = GlobalConst.getValue().CUSTOM_SELECT_RIGHT_ICON_SIZE
  const rightIconColor = GlobalConst.getValue().CUSTOM_SELECT_RIGHT_ICON_COLOR
  const rightIconStyle = GlobalConst.getValue().CUSTOM_SELECT_RIGHT_ICON_STYLE
  const rightIconRender = GlobalConst.getValue().CUSTOM_SELECT_RIGHT_RENDER

  const renderItem = multiSelect ? GlobalConst.getValue().CUSTOM_SELECT_ITEM_MULTI_RENDER : GlobalConst.getValue().CUSTOM_SELECT_ITEM_RENDER
  const renderHeader = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RENDER

  let errorMessage = error ? error : ''

  if (isRequired && isTouch && valueText.length === 0) {
    errorMessage = GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED(label)
  }

  const Icon = getIconByType(iconType)

  return (
    <View>
      <CustomInput
        placeholder={placeholder}
        label={label}
        labelType={labelType}
        underlineWidth={1}
        editable={!disabled}
        onPress={disabled ? undefined : () => setModalVisible(true)}
        isRequired={isRequired}
        defaultValue={valueText}
        renderRightAction={() => {
          if (typeof rightIconRender === 'function') {
            return rightIconRender()
          } else {
            return <Icon name={rightIconName} size={rightIconSize} color={rightIconColor} style={rightIconStyle} />
          }
        }}
        forceErrorMessage={errorMessage}
      />
      {modalVisible ? <ModalList
        data={data}
        multiSelect={multiSelect}
        keyDescription={keyDescription}
        keyValue={keyValue}
        initialValue={value}
        modalVisible={modalVisible}
        keyOther={keyOther}
        onSubmit={selectValue => {
          setModalVisible(false)
          onChangeValue(selectValue);
          onChangeValidation(errorMessage.length > 0 ? true : false)
          setIsTouch(true)
        }}
        selectedPickerColor={selectedPickerColor}
        unSelectedPickerColor={unSelectedPickerColor}
        closeModal={() => {
          setModalVisible(false)
          onChangeValidation(errorMessage.length > 0 ? true : false)
          setIsTouch(true)
        }}
        renderItem={renderItem}
        renderHeader={renderHeader}
        title={selectTitle}
      /> : undefined}

    </View>
  );
};

CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  data: PropTypes.array.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  rightIcon: PropTypes.string,
  keyValue: PropTypes.string,
  keyDescription: PropTypes.string,
  multiSelect: PropTypes.bool,
  selectedPickerColor: PropTypes.string,
  unSelectedPickerColor: PropTypes.string,
  labelType: PropTypes.oneOf(['top-label', 'default', 'left-label', 'right-label']),
  selectTitle: PropTypes.string,
  disabled: PropTypes.bool,
  onChangeValidation: PropTypes.func,
  keyOther: PropTypes.string,
};

CustomSelect.defaultProps = {
  label: '',
  placeholder: '',
  isRequired: false,
  multiSelect: false,
  labelType: 'top-label',
  selectTitle: 'Select Item',
  disabled: false,
  onChangeValidation: () => null,
  keyOther: null,
};

export default CustomSelect;
