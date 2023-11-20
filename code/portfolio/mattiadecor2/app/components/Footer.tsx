import { NewsLetter } from ".";
import { footerData } from "../myData/footerData";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" w-full h-fit px-2 lg:px-5 py-4 lg:py-0 gap-4 lg:gap-0 lg:h-[46vh] footerbg text-white flex-col">
      <div className="flex lg:gap-0 gap-6 justify-center w-full h-[90%]">
        <section className=" w-4/12 h-full xl:flex hidden">
          <NewsLetter />
        </section>
        <section className=" w-full lg:w-8/12 h-full lg:gap-0 px-3 lg:px-0 lg:pl-2 flex">
          <div className=" w-1/2 h-full hidden lg:flex">
            {footerData.map((item) => (
              <div
                key={item.title}
                className=" w-full flex flex-col  justify-center gap-2 text-start h-full"
              >
                <h1 className=" text-2xl">{item.title}</h1>
                <p className=" text-sm">{item.desc1}</p>
                <p className=" text-sm">{item.desc2}</p>
                <p className=" text-sm">{item.desc3}</p>
              </div>
            ))}
          </div>
          <div className=" w-full gap-3  lg:w-1/2 h-full flex items-center justify-center lg:items-center lg:gap-2">
            <Image
              src="/assets/mattialogo.png"
              alt="logoimg"
              width={60}
              height={60}
              className=" rounded-full"
            />
            <h4 className=" text-sm text-white flex">
              {"Mattia's"} Decor is a curated decor hub. Explore our handpicked
              selection of Hygge & Scandinavian treasures. Elevate your space
              with timeless simplicity, warmth, and functional beauty.
            </h4>
          </div>
        </section>
      </div>
      <div className=" cursor-pointer px-3 lg:px-5 xl:px-7 text-[10px] font-thin w-full h-fit lg:py-0 py-7 lg:h-[10%] flex justify-center text-center items-center">
        &copy; Copyright - 2023 {"Mattia's"} Decor | Terms of Service | Privacy
        Policy
      </div>
    </footer>
  );
};

export default Footer;
