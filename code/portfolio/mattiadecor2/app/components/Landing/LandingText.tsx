"use client";

import { motion } from "framer-motion";

const LandingText = () => {
  return (
    <span>
      <motion.h2
        initial={{ opacity: 0, scale: 0.3, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ y: [-100, 0], scale: [0.4, 1] }}
        className=" flex w-full h-fit py-4 text-center justify-center text-white text-lg xl:text-4xl lg:text-3xl"
      >
        Hygge-Inspired Furniture & Plants For <br /> Warm, Serene Living Spaces
      </motion.h2>
    </span>
  );
};

export default LandingText;
