import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import "./MyProfile.css";
import Comment from "../containers/Comments";
import Likes from "../containers/Likes";

const MyProfile = () => {
    const [myProfile, setMyProfile] = useState([])
    useEffect (
        () => {
            axios.get ('https://insta.nextacademy.com/api/v1/users/me', {
                headers: {
                    Authorization: "Bearer " +  localStorage.getItem('token')
                }
            })
            .then((response) => {
                console.log(response)
                setMyProfile(response.data)
            })
        }
, []);
    
    const [myProfileCont, setMyProfileCont] = useState([])
    useEffect(() => {
        axios.get ('https://insta.nextacademy.com/api/v1/images/me', {
            headers: {
                Authorization: "Bearer " +  localStorage.getItem('token')
            }
        }) 
        .then((resp) => {
            console.log(resp)
            setMyProfileCont(resp.data)
        })

    },[]);

    return (
        <div className = "MyProfImgCont">
            <div className = "MyProfDiv">
                < p className = "MyProfileName">{myProfile.username}</ p>
                <img className = "MyProfImg" src = {myProfile.profile_picture} alt =''/>
            </div>
            <div className = "MyProfPicsDiv">
                {myProfileCont.map((myProfileCont, idx)=>{
                    return (
                    <div className ="myprof-content-card">
                        <div className ="myprof-img">
                            <img className = "MyUserImg" key = {idx} src = {myProfileCont} alt=''/>
                        </div>
                        <div><Likes id = {myProfileCont.id} /></div>
                        <div className = "myprof-comment">
                            <p><Comment id = {myProfileCont.id}/></p>
                        </div>
                    </div>
                )})
                }
            </div>
        
        </div>
    )

}

export default MyProfile;