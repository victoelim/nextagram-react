import React from 'react';
import GetImage from '../containers/GetImage';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import {Route, Link} from 'react-router-dom';
import UserProfile from '../page/UserProfile';


const MakeUsers = ({users}) => {
    const DivCont = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center
    border-bottom: 1px solid lightgray;
    background-color: #efefef;
    margin: 0px;
    border-bottom: 1px solid lightgray;
    `
    const ProfDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 30px;
    font-weight: bolder;
    color:#3DA8F7;
    margin: 20px 20px;
    font-size: 2rem;
    `
    const ProfImg = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin-bottom: 20px;
    `
    const UserGenImg = styled.div`
    margin-bottom: 20px;
    `
    const SeeMore = styled.button`
    border: 1px solid black;
    `


    return (
    <DivCont>
        <ProfDiv>
            <p>{users.username}</p>
            <ProfImg src = {users.profileImage} alt =''/>
            <SeeMore><Link to="/users/3">See More</Link></SeeMore>{' '}
            {/* <Route path="/users/:id">
                <UserProfile />
            </Route> */}
        </ProfDiv>
        <UserGenImg>
            <GetImage id={users.id} />
        </UserGenImg>
    </DivCont>
    )
}

export default MakeUsers;