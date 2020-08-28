import React, { Component } from 'react'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import Axios from "axios"
//import PostDetails from './commentDetails';
//import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "newPost": ""
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
            alert('Thanks for posting')
        }, function (err) {
            alert('Something went wrong.')
        })
    }

    //deletePost = () => {
    //   this.props.deletePost
    //}

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
            </div>
        )
    }
}
export default Post; 