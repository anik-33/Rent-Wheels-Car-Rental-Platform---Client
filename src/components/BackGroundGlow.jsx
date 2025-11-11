import React from 'react';
import { motion } from "framer-motion";


const BackGroundGlow = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Blue glow - top left */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pink glow - top right */}
      <motion.div
        className="absolute top-40 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Purple glow - bottom middle (optional) */}
      <motion.div
        className="absolute bottom-10 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    );
};

export default BackGroundGlow;