import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import users from './users'

class EachUser extends Component {
  state = {
    picture: '',
    first: '',
    last: '',
    email: '',
    phone: '',
    city: '',
    state: ''
  }

  componentDidMount() {
  	this.setState({
      picture: users.find(user => user.id == this.props.match.params.id).picture.large,
      first: users.find(user => user.id == this.props.match.params.id).name.first,
      last: users.find(user => user.id == this.props.match.params.id).name.last,
      email: users.find(user => user.id == this.props.match.params.id).email,
      phone: users.find(user => user.id == this.props.match.params.id).phone,
      city: users.find(user => user.id == this.props.match.params.id).location.city,
      state: users.find(user => user.id == this.props.match.params.id).location.state
  	})
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.id !== this.props.match.params.id) {
      this.setState({
      picture: users.find(user => user.id == this.props.match.params.id).picture.large,
      first: users.find(user => user.id == this.props.match.params.id).name.first,
      last: users.find(user => user.id == this.props.match.params.id).name.last,
      email: users.find(user => user.id == this.props.match.params.id).email,
      phone: users.find(user => user.id == this.props.match.params.id).phone,
      city: users.find(user => user.id == this.props.match.params.id).location.city,
      state: users.find(user => user.id == this.props.match.params.id).location.state
    })
    }
  }

  render() {
    return (
      <div>
        <div class="image">
          <img src={this.state.picture} />
        </div>
        <p><span class="icon">&#9786;</span> {this.state.first} {this.state.last}</p>
        <p class="lower"><span class="icon">&#9993;</span> {this.state.email}</p>
        <p><span class="icon">&#9743;</span> {this.state.phone}</p>
        <p><span class="icon">&#9677;</span> {this.state.city}, {this.state.state}</p>
      </div>
    )
  }
}

export default EachUser
