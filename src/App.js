import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App