/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ViewPropTypes,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  ValueText,
  InputContainer,
  LabelContainer,
  LabelText,
  RequiredMark,
} from '../styled/share.styled';
import Colors from '../colors';
import ModalList from './Modal';
import {isEmptyOrSpaces} from '../method/helper';
import metrics from '../metrics';

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
    multiSelect,
    keyValue,
    keyDescription,
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
    <InputContainer style={style}>
      {!isEmptyOrSpaces(label) && (
        <LabelContainer>
          <LabelText>{label}</LabelText>
          {isRequired && <RequiredMark>*</RequiredMark>}
        </LabelContainer>
      )}
      <TouchableOpacity
        style={[
          styles.valueContainer,
          {borderBottomColor: error ? Colors.alertError : Colors.slate_grey},
        ]}
        onPress={() => setModalVisible(true)}>
        <ValueText isEmpty={isEmptyOrSpaces(valueText)}>
          {isEmptyOrSpaces(valueText) ? placeholder : valueText}
        </ValueText>
        <Icon name="chevron-right" size={16} color={Colors.warm_grey} />
      </TouchableOpacity>
      <ModalList
        data={data}
        multiSelect={multiSelect}
        keyDescription={keyDescription}
        keyValue={keyValue}
        initialValue={multiSelect && !value ? [] : value}
        modalVisible={modalVisible}
        onSubmit={selectValue => onChangeValue(selectValue)}
        closeModal={() => setModalVisible(false)}
        label={label}
      />
    </InputContainer>
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
};

const styles = StyleSheet.create({
  valueContainer: {
    paddingVertical: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
  }
})

export default CustomSelect;
