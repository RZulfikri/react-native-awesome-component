import React, { PureComponent } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import NetInfo from "@react-native-community/netinfo"
import DropdownAlert from 'react-native-dropdownalert'
import * as GlobalConst from '../global-const'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from 'react-native-awesome-component/src/colors'
import { setDropDownIntance, showConnectedWarning, showDisconnectedWarning, setConnectionStatus, handleOnCloseAlert } from 'react-native-awesome-component/src/connection-handler/connection-error-helper'

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
        showConnectedWarning()
      }

      if (isConnected === true && state.isConnected === false) {
        // show alert disconected
        showDisconnectedWarning()
      }
      this.setState({ isConnected: state.isConnected }, () => {
        setConnectionStatus(state.isConnected)
        this.props.onStateChange(state.isConnected)
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { closeInterval: propCloseInterval } = this.props;

    const closeInterval = propCloseInterval || GlobalConst.getValue().CONNECTION_CLOSE_INTERVAL

    return (
      <DropdownAlert
        ref={ref => setDropDownIntance(ref)}
        closeInterval={closeInterval}
        onClose={handleOnCloseAlert}
        zIndex={100}
        renderImage={(props, data) => {
          const { type, payload } = data
          const { subType } = payload
          if (type === 'success') {
            switch (subType) {
              case 'connection': {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icons name='wifi' size={30} color={Colors.white} />
                  </View>
                )
              }

              case '200': {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icons name='alert-circle-outline' size={30} color={Colors.white} />
                  </View>
                )
              }

              default: {
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Icons name='alert-circle-outline' size={30} color={Colors.white} />
                </View>
              }
            }
          } else {
            switch (subType) {
              case 'connection': {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icons name='wifi-off' size={30} color={Colors.white} />
                  </View>
                )
              }

              case '500': {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icons name='alert-outline' size={30} color={Colors.white} />
                  </View>
                )
              }

              case '400': {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icons name='alert-circle-outline' size={30} color={Colors.white} />
                  </View>
                )
              }

              default: {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icons name='alert-circle-outline' size={30} color={Colors.white} />
                  </View>
                )
              }
            }
          }
        }}
      />
    )
  }
}

ConnectionHandler.propTypes = {
  closeInterval: PropTypes.number.isRequired,
}

export default ConnectionHandler