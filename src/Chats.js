
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import "./Chats.css";
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { collection,  onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';
import Chat from "./Chat"
function Chats() {
    const [ourPosts, setPosts] = useState([]);

    

    window.addEventListener('load', async() => {
        // setInterval(() => {

      await  Fetchdata(); 
    // }, 2000);
      });
    // Fetch the required data using the get() method
   const Fetchdata = ()=>{ 
        const q = query(collection(db, 'posts'))
        onSnapshot(q, (querySnapshot) => {
        const posts = []
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, data: doc.data() })
        })

        setPosts(posts)
        })
        // const colRef = await collection(db,"posts"); 
        // const q =await query(colRef, orderBy("timestamp", "desc"));

        // onSnapshot(q, (snapshot)=>{
               
        //        snapshot.docs.forEach((doc)=> {
        //        posts.push({ ...doc.data(), id: doc.id});
               
        //     }) 
        // })
    //    setPosts(posts);
      
    }
    console.log(ourPosts)
    
    // console.log(ourPosts)
    // var posts = []
    // useEffect(()=>{
    //     // setTimeout(() => {
        

        
    //     console.log(posts)
        
    // // }, 10000);

    // },[])
    // var postData = [];
    // setTimeout(() => { 
    //      postData = (posts.length !== 0 ? true : false);
    //     console.log(postData)
    // }, 2000);
   
    

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
       
            {/* {ourPosts.map((data=>({data.username}))} */}
  
        
            { 
            

           ourPosts.map((post) =>


           

                    
             <>

              <div className='chat'>
              <Avatar className='chat__avatar' />
              <div className="chat__info">
              <h4>{post.data.username}</h4>
              <p>Tap to view - {new Date(post.data.timestamp?.toDate()).toUTCString()}</p>
              </div>
              </div>
              </>
              )
      
            }
        </div>
    </div>
  )
}

export default Chats