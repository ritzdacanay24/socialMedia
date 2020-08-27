
// import React, { useState } from 'react';
// import './app.css';
// import './friends.json';
// import axios from 'axios'



// const getFriendRequest = (props) => {
//     const apiEndPoint ='http://localhost:5000/api/friends/pendingRequests/5f44556094f2ab3c0cfa5b52';
//         axios({
//           "method": "GET",
//           "url": apiEndPoint
//         })
//     .then((res) => {
//         console.log('res', res);
//     const freindRequests = useState();
//      friendRequests = res.data;
    
//     if (friendRequests === true){

//         return 
//          this.friendRequests.map(requests, index) => {
//             let firstName = requests.firstName
//             let  lastName = requests.lastName
//          }
//         }
//     })
//     .catch((err) => {
//             console.log(`you have no friend requests,${err}`);
//     });

//             return (
//                 <div>
//                 <div>
//                     <h5>{firstName, lastName} sent you a friend request!</h5>
//                 </div>
//                 <div>
//                   <h5>Would you like to Accept or Decline their request? </h5>
//                 </div>
//                 <div>
//                     <button onClick={() => this.setState({friendRequestStatus: Accepted})}>Accept</button>
//                     <button onClick={() => this.setState({friendRequestStatus: Declined})}>Decline</button>         
//                 </div>
//               </div>
//             )
// }


// export default getFriendRequest

