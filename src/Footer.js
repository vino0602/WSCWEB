import React from 'react';
import './Footer.css'; // Make sure to import the CSS file


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2>WestayClose</h2>
        <p>Stay relaxed, we care for your loved ones wherever you are.</p>
        <div className="footer-links">
          <a href="C:\Users\Dell-7470\Pictures\westayclose\westayclose\src\ContactUs.js">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <address>
          <p>A-28, 1st Floor, Thiru-vi-ka Industrial Estate, Guindy, Chennai-600 032.</p>
          <p>Registered Office: Limvo Pvt. Ltd., No. 36/3, Otheri Road, Swamy Nagar, Otteri, Vellore - 632 002.</p>
        </address>
        <p>Email: <a href="mailto:info@westayclose.in">info@westayclose.in</a></p>
        <p>Phone: <a href="tel:+919789086627">+91 97890 86627</a></p>
        <p>&copy; Westayclose 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;
