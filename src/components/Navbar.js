// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Bodima.lk Logo" className="logo" /> {/* Logo image */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-item">Home</Link></li>
        <li><Link to="/listings" className="navbar-item">Listings</Link></li>
        <li><Link to="/about" className="navbar-item">About</Link></li>
        <li><Link to="/contact" className="navbar-item">Contact</Link></li>
        <li><Link to="/login" className="navbar-item navbar-button">Login</Link></li>
        <li><Link to="/signup" className="navbar-item navbar-button">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
