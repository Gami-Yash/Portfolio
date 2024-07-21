// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/themeContext'; 
import ParticleHover from '../src/components/ParticleHover'; 
import Navbar from '../src/components/navbar'; 
import Home from '../src/pages/home'; 


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <ParticleHover />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

