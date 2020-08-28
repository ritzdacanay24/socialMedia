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
        alert(this.state.newPost);
    
        Axios.post('http://localhost:5000/api/posts/', {
            "userId": "5f4445a98f96d95afad4fdc6",
            "comment": this.state.newPost
        
})
            .then(res => {
               
            
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
                <Container className="themed-container">
                    <Row style={{ padding: "20px" }}>
                        <Col md="16" md={{ size: 8, offset: 6 }}>
                            <form id="postForm">
                                <FormGroup>
                                    <Label for="exampleText">Create Post</Label>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Post" onChange={this.commentOnHandler} />
                                </FormGroup>
                                <Button outline color="success" onClick={this.addNewPost}>Comment</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Post; 