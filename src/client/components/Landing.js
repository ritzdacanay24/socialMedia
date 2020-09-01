import React from 'react';
import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm'


const Landing = props => {
  return (
    <div>
      <br/>
      <div>
        <LoginForm/>
      </div>
      <div>
        <RegistrationForm/>
      </div>
    </div>
  )
};

export default Landing;
