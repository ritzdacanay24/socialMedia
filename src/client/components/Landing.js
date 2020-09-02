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
    </div>
  )
};

export default Landing;
