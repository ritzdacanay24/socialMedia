import React, {useState, useEffect, useCallback} from 'react';
import {Form, Col, Row, Button} from 'reactstrap';
import Axios from 'axios';
import Navigation from './Navigation'
import autosize from 'autosize';


function ProfilePage(props) {
    
    const [aboutMe , updateAboutMe] = useState("");
    
    
    let [responseData,
        setResponseData] = useState('');
    const fetchData = useCallback(() => {

        Axios({
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

        Axios
            .put('http://localhost:5000/api/users/updateImage', {
                "id": props.userInfo._id,
                "profileImage": event.target.value
            })
            .then(res => {
                setResponseData(res.data)

            }, function (err) {

                console.log(err)
            })

    }

    //damon workingon

    // const setAboutMe = (event) => {
    //     Axios
    //         .post('http://localhost:5000/api/users/aboutMe', {"aboutMe": event.target.value})
    //         .then(res => {
    //             setResponseData(res.data.aboutMe)
    //         }, function (err) {
    //             console.log(err)
    //         })
    // }
    
    // const [aboutMe , setAboutMe] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        const {aboutMe} = responseData(aboutMe)

        Axios.put(`http://localhost:5000/api/users/aboutMe`,
            {
                "id": props.userInfo._id,
                "aboutMe": event.target.value 
                    
            }

        ) 
        .then(response => {
            alert('Profile Updated')
            if (response.data.aboutMe === success ) {
                updateAboutMe(res.data.aboutMe)
                return {aboutMe}
              }
        })
        .catch(error =>{
            console.log(error);

        });

    }

    const style = {
        maxHeight:'75px',
        minHeight:'40pxpx',
          resize:'none',
          padding:'9px',
          boxSizing:'border-box',
          fontSize:'15px'
        };
    


    return (

        <div>
            <Navigation handleLogout={props.handleLogout}/>
            <h2 className="text-center text-white">Profile</h2>
            <div
                className="container dark-red1"
                style={{
                marginTop: "50px"
            }}>

                <div className="row">
                    <div class="col-md-6 img">
                        <img src={responseData.profileImage} alt="" class="img-rounded"/>
                    </div>
                    <div>

                        <form classname="textArea" onSubmit={handleSubmit}>
                            <label>
                                About Me
                                <input textarea={style}type="text" value={useState} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>

                    </div>
                    <div className="col-md-6 details">
                        <blockquote>
                            <h5>{responseData.firstName} {responseData.lastName}</h5>
                            <small>
                                <cite title="Source Title">Las Vegas, NV
                                    <i className="icon-map-marker"></i>
                                </cite>
                            </small>
                        </blockquote>
                        <p>
                            Address goes here.
                            <br/>
                            Github account here.
                            <br/>
                            Created Account on {responseData.timeStamp}
                        </p>

                        <hr/>
                        <p>Select Profile Image
                        </p>
                        <select className="select-board-size" onChange={setProfileImage}>
                            {images.map(value => <option key={value} value={value}>{value}</option>)}
                        </select>
                        <br/>
                        Note! Some images in this application may still display the previous image. Log
                        out and log back in to ensure all images are up to date.

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfilePage
