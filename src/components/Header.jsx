import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.div
      className="header-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="header-glass">
        <h1>Mateen's CV</h1>
        <p>Front-End Developer | Aspiring Scientist</p>
      </div>
    </motion.div>
  );
};

export default Header;
