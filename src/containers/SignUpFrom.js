import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "./SignUpForm.css";
import {toast } from 'react-toastify';


const SignUpForm = ({setOpen, setIsLogin, setIsLoggedin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        if (email !== '' && password !== '' && username !== '' && (password === confirmPassword)) {
        axios.post (`https://insta.nextacademy.com/api/v1/users/`, {
            username ,
            email,
            password,
        })
        .then(response => {
            localStorage.setItem('token', response.data.auth_token)
            console.log (response.data.auth_token)
            setIsLoggedin(true)
            toast.success("You're signed up", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
          .catch(error => {
            console.error(error.response) // so that we know what went wrong if the request failed
            toast.warn('Seems like you entered some invalid information, please check!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          })
        }
        else {
            console.log ('error')
        }
        setOpen(false)
        
      };

    return (
        <>
        <div className = "SignUpDiv">
          <h3>SIGN UP</h3>
          <form className = "SignUpDivForm" onSubmit = {(e) => handleSubmit(e)}>
              <lable for="username">Username:</lable>
              <input type='text' id='username' onChange = {(e) => setUsername(e.target.value)} value = {username}/>

              <lable for="email">Email:</lable>
              <input type='text' id='email' onChange = {(e) => setEmail(e.target.value)} value = {email}/>

              <lable for="password">Password:</lable>
              <input type='text' id='password' onChange = {(e) => setPassword(e.target.value)} value = {password}/>

              <lable for="confirmPassword">Confirm Password:</lable>
              <input type='text' id='confirmPassword' onChange = {(e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
              <input type='submit' value='Sign Up'/>
          </form>

        <p>Already a user? <span onClick = {() => setIsLogin(true)}>Log in!</span></p>
        </div>
        </>
    )
}





export default SignUpForm;