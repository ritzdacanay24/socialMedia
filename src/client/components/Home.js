import React from 'react';

//import your custom protected components here

const Home = props => {
  console.log(props)
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our star wars social media App!</p>
      <p>Hello {props.userInfo.firstName} !</p>
      <button onClick={props.handleLogout}>Log Out</button>
    </div>
  )
};

export default Home;