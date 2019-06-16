import React, { Component } from 'react'
import { withRouter } from 'react-router'

import AutocompleteContainer from '../Autocomplete/AutocompleteContainer';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: 5,
      searchTest: ''
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/greeting')
      .then(response => response.json())
      .then(data => this.setState(data, () => { console.log("DATA: ", data); }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <form>
          <input type="text" name="fname" />
          <input type="text" name="lname" />
          <input type="submit" value="Submit" />
        </form>
        <AutocompleteContainer data={data} />
      </div>
    )
  }
}

export default withRouter(Home)