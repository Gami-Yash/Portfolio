import React from 'react';
import './image.css';
import profile from '../../assets/IMG_3934.JPG'


const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="image-card">
      <img
        src={profile}
        alt={altText}
        className="image-card__img"
      />
    </div>
  );
};

export default ImageCard;
