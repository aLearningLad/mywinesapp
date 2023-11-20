import Image from "next/image";

interface ServiceTabProps {
  title: string;
  desc: string;
  img: string;
}

const ServiceTab: React.FC<ServiceTabProps> = ({ title, desc, img }) => {
  return (
    <div className=" h-full py-5 flex w-full">
      <div className=" relative w-4/12 h-full flex justify-end pr-2 items-center">
        <Image src={img} alt="serviceimg" height={60} width={60} className="" />
      </div>
      <div className=" w-8/12 h-full flex items-start justify-center flex-col">
        <h1 className=" text-xl font-semibold text-start">{title}</h1>
        <p className=" text-neutral-700 text-start">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceTab;
