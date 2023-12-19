
import './App.css';
import gptLogo from "./assets/chatgpt.svg"
import addBtn from "./assets/add-30.png"
import msg from "./assets/message.svg"
import home from "./assets/home.svg"
import saved from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
import send from "./assets/send.svg"
import userIcon from "./assets/user-icon.png"
import gptIcon from "./assets/chatgptLogo.svg"
import chatGpt from "./assets/icon-chat-gpt.webp"
import man from "./assets/man.png"
import Diamand from "./DiamondAnimation"
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';
function App() {
  const [input, setInput]= useState("")
  const [messages, setMessages] = useState([
    {
      text: "Hi there !!",
      isBot: true
    }
  ]);
  const handleSend = async ()=>{
    const res = await sendMsgToOpenAI(input)
    setMessages([
      ...messages, 
      {text:input,isBot:false},
    {text:res , isBot:true}
  
  
  ])
  setInput(""); // Clear the input field
  }
  return (
    <div className="App">
     <div className="sidebar">
      
        <div className="uper-side">
          <div className="uper-side-top">
             <img src={gptLogo} alt="" /><span className="me">chatGpt</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upper-side-button">
            <button className="query"><img src={msg} alt="" />what is Programming ?</button>
            <button className="query"><img src={msg} alt="" />How to use API ?</button>
          </div>
          <Diamand/>
        </div>


        <div className="lower-side">
          <div className="list-items">
            <img src={home} alt="" className="list-items-img" />
            Home
          </div>
          <div className="list-items">
            <img src={saved} alt="" className="list-items-img" />
            Saved
          </div>
          <div className="list-items">
            <img src={rocket} alt="" className="list-items-img" />
            Upgrade to Pro
          </div>
        </div>
     </div>
     <div className="main">
        <div className="chats">
          
         {messages.map((message,i) => 
          <div key={i} className={message.isBot ? "chat bot" : "chat"}>
          <img  className='chatimg' src={message.isBot ? chatGpt :man } alt="" /><p className="text">
            {message.text}
          </p>
          </div>
         )}

        </div>
        <div className="chat-footer">
          <div className="input">
            <input type="text"  placeholder='send a message...' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button className="send" onClick={handleSend}><img src={send} alt="" /></button>
          </div>
          <p>ChatGpt may produce inaccurate information
            about people, places, or facts. ChatGPT August 20 Version.

          </p>
        </div>
     </div>
    </div>
  );
}

export default App;
