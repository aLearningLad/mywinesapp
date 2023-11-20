"use client";

import Image from "next/image";
import { useState } from "react";

interface MobileProductCardProps {
  id: number;
  title: string;
  desc: string;
  info: string;
  price: number;
  img: string;
  displayedPrice: string;
}

const MobileProductCard: React.FC<MobileProductCardProps> = ({
  id,
  title,
  desc,
  info,
  price,
  img,
  displayedPrice,
}) => {
  return (
    <section className=" w-full h-[60vh] relative">
      <span className=" text-white flex justify-center items-center w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-black flex-col bg-opacity-70 rounded-xl z-20">
        <h3 className="text-2xl text-center">{title}</h3>
        <p className=" text-neutral-200 w-full px-2">{desc}</p>
        <div className=" w-full mt-7 h-fit flex justify-center text-center">
          <button className=" rounded-xl py-3 text-black text-2xl bg-white w-9/12 h-fit">
            Add to cart
          </button>
        </div>
      </span>
      <Image
        src={img}
        fill
        objectFit="cover"
        alt="productImg"
        className="absolute rounded-xl z-10"
      />
    </section>
  );
};

export default MobileProductCard;
