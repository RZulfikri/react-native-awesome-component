import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextProps } from 'react-native'
import {
  Placeholder,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder'
import * as GlobalConst from '../global-const'
import * as Scale from '../method/scale'
import * as Math from '../method/math'

class PlaceholderText extends Component {
  static propTypes = {
    ...TextProps
  }

  static defaultProps = {
    numberOfLines: 3
  }

  constructor(props) {
    super(props)
    this.getValueOfTextChildren = this.getValueOfTextChildren.bind(this)
    this.renderLinePlaceHolder = this.renderLinePlaceHolder.bind(this)
  }

  getValueOfTextChildren(children) {
    if (typeof children === 'string') {
      return children
    } else {

      if (Array.isArray(children)) {
        const value = children.map(i => {
          return this.getValueOfTextChildren(i)
        })
        return value.join('')
      }

      if (typeof children === 'object') {
        return this.getValueOfTextChildren(children.props.children)
      }
    }
  }

  renderLinePlaceHolder() {
    const { numberOfLines, style } = this.props
    let height = GlobalConst.getValue().FONT_SIZE
    if (style && style.fontSize) {
      height = style.fontSize
    }
    const placeholderlines = []
    for (i = 0; i < numberOfLines; i++) {
      placeholderlines.push(
        <PlaceholderLine
          key={i}
          height={height}
          noMargin
          style={{ marginTop: Scale.scale(height / 10), marginBottom: Scale.scale(height / 12) }}
          width={`${Math.getRandomInt(80, 100)}%`}
        />)
    }
    return (
      <Placeholder
        Animation={ShineOverlay}
      >
        {placeholderlines.map((e) => e)}
      </Placeholder>
    )
  }

  render() {
    const { numberOfLines, children, style } = this.props
    let childrenStringValue
    if (children !== undefined) {
      childrenStringValue = this.getValueOfTextChildren(children)
    }
    let textStyle = {
      fontSize: GlobalConst.getValue().fontSize,
      textAlignVertical: 'center',
    }
    if (style) {
      textStyle = {
        textStyle,
        ...style
      }
    }
    if (childrenStringValue !== undefined) {
      return (
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={numberOfLines}
          style={textStyle}
        >
          {children}
        </Text>
      )
    } else {
      console.tron.error('LINE PLACEHOLDER')
      delete textStyle.fontSize
      delete textStyle.textAlignVertical
      delete textStyle.color
      return (
        <View style={textStyle}>
          {this.renderLinePlaceHolder()}
        </View>
      )
    }
  }
}

export default PlaceholderText