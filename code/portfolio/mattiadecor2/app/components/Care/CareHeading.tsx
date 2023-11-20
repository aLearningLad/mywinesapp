"use client";

import { easeInOut, motion } from "framer-motion";

const CareHeading = () => {
  return (
    <div className=" w-full h-fit flex justify-center text-center mb-4">
      <motion.h1
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, ease: easeInOut, delay: 0.4 }}
        className=" text-4xl "
      >
        How to get the most out of your decor
      </motion.h1>
    </div>
  );
};

export default CareHeading;
