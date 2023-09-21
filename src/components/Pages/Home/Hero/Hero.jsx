import { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import p1 from '../../../../assets/hero.png';
import p2 from '../../../../assets/hero2.png';
import './hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImage();
    }, 2000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleImage = () => {
    setVisible((prevVisible) => (prevVisible === 1 ? 2 : 1));
  };

  return (
    <div className="hero">
      <SwitchTransition>
        <CSSTransition
          key={visible}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <img src={visible === 1 ? p1 : p2} alt="" className="hero_img" />
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Hero;