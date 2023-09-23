import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';  
import { IoMdArrowDropdown } from 'react-icons/io';
import p1 from '../src/assets/logo.png';
import "./NavBar.css";

function  NavBar() {

  const [click, setClick] = useState(false);
  
  const [dropdowns, setDropdowns] = useState({
    herbs: false,
    treatment: false,
    medicineCategories: false
  });

  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  const handleDropdown = (dropdownName) => {
    setDropdowns({
      ...dropdowns,
      [dropdownName]: !dropdowns[dropdownName] 
    });
  };
  
  return (
    <nav className="navbar">
      <div className="nav-container">
      
        <NavLink exact="true" to="/" className="nav-logo" onClick={closeMobileMenu}>
          <img src={p1} alt="" className="nav_img"/>
        </NavLink>

        <div className={`nav-icon ${click ? 'active' : ''}`} onClick={handleClick}>
          {click ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div className={`nav-menu ${click ? 'active' : ''}`}>
        
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleDropdown('herbs')}
                onMouseEnter={() => handleDropdown('herbs')}
                onMouseLeave={() => setDropdowns({ ...dropdowns, herbs: false })}
              >
                Articles
                <IoMdArrowDropdown className={`dropdown_icon ${dropdowns['herbs'] ? 'active' : ''}`} />
                {dropdowns['herbs'] && (
                  <div className="nav-dropdown">
                    <NavLink
                      exact="true"
                      to="/blog/post1"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Herbs
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post2"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Nuskha Jaat
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post3"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Herbal Medicine
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post4"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      General Health
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleDropdown('treatment')}
                onMouseEnter={() => handleDropdown('treatment')}
                onMouseLeave={() => setDropdowns({ ...dropdowns, treatment: false })}
              >
                Treatment
                <IoMdArrowDropdown className={`dropdown_icon ${dropdowns['treatment'] ? 'active' : ''}`} />
                {dropdowns['treatment'] && (
                  <div className="nav-dropdown">
                    <NavLink
                      exact="true"
                      to="/blog/post5"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Male Treatment
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post6"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Female Treatment
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post7"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Kids Treatment
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => handleDropdown('medicineCategories')}
                onMouseEnter={() => handleDropdown('medicineCategories')}
                onMouseLeave={() => setDropdowns({ ...dropdowns, medicineCategories: false })}
              >
                Consumer Products
                <IoMdArrowDropdown className={`dropdown_icon ${dropdowns['medicineCategories'] ? 'active' : ''}`} />
                {dropdowns['medicineCategories'] && (
                  <div className="nav-dropdown">
                    <NavLink
                      exact="true"
                      to="/blog/post8"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Pansar Products
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post9"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Herbal Medicine
                    </NavLink>
                    <NavLink
                      exact="true"
                      to="/blog/post10"
                      className="nav-dropdown-link"
                      onClick={closeMobileMenu}
                    >
                      Nuskha Jaat
                    </NavLink>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/contact"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
