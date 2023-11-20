"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";

const TopLeftTile = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className=" group w-full h-1/2 relative"
    >
      <div className="rounded-3xl z-40 text-white absolute h-full w-full top-0 bottom-0 left-0 right-0 lg:hidden flex lg:group-hover:flex justify-center items-center text-3xl bg-neutral-800 bg-opacity-60">
        Living Room
      </div>
      <Image
        src="/assets/fn3.jpg"
        fill
        objectFit="cover"
        alt="img"
        className=" absolute rounded-3xl"
      />
    </motion.div>
  );
};

export default TopLeftTile;
