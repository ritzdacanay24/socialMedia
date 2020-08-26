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
            axios.get('localhost:5000/pendingRequests/87')
                .then(result => {
                    console.log(result)
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
