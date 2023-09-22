import React from 'react';
import ImageCarousel from './ImageCarousel';
import p1 from '../../../assets/hero.png';
import p2 from '../../../assets/hero2.png';

const images = [p1, p2];

const Home = () => {
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default Home;
