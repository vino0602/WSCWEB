import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Content from './Content';
import AboutUsPage from './AboutUsPage';
import Services from './Services';
import PackageList from './PackageList';
import GoogleReviews from './GoogleReviews';
import ChatBox from './Chatbox';
import Blogs from './Blogs';
import Review from './Review';
import OSMapComponent from './OSMapComponent';
import SocialMedia from './Socialmedia';
import ContactUs from './Pages/ContactUs';

const App = () => {
  return (
    //<Router>
      <div className="app-container">
        {/* Social Media Bar */}
        <SocialMedia />

        {/* Header Section */}
        <header className="header-container">
          <Header />
        </header>

        {/* Main Content Section */}
        <main className="main-content">
          <Content />
          <AboutUsPage />
          <Services />
          <PackageList />

          {/* Google Reviews Section */}
          <GoogleReviews />

          {/* Other content below Google Reviews */}
          <Blogs />
          <Review />
        </main>

        {/* Separate Section for OSMMapComponent */}
        <section className="map-section">
          <OSMapComponent />
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <Footer />
        </footer>

        {/* Chat Box Component */}
        <ChatBox />

        {/* Routing for ContactUs Page */}
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    //</Router>
  );
};

export default App;
