import React, { Component } from 'react';
import './app.css';
import FriendRequestStatus from './FriendRequestStatus';
import axios from 'axios';


export default class App extends Component {
  state = { username: null };


  render() {
    const { username } = this.state;
    return (
      <div>
        <FriendRequestStatus></FriendRequestStatus>
      </div>
    );
  }
}
