import React, { useEffect, useRef } from 'react';
import './aboutme.css';
import { useTheme } from '../themeContext';
import YourSVG from '../../assets/Yash.svg'; 
import IconCloud from "./float";

const AboutMeCard = () => {
  const { theme } = useTheme();
  const descriptionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          entry.target.classList.remove('appear');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const paragraphs = descriptionRef.current.querySelectorAll('.description');
    paragraphs.forEach((p) => observer.observe(p));

    return () => {
      paragraphs.forEach((p) => observer.unobserve(p));
    };
  }, []);

  return (
    <div className={`about-me-card ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="card-header">
        <img src={YourSVG} alt="SVG Header" className="header-svg" />
      </div>
      <div ref={descriptionRef}>
        <p className="description">
          I’m Yash, a dedicated student at AD Patel Institute of Technology. I have a lot of experience in backend development and a strong knowledge of the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). I also have intermediate skills in <strong>Python, Django, Flask, CSS, Tailwind CSS, JavaScript, HTML, Flutter, Dart, and PostgreSQL</strong>.
        </p>
        <p className="description">
          I’m skilled in creating and optimizing APIs and have a solid understanding of various databases like <strong>MongoDB and PostgreSQL</strong>. My work focuses on building efficient and scalable backend systems.
        </p>
        <p className="description">
          During my internship at <strong>Warble Solutions</strong>, I built a complete website on my own and took care of all the graphic design. This role allowed me to use both my development and design skills effectively.
        </p>
        <p className="description">
          I also teach backend development in my college club, helping other students learn and understand complex topics. This experience enhances both my teaching and technical skills.
        </p>
        <p className="description">
          I’m passionate about technology and quick to learn new things. My participation in several hackathons, including making it to the finals of <strong>Odoo Combat 2024</strong>, has sharpened my problem-solving abilities and showed my capability to work well under pressure.
        </p>
        <p className="description">
          I’m excited to apply my skills to new projects and continue growing as a developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMeCard;
