"use client";

import { motion } from "framer-motion";

const TilesHeading = () => {
  return (
    <motion.h1
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className=" w-full flex justify-center text-center h-fit text-4xl"
    >
      Ideas & References
    </motion.h1>
  );
};

export default TilesHeading;
