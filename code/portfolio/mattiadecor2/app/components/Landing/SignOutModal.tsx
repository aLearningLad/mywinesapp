"use client";

import { useStore } from "@/app/(store)/store";

interface SignOutModalProps {
  setSignOutModal: (value: boolean) => void;
}

const SignOutModal: React.FC<SignOutModalProps> = ({ setSignOutModal }) => {
  const signIn = useStore((store) => store.setIsSignedIn);

  const handleSignIn = () => {
    signIn();
    setSignOutModal(false);
  };

  return (
    <section className=" w-full  h-screen top-0 bottom-0 left-0 right-0 fixed z-50 bg-black bg-opacity-70 flex justify-center items-center">
      <div className=" h-4/6 p-3 w-6/12 modalShadow bg-white rounded-[40px] flex-col justify-center flex items-center">
        <span className=" h-fit w-full flex flex-col items-center text-center text-2xl">
          Are you sure you wish to sign out?
        </span>
        <span className=" w-full flex justify-center text-center h-fit mt-9 ">
          <button
            onClick={handleSignIn}
            className=" w-fit hover:scale-90 border-2 border-black transition duration-300 hover:bg-white hover:text-black h-fit px-10 py-2 bg-black text-white rounded-2xl text-2xl"
          >
            Proceed
          </button>
        </span>
      </div>
    </section>
  );
};

export default SignOutModal;
