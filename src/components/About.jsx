import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-glass">
        <h2>About Me</h2>
        <p>
          I am Mateen, a passionate front-end developer and an aspiring scientist with an interest in computer science, philosophy, and innovation. I love exploring new technologies, solving problems, and working on projects that have a meaningful impact.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
