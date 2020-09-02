import React from 'react';

const Navigation = props => {
  
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/PendingFriendRequests">Pending Friend Requests</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="/AddFriends">Add Friend</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ProfilePage">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href onClick={props.handleLogout} >Log Out</a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navigation;