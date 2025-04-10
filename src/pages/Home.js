import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => (
  <motion.div
    className="home-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Hero Section */}
    <div className="home-hero">
      <img
        src="/images/boarding-banner.jpg"
        alt="Boarding"
        className="home-image"
      />
      <div className="home-overlay">
        <h1 className="home-title">
          Welcome to <span className="highlight">Bodima.lk</span>
        </h1>
        <p className="home-subtext">Find Your Perfect Boarding Place</p>
        <marquee className="marquee-text">
          <strong>Explore top-rated boarding listings in Sri Lanka</strong>
        </marquee>
        <p className="home-description">
          Your trusted platform to find the best boarding places in Sri Lanka.
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for Boarding Places"
            className="search-bar"
          />
          <img
            src="/images/logo1.png"
            alt="Search Logo"
            className="search-logo"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default Home;
