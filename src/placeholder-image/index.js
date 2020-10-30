import React, { Component } from 'react'
import { Image, ImagePropsBase, ImageStyle, ImageBackground, View } from 'react-native'
import PropTypes from 'prop-types'
import { StyledImage } from '../styled/share.styled'
import { Placeholder, PlaceholderMedia, Shine } from 'rn-placeholder'
import Colors from '../colors'

class PlaceholderImage extends Component {
  static propTypes = {
    uri: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    defaultSource: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    resizeMethod: PropTypes.oneOf(["auto", "resize", "scale"]),
    resizeMode: PropTypes.oneOf(["cover", "contain", "stretch", "repeat", "center"]),
    isCard: PropTypes.bool,
    disableAnimation: PropTypes.bool,
  }

  static defaultProps = {
    // uri: '',
    resizeMethod: 'resize',
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderWidth: 0,
    borderColor: '#000000',
    defaultSource: require('./image-placeholder.png'),
    isCard: true,
    disableAnimation: false,
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
      disableAnimation,
    } = this.props

    return (
      <View>
        {(this.props.loading === undefined) ? (
          <StyledImage
            source={typeof uri === 'string' ? {uri} : defaultSource}
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
        ) : (
            <View
              style={{
                width,
                height,
                borderWidth,
                borderColor,
                borderRadius: radius
              }}
              onLayout={this.onError}
            />
          )}
        {this.props.loading || this.state.loading ? (
          <View style={{ marginTop: -height }}>
            {disableAnimation ? (
              <View style={{ backgroundColor: Colors.very_light_pink_two, width, height, borderRadius: radius, borderColor, borderWidth }} />
            ) : (
                <Placeholder Animation={Shine}>
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
              )}
          </View>
        ) : null}
      </View>
    )
  }
}

export default PlaceholderImage