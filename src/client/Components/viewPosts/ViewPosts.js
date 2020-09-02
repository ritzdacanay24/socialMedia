import React, { Component } from 'react';
import Axios from 'axios';
import { Media, Card, CardBody } from 'reactstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import DeletePost from '../Delete'

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
    this.props.getPosts();
  }

  onDelete = (id) => {
    Axios.delete('http://localhost:5000/api/posts/' + id).then(res => {
      this.getPosts()
    }, function (err) {
      alert('Something went wrong.')
    })
  }

  likeDislikeOnHandler = (action, post) => {
    
    if(action == 'like') post.likes++;
    if(action == 'dislike') post.dislikes++;
    console.log(post)

    Axios.put('http://localhost:5000/api/posts/likeDislike', {
        "dislikes": post.dislikes,
        "likes": post.likes,
        "id": post._id
    })
        .then(res => {
            this.getPosts()

        }, function (err) {

            console.log(err)
        })
}

  setPosts = () => {
    if(!this.props.friendPosts.length){
      return "No Posts"
    }
    return this.props.friendPosts.length && this.props.friendPosts.map((post, index) =>
      <Card key={index} className="text-dark margin-bottom-10">
        <CardBody>
          <Media>
            <Media left top href="#">
              <Media className="light-shadow" object src={post.profileImage} alt="test" style={{ maxWidth: "80px",maxHeight: "80px", borderRadius: "100px", overflow: "hidden" }} />
            </Media>
            <Media body>
              <Media>
                <div style={{ textAlign: "left", marginLeft: "50px" }}>
                  <b>{post.firstName} {post.lastName}</b> <small> {post.createdDate}</small>
                  <h4 style={{ fontWeight: "500" }}>{post.comment}</h4>
                </div>
              </Media>
              <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <span className="pointer" onClick={() => this.likeDislikeOnHandler('like', post)}> <FaThumbsUp /> {post.likes} </span> {' '}
                <span className="pointer"  onClick={() => this.likeDislikeOnHandler('dislike', post)} style={{ marginLeft: "10px" }}> <FaThumbsDown /> {post.dislikes} </span>
                <br /><br />
                {this.props.userInfo._id == post.id && <DeletePost onDelete={this.onDelete} id={post._id}> Delete Post </DeletePost>}
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
        <h4>Posts from friends <span className="float-right">Total Posts { this.props.friendPosts.length } </span> </h4>
        {
          this.setPosts()
        }
      </div>
    )
  }
}
export default ViewPosts; 