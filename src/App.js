import React, {useState} from 'react';
import './App.css';
import HomePage from './page/HomePage';
import UserProfile from '../src/page/UserProfile';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import Modal from "../src/components/Modal";
import MyProfile from './page/MyProfile';
import { ToastContainer} from 'react-toastify';
import LoggedInContext from "./containers/LoggedInContext";


function App() {
  const [isOpen, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('token'))
  const [upload, setUpload] = useState(false)
  return (
    <div className="main-div" >
      <LoggedInContext.Provider value = {{isOpen, setOpen, isLogin, setIsLogin, isLoggedin, setIsLoggedin, upload, setUpload}}>
      <NavBar />
      {isOpen ? <Modal /> : null}
      <Switch>
        <Route exact path="/" render={ () => <HomePage/> } />
        <Route path="/users/:id" component={UserProfile} />
        {isLoggedin? 
        <Route exact path="/me">
          <MyProfile />
        </Route> :
        <Redirect to = "/"/>
        }
      </Switch>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} estOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
