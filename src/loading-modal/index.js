import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator, View, ActivityIndicatorProps } from 'react-native';
import Modal from 'react-native-modal';
import * as Scale from '../method/scale'

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Scale.scale(80),
    height: Scale.scale(80),
    borderRadius: Scale.scale(10),
    backgroundColor: '#ffffff'
  }
})

class LoadingModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  show() {
    this.setState({ modalVisible: true })
  }

  hide() {
    this.setState({ modalVisible: false })
  }

  render() {
    const { modalVisible } = this.state
    const { size, color } = this.props
    if (!modalVisible) {
      return null
    }
    return (
      <Modal
        isVisible={modalVisible}
        style={styles.modalContainer}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
      >
        <View style={styles.contentContainer}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={size} color={color} />
          </View>
        </View>
      </Modal>
    )
  }
}

LoadingModal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'large']), PropTypes.number]),
}

LoadingModal.defaultProps = {
  color: '#999999',
  size: 'large'
}

export default LoadingModal