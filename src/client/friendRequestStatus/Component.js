import React from 'react'
import axios from 'axios';
export default class FriendRequestStatus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friendRequestStatus: 'pending',
            firstName: 'null'
        }
    }

    getFriendRequestStatus = async () => {
        this.setState({ friendRequestStatus: 'pending' }, () => {
            axios.get(`http://localhost:5000/api/friends/pendingRequests/${this.props.id}`)
                .then(result => {
                    console.log(...result.data[0].firstName)
                    //this.setState({ friendRequestStatus: 'confirmed' })
                    this.setState({ firstName: result.data[0].firstName })
                })
                .catch(error => {
                    //this.setState({ friendRequestStatus: 'pending' })
                    this.setState({ firstName: 'no first name found'})
                })
        })
    }
    componentDidMount(){
        this.getFriendRequestStatus()
    }

    render() {
        return (
            <div>{this.state.firstName}</div>
        )
    }
}
