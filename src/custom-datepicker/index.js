/* eslint-disable react/jsx-closing-bracket-location */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, ViewPropTypes, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment-timezone';
import metrics from '../metrics';
import { CustomInput } from '../..';

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
    textStyle,
    initialDate,
    minimumDate,
    maximumDate,
    labelType,
    style,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const changeDate = date => {
    console.log(date);
    if (onDateChange) {
      onDateChange(moment.tz(date, 'UTC').format(dateFormat));
    }
  };

  return (
    <View>
      <CustomInput
        placeholder={placeholder}
        label={label}
        labelType={labelType}
        underlineWidth={1}
        onPress={() => setModalVisible(true)}
        isRequired={isRequired}
        defaultValue={value}
        style={style}
      />
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
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
  textStyle: ViewPropTypes.style,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  dateFormat: PropTypes.string,
  locale: PropTypes.string,
  mode: PropTypes.oneOf(['date', 'time', 'datetime']),
  initialDate: PropTypes.instanceOf(Date),
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
  style: ViewPropTypes.style,
  labelType: PropTypes.oneOf(['top-label', 'default', 'left-label', 'right-label'])
};

CustomDatePicker.defaultProps = {
  label: '',
  placeholder: '',
  isRequired: false,
  error: null,
  textStyle: undefined,
  value: null,
  mode: 'date',
  dateFormat: 'DD/MM/YYYY',
  locale: 'en-GB',
  initialDate: undefined,
  maximumDate: undefined,
  minimumDate: undefined,
  style: undefined,
  labelType: 'top-label',
};

const styles = StyleSheet.create({
  valueContainer: {
    paddingVertical: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
  }
})

export default CustomDatePicker;
