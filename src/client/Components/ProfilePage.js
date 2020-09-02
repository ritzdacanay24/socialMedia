import React, { useState, useEffect, useCallback } from 'react';
import { Form, Col, Row, Button } from 'reactstrap';
import Axios from 'axios';
import Navigation from './Navigation'

function ProfilePage(props) {

    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {

<<<<<<< HEAD
        axios({"method": "GET", "url": "http://localhost:5000/api/users/5f3ffa50c17709b8e44ce571"}).then((response) => {
=======

        Axios({
            "method": "GET",
            "url": "http://localhost:5000/api/users/" + props.userInfo._id
        }).then((response) => {
>>>>>>> 02b8957de4f4d2b7ce02680400dfdd9a8466bb43
            setResponseData(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

<<<<<<< HEAD
    return (
        <div>
            <Navigation/>
            <div>
                <Row>
                    <Col>
                        <h1>{responseData.firstName}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-12 col-md-4 col-lg-4"></Col>
                    <Col className="col-sm-12 col-md-4 col-lg-4">
                        <Form className="card">

                            <ol id="dataList">
                                <li>
                                   
                                        First Name:
                                        {responseData.firstName}
                                </li>
                                <li>
                                        <fi>Last Name:</fi>
                                        {responseData.lastName}
                                </li>
                                <li>
                                        <fi>Email:</fi>
                                        {responseData.email}
                                </li>
                            </ol>
                        </Form>
                    </Col>
                    <Col className="col-sm-12 col-md-4 col-lg-4"></Col>
                    <Button>Add More Info</Button>
                </Row>
            </div>
        </div>
=======
    const rootImagePath = "src/client/components/images";
    const images = [
        `${rootImagePath}/chewy.png`,
        `${rootImagePath}/cp3.png`,
        `${rootImagePath}/r2d2.png`,
        `${rootImagePath}/darth.png`,
        `${rootImagePath}/jabba.png`,
        `${rootImagePath}/greedo.png`,
        `${rootImagePath}/emperor.png`,
        `${rootImagePath}/emperor1.png`,
        `${rootImagePath}/princess_amidala.png`
    ]

    const setProfileImage = (event) => {

        Axios.put('http://localhost:5000/api/users/updateImage', {
            "id": props.userInfo._id,
            "profileImage": event.target.value
        })
            .then(res => {
                setResponseData(res.data)

            }, function (err) {

                console.log(err)
            })

    }

    return (

        <div>
            <Navigation handleLogout={props.handleLogout}/>
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
                        <hr />
                        <p>Select Profile Image </p>
                        <select className="select-board-size" onChange={setProfileImage}>
                            {images.map(value => <option key={value} value={value}>{value}</option>)}
                        </select>
                        <br />
                        Note! Some images in this application may still display the previous image. Log out and log back in to ensure all images are up to date.

                    </div>
                </div>
            </div>
        </div>

>>>>>>> 02b8957de4f4d2b7ce02680400dfdd9a8466bb43

    )
}

export default ProfilePage
