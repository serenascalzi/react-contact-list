import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import AllUsers from './AllUsers'
import EachUser from './EachUser'

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
	      	<Switch>
	      		<Route exact path="/" component={AllUsers} />
	      		<Route path="/users/:id" component={EachUser} />
	      	</Switch>
	      </div>
      </Router>
    )
  }
}

export default App
