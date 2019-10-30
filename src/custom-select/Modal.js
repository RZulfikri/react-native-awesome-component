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
  } = props;

  const [value, setValue] = useState(initialValue);

  const leftAction = () => {
    closeModal();
    setValue(initialValue);
  }

  const rightAction = () => {
    onSubmit(value);
    closeModal();
  }

  const onPressItem = (data) => {
    if (multiSelect) {
      if (Array.isArray(value)) {
        const newValue = [...value]
        const index = newValue.findIndex(item => _.isEqual(item, data))
        if (index >= 0) {
          newValue.splice(index, 1)
        } else {
          newValue.push(data)
        }
        setValue(newValue)
      } else {
        setValue([data])
      }
    } else {
      setValue(data)
    }
  }

  const checkIsSelected = (item, value) => {
    if (multiSelect) {
      if (Array.isArray(value)) {
        return _.some(value, item)
      } else {
        return false
      }
    } else {
      return _.isEqual(item, value)
    }
  }

  const backgroundColor = GlobalConst.getValue().CUSTOM_SELECT_BACKGROUND_COLOR

  return (
    <Modal
      isVisible={modalVisible}
      style={{ margin: 0, backgroundColor: backgroundColor }}>
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        {renderHeader ? renderHeader({ label, leftAction, rightAction }) : (
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
              return renderItem({ item, index })
            } else {
              return (
                <Item
                  item={item}
                  multiSelect={multiSelect}
                  keyValue={keyValue}
                  selectedPickerColor={selectedPickerColor}
                  unSelectedPickerColor={unSelectedPickerColor}
                  isSelected={checkIsSelected(item, value)}
                  keyDescription={keyDescription}
                  onPressItem={(data, isSelected) => onPressItem(data, isSelected)}
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
};

ModalList.defaultProps = {
  initialValue: null,
  keyValue: null,
  keyDescription: null,
};

export default ModalList;
