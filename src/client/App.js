import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Post from './components/post'




export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  

  render() {
    const { username } = this.state;
    return (
      <div>
        <Post addNewPost="hello"></Post>
      </div>
    );
  }
}
