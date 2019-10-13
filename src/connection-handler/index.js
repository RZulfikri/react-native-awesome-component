import React, { PureComponent } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import NetInfo from "@react-native-community/netinfo"
import DropdownAlert from 'react-native-dropdownalert'
import * as GlobalConst from '../global-const'
import Icons from 'react-native-vector-icons/Feather'
import Colors from 'react-native-awesome-component/src/colors'

class ConnectionHandler extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isConnected: true
    }
    this.unsubscribe = null
    this.dropDownAlertRef = null
  }

  static propTypes = {
    onStateChange: PropTypes.func
  }

  static defaultProps = {
    onStateChange: () => null
  }

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      const { isConnected } = this.state
      if (isConnected === false && state.isConnected === true) {
        // show alert connected
        this.dropDownAlertRef.alertWithType('success', GlobalConst.getValue().CONNECTION_SUCCESS_TITLE, GlobalConst.getValue().CONNECTION_SUCCESS_MESSAGE);
      }

      if (isConnected === true && state.isConnected === false) {
        // show alert disconected
        this.dropDownAlertRef.alertWithType('error', GlobalConst.getValue().CONNECTION_ERROR_TITLE, GlobalConst.getValue().CONNECTION_ERROR_MESSAGE);
      }
      this.setState({ isConnected: state.isConnected }, () => {
        this.props.onStateChange(state.isConnected)
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <View style={{ zIndex: 100 }}>
        <DropdownAlert
          ref={ref => this.dropDownAlertRef = ref}
          renderImage={(props, data) => {
            const { type } = data
            if (type === 'success') {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Icons name='wifi' size={25} color={Colors.white} />
                </View>
              )
            } else {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Icons name='wifi-off' size={25} color={Colors.white} />
                </View>
              )
            }
          }}
        />
      </View>
    )
  }
}

export default ConnectionHandler