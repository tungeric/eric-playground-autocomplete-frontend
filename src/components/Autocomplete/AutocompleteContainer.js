import React, { Component } from 'react'
import { withRouter } from 'react-router'

class AutocompleteContainer extends Component {

  render() {
    const { id, content } = this.props
    return (
      <div>
        {id}
        {content}
      </div>
    )
  }
}

export default withRouter(AutocompleteContainer)