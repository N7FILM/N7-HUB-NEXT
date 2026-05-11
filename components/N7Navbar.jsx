
'use client'
import { motion } from 'framer-motion';

const N7Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="bg-black bg-opacity-50 backdrop-blur-lg px-8 py-4 text-white">
        <h1 className="text-2xl font-bold">
          N7_<span className="text-neonBlue">HUB</span>
        </h1>
      </div>
    </motion.nav>
  );
};

export default N7Navbar;
