import React,{useState, useEffect}  from 'react';
import axios from 'axios';
// import {Route, Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import styled from 'styled-components';
import GetImage from '../containers/GetImage';
// import UserProfile from './UserProfile';
import {Link} from 'react-router-dom';
import "../page/HomePage.css";



function HomePage () {
    const [users, updateUsers] = useState([]);
    useEffect (() => {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(function(response) {
      // console.log(response.data);
      updateUsers(response.data)
    })
  }, [])

  
  return (
    <>  
        <div className='user-bio'>
            {
            users.map((user) => {
                return (
                  <div className = "DivCont">
                    <div className = "ProfDiv">
                      <p>{user.username}</p>
                      <img className = "ProfImg" src = {user.profileImage} alt =''/>
                      <Link id = "see-more" to={`/users/${user.id}`}>See More</Link>
                    </div>
                    <div className = "UserGenImg">
                      <GetImage id={user.id} />
                    </div>
                  </div>
              
              )
              })
            } 
        </div>
        
    </>
  );
}

export default HomePage;