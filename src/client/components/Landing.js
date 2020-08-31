import React from 'react';
import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm'


const Landing = props => {
  return (
    <div>
      <div>
      <h1>Landing</h1>
      </div>
      <div>
        <RegistrationForm/>
      </div>
      <div>
        <LoginForm/>
      </div>

      <button onClick={props.handleLogin}>This is a log in test button. Remember to set the cookie!</button>

    </div>
  )
};

export default Landing;
