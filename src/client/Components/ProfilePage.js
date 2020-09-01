import React, {useState, useEffect, useCallback} from 'react';
import {Form, Col, Row, Button} from 'reactstrap';
import axios from 'axios';


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


    showData((event) => {
        console.log({responseData})
    })

    return (
        
        <div>
            <Row id="profileCon">
                <Col><h1>{responseData.firstName}</h1></Col>
                <Col>
            <Button onClick={showData()}>log data</Button>
            <Form>
                <ul>
                    <li>
                        {responseData.firstName}
                    </li>
                    <li>
                        {responseData.lastName}
                    </li>
                    <li>
                        {responseData.email}
                    </li>
                </ul>
            </Form>
            </Col>
            </Row>
        </div>
       

    )
}

export default ProfilePage
