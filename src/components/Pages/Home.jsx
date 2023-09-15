import React, { useState, useEffect } from "react";
import p1 from '../../assets/hero.png'; 
import p2 from '../../assets/hero2.png';
import './home.css'

export const Home = () => {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImage();
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [visible]);

  const toggleImage = () => {
    setVisible((prevVisible) => (prevVisible === 1 ? 2 : 1));
  };

  return (
    <div className="hero_container">
      <div className={`hero ${visible === 1 ? "hero-left-to-right" : "hero-right-to-left"}`}>
        <img
          src={p1}
          alt=""
          className={`hero_img ${visible === 1 ? "active" : ""}`}
        />
        <img
          src={p2}
          alt=""
          className={`hero_img ${visible === 2 ? "active" : ""}`}
        />
      </div>
    </div>
  );
};
