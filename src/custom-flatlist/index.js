import React, { Component } from 'react';
import { FlatList, FlatListProps } from 'react-native'
import PropTypes from 'prop-types'
import { CustomFlatListStyle } from '../Components/styled/custom-flatlist.styled'

/**
 * dependencies
 * - prop-types
 * - styled-components
 */

class CustomFlatList extends Component {
  static propTypes = {
    ...FlatListProps
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={CustomFlatListStyle.containerContainer}
      />
    )
  }
}

export default CustomFlatList