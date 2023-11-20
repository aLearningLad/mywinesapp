"use client";

import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const RightTile = () => {
  return (
    <motion.div
      whileInView={{ scale: [0.3, 1], opacity: [0, 1] }}
      transition={{ duration: 0.7, delay: 0.3, ease: easeInOut }}
      className="group lg:py-3 w-full lg:w-1/2 h-full relative"
    >
      <div className=" z-40 rounded-3xl text-white absolute h-full w-full top-0 bottom-0 left-0 right-0 lg:hidden flex lg:group-hover:flex justify-center items-center text-3xl bg-neutral-800 bg-opacity-60">
        Winter Hygge
      </div>
      <Image
        src="/assets/hygge1.jpg"
        fill
        objectFit="cover"
        alt="img"
        className=" absolute rounded-3xl"
      />
    </motion.div>
  );
};

export default RightTile;
