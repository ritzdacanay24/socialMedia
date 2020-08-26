import React, { Component } from 'react';
import './app.css';
import FriendRequestStatus from './FriendRequestStatus';
import axios from 'axios';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    axios.get('http://localhost:5000/api/friends/pendingRequests/5f444597da1a1a340c0ad137')
    .then(result => {
        console.log(result)
        //this.setState({ friendRequestStatus: 'confirmed' })
    })
    .catch(error => {
        //this.setState({ friendRequestStatus: 'pending' })
    })
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {/* <FriendRequestStatus></FriendRequestStatus> */}
      </div>
    );
  }
}
