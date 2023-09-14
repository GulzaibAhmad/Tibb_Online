import React from "react";
import p1 from '../../assets/hero.jpeg';
import './home.css';

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <img src={p1} alt="" className="hero_img" />
      </div>
    </div>
  );
};