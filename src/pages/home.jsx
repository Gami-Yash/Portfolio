import React from 'react';
import ParticleHover from '../components/ParticleHover';
import Navbar from '../components/navbar';
import MainTyping from '../components/mainTyping';
import ProjectCard from '../components/project/projectCard';
import GamiYash from '../components/Name';
import '../components/home.css';
import SocialIcons from '../components/socialMediaComponent/socialIcons';
import ScrollButton from '../components/scrollDown/scroll';
import ContactMe from '../components/contact me/reachme';
import ImageCard from '../components/image/image';
import ContactMePage from '../components/about me/finalComponent';
import { useTheme } from '../components/themeContext';
import ReachMe from '../components/contact me/reachme';
import LibraryManagement from '../assets/libraryManagement.svg'
import CrimeReporting from '../assets/CrimeReporting.svg'
import FinalUser from '../assets/FinalUser.svg'
import Student from '../assets/Student.svg'
import blog from '../assets/FinalBlog.svg'
import ERP from '../assets/FinalERP.svg'
import FinalEcom from '../assets/FinalEcom.svg'

const Home = () => {
  const { theme } = useTheme();
  const textClass = theme === 'dark' ? 'text-dark-theme' : 'text-light-theme'; 

  const projects = [
    {
      title: 'Library Management System',
      description: "I Developed a Library Management Application for Finals Odoo Combat 2024 using MERN stack. Focused on backend development, it efficiently manages book inventories, tracks borrowed items, and handles user accounts. The app features a user-friendly interface and robust data management for improved library operations.",
      technologies: ['Node','React','Express','Figma','MongoDB'],
      githubLink: 'https://github.com/Gami-Yash/LibManagement',
      imageUrl: LibraryManagement,
    },
    {
      title: 'ERP- System',
      description: "Created an ERP system using the MERN stack, handling both frontend and backend development independently. The system integrates various business processes, manages data efficiently, and provides real-time insights with a streamlined interface and robust performance.",
      technologies: ['Python', 'Django','Postgres','MERN'], 
      githubLink: 'https://github.com/Gami-Yash/ERP-Main',
      imageUrl: ERP
    },
    {
      title: 'Crime Reporting System',
      description: "Built a real-time crime web app using the MERN stack, focusing on backend development and database creation. The app features live crime updates and efficient data management, providing a robust platform for monitoring and analyzing crime information.",
      technologies: ['Node','React','Express','Figma','MongoDB'], // Add the relevant technologies
      githubLink: 'https://github.com/Gami-Yash/CrimeReportingNew',
      imageUrl: CrimeReporting
    },
    {
      title: 'Blogging Platform',
      description: "Designed a blogging website using the MERN stack, handling backend and database creation. The site supports image uploads and features an integrated text editor for efficient post creation and management, offering a seamless blogging experience.",
      technologies: ['Node','React','Express',,'MongoDB'], // Add the relevant technologies
      githubLink: 'https://github.com/Gami-Yash/Blog-App',
      imageUrl: blog
    },
    {
      title: 'User Management System',
      description: "Created a user management system using Python and Django, focusing on backend development. The system handles user authentication, roles, and permissions, ensuring secure and efficient management of user accounts.",
      technologies: ['Python','Django','SQLite3'], // Add the relevant technologies
      githubLink: 'https://github.com/Gami-Yash/Django-Projects',
      imageUrl: FinalUser
    },
    {
      title: 'Student Management System',
      description: "Implemented a Student Management System using C++ and file management techniques to handle a large number of students. The system includes role-based authentication and various administrative features, ensuring efficient data management and streamlined operations.",
      technologies: ['C++', 'File Management'], // Add the relevant technologies
      githubLink: 'https://github.com/Gami-Yash/StudentManagement',
      imageUrl: Student
    },
    {
      title: 'E-commerce Application',
      description: "Formed the frontend of an e-commerce application using Flutter, creating a responsive and user-friendly interface. The app features smooth navigation, product displays, and a seamless shopping experience for users.",
      technologies: ['Dart','Flutter','FireBase','Android Studio'], // Add the relevant technologies
      githubLink: 'https://github.com/Gami-Yash/eCommerce',
      imageUrl: FinalEcom
    },
    // Other projects...
  ];

  return (
    <div className="home-container">
      <ParticleHover />
      <div id='home' className="content-container">
        <GamiYash />
        <div className="main-typing-container">
          <MainTyping />
        </div>
      </div>
      <div className='social-icons-container'>
          <SocialIcons />
        </div>
      <div className="scroll-button-container">
        <ScrollButton />
      </div>
      <div className="projects-container">
        <h2 className={`projects-header ${textClass}`}>Projects</h2>
        <div id="projects" className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies} // Pass technologies array
              demoLink={project.githubLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 id='about' className={`about ${textClass}`}>About me</h2>
        <ContactMePage />
      </div>
      <div className="image-card-container">
        <ImageCard />
      </div>
      <div id='contact'>
        <ReachMe />
      </div>
    </div>
  );
};

export default Home;
