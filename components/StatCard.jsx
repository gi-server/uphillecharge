"use client";

import { motion } from "framer-motion";

const StatCard = ({ number, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center justify-center"
    >
      <h3 className="text-[#95FF00] text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
        {number}
      </h3>

      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
        {title}
      </p>
    </motion.div>
  );
};

export default StatCard;

