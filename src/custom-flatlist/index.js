import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
// import { CustomFlatListStyle } from '../Components/styled/custom-flatlist.styled'
import { getConnectionStatus } from '../connection-handler/connection-error-helper'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import * as Styled from '../styled/share.styled'
import * as Obj from '../method/object'
import * as GlobalConst from '../global-const'
import _ from 'lodash'
import Colors from 'react-native-awesome-component/src/colors';

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
    placeholderCount: PropTypes.number,
  }

  static defaultProps = {
    data: [],
    renderItem: () => null,
    style: {},
    contentContainerStyle: {},
    placeholderCount: 9,
  }

  constructor(props) {
    super(props)

    const { placeholderCount } = props;

    const placeholderItems = [];

    for (let index = 0; index < placeholderCount; index++) {
      placeholderItems.push({ id: index + 1, loading: true });
    }

    this.state = {
      flatListData: [],
      loadingData: placeholderItems
    }
    this.onRefresh = this.onRefresh.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
  }

  componentDidMount() {
    const { loadingData } = this.state;

    this.setState({ flatListData: loadingData },
      () => this.onRefresh())
  }

  componentWillReceiveProps(nextProps) {
    const { data, loading, meta } = nextProps
    let { flatListData, loadingData } = this.state

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
      style, contentContainerStyle, meta } = this.props
    const { flatListData } = this.state
    let isLoadMore = false

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

    if (loading && meta && data.length > 0) {
      if (meta.current_page > 1) {
        isLoadMore = true
      }
    }

    const flatListProps = { ...this.props }
    // remove custom flatlist props, just put default flastlist props
    delete flatListProps.data
    delete flatListProps.fetchFunction
    delete flatListProps.renderItem
    delete flatListProps.renderEmpty
    delete flatListProps.renderNoConnection
    delete flatListProps.renderError
    delete flatListProps.meta
    delete flatListProps.style
    delete flatListProps.contentContainerStyle
    delete flatListProps.placeholderCount

    return (
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={[style]}
        contentContainerStyle={[{ paddingBottom: getBottomSpace() }, contentContainerStyle]}
        onEndReached={_.throttle(this.onLoadMore, 2000)}
        onRefresh={this.onRefresh}
        refreshing={loading}
        ListFooterComponent={() => {
          if (isLoadMore) {
            return (
              <Styled.Container>
                <ActivityIndicator color={Colors.warm_grey} />
              </Styled.Container>
            )
          } else {
            return null
          }
        }}
        {...flatListProps}
      />
    )
  }
}

export default CustomFlatList