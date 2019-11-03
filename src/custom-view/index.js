import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getConnectionStatus } from '../connection-handler/connection-error-helper'
import NoConnectionContainer from '../custom-flatlist/no-connection-container'
import ErrorContainer from '../custom-flatlist/error-container'

class CustomView extends PureComponent {
  static propTypes = {
    isError: PropTypes.bool,
    fetchRequest: PropTypes.func,
    renderMainContent: PropTypes.func.isRequired,
    renderErrorContent: PropTypes.func,
    renderNoInternetContent: PropTypes.func
  }

  static defaultProps = {
    isError: false
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {fetchRequest} = this.props
    if (fetchRequest) {
      fetchRequest()
    }
  }

  render() {
    const { isError, renderErrorContent, renderMainContent, renderNoInternetContent, fetchRequest } = this.props
    const isConnected = getConnectionStatus()

    if (!isConnected) {
      if (renderNoInternetContent) {
        return renderNoInternetContent({ onRefresh: fetchRequest })
      } else {
        return <NoConnectionContainer onRefresh={fetchRequest} />
      }
    }

    if (isError) {
      if (renderErrorContent) {
        return renderErrorContent({ onRefresh: fetchRequest })
      } else {
        return <ErrorContainer onRefresh={fetchRequest} />
      }
    }

    return renderMainContent()
  }
}

export default CustomView