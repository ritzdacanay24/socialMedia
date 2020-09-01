import React from 'react';

const Navigation = props => {
  
  console.log(props)
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/Home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/PendingFriendRequests">Pending Friend Requests</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="/FriendRequestsStatus">Friend List</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="/AddFriend">Add Friend</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ProfilePage">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href onClick={props.handleLogout} >Log Out</a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navigation;