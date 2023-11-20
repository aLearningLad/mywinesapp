"use client";

import { easeInOut, motion } from "framer-motion";

const ServicesLeft = () => {
  return (
    <div className=" w-4/12 h-full flex flex-col items-center justify-center">
      <motion.h1
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, ease: easeInOut, delay: 0.3 }}
        className=" w-full h-fit py-4 text-4xl text-center"
      >
        {"Mattia's"} Hand-Picked Decors
      </motion.h1>
      <motion.span
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.1, ease: easeInOut, delay: 0.5 }}
      >
        See Collection {">>"}
      </motion.span>
    </div>
  );
};

export default ServicesLeft;
