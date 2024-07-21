import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useTheme } from './themeContext';

const japaneseCharacters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';

const flicker = keyframes`
  0%, 100% { color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')}; }
  50% { opacity: 1; }
`;

const FlickerWrapper = styled.span`
  font-size: 36px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 34px; /* Adjust font size for mobile */
  }
`;

const Character = styled.span`
  display: inline-block;
  animation: ${({ theme }) => theme && css`${flicker} 0.2s linear infinite`}; /* Wrap keyframe in css helper */
  opacity: 0;
  transition: opacity 0.1s ease;
  margin-right: 8px; /* Default spacing between characters */

  &.visible {
    opacity: 1;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
    color: white; /* Adjust color for dark theme */
  `}

  @media (max-width: 768px) {
    margin-right: 4px; /* Adjust spacing between characters for mobile */
  }
`;

const GamiYash = () => {
  const name = 'Gami Yash';
  const [currentChars, setCurrentChars] = useState(Array(name.length).fill(''));
  const [visibleCount, setVisibleCount] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const animateCharacters = async () => {
      for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < 5; j++) {
          setCurrentChars(prev => {
            const newChars = [...prev];
            newChars[i] = japaneseCharacters.charAt(Math.floor(Math.random() * japaneseCharacters.length));
            return newChars;
          });

          await new Promise(resolve => setTimeout(resolve, 13)); 
        }

        setCurrentChars(prev => {
          const newChars = [...prev];
          newChars[i] = name[i];
          return newChars;
        });

        setVisibleCount(i + 1);

        await new Promise(resolve => setTimeout(resolve, 70)); 
      }
    };

    animateCharacters();
  }, [name]);

  return (
    <FlickerWrapper>
      {currentChars.map((char, index) => (
        <Character key={index} className={index < visibleCount ? 'visible' : ''} theme={theme}>
          {char}
        </Character>
      ))}
    </FlickerWrapper>
  );
};

export default GamiYash;
