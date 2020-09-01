import React from 'react';
import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm'


const Landing = props => {

  const handleSuccessfulAuth = e => {
    e.preventDefault();
  }

  return (
    <div>
      <br/>
      <div>
        <LoginForm setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
      </div>
      <div>
        <RegistrationForm handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
      <button onClick={props.handleLogin}>This is a log in test button. Remember to set the cookie!</button>

    </div>
  )
};

export default Landing;
