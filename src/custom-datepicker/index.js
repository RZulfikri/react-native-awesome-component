/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes, StyleSheet, View, TextInputProps } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment-timezone';
import metrics from '../metrics';
import { CustomInput, GlobalConst } from '../..';
import { getIconByType } from '../method/helper';

const CustomDatePicker = props => {
  const {
    label,
    placeholder,
    isRequired,
    value,
    error,
    onDateChange,
    dateFormat,
    locale,
    mode,
    // textStyle,
    initialDate,
    minimumDate,
    maximumDate,
    style,
    labelType,
    rightIcon,
    disabled,
    onChangeValidation,
    renderRightAction,
    renderLeftAction,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const iconType = GlobalConst.getValue().CUSTOM_DATE_PICKER_ICON_TYPE
  const rightIconName = rightIcon ? rightIcon : GlobalConst.getValue().CUSTOM_DATE_PICKER_RIGHT_ICON_NAME
  const rightIconSize = GlobalConst.getValue().CUSTOM_DATE_PICKER_RIGHT_ICON_SIZE
  const rightIconColor = GlobalConst.getValue().CUSTOM_DATE_PICKER_RIGHT_ICON_COLOR
  const rightIconStyle = GlobalConst.getValue().CUSTOM_DATE_PICKER_RIGHT_ICON_STYLE
  let rightIconRender = GlobalConst.getValue().CUSTOM_DATE_PICKER_RIGHT_RENDER
  let leftIconRender = undefined

  let errorMessage = error ? error : ''

  if (isRequired && isTouch && ((value === undefined) || value === null || (value && value.length === 0))) {
    errorMessage = GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED(label)
  }

  const changeDate = date => {
    if (onDateChange) {
      onDateChange(moment.tz(date, 'UTC').format(dateFormat));
    }

    if (onChangeValidation) {
      onChangeValidation(errorMessage.length > 0 ? true : false)
    }

    setIsTouch(true)
  };

  const Icon = getIconByType(iconType)

  if (renderRightAction && typeof renderRightAction === 'function') {
    rightIconRender = renderRightAction
  }

  if (renderLeftAction && typeof renderLeftAction === 'function') {
    leftIconRender = renderLeftAction
  }

  return (
    <View>
      <CustomInput
        {...props}
        placeholder={placeholder}
        label={label}
        labelType={labelType}
        underlineWidth={1}
        editable={!disabled}
        onPress={() => setModalVisible(true)}
        isRequired={isRequired}
        defaultValue={value}
        textInputStyle={style}
        renderRightAction={() => {
          if (typeof rightIconRender === 'function') {
            return rightIconRender()
          }
          // else {
          //   return <Icon name={rightIconName} size={rightIconSize} color={rightIconColor} style={rightIconStyle} />
          // }
        }}
        renderLeftAction={() => {
          if (typeof leftIconRender === 'function') {
            return leftIconRender()
          }
        }}
        forceErrorMessage={errorMessage}
      />
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={() => {
          setModalVisible(false)
          setIsTouch(true)
          onChangeValidation(errorMessage.length > 0 ? true : false)
        }}
        onBackdropPress={() => {
          setModalVisible(false)
          setIsTouch(true)
          onChangeValidation(errorMessage.length > 0 ? true : false)
        }}
        style={{
          justifyContent: 'flex-end',
          alignContent: 'center',
          alignItems: 'center',
          margin: 0,
          width: '100%',
          padding: 0,
        }}>
        <DatePicker
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignSelf: 'center',
            width: metrics.screenWidth,
          }}
          initialDate={moment.tz(initialDate, 'UTC').toDate()}
          onDateChange={changeDate}
          maximumDate={
            maximumDate ? moment.tz(maximumDate, 'UTC').toDate() : undefined
          }
          date={
            value
              ? moment.tz(value, dateFormat, 'UTC').toDate()
              : moment.tz(undefined, 'UTC').toDate()
          }
          minimumDate={
            minimumDate ? moment.tz(minimumDate, 'UTC').toDate() : undefined
          }
          mode={mode}
          locale={locale}
          timeZoneOffsetInMinutes={0}
        />
      </Modal>
    </View>
  );
};

CustomDatePicker.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onDateChange: PropTypes.func.isRequired,
  // textStyle: ViewPropTypes.style,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  dateFormat: PropTypes.string,
  locale: PropTypes.string,
  mode: PropTypes.oneOf(['date', 'time', 'datetime']),
  initialDate: PropTypes.instanceOf(Date),
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelType: PropTypes.oneOf(['top-label', 'default', 'left-label', 'right-label']),
  rightIcon: PropTypes.string,
  disabled: PropTypes.bool,
  onChangeValidation: PropTypes.func,
  rightIconRender: PropTypes.func,
  leftIconRender: PropTypes.func,
};

CustomDatePicker.defaultProps = {
  label: '',
  placeholder: '',
  isRequired: false,
  error: null,
  // textStyle: undefined,
  value: null,
  mode: 'date',
  dateFormat: 'DD/MM/YYYY',
  locale: 'en-GB',
  initialDate: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  style: undefined,
  labelType: 'top-label',
  disabled: false,
  onChangeValidation: () => null,
  rightIconRender: undefined,
  leftIconRender: undefined,
};

export default CustomDatePicker;
