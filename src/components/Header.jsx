import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="header"
    >
      <h1>Mateen's CV</h1>
      <p>Front-End Developer | Enthusiast</p>
    </motion.div>
  );
}

export default Header;