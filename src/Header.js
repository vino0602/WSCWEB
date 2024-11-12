import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './Header.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleNavigation = (to) => {
    if (to === "contactus") {
      // Use Link for navigation to the ContactUs page
      return;
    } else {
      // Navigate to other routes
      navigate(`/${to}`);
    }
    closeMenu();
  };

  return (
    <div className="header-container">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo-container" onClick={() => handleNavigation("home")}>
          <img src="path-to-your-logo.png" alt="Logo" className="logo" />
        </div>

        {/* Desktop Navbar */}
        <nav className="nav-links">
          {["home", "about", "services", "package", "doctors", "blogs"].map((item) => (
            <span
              key={item}
              onClick={() => handleNavigation(item)}
              className="nav-item"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
          {/* Link for ContactUs */}
          <Link to="/contactus" className="nav-item" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        {/* Login Button */}
        <div className="login-container">
          <a href="https://app.westayclose.in/login">
            <button className="login-btn">Login</button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={handleChange}>
          {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="mobile-menu">
          {["home", "about", "services", "package", "doctors", "blogs"].map((item) => (
            <span
              key={item}
              onClick={() => handleNavigation(item)}
              className="mobile-nav-item"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
          {/* Link for ContactUs in Mobile Menu */}
          <Link to="/contactus" className="mobile-nav-item" onClick={closeMenu}>
            Contact
          </Link>
          <a href="https://app.westayclose.in/login" className="mobile-login-btn">Login</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
