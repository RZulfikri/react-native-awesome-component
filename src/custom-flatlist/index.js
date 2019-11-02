import React, { Component } from 'react';
import { FlatList, FlatListProps, View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
// import { CustomFlatListStyle } from '../Components/styled/custom-flatlist.styled'
import { getConnectionStatus } from '../connection-handler/connection-error-helper'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import * as Obj from '../method/object'
import * as GlobalConst from '../global-const'

const loadingData = [
  { id: 1, loading: true },
  { id: 2, loading: true },
  { id: 3, loading: true },
  { id: 4, loading: true },
  { id: 5, loading: true },
  { id: 6, loading: true },
  { id: 7, loading: true },
  { id: 8, loading: true },
  { id: 9, loading: true }
]

class CustomFlatList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    fetchFunction: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
    renderEmpty: PropTypes.func,
    renderNoConnection: PropTypes.func,
    renderError: PropTypes.func,
    meta: PropTypes.shape({
      current_page: PropTypes.number,
      next_page: PropTypes.number,
    }),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }

  static defaulProps = {
    data: [],
    renderItem: () => null,
    style: {},
    contentContainerStyle: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      flatListData: []
    }
    this.onRefresh = this.onRefresh.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
  }

  componentDidMount() {
    this.setState({ flatListData: loadingData },
      () => this.onRefresh())
  }

  componentWillReceiveProps(nextProps) {
    const { data, loading, meta } = nextProps
    let { flatListData } = this.state

    if (!loading && data && meta) {
      flatListData = data
    }

    if (loading && data.length === 0) {
      flatListData = loadingData
    }

    this.setState({ flatListData })
  }

  onRefresh() {
    const { fetchFunction } = this.props
    fetchFunction({ page: 1 })
  }

  onLoadMore() {
    const { fetchFunction, meta } = this.props
    if (meta && meta.next_page) {
      fetchFunction({ page: meta.next_page })
    }
  }

  render() {
    const { data, renderItem, error, loading,
      renderEmpty, renderNoConnection, renderError,
      style, contentContainerStyle, } = this.props
    const { flatListData } = this.state

    const isConnected = getConnectionStatus()
    if (!isConnected) {
      if (renderNoConnection) {
        return renderNoConnection({ onRefresh: this.onRefresh })
      } else {
        let GlobalNoConnection = GlobalConst.getValue().FLATLIST_NO_CONNECTION_CONTAINER
        GlobalNoConnection = Obj.appendPropsToView(GlobalNoConnection, 'onRefresh', this.onRefresh)
        return GlobalNoConnection
      }
    }

    if (!loading && data.length === 0 && error) {
      if (renderError) {
        return renderError({ onRefresh: this.onRefresh })
      } else {
        let GlobalErrorContainer = GlobalConst.getValue().FLATLIST_ERROR_CONTAINER
        GlobalErrorContainer = Obj.appendPropsToView(GlobalErrorContainer, 'onRefresh', this.onRefresh)
        return GlobalErrorContainer
      }
    }

    if (!loading && data.length === 0) {
      if (renderEmpty) {
        return renderEmpty({ onRefresh: this.onRefresh })
      } else {
        let GlobalEmptyContainer = GlobalConst.getValue().FLATLIST_EMPTY_CONTAINER
        GlobalEmptyContainer = Obj.appendPropsToView(GlobalEmptyContainer, 'onRefresh', this.onRefresh)
        return GlobalEmptyContainer
      }
    }

    return (
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={[style]}
        contentContainerStyle={[{ paddingBottom: getBottomSpace() }, contentContainerStyle]}
        onEndReached={this.onLoadMore}
        onRefresh={this.onRefresh}
        refreshing={loading}
      />
    )
  }
}

export default CustomFlatList