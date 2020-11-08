import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Comments = ({id}) => {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [submitted, setSubmitted] = useState(false)

    useEffect(()=>{
        axios.get(`https://insta.nextacademy.com/api/v1/images/${id}/comments`, {
            headers: {
                Authorization: "Bearer " +  localStorage.getItem('token')
            }})
        .then((response)=>{
            console.log(response.data)
            setComments(response.data)
        })
    }, [submitted])

    const toggleCommentLike = (id) => {
        axios.post(`https://insta.nextacademy.com/api/v1/comments/${id}/toggle_like`, {}, {
            headers: {
                Authorization: "Bearer " +  localStorage.getItem('token')
            }})
        .then((response) => {
            console.log(response.data.liked)
            setComments(comments.map(comment => {
                if (comment.id === id){
                    return {...comment, liked: response.data.liked}
                }
            }))
        })
    }
    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://insta.nextacademy.com/api/v1/images/${id}/comments`, {
            "content": text
        }, 
        {
            headers: {
                Authorization: "Bearer " +  localStorage.getItem('token')
            }})
        .then((response) => {
            console.log(response.data)
            setText('')
            setSubmitted(false);
            
        })
        setSubmitted(true);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = "text" onChange = {handleText} value = {text} placeholder = "Comment"/>
                <input type = "submit" value = "Submit"/>
            </form>
            {comments.map((comment)=> {
                return (
                    <div className = "comment-section">
                        <p key = {comment.id}>{comment.content}</p>
                        {comment.liked? <button onClick = { () => toggleCommentLike(comment.id)}>Unlike</button> : <button onClick = {() => toggleCommentLike(comment.id)}>Like</button>}
                    </div>

                )
            })}
            
        </div>
        
    )
}

export default Comments;