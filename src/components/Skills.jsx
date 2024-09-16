import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css'; // Import the CSS file for styling

const skills = [
  { name: 'React.js', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'HTML & CSS', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Java', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
