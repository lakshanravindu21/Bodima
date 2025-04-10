import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
  <motion.div
    className="page about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>About Bodima.lk</h2>
    <p>Bodima.lk connects students and workers with safe, reliable boarding places.</p>
  </motion.div>
);

export default About;
