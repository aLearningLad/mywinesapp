"use client";

import HandPickedCard from "../HandPickedCard";
import { pickedCardData } from "../../myData/pickedCardData";
import { motion } from "framer-motion";

const ServicesRight = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className=" w-8/12 h-full flex gap-8"
    >
      {pickedCardData.map((card) => (
        <HandPickedCard
          key={card.id}
          title={card.title}
          img={card.img}
          price={card.price}
          id={card.id}
        />
      ))}
    </motion.div>
  );
};

export default ServicesRight;
