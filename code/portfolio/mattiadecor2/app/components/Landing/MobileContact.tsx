import Link from "next/link";

const MobileContact = () => {
  return (
    <section className=" flex lg:hidden justify-center items-center w-full h-[25vh] mt-8">
      <Link
        className=" w-9/12 h-4/6 rounded-[34px] items-center text-center flex justify-center text-4xl active:bg-white active:text-cyan-800 text-white bg-cyan-800 border-2 border-white"
        href="/AllProducts"
      >
        Shop
      </Link>
    </section>
  );
};

export default MobileContact;
