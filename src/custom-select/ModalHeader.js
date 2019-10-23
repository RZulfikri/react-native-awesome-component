/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Platform, TouchableOpacity, Text} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import Colors from '../colors';
import metrics from '../metrics';

const ModalHeader = props => {
  const {label, closeModal, onSubmit} = props;
  const headerPaddingTop =
    Platform.OS === 'ios' ? (isIphoneX ? getStatusBarHeight() : 0) : 0;

  return (
    <View
      style={{
        height: metrics.headerHeight + headerPaddingTop,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: Colors.warm_grey,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        marginBottom: 16,
      }}>
      <TouchableOpacity
        style={{padding: 16, marginRight: 10}}
        onPress={closeModal}>
        <Icon name="arrow-left" size={20} color={Colors.slate_grey} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 18}}>{`Select ${label}`}</Text>
      </View>
      <TouchableOpacity
        style={{padding: 16, marginLeft: 10}}
        onPress={onSubmit}>
        <Icon name="check" size={20} color={Colors.slate_grey} />
      </TouchableOpacity>
    </View>
  );
};

ModalHeader.propTypes = {
  label: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalHeader;
