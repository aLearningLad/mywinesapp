"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length > 3 && email.includes("@" && ".")) {
      setEmail("");
      toast("Bravo! You've joined our newsletter!");
    } else {
      toast("That email address looks a tad shady, please check it again.");
    }
  };

  return (
    <form className=" w-full h-full flex flex-col items-start pl-14 justify-center">
      <h1 className=" h-fit text-4xl text-start mb-7">Newsletter</h1>

      <div className="group rounded-xl px-4 py-3 h-fit w-fit flex gap-1 bg-neutral-800 bg-opacity-40">
        <input
          className=" w-10/12 cursor-pointer h-full focus:scale-105 transition duration-300 py-4 px-2 bg-transparent placeholder:text-white text-opacity-70 outline-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className=" hover:scale-105 h-full hover:bg-gradient-to-tr hover:from-white border-none hover:to-neutral-50 hover:text-black transition duration-300 w-fit bg-gradient-to-tr from-cyan-600 to-pink-600 px-2 py-1 rounded-xl "
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
