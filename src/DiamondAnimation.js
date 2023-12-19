import React from 'react';
import './DiamondAnimation.css';
import chat from "./assets/icon-chat-gpt.webp"
const DiamondAnimation = () => {
  return (
    <>
<p className='title'>Welcome To our service</p>
    <div className="diamond-container">
      
      <div className="diamond">
       
        <div className="face front"><img className='img' src={chat} alt="" /></div>
        <div className="face back"><img className='img' src={chat}/></div>
        <div className="face left"><img className='img' src={chat}/> </div>
        <div className="face right"><img className='img' src={chat}/></div>
        <div className="face top"><img className='img' src={chat}/></div>
        <div className="face bottom"><img className='img' src={chat}/></div>
        <img className='diam img' src={chat} alt="" />
      </div>
      
    </div>
    <p className='title'>AI Revolutionizes Everything.




</p>

    </>
  );
};

export default DiamondAnimation;
