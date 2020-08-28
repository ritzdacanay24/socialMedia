import React from 'react';
import Navigation from './Navigation';

import Post from './post';

const Home = props => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 col-sm-12"><Navigation user={props.userInfo} /></div>
        </div>
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-lg-3">
            <div className="text-center">
              <img src='/src/client/assets/images/mandalorian.jpg' alt="John Doe" className="mr-3 mt-3 rounded-circle shadow-lg p-4 mb-4 bg-white rounded" style={{ width: "230px" }} />
            </div>
            <div>
              <div className="card text-center shadow p-3" style={{ width: "18rem", margin: "0 auto" }}>
                <img className="card-img-top" src="/src/client/assets/images/mandalorian.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Profile Info</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 shadow-lg p-4 mb-4">
              <div><Post user={props.userInfo}/></div>
              <br></br>
              <div> friend feed holder </div>
          </div>
          <div className="col-lg-3" style={{ padding: "50px" }}>
              <div>Top Friends holder</div>
              <div>Chat holder</div>
          </div>
        </div>
      </div>


      {/* <h1>Home</h1>
      <p>Welcome to our star wars social media App!</p>
      <p>Hello {props.userInfo.firstName} !</p>
      <button onClick={props.handleLogout}>Log Out</button> */}
    </>
  )
};

export default Home;