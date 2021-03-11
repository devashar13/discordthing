import React, { useEffect, useState } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './Chat.css'
import Messages from '../Messages/Messages';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import db from '../firebase';
import firebase from 'firebase'
function Chat() {
    const user=useSelector(selectUser);
    const channelId=useSelector(selectChannelId);
    const channelName=useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages,setMessages]=useState([]);
    useEffect(()=>{
        if(channelId){
            db.collection('channels').doc(channelId).collection("messages")
        .orderBy('timestanp','desc').onSnapshot((snapShot)=>
            setMessages(snapShot.docs.map((doc)=>doc.data())));}
        
    },[channelId]);
    const sendMessages=e=>{
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').
        add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user,
        });
        
    }
    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map((messages)=>{

                })}
               
            </div>
            <div className="chat__input">
                <AddCircleIcon
                 fontSize="large"/>
                 <form>
                    <input 
                    value={input} 
                    disabled={!channelId}
                    onChange={(e)=>setInput(e.target.value)} 
                    placeholder={`MESSAGE #TESTCHANNEL`}/>
                    <button 
                    onClick={sendMessages}
                    className="chat__inputButton"
                    type="submit">Send Message</button>
                 </form>
                 <div className="chat__inputIcons">
                     <CardGiftcardIcon/>
                     <GifIcon/>
                     <EmojiEmotionsIcon/>
                 </div>
            </div>
        </div>
        
    )
}

export default Chat
