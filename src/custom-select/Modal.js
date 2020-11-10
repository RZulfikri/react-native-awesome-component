/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import ModalHeader from './ModalHeader';
import Item from './item';
import Colors from '../colors';
import { GlobalConst } from '../..';
import _ from 'lodash'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { stringEquals, isEmptyOrSpaces } from '../method/helper';

const ModalList = props => {
  const {
    modalVisible,
    title,
    data,
    closeModal,
    onSubmit,
    initialValue,
    keyValue,
    keyDescription,
    multiSelect,
    selectedPickerColor,
    unSelectedPickerColor,
    renderHeader,
    renderItem,
    keyOther,
  } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (data) {
      if (!keyDescription && !isEmptyOrSpaces(keyOther)) {
        if (multiSelect) {
          setValue(initialValue);
        } else {
          if (!isEmptyOrSpaces(initialValue)) {
            setValue(
              data.findIndex(item => stringEquals(item, initialValue)) === -1
                ? `${keyOther}-${initialValue}`
                : initialValue,
            );
          }
        }
      } else {
        setValue(initialValue);
      }
    }
  }, [initialValue, data]);

  const leftAction = () => {
    closeModal();
    setValue(initialValue);
  }

  const rightAction = () => {
    let tempValue = value;
    if (!multiSelect) {
      if (!isEmptyOrSpaces(keyOther) && !keyDescription && tempValue.toLowerCase().includes(keyOther.toLowerCase())) {
        tempValue = value.substr(keyOther.length + 1);
      }
    }
    onSubmit(tempValue);
    closeModal();
  }

  const onPressItem = (data) => {
    if (multiSelect) {
      if (Array.isArray(value)) {
        const newValue = [...value]
        if (keyOther && typeof data === 'string' && data.includes(keyOther)) {
          const index = newValue.findIndex(item => _.includes(item, keyOther))
          if (index >= 0) {
            newValue.splice(index, 1, data)
          } else {
            newValue.push(data)
          }
        } else {
          const index = newValue.findIndex(item => _.isEqual(item, data))
          if (index >= 0) {
            newValue.splice(index, 1)
          } else {
            newValue.push(data)
          }
        }
        setValue(newValue)
      } else {
        setValue([data])
      }
    } else {
      setValue(data)
    }
  }

  const checkIsSelected = (item) => {
    if (multiSelect) {
      if (Array.isArray(value) && value.length > 0) {
        if (typeof item === 'object') {
          return _.some(value, item)
        } else {
          if (keyOther && keyOther.toLowerCase() === item.toLowerCase()) {
            const otherValue = value.find(val => val.toLowerCase().includes(keyOther.toLowerCase()))
            return otherValue ? true : false
          } else {
            return _.includes(value, item)
          }
        }
      } else {
        return false
      }
    } else {
      if (keyDescription) {
        if (value) {
          return stringEquals(item[keyDescription], value[keyDescription]);
        }
        return false
      } else {
        const toLowerCaseValue = value.toLowerCase();
        const toLowerCaseItem = item.toLowerCase();
        if (!isEmptyOrSpaces(keyOther)) {
          const toLowerCaseKeyOther = keyOther.toLowerCase();
          if (toLowerCaseValue.includes(toLowerCaseKeyOther)) {
            return toLowerCaseValue.includes(toLowerCaseKeyOther) && toLowerCaseItem.includes(toLowerCaseKeyOther);
          }
        }
        return toLowerCaseValue === toLowerCaseItem;
      }
    }
  }

  const backgroundColor = GlobalConst.getValue().CUSTOM_SELECT_BACKGROUND_COLOR

  return (
    <Modal
      isVisible={modalVisible}
      style={{ margin: 0, backgroundColor: backgroundColor }}>
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        {renderHeader ? renderHeader({ title, leftAction, rightAction }) : (
          <ModalHeader
            title={title}
            closeModal={() => leftAction()}
            onSubmit={() => rightAction()}
          />
        )}
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            if (renderItem) {
              return renderItem({ item, index, onPressItem, isSelected: checkIsSelected(item, value) })
            } else {
              return (
                <Item
                  item={item}
                  initialValue={initialValue}
                  keyOther={keyOther}
                  multiSelect={multiSelect}
                  keyValue={keyValue}
                  selectedPickerColor={selectedPickerColor}
                  unSelectedPickerColor={unSelectedPickerColor}
                  isSelected={checkIsSelected(item, value)}
                  keyDescription={keyDescription}
                  onPressItem={(data) => onPressItem(data)}
                />
              )
            }
          }}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
        />
      </View>
    </Modal>
  );
};

ModalList.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.any,
  keyValue: PropTypes.string,
  keyDescription: PropTypes.string,
  multiSelect: PropTypes.bool.isRequired,
  selectedPickerColor: PropTypes.string.isRequired,
  unSelectedPickerColor: PropTypes.string.isRequired,
  renderItem: PropTypes.func,
  renderHeader: PropTypes.func,
  keyOther: PropTypes.string.isRequired,
};

ModalList.defaultProps = {
  initialValue: null,
  keyValue: null,
  keyDescription: null,
};

export default ModalList;
