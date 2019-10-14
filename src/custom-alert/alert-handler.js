let _alert

export function setAlertInstance(alert) {
  _alert = alert
}

export function showAlert(options, customStyle) {
  if (_alert) {
    _alert.show(options, customStyle)
  }
}

export function hideAlert() {
  if (_alert) {
    _alert.hide()
  }
}