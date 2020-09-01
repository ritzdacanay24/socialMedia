import React, { Component } from 'react';
import Axios from 'axios';
import { Media, Card, CardBody } from 'reactstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

class ViewPosts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      "friendPosts": []
    }
  }

  componentDidMount = (e) => {
    this.getPosts()
  }

  getPosts = () => {
    Axios.get('http://localhost:5000/api/posts/viewFriendPosts/' + this.props.userInfo._id).then(res => {
      this.setState({ friendPosts: res.data })
    }, function (err) {
      alert('Something went wrong.')
    })
  }

  setPosts = () => {
    return this.state.friendPosts && this.state.friendPosts.map((post, index) =>
      <Card key={index}>
        <CardBody>
          <Media>
            <Media left top href="#">
              <Media object src="src/client/assets/images/default.jpg" alt="test" style={{ width: "40px", borderRadius: "100px" }} />
            </Media>
            <Media body>
              <Media>
                <div style={{ textAlign: "left", marginLeft: "30px" }}>
                  <b>{post.firstName} {post.lastName}</b> <small> 35 mins ago</small>
                  <p style={{ fontWeight: "500" }}>{post.comment}</p>
                </div>
              </Media>
              <div style={{ textAlign: "left", marginLeft: "30px" }}>
                <span onClick={() => this.props.likeOnHandler(post)}> <FaThumbsUp /> {post.likes} </span> {' '}
                <span onClick={() => this.props.dislikeOnHandler(post)} style={{ marginLeft: "10px" }}> <FaThumbsDown /> {post.dislikes} </span>
                <br /><br />
                <button class="btn btn-danger"> Delete Post </button>
              </div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    )
  }

  render() {
    return (
      <div>
        <h4>Posts from friends</h4>
        {
          this.setPosts()
        }
      </div>
    )
  }
}
export default ViewPosts; 