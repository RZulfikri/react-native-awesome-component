/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes, StyleSheet, View, TextInputProps, Text } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment-timezone';
import metrics from '../metrics';
import { CustomInput, GlobalConst } from '../..';
import { getIconByType } from '../method/helper';
import Colors from '../colors'
import {scale} from '../method/scale'

const styles = StyleSheet.create({
  textConfirmation: {
    fontSize: scale(16),
    color: Colors.activeBlue
  },
  textCancel: {
    fontSize: scale(16),
    color: Colors.activeRed,
  },
  actionContainer: {
    backgroundColor: Colors.white, 
    width: '100%', 
    padding: scale(10), 
    justifyContent: 'space-between', 
    flexDirection: 'row',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10)
  }
})

class CustomDatePicker extends PureComponent {
  dateSelected = undefined

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      isTouch: false,
    }

    this.changeDate = this.changeDate.bind(this)
    this.onPressDone = this.onPressDone.bind(this)
    this.onPressCancel = this.onPressCancel.bind(this)

    if (props.minimumDate) {
      this.dateSelected = moment.tz(props.minimumDate, 'UTC').format(props.dateFormat)
    } else {
      this.dateSelected = moment.tz(new Date(), 'UTC').format(props.dateFormat)
    }
  }

  changeDate(date) {
    const {
      onDateChange,
      dateFormat,
      onChangeValidation,
    } = this.props;

    this.setState({isTouch: true}, () => {
      this.dateSelected = moment.tz(date, 'UTC').format(dateFormat)
      if (onDateChange) {
        onDateChange(this,dateSelected);
      }
    })
  };

  onPressDone(){
    const {
      onDone,
    } = this.props;
    this.setState({isTouch: true, modalVisible: false}, () => {
      if (onDone) {
        onDone(this.dateSelected);
      }
    })
  };

  onPressCancel() {
    this.setState({isTouch: true, modalVisible: false})
  };

  render() {
    const {
      label,
      placeholder,
      isRequired,
      value,
      error,
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
    } = this.props;
    const {modalVisible, isTouch} = this.state
  
    let rightIconRender = GlobalConst.getValue().CUSTOM_DATE_PICKER_RIGHT_RENDER
    let leftIconRender = undefined
  
    let errorMessage = error ? error : ''
  
    if (isRequired && isTouch && ((value === undefined) || value === null || (value && value.length === 0))) {
      errorMessage = GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED(label)
    }

    if (onChangeValidation) {
      onChangeValidation(errorMessage.length > 0 ? true : false)
    }

  
    if (renderRightAction && typeof renderRightAction === 'function') {
      rightIconRender = renderRightAction
    }
  
    if (renderLeftAction && typeof renderLeftAction === 'function') {
      leftIconRender = renderLeftAction
    }
  
    return (
      <View>
        <CustomInput
          {...this.props}
          placeholder={placeholder}
          label={label}
          labelType={labelType}
          underlineWidth={1}
          editable={!disabled}
          onPress={() => this.setState({modalVisible: true})}
          isRequired={isRequired}
          defaultValue={value}
          textInputStyle={style}
          renderRightAction={() => {
            if (typeof rightIconRender === 'function') {
              return rightIconRender()
            }
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
            this.setState({isTouch: true, modalVisible: false})
            onChangeValidation(errorMessage.length > 0 ? true : false)
          }}
          onBackdropPress={() => {
            this.setState({isTouch: true, modalVisible: false})
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
          <View style={[styles.actionContainer]}>
            <TouchableOpacity
              onPress={this.onPressCancel}>
              <Text style={[styles.textCancel]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onPressDone}>
              <Text style={[styles.textConfirmation]}>Done</Text>
            </TouchableOpacity>
          </View>
          <DatePicker
            style={{
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignSelf: 'center',
              width: metrics.screenWidth,
            }}
            initialDate={value ?  moment.tz(value, dateFormat, 'UTC').toDate() : moment.tz(initialDate, 'UTC').toDate()}
            onDateChange={this.changeDate}
            maximumDate={
              maximumDate ? moment.tz(maximumDate, 'UTC').toDate() : undefined
            }
            date={
              value
                ? moment.tz(value, dateFormat, 'UTC').toDate()
                : undefined
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
  }
}

CustomDatePicker.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // onDateChange: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired,
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
