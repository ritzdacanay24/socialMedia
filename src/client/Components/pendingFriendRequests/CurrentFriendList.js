import React from 'react';
import Navigation from '../Navigation'

const CurrentFriends = props => {
  return (
    <>
      <Navigation user={props.userInfo}/>
      <h1>FriendsList</h1>
    </>
  )
};

export default CurrentFriends;