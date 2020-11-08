import React, {useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/navbar.css";
import {toast } from 'react-toastify';
import LoggedInContext from "../containers/LoggedInContext"

const NavBar = () => {
    const {setOpen, setIsLogin, isLoggedin, setIsLoggedin, setUpload} = useContext(LoggedInContext)

    const LoginHandleClick = () => {
        setOpen(true)
        setIsLogin(true)
    }

    const SignUpHandleClick = () => {
        setOpen(true)
        setIsLogin(false)
    }

    const LogOut = () => {
        localStorage.removeItem('token');
        setIsLoggedin(false);
        toast.success("You're logged out", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const handleUpload = () => {
        setOpen(true)
        setUpload(true)
    }
    return (
        <>
            <div className = 'NavDiv'>
                    <h1 className = "Title"><Link to='/'>Nextagram</Link></h1>
                    <div className="NavLink">
                        <Link className = "home-link" to='/'>Home</Link>
                        {isLoggedin ? 
                            <div className = "sub-link">
                               <Link to='/me'><span>My Profile</span></Link> 
                               <Link ><span onClick = {handleUpload}>Upload</span></Link>
                                <Link><span onClick = {LogOut}>Log out</span></Link>
                            </div> 
                            :
                            <div className = "sub-link">
                                <Link><span onClick = {LoginHandleClick}>Log In</span></Link>
                                <Link><span onClick = {SignUpHandleClick}>Sign Up</span></Link>
                            </div>  
                        }
                    </div>
            </div>

        </>
    )
}

export default NavBar;
