import React, { useEffect, useRef } from 'react';
import './projectCard.css'; 
import { useTheme } from '../themeContext'; 

const ProjectCard = ({ title, description, technologies, demoLink, imageUrl }) => {
  const { theme } = useTheme(); 
  const cardRef = useRef(null); 

  const techColors = {
    'Node': '#8CC84B',
    'React': '#61dafb',
    'Express': '#000000',
    'Figma': '#F24E1E',
    'MongoDB': '#47A248',
    'Python': '#306998',
    'Django': '#092E20',
    'Postgres': '#336791',
    'MERN': '#00A8E1',
    'SQLite3': '#003B57',
    'C++': '#00599C',
    'File Management': '#9E9E9E',
    'Dart': '#00B2FF',
    'Flutter': '#02569B',
    'FireBase': '#FF6F00',
    'Android Studio': '#3DDC84',
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); 
        }
      });
    }, {
      threshold: 0.25 
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }


    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`project-card ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="tech-badge"
            style={{ backgroundColor: techColors[tech] || 'rgba(255, 255, 255, 0.1)' }}
          >
            {tech}
          </span>
        ))}
      </div>
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-button">
        GitHub Link <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default ProjectCard;
