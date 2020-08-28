import React from 'react';
import RegistrationForm from '../components/registrationForm'
import LoginForm from '../components/loginForm'


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
      
    </div>
  )
};

export default Landing;
