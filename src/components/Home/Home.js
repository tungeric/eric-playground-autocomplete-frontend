import React, { Component } from 'react'
import { withRouter } from 'react-router'

import AutocompleteContainer from '../Autocomplete/AutocompleteContainer';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      searchText: ''
    }
  }
  componentDidMount() {
    this.runSearch();
  }

  runSearch(name) {
    const url = `http://localhost:8080/greeting?name=${name}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  handleTextUpdate = (e) => {
    this.runSearch(e.target.value);
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    const { id, content, searchText } = this.state;
    return (
      <div>
        <form>
          <input type="text" name="fname" onChange={this.handleTextUpdate}/>
          <input type="submit" value="Submit" />
        </form>
        <AutocompleteContainer id={id} content={content} />
      </div>
    )
  }
}

export default withRouter(Home)