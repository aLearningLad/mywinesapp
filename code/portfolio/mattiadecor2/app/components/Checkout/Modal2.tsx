"use client";

import Link from "next/link";
import { useStore } from "@/app/(store)/store";

const Modal1 = () => {
  const clearCart = useStore((store) => store.resetCart);

  const handleClearance = () => {
    clearCart();
  };

  return (
    <div className=" w-11/12 lg:w-6/12 h-3/6 p-4 modalShadow flex flex-col justify-center items-center rounded-[40px] bg-white">
      <span>
        <h2 className=" text-2xl">
          Grazie mille, we hope you shop with us again soon!
        </h2>
      </span>
      <span className=" w-full h-fit flex justify-center mt-3">
        <Link
          href="/"
          className=" w-fit hover:scale-90 border-2 border-black transition duration-300 hover:bg-white hover:text-black h-fit px-10 py-2 bg-black text-white rounded-2xl text-2xl"
          onClick={handleClearance}
        >
          Finish
        </Link>
      </span>
    </div>
  );
};

export default Modal1;
