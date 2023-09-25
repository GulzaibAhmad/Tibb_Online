import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import Image1 from "../../../assets/Articles.png";
import Image2 from "../../../assets/Products.png";
import Image3 from "../../../assets/Nuskha.png";
import Image4 from "../../../assets/Female.png";
import Image5 from "../../../assets/Male.png";
import Image6 from "../../../assets/Youtube.png";
import "./looking.css";

const lookings = [
  {
    id: 1,
    image: Image1,
    title: "Articles",
    link: "/articles",
  },
  {
    id: 2,
    image: Image2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    image: Image6,
    title: "YouTube",
    link: "https://youtube.com/@TibbOnline?si=XtLHAkTca_NePnok", // Complete YouTube search URL
  },
  {
    id: 4,
    image: Image4,
    title: "Women's Health",
    link: "/women",
  },
  {
    id: 5,
    image: Image5,
    title: "Men's Health",
    link: "/men",
  },
  {
    id: 6,
    image: Image3,
    title: "Nuskha Jaat",
    link: "/nuskha",
  },
];

const Trending = () => {
  return (
    <div className="looking-container">
      <h2>
        I'm <span className="heading_span">Looking</span> for
      </h2>
      <div className="looking-list">
        {lookings.map((looking) => (
          <NavLink to={looking.link} key={looking.id}>
            <div className="looking" data-id={looking.id}>
              <img src={looking.image} alt={looking.title} />
              <h3>{looking.title}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Trending;
