import React, {useState, useEffect, useCallback} from 'react';
import {Form, Col, Row, Button} from 'reactstrap';
import axios from 'axios';
import Navigation from './Navigation'

function ProfilePage(props) {

    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {

        axios({"method": "GET", "url": "http://localhost:5000/api/users/5f3ffa50c17709b8e44ce571"}).then((response) => {
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
            <Navigation/>
            <div id="profileCon">
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

    )
}

export default ProfilePage
