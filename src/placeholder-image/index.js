import React, { Component } from 'react'
import { Image, ImagePropsBase, ImageStyle, ImageBackground, View } from 'react-native'
import PropTypes from 'prop-types'
import { StyledImage } from '../Components/styled/share.styled'
import {
  Placeholder,
  PlaceholderMedia,
  ShineOverlay,
} from 'rn-placeholder'

class PlaceholderImage extends Component {
  static propTypes = {
    uri: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    defaultSource: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    resizeMethod: PropTypes.oneOf(["auto", "resize", "scale"]),
    resizeMode: PropTypes.oneOf(["cover", "contain", "stretch", "repeat", "center"]),
    isCard: PropTypes.bool,
  }

  static defaultProps = {
    uri: '',
    resizeMethod: 'resize',
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderWidth: 0,
    borderColor: '#000000',
    defaultSource: require('./image-placeholder.png'),
    isCard: true
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false
    }
    this.onLoad = this.onLoad.bind(this)
    this.onError = this.onError.bind(this)
  }

  onLoad() {
    this.setState({ loading: false, error: false })
  }

  onError() {
    this.setState({ loading: false, error: true })
  }

  render() {
    const {
      uri,
      resizeMethod,
      resizeMode,
      defaultSource,
      width,
      height,
      radius,
      borderWidth,
      borderColor,
      isCard,
    } = this.props

    const { loading } = this.state

    return (
      <View>
        <StyledImage
          source={{ uri }}
          resizeMethod={resizeMethod}
          resizeMode={resizeMode}
          style={{
            width,
            height,
            borderWidth,
            borderColor,
            borderRadius: radius,
          }}
          defaultSource={defaultSource}
          onLoad={this.onLoad}
          onError={this.onError}
          isCard={isCard}
        />
        {loading && (
          <View style={{marginTop: -height}}>
            <Placeholder
              Animation={ShineOverlay}
            >
              <PlaceholderMedia
                style={{
                  width,
                  height,
                  borderWidth,
                  borderColor,
                  borderRadius: radius,
                }}
              />
            </Placeholder>
          </View>
        )}
      </View>
    )
  }
}

export default PlaceholderImage