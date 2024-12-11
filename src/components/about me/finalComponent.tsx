import React from "react";
import IconCloud from "./float";
import AboutMeCard from "./aboutme";
import { useTheme } from "../themeContext";


const ContactMePage = () => {
  const iconSlugs = [
    "html5",
    "css3",
    "javascript",
    "react",
    "node-dot-js",
    "mongodb",
    "python",
    "flask",
    "firebase",
    "git",
    "canva",
    "postgresql",
    "sqlite",
    "flutter",
    "dart",
    "c",
    "cplusplus",
    "tailwindcss",
    "django",
    "figma",
    "java",
    "wordpress",
    "heroku",
    "androidstudio",
    "hostinger",
    'express',
    'nextjs',
    'springboot',
  ];

  // Inline styles
  const headingStyle = {
    textAlign: 'center',
    margin: '40px 0',
    fontSize: '36px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  };

  
  const {theme} = useTheme();

  return (
    <div className={`contact-me-page ${theme == 'dark' ? 'dark' : 'light'}`}>
      <style>
        {`
          .skills-heading {
            text-align: center;
            margin: 90px 0 -30px;
          }
          .skills-heading h2 {
            font-size: 30px;
            color: ${theme ? '#ffffff' : '#000000'}; /* Dark mode color */
            font-family: 'Arial', sans-serif;
            font-weight: bold;
          }
          .contact-me-page.dark .skills-heading h2 {
            color: #ffffff; /* Ensure it's visible in dark mode */
            margin-bottom: 40px;
          }
          .contact-me-page.light .skills-heading h2 {
            color: #000000; /* Ensure it's visible in light mode */
            margin-bottom: 40px;
          }
        `}
      </style>
      <div className="about-me-card-container">
        <AboutMeCard />
        <div className="skills-heading">
          <h2>Skills & Languages</h2>
        </div>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  );
};

export default ContactMePage;
