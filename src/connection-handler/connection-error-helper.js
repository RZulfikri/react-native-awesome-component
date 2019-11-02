import * as GlobalConst from '../global-const';
import _ from 'lodash'

let dropDownInstance
let isConnected = true

let currentAlert = undefined

const ALERT_TYPE_CONNECTED = {
  type: 'success',
  subType: 'connection'
}

const ALERT_TYPE_DISCONNECTED = {
  type: 'error',
  subType: 'connection'
}

const ALERT_TYPE_500 = {
  type: 'error',
  subType: '500'
}

const ALERT_TYPE_400 = {
  type: 'error',
  subType: '400'
}

const ALERT_TYPE_200 = {
  type: 'success',
  subType: '200'
}

export function getConnectionStatus() {
  return isConnected
}

export function setConnectionStatus(status) {
  isConnected = status
}

export function setDropDownIntance(instance) {
  dropDownInstance = instance
}

export function showConnectedWarning() {
  currentAlert = ALERT_TYPE_CONNECTED
  dropDownInstance.alertWithType('success', GlobalConst.getValue().CONNECTION_SUCCESS_TITLE, GlobalConst.getValue().CONNECTION_SUCCESS_MESSAGE, { subType: 'connection' }, 1000)
}

export function showDisconnectedWarning() {
  currentAlert = ALERT_TYPE_DISCONNECTED
  dropDownInstance.alertWithType('error', GlobalConst.getValue().CONNECTION_ERROR_TITLE, GlobalConst.getValue().CONNECTION_ERROR_MESSAGE, { subType: 'connection' });
}

export function showAlert200(response, callback) {
  currentAlert = ALERT_TYPE_200
  if (callback) {
    callback(response)
  } else {
    dropDownInstance.alertWithType('success', GlobalConst.getValue().CONNECTION_200_ALERT_TITLE, GlobalConst.getValue().CONNECTION_200_ALERT_MESSAGE, { subType: '200' }, 1000);
  }
}

export function showAlert400(response, callback) {
  if (!_.isEqual(currentAlert, ALERT_TYPE_DISCONNECTED) && !_.isEqual(currentAlert, ALERT_TYPE_400)) {
    currentAlert = ALERT_TYPE_400
    if (callback) {
      callback(response)
    } else {
      dropDownInstance.alertWithType('error', GlobalConst.getValue().CONNECTION_400_ALERT_TITLE, GlobalConst.getValue().CONNECTION_400_ALERT_MESSAGE, { subType: '400' });
    }
  }
}

export function showAlert500(response, callback) {
  if (!_.isEqual(currentAlert, ALERT_TYPE_DISCONNECTED) && !_.isEqual(currentAlert, ALERT_TYPE_500)) {
    currentAlert = ALERT_TYPE_500
    if (callback) {
      callback(response)
    } else {
      dropDownInstance.alertWithType('error', GlobalConst.getValue().CONNECTION_500_ALERT_TITLE, GlobalConst.getValue().CONNECTION_500_ALERT_MESSAGE, { subType: '500' });
    }
  }
}

export function handleOnCloseAlert(alertData) {
  currentAlert = undefined
}
