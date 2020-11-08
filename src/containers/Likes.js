import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Likes.css";

const Likes = ({id}) => {
    const [Likes, setLikes] = useState([]);
    const [Liked, toggleLiked] = useState();
    const [LikesNum, setLikesNum] = useState(0);
    useEffect(()=> {
        axios.get(`https://insta.nextacademy.com/api/v2/images/${id}`, {
            headers: {
                Authorization: "Bearer " +  localStorage.getItem('token')
            }})
        .then ((response) => {
            console.log(response.data.likes);
            setLikes(response.data.likes)
            toggleLiked(response.data.liked)
            setLikesNum(response.data.likes.length)
        })
    },[])
    

    const toggleLike = () => {
            axios.post(`https://insta.nextacademy.com/api/v1/images/${id}/toggle_like`, {}, {
                headers: {
                    Authorization: "Bearer " +  localStorage.getItem('token')
                }})
            .then ((response) => {
                console.log(response.data);
                toggleLiked(response.data.liked)
                setLikesNum(Liked ? LikesNum - 1 : LikesNum + 1 )
            })
    }


    return (
        <div className = "like-mang">
            <div className = "like-section">
                <p>Like: {LikesNum}</p>
                {Liked? <button onClick = {toggleLike}>Unlike</button> : <button onClick = {toggleLike}>Like</button>}
            </div>
            <div>
                {Likes.map((like) => {
                    return (
                        <>  
                        
                            <img className = "like-people" src = {like.profileImage}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Likes;