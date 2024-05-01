// src/components/Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageCard.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      {/* Add more ImageCard instances as needed */}
    </div>
  );
};

export default Gallery;
