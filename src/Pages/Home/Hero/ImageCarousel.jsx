import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='five'>
    <div className="carousel-container">
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
      />
    </div>
    </div>
  );
};

export default ImageCarousel;
