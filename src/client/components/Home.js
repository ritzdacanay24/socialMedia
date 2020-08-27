import React from 'react';
import Navigation from './Navigation'

const Home = props => {
  return (
    <>
      <Navigation user={props.userInfo}/>
      <h1>Home</h1>
      <p>Welcome to our star wars social media App!</p>
      <p>Hello {props.userInfo.firstName} !</p>
      <button onClick={props.handleLogout}>Log Out</button>
    </>
  )
};

export default Home;