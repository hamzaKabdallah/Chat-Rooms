import React from "react"
import "./Input.css"

function Input({message,setMessage,sendMessage}) {

    return(
      <form className="form">
       <input className="input"
       placeholder="Type a message here... "
       value={message}
       onChange={(mes) => setMessage(mes.target.value)}
       onKeyPress={(event) => event.key==="Enter" ? sendMessage(event):null}
       />
       <button className="sendButton" onClick={(event) => sendMessage(event)}>  send </button>
      </form>
    )
}

export default Input