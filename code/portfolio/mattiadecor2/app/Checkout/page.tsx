"use client";

import { useStore } from "../(store)/store";
import {
  CartMap,
  CartTotal,
  Navbar,
  GratitudeModals,
  AuthModal,
} from "../components";
import Link from "next/link";
import { useState } from "react";

const CheckoutPage = () => {
  const entireCart = useStore((store) => store.cartItems);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const toggleSignIn = useStore((store) => store.setIsSignedIn);
  const signedIn = useStore((store) => store.isSignedIn);
  const [modal, setModal] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const handleCheckout = () => {
    setCheckout((prev) => !prev);

    if (signedIn) {
      setCheckoutModal((prev) => !prev);
    } else {
      // toggleSignIn();
      setModal(false);
    }
  };

  return (
    <section className=" min-h-screen max-h-fit cobg flex-col w-full text-black flex items-center relative">
      {checkout && (
        <div className=" z-40 fixed top-0 right-0 left-0 bottom-0">
          {signedIn ? <GratitudeModals /> : <AuthModal setModal={setModal} />}
        </div>
      )}
      <nav className=" bg-black w-full h-[15vh] flex items-center bg-opacity-60 fixed backdrop-blur-md">
        <Navbar />
      </nav>

      {entireCart.length > 0 ? (
        <div className=" w-full min-h-screen max-h-fit flex-col lg:flex-row flex mt-[20vh] p-1 lg:p-20">
          <div className=" w-full lg:min-h-[65vh] h-full lg:max-h-fit">
            <CartMap />
          </div>
          <section className=" w-full lg:w-3/12 h-fit lg:h-[35vh] flex justify-center items-start pl-4 rounded-xl flex-col">
            <div className=" w-full h-[70%] p-4">
              <h1 className=" text-3xl font-semibold text-neutral-600">
                Your Total:
              </h1>
              <CartTotal />
            </div>
            <div className=" h-[30%] w-full flex justify-start py-3">
              <button
                onClick={handleCheckout}
                className=" text-white w-full h-fit py-3 bg-black rounded-xl text-3xl"
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className=" h-screen w-full flex justify-center items-center flex-col gap-5">
          <span className=" w-full h-fit flex justify-center text-center text-4xl">
            Your cart is empty right now...
          </span>
          <span>
            <Link
              className=" w-fit shopButton h-fit py-3 px-7 bg-black text-white rounded-xl"
              href="/AllProducts"
            >
              Fill my cart
            </Link>
          </span>
        </div>
      )}
    </section>
  );
};

export default CheckoutPage;
