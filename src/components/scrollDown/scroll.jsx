import React from 'react';
import './scroll.css';
import { useTheme } from '../themeContext';

const ScrollButton = () => {
    const { theme } = useTheme();

    return (
        <div className="scroll-container">
            <button className={`scroll-button ${theme}`}>
                Scroll down
                <div className="mouse-icon">
                    <div className="wheel"></div>
                </div>
            </button>
        </div>
    );
};

export default ScrollButton;
