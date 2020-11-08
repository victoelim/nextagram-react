import React, {useState, useContext} from 'react';
import axios from "axios";
import "./Upload.css";
import {toast } from 'react-toastify';
import LoggedInContext from "../containers/LoggedInContext";

const UploadPic = () => {
    const {setUpload, setOpen} = useContext(LoggedInContext)
    const [imageFile, setImageFile] = useState()
    const [previewImage, setPreviewImage] = useState(null)
    const [message, setMessage] = useState('')
    const handleSubmitImage = (e) => {
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
        setImageFile(e.target.files[0])
    }
    const handleUpload = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("image", imageFile)
        axios.post("https://insta.nextacademy.com/api/v1/images/", formData, {
            headers: { Authorization: "Bearer " + localStorage.getItem('token') }
            })
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                setMessage("Image Uploaded Successfully!")
                
                toast.success("Succesfully uploaded", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
        }
        })
        .catch(error => {
            console.log(error.response);
        });
        setPreviewImage(null)
        setImageFile(null)
        setUpload(false)
        setOpen(false)
    }
    return (
        <div className = "uploadContainer">
            <div className = "uploadPics">
                <input className = "UploadImageInput" type="file" onChange = {handleSubmitImage}/>
                <button onClick = {handleUpload}>Upload</button>
            </div>
            <div className="live-preview">
                {previewImage ? (
                    <img src={previewImage} width="40%" />
                    ) : (
                    <h3  className="text-center">
                    {message ? message : "Live Preview"}
                    </h3>
                    )}
            </div>
        </div>
    )
}

export default UploadPic;