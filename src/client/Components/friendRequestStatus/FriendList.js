import React, { Component } from 'react'
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Navigation from '../Navigation'

export default class FriendList extends Component {

    constructor(props) {
        super(props.userInfo._id)

        this.state = {
            friendRequestStatus: 'Confimed',
            firstName: 'null',
            confirmedFriends: []
        }
    }

    getFriendList = async () => {

        axios.get(`http://localhost:5000/api/friends/friends/${this.props.userInfo._id}`)
            .then(result => {
                console.log(result.data)
                //this.setState({ friendRequestStatus: 'confirmed' })
                this.setState({ confirmedFriends: result.data })
            })
            .catch(error => {
                console.log('error', error)
                //this.setState({ friendRequestStatus: 'pending' })
                this.setState({ firstName: 'no friends at this time' })
            })

    }
    componentDidMount() {
        this.getFriendList()
    }

    render() {
        return (
            <div>
                <Navigation user={this.props.userInfo} />
                { this.state.confirmedFriends || this.state.confirmedFriends.map((item) =>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>    <p>{item.requestedByInfo.firstName}</p></CardTitle>
                            <CardSubtitle><p>{item.requestedByInfo.lastName}</p></CardSubtitle>
                            <CardText><p>{item.requestedByInfo.email}</p></CardText>
                            <Button>Remove</Button>
                        </CardBody>
                    </Card>

                )
                }
            </div>
        )
    }
}
