import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import styled from 'styled-components';
import "./UserProfile.css";
import Comment from "../containers/Comments";
import Likes from "../containers/Likes";

const UserProfile = () => {
    let {id} = useParams()
    const [userCont, setUserCont] = useState([]);
    useEffect (() => {
        axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${id}`)
        .then (function(response){
            setUserCont(response.data);
            console.log(response.data);
        })
        
    },[])

    const [singUser, updateSingUser] = useState([]);
    useEffect (() => {
    axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
    .then(function(response) {
      // console.log(response.data);
      updateSingUser(response.data)
    })
  }, [])

  return (
    <div className = "UserImgCont">
        <div className= "UserProfDiv">
            <p>{singUser.username}</p>
            <img className= "UserProfImg" src = {singUser.profileImage} alt =''/>
        </div>
        <div className= "UserPicsDiv">
            {userCont.map((user, idx)=>{
                return (
                <div className = "user-content-card">
                    <div className = "ucc-img">
                        <img className = "UserImg" key = {idx} src = {user.url} alt=''/>
                    </div>
                    <div><Likes id = {user.id}/></div>
                    <div className = "ucc-comment">
                        <p><Comment id = {user.id}/></p>
                    </div>
                </div>
                
                )})
            }
        </div>
        
    </div>
  )
}

export default UserProfile;