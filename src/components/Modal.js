import React, {useContext} from 'react';
import styled from 'styled-components';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpFrom';
import "./Modal.css";
import UploadPic from '../containers/Upload';
import LoggedInContext from "../containers/LoggedInContext"



const Modal = () => {
    const {setOpen, isLogin, setIsLogin, setIsLoggedin, setUpload, upload} = useContext(LoggedInContext)

    return (
        <div className = "ModalDiv">
            <div className = "ModalNav">
                <h4 onClick={() => setOpen(false)}>Close</h4>
            </div>

            <div className = "ModalFormCont">
                {upload ? <UploadPic setUpload = {setUpload} setOpen = {setOpen}/> : isLogin ? <LoginForm setOpen = {setOpen} setIsLogin = {setIsLogin} setIsLoggedin = {setIsLoggedin}/> : <SignUpForm setOpen = {setOpen} setIsLogin = {setIsLogin} setIsLoggedin = {setIsLoggedin}/>}
            </div>

        </div>
    )
}



export default Modal;