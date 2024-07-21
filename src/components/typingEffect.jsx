
import React, { useState, useEffect } from 'react';
import './typingEffect.css';
import { useTheme } from './themeContext'; 

const TypingEffect = ({
  texts = [],
  typingSpeed = 70,
  deletingSpeed = 30,
  delay = 1000,
  cursorColor = 'black'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const { theme } = useTheme(); 

  useEffect(() => {
    if (!texts.length) return;
    let typingTimeout;
    const currentText = texts[loopNum % texts.length];

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, texts, loopNum, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const textColor = theme === 'dark' ? 'white' : 'black'; 

  return (
    <div className="typing-effect" style={{ color: textColor }}>
      <span style={{ wordBreak: 'break-word' }}>{displayedText}</span>
      <span className="cursor" style={{ backgroundColor: cursorColor, opacity: isCursorVisible ? 1 : 0 }}>|</span>
    </div>
  );
};

export default TypingEffect;