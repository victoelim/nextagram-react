import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const UserImg = styled.img`
    width: auto;
    height: 15rem;
    margin: 10px 10px;
`
const ImgCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  jutify-content: flex-start;
  align-content: flex-start;
`
const GetImage = ({id}) => {
    const [images, setImages] = useState([]);
    useEffect (() => {
        axios.get (`https://insta.nextacademy.com/api/v2/images?userId=${id}`)
        .then (function(response){
          setImages(response.data);
        //   console.log(response.data)
        })
      },[])


    return (

        <ImgCont>
            {images.map((image)=>{
                return (
                
                <UserImg src = {image.url} alt=''/>
            )})
        }
        </ImgCont>
    )
}

export default GetImage;