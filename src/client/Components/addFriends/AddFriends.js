import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../Navigation'
import Axios from 'axios';

class AddFriends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getCollections()
    }

    getCollections = () => {

        Axios.get(`http://localhost:5000/api/users`).then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })
        })
    }

    createFriendRequest = (user) => {
        Axios.post(`http://localhost:5000/api/friends/friendRequest/${this.props.userInfo._id}/${user._id}`).then(res => {
            alert('Friend request submitted')
        })
    }

    render() {
        return (
            <>
                <Navigation user={this.props.userInfo} />
                <Container className="themed-container">
                    <Row>
                        {
                            this.state.users.length && this.state.users.map((user, index) =>
                                <Col xs="6" sm="4" lg="4" style={{ padding: "15px", cursor: "pointer", color: "white", opacity: "0.8" }}>
                                    <div style={{ width: "350px", height: "250px", backgroundColor: "#580000", padding: "15px" }}>
                                        <img style={{ width: "100px", height: "100px" }} src={user.imageProfile} />
                                        <p>Name: {user.firstName}{user.lastName}</p>
                                        <p>Email: {user.email} </p>
                                        <button onClick={() => this.createFriendRequest(user)}>Submit friend request</button>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </>
        )
    }
}
export default AddFriends;


