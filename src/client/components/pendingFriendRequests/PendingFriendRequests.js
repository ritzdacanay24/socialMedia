import React from 'react';
import Navigation from '../Navigation'

const PendingFriendRequests = props => {
  return (
    <>
      <Navigation user={props.userInfo}/>
      <h1>Pending Friend Requests test</h1>
    </>
  )
};

export default PendingFriendRequests;