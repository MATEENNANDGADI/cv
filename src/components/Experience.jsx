import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  { role: 'Front-End Developer', company: 'RN shetty', year: '2023' },
  { role: 'Intern Developer', company: 'XYZ Solutions', year: '2022' },
];

const Experience = () => {
  return (
    <motion.div
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="experience-glass">
        <h2>Experience</h2>
        <ul className="experience-list">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="experience-item"
            >
              <h3>{exp.role}</h3>
              <p>{exp.company} - {exp.year}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
