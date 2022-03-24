
import React from 'react'
import { Avatar } from '@mui/material'
import "./Chat.css"
function Chat({ourPost}) {
//   return(  alert("here"))
    console.log(ourPost)
    return (
        <div className='chat'>
           <Avatar className='chat__avatar' />
           <div className="chat__info">
               <h4>{ourPost.username}</h4>
               <p>Tap to view - {new Date(ourPost.timestamp?.toDate()).toUTCString()}</p>
           </div>
        </div>
    )
}

export default Chat;