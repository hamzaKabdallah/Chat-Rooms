import React,{useState,useEffect} from 'react';
import InfoBar from "../Infobar/Infobar.js"
import io from 'socket.io-client';
import queryString from "query-string";
import Input from "../Input/Input.js"
import Messages from "../Messages/Messages.js"
import './Chat.css';
const ENDPOINT  = "localhost:5000";
let socket;

const Chat = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  

  useEffect(() => {
    
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit("join" , {name , room}, (error) => {
       if (error) {
         alert(error)
       }
    })
  return () =>{ socket.emit("disconnect");
   socket.off();}
    
  }, [ENDPOINT, window.location.search]);
  
  useEffect(() => {
    socket.on('message' , (message) =>{
     setMessages([...messages,message])
    })} ,[messages]

  
  )


  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

console.log(message,messages);

  return (
    <div className="outerContainer">
    <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  </div>

)}
export default Chat;