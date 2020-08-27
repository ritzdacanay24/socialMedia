import React from 'react'
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
            axios.get('http://localhost:5000/api/friends/pendingRequests/5f444597da1a1a340c0ad137')
                .then(result => {
                    console.log(...result.data[0].firstName)
                    //this.setState({ friendRequestStatus: 'confirmed' })
                })
                .catch(error => {
                    //this.setState({ friendRequestStatus: 'pending' })
                })
        })
    }
    componentDidMount(){
        this.getFriendRequestStatus()
    }

    render() {
        return (
            <div>takeii</div>
        )
    }
}
