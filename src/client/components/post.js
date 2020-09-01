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

    addNewPost = () => {
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
            <div>
                <form id="postForm">
                    <FormGroup>
                        <Label for="postText">Create Post</Label>
                        <Input type="textarea" name="text" id="postText" placeholder="Say something tell the people what on your mind this is where you will make a post. " onChange={this.commentOnHandler} />
                    </FormGroup>
                    <Button outline color="success" onClick={this.addNewPost}>Comment</Button>
                </form>
                <hr />
                <div style={{ maxHeight: "600px", overflow: "auto" }}>
                    <ViewPosts userInfo={this.props.user} getPosts={this.getPosts} friendPosts={this.state.friendPosts} />
                </div>

            </div>
        )
    }
}
export default Post; 