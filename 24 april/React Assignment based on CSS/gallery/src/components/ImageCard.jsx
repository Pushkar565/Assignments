// src/components/ImageCard.js
import React from 'react';
import { generateRandomTitle, generateRandomPrice } from '../utils/randomData';
import placeholderImage from '../assets/react.svg';
import '../styles/ImageCard.css';

const ImageCard = () => {
  const title = generateRandomTitle();
  const price = generateRandomPrice();

  return (
    <div className="card">
      <img src={placeholderImage} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price: ${price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
