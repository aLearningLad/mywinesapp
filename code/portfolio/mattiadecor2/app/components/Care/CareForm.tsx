"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const CareForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (
      email !== " " &&
      email.length > 0 &&
      email.includes("@" && ".") &&
      message.length > 3
    ) {
      toast("Grazi! We'll reach out to you ASAP!");
      setEmail("");
      setMessage("");
    } else {
      toast(
        "Hang on there, please double-check your email. Also ensure you've left us a message."
      );
    }
  };

  return (
    <div className=" h-full w-full flex justify-center items-center flex-col">
      <form className=" flex flex-col h-5/6 w-full xl:w-8/12">
        <span className=" w-full h-[70%] flex flex-col">
          <label
            className=" text-white lg:text-2xl text-xl w-full flex justify-center text-center"
            htmlFor=""
          >
            {" Let's"} chat, what do you need help with?
          </label>
          <textarea
            placeholder="eg. Give me color palette inspiration"
            className=" w-full min-h-[80%] max-h-[60%] bg-cyan-900 rounded-xl outline-none p-4 mt-2 text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </span>
        <span className="w-full h-[30%] flex-col flex items-center">
          <label
            className=" w-full flex justify-center text-center text-xl text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" w-7/12 h-fit py-5 px-3 bg-cyan-900 outline-none text-white rounded-xl mt-2"
            type="email"
            placeholder="eg. Voldemort@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
      </form>
      <span className=" w-full h-fit flex justify-center">
        <button
          onClick={handleSubmit}
          className=" bg-white text-black h-fit w-fit px-8 py-3 rounded-xl hover:scale-90 transition duration-300 text-lg font-semibold hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </span>
    </div>
  );
};

export default CareForm;
