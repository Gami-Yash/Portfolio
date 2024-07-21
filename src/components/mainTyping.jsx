import React from 'react';
import TypingEffect from './typingEffect';

const MainTyping = () => {
  const texts = [
    "A full stack developer",
    "Explore my web wizardry!",
    "See what I've been coding?",
    "See my cool tech creations!",
    "A.... cool guy?",
    "Ok....I am running out of ideas",
    "Uhhh....You can scroll down!",
    "You still here?",
    "..... Ok I will restart the loop than"
  ];

  const textColor = '#FFFFFF'; 
  const cursorColor = '#FFFFFF'; 

  const typingStyles = {
    fontFamily: 'Arial, sans-serif', 
    fontSize: '28px',
    lineHeight: '1.5', 
  };

  return (
    <div className="MainTyping" style={{ color: textColor, ...typingStyles }}>
      <TypingEffect texts={texts} textColor={textColor} cursorColor={cursorColor} />
    </div>
  );
};

export default MainTyping;
