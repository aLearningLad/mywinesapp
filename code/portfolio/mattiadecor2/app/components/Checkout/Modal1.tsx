"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface Modal1Props {
  setPhaseOneDone: (value: boolean) => void;
}

const Modal1: React.FC<Modal1Props> = ({ setPhaseOneDone }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email !== " " && email.includes("@" && ".") && email.length > 4) {
      toast("Grazie mille!");
      setPhaseOneDone(true);
    } else {
      toast("Madre mia! Please check your email carefully");
    }
  };

  return (
    <div className=" w-11/12 lg:w-6/12 h-full py-3 lg:h-5/6 lg:p-4 modalShadow flex flex-col items-center rounded-xl lg:rounded-[40px] bg-white">
      <span className=" w-full h-fit py-3 flex justify-center text-center px-1 lg:px-4">
        <h3 className=" text-2xl font-bold">
          As part of our Anniversary celebration, your first order is on us!
        </h3>
      </span>
      <span className=" w-full h-full px-5 mt-7">
        <form
          className="flex flex-col h-full items-center text-center"
          action=""
        >
          <label className=" text-lg font-semibold" htmlFor="">
            We will email you confirmation
          </label>
          <input
            className=" w-8/12 placeholder:text-black bg-neutral-500 rounded-2xl bg-opacity-50 outline-none h-fit py-4 px-3 mt-4 text-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </span>
      <span className="h-fit w-full flex justify-center">
        <button
          onClick={handleSubmit}
          className=" w-fit hover:scale-90 border-2 border-black transition duration-300 hover:bg-white hover:text-black h-fit px-10 py-2 bg-black text-white rounded-2xl text-2xl"
        >
          Next
        </button>
      </span>
    </div>
  );
};

export default Modal1;
