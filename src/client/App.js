import React, { Component } from 'react';
import './app.css';
import FriendRequestStatus from './FriendRequestStatus';



export default class App extends Component {
  state = { username: null };


  render() {
    const { username } = this.state;
    const id = '5f444597da1a1a340c0ad137';
    return (
      <div>
        <FriendRequestStatus id={id}></FriendRequestStatus>
      </div>
    );
  }
}
