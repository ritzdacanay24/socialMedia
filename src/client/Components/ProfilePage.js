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
            <Row id="profileCon">
                <Col><h1>{responseData.firstName}</h1></Col>
                <Col>
            <Button>log data</Button>
            <Form>
                <ul id="dataList">
                    <li>
                        First Name: {responseData.firstName}
                    </li>
                    <li>
                        Last Name: {responseData.lastName}
                    </li>
                    <li>
                        Email: {responseData.email}
                    </li>
                </ul>
            </Form>
            <Button>Add More Info</Button>
            </Col>
            </Row>
        </div>
       

    )
}

export default ProfilePage
