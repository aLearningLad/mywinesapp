"use client";

import { AuthModal, Logo, SignOutModal } from "..";
import { navLinks } from "../../myData/navLinks";
import Link from "next/link";
import { BsFillBasket2Fill } from "react-icons/bs";
import { GrSafariOption } from "react-icons/gr";
import { useState } from "react";
import { useStore } from "../../(store)/store";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const itemCount = useStore((store) => store.cartItems.length);
  const signedIn = useStore((store) => store.isSignedIn);

  const [modal, setModal] = useState(false);
  const [signOutModal, setSignOutModal] = useState(false);

  return (
    <nav className=" h-[15%] w-full flex relative items-center">
      {signOutModal && <SignOutModal setSignOutModal={setSignOutModal} />}
      {modal && <AuthModal setModal={setModal} />}
      <section className=" lg:w-3/12 w-1/2 gap-2 h-full flex items-center justify-end pr-3 pl-2 py-2">
        <div className=" h-full w-4/12 lg:p-0 py-2 flex justify-center items-center">
          <Logo />
        </div>
        <span className=" text-2xl font-bold text-white">
          {"Mattia's"} Decor
        </span>
      </section>
      <section className=" lg:hidden flex w-1/2 h-full justify-end items-center">
        <button
          onClick={() => setMobileNavOpen((prev) => !prev)}
          className=" active:scale-90 transition duration-200 w-fit h-fit px-4 "
        >
          <GrSafariOption color="white" size={30} />
        </button>
      </section>
      {mobileNavOpen && (
        <div className=" px-2 flex flex-col items-center justify-center gap-1 bg-black bg-opacity-70 z-50 fixed top-0 bottom-0 w-full h-screen">
          {navLinks.map((item) => (
            <span key={item.title} className=" w-full h-fit">
              <Link
                className="active:scale-90 transition duration-200 rounded-xl bg-white py-3 flex justify-center text-black w-full h-fit text-3xl"
                href={item.link}
              >
                {item.title}
              </Link>
            </span>
          ))}
          <div className=" w-full py-4 h-fit flex justify-center text-xl text-white">
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className=" active:scale-90 transition duration-200 text-5xl w-fit h-fit"
            >
              <AiFillCloseCircle size={70} />
            </button>
          </div>
        </div>
      )}
      <div className=" w-6/12 h-full lg:flex hidden items-center justify-center gap-12">
        {navLinks.map((item) => (
          <span
            className=" h-fit w-fit flex flex-col items-center group"
            key={item.title}
          >
            <Link
              className=" text-white text-lg group-hover:scale-105 transition duration-300"
              href={item.link}
            >
              {item.title}
            </Link>
            <div className=" w-[5px] h-[5px] rounded-full bg-white hidden group-hover:flex transition duration-300  " />
          </span>
        ))}
      </div>
      <div className="w-3/12 h-full hidden lg:flex items-center justify-start pl-5 gap-3">
        <Link href="/Checkout" className=" w-[40px] h-[36px] relative flex">
          <BsFillBasket2Fill color="white" size={30} />
          <div className=" w-[20px] absolute right-1 h-[20px] rounded-full bg-white flex items-center justify-center text-sm">
            {itemCount}
          </div>
        </Link>
        <span className=" text-white text-sm cursor-pointer">
          {signedIn ? (
            <button
              className=" w-fit h-fit px-4 py-2"
              onClick={() => setSignOutModal((prev) => !prev)}
            >
              Guest - Sign Out
            </button>
          ) : (
            <button
              onClick={() => setModal((prev) => !prev)}
              className=" w-fit h-fit px-4 py-2"
            >
              Sign In
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
