import React, { useState } from 'react';
import { Router, Route, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const jwtDecode = require('jwt-decode');

import './app.css';

import Landing from './components/Landing';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

//add custom routes
import PendingFriendRequests from './components/friendRequestStatus/FriendRequestStatus';

function App() {
  const cookieName = 'socialMedia';
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const history = useHistory();
  let userInfo = false;

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  //checks if cookie is found
  if(!isEmpty(cookies)){
    try {
      //jwtDecode just grabs the token. It does not validate the token.
      //userInfo will hold the user info in an object. If no jwt found, userInfo will hold the false value.
      userInfo = jwtDecode(cookies.socialMedia);
    } catch {
      //if token is not found, send user to landing page.
      history.push("/");
    }
  }

  const [user, setUser] = useState(userInfo);
  
  const handleLogin = e => {
    e.preventDefault();
    setUser(user);

    //if user is found, send to home component
    if(user){
      history.push("/home");
      window.location.reload(false);
    }
  }

  const handleLogout = e => {
    e.preventDefault();

    //if user logs out, set user to false and remove cookie
    setUser(false);
    window.location.reload(false);
    removeCookie(cookieName, { path: '/' });
  }
  
  return (
    <div className="app" >
          <Router history={history}>
        <Route exact path='/' handleLogin={handleLogin} render={props => <Landing {...props} user={user} handleLogin={handleLogin}  />} />
        <ProtectedRoute exact path='/home' user={user} component={Home} handleLogout={handleLogout}/>      
        <ProtectedRoute exact path='/PendingFriendRequests' user={user} component={PendingFriendRequests}/>      
      </Router>
    </div>
  );
}

export default App;
