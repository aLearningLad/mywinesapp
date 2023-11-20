"use client";

import { BiSolidSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const LandingSearch = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <span className=" w-full lg:w-5/12 bg-neutral-800 backdrop-blur-sm bg-opacity-30 rounded-[50px] z-0 h-fit px-2 py-0 lg:py-4 flex items-center">
      <input
        className=" bg-transparent outline-none text-white placeholder:text-neutral-200 w-full h-fit px-2 py-1 text-lg"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={() => setSearch("")} className=" w-fit h-fit">
        <BiSolidSearchAlt2 color="white" size={50} />
      </button>
    </span>
  );
};

export default LandingSearch;
