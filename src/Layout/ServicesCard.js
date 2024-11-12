// src/Layout/ServicesCard.js

import React from 'react';
import './ServicesCard.css'; // Import the CSS file for card styling

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="icon-container">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href="#learn-more" className="learn-more">
        Learn more
      </a>
    </div>
  );
};

export default ServicesCard;
