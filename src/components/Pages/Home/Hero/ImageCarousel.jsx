import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('slide-right'); // Initial slide direction

  const nextImage = () => {
    setSlideDirection('slide-left'); // Slide to the left
    setTimeout(() => {
      setCurrentImage((currentImage + 1) % images.length);
      setSlideDirection('slide-right'); // Reset slide direction to the right
    }, 300); // Adjust the timing as needed (should match the CSS transition duration)
  };

  const prevImage = () => {
    setSlideDirection('slide-right'); // Slide to the right
    setTimeout(() => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
      setSlideDirection('slide-left'); // Reset slide direction to the left
    }, 300); // Adjust the timing as needed (should match the CSS transition duration)
  };

  useEffect(() => {
    // Set up an interval to change images every 3 seconds
    const intervalId = setInterval(nextImage, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className={`carousel-container ${slideDirection}`}>
      <button className="prev-button" onClick={prevImage}>
        &lt;
      </button>
      <img className="carousel-image" src={images[currentImage]} alt={`Image ${currentImage}`} />
      <button className="next-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;