import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const jwtDecode = require('jwt-decode');

import './app.css';
<<<<<<< HEAD
import FriendRequestStatus from './FriendRequestStatus';


=======
import Landing from './components/Landing';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

//add custom routes
import PendingFriendRequests from './components/pendingFriendRequests/PendingFriendRequests';


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
>>>>>>> 989bb534e537842b28de7cf4751c916fe4c49391

  const [user, setUser] = useState(userInfo);
  
  const handleLogin = e => {
    e.preventDefault();
    setUser(user);

<<<<<<< HEAD

  render() {
    const { username } = this.state;
    const id = '5f444597da1a1a340c0ad137';
    return (
      <div>
        <FriendRequestStatus id={id}></FriendRequestStatus>
      </div>
    );
=======
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
>>>>>>> 989bb534e537842b28de7cf4751c916fe4c49391
  }
  
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path='/' handleLogin={handleLogin} render={props => <Landing {...props} user={user} handleLogin={handleLogin}  />} />
        <ProtectedRoute exact path='/home' user={user} component={Home} handleLogout={handleLogout}/>      
        <ProtectedRoute exact path='/PendingFriendRequests' user={user} component={PendingFriendRequests}/>      
      </Router>
    </div>
  );
}

export default App;