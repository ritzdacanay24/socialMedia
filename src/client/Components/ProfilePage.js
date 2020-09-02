import React, { useState, useEffect, useCallback } from 'react';
import { Form, Col, Row, Button } from 'reactstrap';
import axios from 'axios';
import Navigation from './Navigation'


function ProfilePage(props) {

    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {


        axios({
            "method": "GET",
            "url": "http://localhost:5000/api/users/" + props.userInfo._id
        }).then((response) => {
            setResponseData(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (

        <div>
            <Navigation />
            <h2 className="text-center text-white">Profile</h2>
            <div className="container dark-red1" style={{ marginTop: "50px" }}>
                
                <div className="row">
                    <div class="col-md-6 img">
                        <img src={responseData.profileImage} alt="" class="img-rounded" />
                    </div>
                    <div className="col-md-6 details">
                        <blockquote>
                            <h5>{responseData.firstName} {responseData.lastName}</h5>
                            <small><cite title="Source Title">Las Vegas, NV  <i className="icon-map-marker"></i></cite></small>
                        </blockquote>
                        <p>
                            Address goes here <br />
                                Github account here  <br />
                                    Created Account on {responseData.timeStamp}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ProfilePage
