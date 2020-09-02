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
        55555
        <div  id="profileCon">
            <Row>
                <Col><h1>{responseData.firstName}</h1></Col>
            </Row>
            <Row>
            <Col>
            <Form className="card">
            
                <ul id="dataList" >
                    <li>
                        <fr>First: {responseData.firstName}</fr>
                    </li>
                    <li>
                        <fr>Last Name:as {responseData.lastName}</fr>
                    </li>
                    <li>
                        <fr>Email: {responseData.email}</fr>
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
