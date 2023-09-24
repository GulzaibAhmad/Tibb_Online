import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'; // Import NavLink
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import Logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>

      <NavLink exact="true" to="/" className='footer__logo'>
          <img src={Logo} alt="" className="nav_img"/>
        </NavLink>

      <ul className='links'>
        <li>
        <NavLink
                exact="true"
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
        </li>
        <li>
        <NavLink
                exact="true"
                to="/"
                className="nav-link"
            >
                Articles
            </NavLink>
        </li>
        <li>
            <NavLink
                exact="true"
                to="/contact"
                className="nav-link"
            >
                Women's Health
            </NavLink>
        </li>
        <li>
            <NavLink
                exact="true"
                to="/contact"
                className="nav-link"
            >
                Men's Health
            </NavLink>
        </li>
        <li>
            <NavLink
                exact="true"
                to="/contact"
                className="nav-link"
            >
                Contact Us
            </NavLink>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/people/Gul-Zaib/pfbid022wavkqPfco43q5vK3jNqbEEon2Ty5wHFRRPtJEFhEuDzWQgJ3tG7D5Wci1eR4XFfl/" rel="noreferrer" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/zaibahmadofficial/" rel="noreferrer" target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/zaibahmad_" rel="noreferrer" target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Tibb Online All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer