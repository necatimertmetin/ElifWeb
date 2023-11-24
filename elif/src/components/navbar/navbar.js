// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import childLinks from '../../data/navbarLinks.json';

function Navbar() {
  return (
    <div className='navbar'>

      {/* Other links from the JSON data */}
      {childLinks.map((link, index) => (
        <div key={index} className='nav-link-wrapper'>
          <Link to={link.to} className={`nav-link link${index}`}>{link.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
