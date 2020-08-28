import React, { Component } from 'react';
import './app.css';
<<<<<<< HEAD
<<<<<<< Updated upstream
import FriendRequestStatus from './components/friendRequestStatus';
import RegistrationForm from './components/registration';
=======
import FriendRequestStatus from './FriendRequestStatus';
import RegistrationForm from './registration';
>>>>>>> Stashed changes


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
>>>>>>> 982b1cb06ce04b3a91c5825ed797659139792d5c

export default class App extends Component {
  state = { username: null };


  render() {
    const { username } = this.state;
    const id = '5f444597da1a1a340c0ad137';
    return (
      <div>
        <FriendRequestStatus id={id}></FriendRequestStatus>
        <RegistrationForm/>
      </div>
    );
  }
}
