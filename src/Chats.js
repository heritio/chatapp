
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import "./Chats.css";
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { collection,  onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';
import Chat from "./Chat"
function Chats() {
    const [ourPosts, setPosts] = useState([])
    
    useEffect(()=>{
        const colRef = collection(db,"posts"); 
        const q = query(colRef, orderBy("timestamp", "desc"));
        const posts = []
        onSnapshot(q, (snapshot)=>{
               
               snapshot.docs.forEach((doc)=> {
               posts.push({ ...doc.data(), id: doc.id});
               
            }) 
        })
       setPosts(posts);

        
        console.log(posts)

    },[])
  return (
    <div className="chats">
        <div className="chats__header">
            <Avatar className='chats__avatar' src=""/>
            <div className="chats__search">
                <SearchIcon/>
                <input type="text" placeholder='Friend' />
            </div>
            <ChatBubbleIcon className='chats__chatIcon'/>
        </div>

        <div className="chats__posts">
            
            { 
                ourPosts?.map((post) => {
                    <Chat
                     key={post.id}
                     ourPost={post}
                
                     
                    />
                

                    })
            }
        </div>
    </div>
  )
}

export default Chats