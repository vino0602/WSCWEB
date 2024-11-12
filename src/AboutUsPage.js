import React from 'react';
import './AboutUsPage.css';
import aboutImage from './assets/aboutus.jpg'; // Replace with your image path
import aboutImage2 from './assets/aboutus2.jpg'; // Replace with the new image path

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Left side with images */}
        <div className="about-us-image-container">
          <img src={aboutImage} alt="About Us" className="about-us-image" />
          <img src={aboutImage2} alt="About Us Extra" className="about-us-image-2" />
        </div>

        {/* Right side with content */}
        <div className="about-us-text">
          <h2 className="about-us-heading">About Us</h2>
          <p>
            WeStayClose is dedicated to providing personalized care to our clients.
            Our mission is to deliver quality healthcare and support services directly to your doorstep, ensuring comfort and convenience.
          </p>
          <p>
            Our personalized support services are designed to save you time and alleviate the stress of navigating the healthcare system, allowing you to focus on what matters most - caring for your family and friends.
          </p>
       

        {/* Move Download Brochure Section Here */}
        <div className="download-section">
          <h2>Download Our Brochure</h2>
          <p>Click the button below to download our brochure:</p>
          <a href="/WeStayClose Brochure version 1.pdf" download>
            <button className="download-button">
              Download Brochure
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
