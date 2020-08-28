import React from 'react';
import RegistrationForm from '../components/registrationForm'


const Landing = props => {
  return (
    <div>
      <h1>Landing</h1>
      <RegistrationForm/>
      <button onClick={props.handleLogin}>Log In</button>
    </div>
  )
};

export default Landing;
