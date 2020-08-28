import React from 'react';

const Navigation = props => {
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
            <a class="nav-link" href="/AddFriend">Add Friend</a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navigation;