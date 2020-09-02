import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import Axios from "axios"
import ViewPosts from '../components/viewPosts/ViewPosts'
//import PostDetails from './commentDetails';
//import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "newPost": "",
            friendPosts: []
        }
    }

    commentOnHandler = (e) => {
        this.setState({
            "newPost": e.target.value
        })
    }

    addNewPost = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/posts/', {
            "userId": this.props.user._id,
            "comment": this.state.newPost
        }).then(res => {
            this.getPosts()
        }, function (err) {
            alert('Something went wrong.')
        })
    }

    getPosts = () => {
        Axios.get('http://localhost:5000/api/posts/viewFriendPosts/' + this.props.user._id).then(res => {
            this.setState({ friendPosts: res.data });
        }, function (err) {
            alert('Something went wrong.')
        })
    }

    render() {
        return (
            <div className="post shadow">
                <form id="postForm">
                    <FormGroup>
                        <Label for="postText">Create Post</Label>
                        <Input rows="7" type="textarea" name="text" id="postText" placeholder="Say something..Tell the people what is on your mind.." onChange={this.commentOnHandler} />
                    </FormGroup>
                    <button className="btn-danger btn" onClick={this.addNewPost}>Submit Post!</button>
                </form>
                <div className="hr-fade"></div>
                <div style={{ maxHeight: "600px", overflow: "auto" }}>
                    <ViewPosts userInfo={this.props.user} getPosts={this.getPosts} friendPosts={this.state.friendPosts} />
                </div>

            </div>
        )
    }
}
export default Post; 