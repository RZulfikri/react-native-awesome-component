import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
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
    return (
      <Modal
        isVisible={modalVisible}
        style={styles.modalContainer}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
      >
        <View style={styles.contentContainer}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      </Modal>
    )
  }
}

LoadingModal.propTypes = {

}

LoadingModal.defaultProps = {

}

export default LoadingModal