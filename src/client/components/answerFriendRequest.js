import React, { Component } from 'react';
import axios from 'axios';
import {Form, FormGroup} from 'reactstrap'



export default class AnswerFriendRequest extends Component {
  constructor(props){
        super(props) 


    this.state = { 
    userId: null,
    firstName: null, 
    lastName: null,
    // friendRequestStatus: null,
    index: null,
    friendRequests: []
    };

    this.handleSubmit = this
    .handleSubmit
    .bind(this);

  }
    
  handleSubmit(event) {
    event.preventDefault();
    this.getFreindRequests();
 
}
  // handleChange(event) {
  //   this.setState({friendRequestStatus: event.target.value})
  // }


  getFreindRequests(){
    const apiEndPoint =`http://localhost:5000/api/friends/pendingRequests/${this.props.currentUserId}`
    
// "http://localhost:5000/api/users"
    axios({
      "method": "GET",
      "url": apiEndPoint
    })
    .then((response) => {
      let friendRequests = response.data;
      // console.log(friendRequests);
      this.setState({
        userId: friendRequests[0]._id,
        firstName:friendRequests[0].firstName,
        lastName: friendRequests[0].lastName,
        index: 0,
        friendRequests: response.data,
        friendRequestStatus: "Pending",
    })
  })
  .catch((error) => {
      console.log(error)
  })
  }
  componentDidMount = () => {
    this.getFreindRequests()
  }

requestAccepted(id) {
  
  this.setState({friendRequestStatus: "Confirmed"})
  axios({
    "method": "PUT",
    "url": `http://localhost:5000/api/friends/accept/${id}`
  })
  }

  reqestDeclined() {
    this.setState({friendRequestStatus: "Declined"})
    axios({
      "method": "DELETE",
      "url": `http://localhost:5000/api/friends/decline${id}`
    })
  }


  render() {
      return (
      this.state.friendRequests.map((request, index) => {
        return (
          <span class = "border"> 
        <Form> 
         <FormGroup>
          <h5>{request.firstName} {request.lastName} sent you a friend request!</h5>
          </FormGroup>
        <FormGroup>
        <h5>Would you like to Accept or Decline their request? </h5>
        </FormGroup>
        <FormGroup>
          <button onClick={() => this.requestAccepted(request._id)}>Accept</button>
          <button onClick={() => this.reqestDeclined(request._id)}>Decline</button>         
        </FormGroup>
      </Form>
      </span>
        )
    }))
  }
}
 