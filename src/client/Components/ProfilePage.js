import React, {useState, useEffect, useCallback} from 'react';
import {Form, Col, Row, Button} from 'reactstrap';
import axios from 'axios';
import Navigation from './Navigation'


function ProfilePage(props) {


    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {


        axios({
            "method": "GET",
            "url": "http://localhost:5000/api/users/5f3ffa50c17709b8e44ce571"
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
        <Navigation/>
        <div  id="profileCon">>
            <Row>
                <Col><h1>{responseData.firstName}</h1></Col>
            </Row>
            <Row>
            <Col>
            <Form className="card">
            
                <ul id="dataList" >
                    <li>
                        <fr><fi>First Name:</fi> {responseData.firstName}</fr>
                    </li>
                    <li>
                        <fr><fi>Last Name:</fi> {responseData.lastName}</fr>
                    </li>
                    <li>
                        <fr><fi>Email:</fi> {responseData.email}</fr>
                    </li>
                </ul>
            </Form>
            <Button>Add More Info</Button>
            </Col>
            </Row>
        </div>
        </div>
       

    )
}

export default ProfilePage
