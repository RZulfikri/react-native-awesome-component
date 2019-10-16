import React, { Component } from 'react';
import { FlatList, FlatListProps, View } from 'react-native'
import PropTypes from 'prop-types'
// import { CustomFlatListStyle } from '../Components/styled/custom-flatlist.styled'
import { getConnectionStatus } from '../connection-handler'
import { getBottomSpace } from 'react-native-iphone-x-helper';

class CustomFlatList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    fetchFunction: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    renderEmpty: PropTypes.func,
    renderNoConnection: PropTypes.func,
    renderError: PropTypes.func,
    renderLoading: PropTypes.func,
    meta: PropTypes.shape({
      current_page: PropTypes.number,
      next_page: PropTypes.number,
    })
  }

  static defaulProps = {
    data: [],
    renderItem: () => null,
  }

  constructor(props) {
    super(props)

    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
    this.onRefresh()
  }

  onRefresh() {
    const { fetchFunction } = this.props
    fetchFunction({ page: 1 })
  }

  render() {
    const { data, renderItem, loading } = this.props
    const loadingData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
    const flatlistData = loading ? data.concat(loadingData) : data
    return (
      <FlatList
        data={flatlistData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={[{ paddingBottom: getBottomSpace() }]}
      />
    )
  }
}

export default CustomFlatList