import { CareHeading } from "..";
import { careData } from "../../myData/careData";
import Image from "next/image";

const Care = () => {
  return (
    <section className=" w-full h-screen px-20 hidden lg:flex flex-col pt-28">
      <CareHeading />
      <div className=" w-full h-full flex">
        <ul className=" w-7/12 h-5/6 flex flex-col">
          {careData.map((item) => (
            <div key={item.title} className=" flex w-full h-full items-center">
              <div className=" w-2/12 h-full flex justify-end pr-1 items-center">
                <Image
                  src={item.img}
                  width={50}
                  height={50}
                  alt="careimg"
                  className=""
                />
              </div>
              <div className=" flex w-full flex-col">
                <span className=" w-full h-fit text-xl font-semibold">
                  {item.title}
                </span>
                <span className=" w-full text-start text-sm font-thin">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </ul>
        <div className=" w-5/12 h-full p-[56px]">
          <div className=" w-full h-full relative">
            <Image
              src="/assets/style3.jpg"
              fill
              objectFit="cover"
              alt="careimgright"
              className=" absolute rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Care;
