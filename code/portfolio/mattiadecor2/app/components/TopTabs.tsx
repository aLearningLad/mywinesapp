"use client";

import { serviceTabInfo } from "../myData/serviceTabsInfo";
import { ServiceTab } from ".";
import { easeIn, easeInOut, motion } from "framer-motion";

const TopTabs = () => {
  return (
    <div className=" h-[20%] w-full flex lg:flex-row flex-col items-center justify-center gap-4 px-20">
      {serviceTabInfo.map((tab) => (
        <motion.span
          key={tab.title}
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, ease: easeInOut, delay: 0.5 }}
          className=" w-full h-full"
        >
          <ServiceTab title={tab.title} desc={tab.desc} img={tab.img} />
        </motion.span>
      ))}
    </div>
  );
};

export default TopTabs;
