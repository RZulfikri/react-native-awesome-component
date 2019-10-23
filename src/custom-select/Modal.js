/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import ModalHeader from './ModalHeader';
import Item from './item';
import Colors from '../colors';

const ModalList = props => {
  const {
    modalVisible,
    label,
    data,
    closeModal,
    onSubmit,
    initialValue,
    keyValue,
    keyDescription,
    multiSelect,
    selectedPickerColor,
    unSelectedPickerColor,
  } = props;

  const [value, setValue] = useState(initialValue);

  return (
    <Modal
      isVisible={modalVisible}
      style={{margin: 0, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: Colors.carara}}>
        <ModalHeader
          label={label}
          closeModal={() => {
            closeModal();
            setValue(initialValue);
          }}
          onSubmit={() => {
            onSubmit(value);
            closeModal();
          }}
        />
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <Item
              item={item}
              multiSelect={multiSelect}
              keyValue={keyValue}
              selectedPickerColor={selectedPickerColor}
              unSelectedPickerColor={unSelectedPickerColor}
              isSelected={
                multiSelect
                  ? value.findIndex(
                      itemValue =>
                        itemValue ===
                        (keyDescription && keyValue ? item[keyValue] : item),
                    ) !== -1
                  : value === keyDescription && keyValue
                  ? item[keyValue]
                  : item
              }
              keyDescription={keyDescription}
              onPressItem={(dataValue, isSelected) => {
                if (multiSelect) {
                  const temp = [...value];
                  if (!isSelected) {
                    temp.push(dataValue);
                  } else {
                    const removeIndex = temp.findIndex(
                      itemTemp => itemTemp === dataValue,
                    );
                    temp.splice(removeIndex, 1);
                  }
                  setValue(temp);
                } else {
                  setValue(dataValue);
                }
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Modal>
  );
};

ModalList.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.any,
  keyValue: PropTypes.string,
  keyDescription: PropTypes.string,
  multiSelect: PropTypes.bool.isRequired,
  selectedPickerColor: PropTypes.string.isRequired,
  unSelectedPickerColor: PropTypes.string.isRequired,
};

ModalList.defaultProps = {
  initialValue: null,
  keyValue: null,
  keyDescription: null,
};

export default ModalList;
