// src/components/Navbar.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css';
import childLinks from '../../data/navbarLinks.json';
import { getPalette } from '../utils/getPalette';

function Navbar({ paletteName }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const palette = getPalette(paletteName);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    display: 'flex',
    position: 'sticky',
    top: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    color: 'white',
    backgroundColor: scrollPosition > 0 ? '#333' : palette.content1,
    transition: 'background-color 0.3s ease', // Animasyon ekleyebilirsiniz
    zIndex: 1000,
  };
  const linkColor = scrollPosition > 0 ? palette.content1 : palette.main;

  return (
    <div style={navbarStyle}>
      {childLinks.map((link, index) => (
        <div key={index} className='nav-link-wrapper'>
          <Link to={link.to} className={`nav-link link${index}`} style={{ color: linkColor }}>{link.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
