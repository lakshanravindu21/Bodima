import React from 'react';
import { motion } from 'framer-motion';
import './Listings.css';

const Listings = () => (
  <motion.div
    className="page listings"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Available Boarding Listings</h2>
    <ul>
      <li>Colombo 07 - Rs. 12,000/month - A/C room</li>
      <li>Kandy - Rs. 9,000/month - Single room</li>
      <li>Galle - Rs. 8,500/month - Shared room</li>
    </ul>
  </motion.div>
);

export default Listings;
