import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Alert from './alert'
import { setAlertInstance } from './alert-handler'

class CustomAlert extends PureComponent {
  static propTypes = {
    enableDismiss: PropTypes.bool,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    messageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    singleButtonContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    singleButtonTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    multiButtonContainerStyle: PropTypes.shape({ confirm: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), cancel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) }),
    multiButtonTitleStyle: PropTypes.shape({ confirm: PropTypes.oneOfType([PropTypes.object, PropTypes.array]), cancel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) }),
    customConfiguration: PropTypes.shape({
      enableDismiss: PropTypes.bool,
      type: PropTypes.string,
      imgError: PropTypes.any,
      imgSuccess: PropTypes.any,
      imgInfo: PropTypes.any,
      successColor: PropTypes.string,
      errorColor: PropTypes.string,
      infoColor: PropTypes.string,
      title: PropTypes.string,
      message: PropTypes.string,
      confirm: PropTypes.shape({
        title: PropTypes.string,
        callback: PropTypes.func,
      }),
      cancel: PropTypes.shape({
        title: PropTypes.string,
        callback: PropTypes.func,
      })
    })
  }

  static defaultProps = {
    enableDismiss: false,
    containerStyle: {},
    titleStyle: {},
    imageStyle: {},
    messageStyle: {},
    singleButtonContainerStyle: {},
    singleButtonTitleStyle: {},
    multiButtonContainerStyle: {
      confirm: {},
      cancel: {}
    },
    multiButtonTitleStyle: {
      confirm: {},
      cancel: {}
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Alert {...this.props} ref={ref => setAlertInstance(ref)} />
    )
  }
}

export default CustomAlert