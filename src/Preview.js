import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { resetCameraImage } from './features/cameraSlice';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid} from "uuid"
import { db, storage } from "./firebase";
import {serverTimestamp, collection, addDoc} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable, uploadString  } from "firebase/storage";
import "./Preview.css";
function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
     if(!cameraImage){
        history("/")
     }
  }, [cameraImage, history])

  const closePreview = () => {
     dispatch(resetCameraImage);
     history("/")
  };

  const sendPost = (file) => {
    
    const id = uuid();
    const storageRef = ref(storage, `posts/${id}` )
    const uploadTask = uploadBytesResumable(storageRef, file);
    const colRef = collection(db,"posts");

    uploadTask.on("state_changed",(snapshot)=>{
        
    },
     (err) => console.log(err),
     ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
        addDoc(colRef,
            {
                imageUrl: url,
                username: "OnkelKush",
                read:false,
                //profilePic
                timestamp: serverTimestamp()
            }
        )
        uploadString(storageRef, cameraImage, "data_url").then((snapshot) => {
            console.log("uploaded")
        })
          history("/chats")
    })
     }
    
    )

  };

  return (
    <div className='preview'>
        <CloseIcon onClick={closePreview} className="preview__close"/>
        <div className='preview__toolbarRight'>
           <TextFieldsIcon/>
           <CreateIcon/>
           <NoteIcon/>
           <MusicNoteIcon/>
           <AttachFileIcon />
           <CropIcon/>
           <TimerIcon/>
        </div>
        <img src={cameraImage} alt=""/>
        <div onClick={sendPost} className='preview__footer'>
            <h2>Send</h2>
            <SendIcon fontSize="small" className="preview__sendIcon"/>
        </div>
    </div>
  )
}

export default Preview