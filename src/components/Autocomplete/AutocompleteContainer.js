import React, { Component } from 'react'
import { withRouter } from 'react-router'

class AutocompleteContainer extends Component {

  render() {
    const { data } = this.props
    console.log("THE DATA: ", data);
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default withRouter(AutocompleteContainer)