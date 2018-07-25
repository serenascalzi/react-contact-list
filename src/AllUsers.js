import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers } from './users'

class AllUsers extends Component {
  state = {
  	users: []
  }

  componentDidMount() {
  	this.setState({
  		users: getAllUsers()
  	})
  }

  render() {
    return (
      <div>
        <h1>My Peeps</h1>
      	<ul>
      		{this.state.users.map(user => (
      			<li key={'userlist' + user.id}><img src={user.picture.thumbnail}/><Link to={`/users/${user.id}`}> {user.name.first} {user.name.last}</Link></li>
      		))}
      	</ul>
      </div>
    )
  }
}

export default AllUsers
