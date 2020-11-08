import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import "./LoginForm.css";
import {toast } from 'react-toastify';

const LoginForm = ({setOpen, setIsLogin, setIsLoggedin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        if (username !== '' && password !== '') {
        axios.post (`https://insta.nextacademy.com/api/v1/login`, {
            username ,
            password,
        })
        .then(response => {
            localStorage.setItem('token', response.data.auth_token)
            console.log (response.data.auth_token)
            setIsLoggedin(true);
            toast.success("You're logged in", {
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
            toast.warn("You're not in our database, sign up to use Nextagram 😉", {
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
          toast.warn('Seems like you entered some invalid information, please check!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
        setOpen(false)
        
      };

    return (
        <>      
          <div className="LoginDiv">
                    <h3>LOGIN</h3>
                    <form className = "LoginDivForm" onSubmit = {(e) => handleSubmit(e)}>
                        <lable for="username">Username:</lable>
                        <input type='text' id='username' onChange = {(e) => setUsername(e.target.value)} value = {username}/>

                        <lable for="password">Password:</lable>
                        <input type='text' id='password' onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                        <input type='submit' value='Log in'/>
                    </form>
                    <p>Not a user yet? <span onClick = {() => setIsLogin(false)}>Sign Up!</span></p>
            </div>

        </>
    )
}





export default LoginForm;