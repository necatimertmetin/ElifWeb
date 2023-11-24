// src/components/pages/NotFound.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/css/notfound.css'; // Import the CSS file for styling
import image from '../../assets/media/404-Error-Page-Template.webp';

function NotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1); // Extract the page name from the URL

  return (
    <div className="not-found-container">
      <div className="content">
        <h2>Oops! 404</h2>
        <p>It seems like you've entered uncharted territory.</p>
        <p>The page "{pageName}" is lost in the digital wilderness.</p>
      </div>
      <img src={image} alt="404 Image" />
    </div>
  );
}

export default NotFound;
