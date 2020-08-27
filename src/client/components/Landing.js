import React from 'react';

const Landing = props => {
  return (
    <div>
      <h1>Landing</h1>
      <button onClick={props.handleLogin}>Log In</button>
    </div>
  )
};

export default Landing;
