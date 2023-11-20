"use client";

import { motion } from "framer-motion";

const LandingBlurb = () => {
  return (
    <span>
      <motion.p
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 0.9 }}
        className=" w-full lg:p-0 px-1 h-fit text-white flex justify-center text-center text-sm lg:text-xxl"
      >
        Explore, style up & combine our vast collection of plant & furniture
        pieces.
      </motion.p>
    </span>
  );
};

export default LandingBlurb;
