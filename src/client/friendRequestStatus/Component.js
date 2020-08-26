import React from './node_modules/react'
import axios from 'axios';
export default class FriendRequestStatus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friendRequestStatus: 'pending'
        }
    }

    getFriendRequestStatus = async () => {
        this.setState({ friendRequestStatus: 'pending' }, () => {
            axios.get('/pendingRequests/87')
                .then(result => {
                    console.log(result)
                    //this.setState({ friendRequestStatus: 'confirmed' })
                })
                .catch(error => {
                    //this.setState({ friendRequestStatus: 'pending' })
                })
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}