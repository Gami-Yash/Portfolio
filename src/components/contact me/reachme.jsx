import React from 'react';
import './reachMe.css'; 
import teamSVG from '../../assets/team.svg';
import { useTheme } from '../themeContext';

const ReachMe = () => {
  const { theme } = useTheme(); 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gamiyash0207@gmail.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <div className={`contact-me-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h2>Got a project? Get in touch</h2>
      <div className="contact-me-content">
        <div className="left-content">
          <img src={teamSVG} alt="Team SVG" className="team-image" />
        </div>
        <div className="right-content">
          <p>I am always ready to collaborate and bring your ideas to life.</p>
          <p>Feel free to reach out for any project discussions or queries.</p>
          <div className="email-container">
            <button 
              className={`email-button ${theme}`} 
              onClick={handleCopyEmail}
            >
              gamiyash0207@gmail.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachMe;
