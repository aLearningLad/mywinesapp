import Image from "next/image";

interface OptionTilesProps {
  img: React.ReactElement;
  title: string;
  desc: string;
}

const OptionTiles: React.FC<OptionTilesProps> = ({ img, title, desc }) => {
  return (
    <div className=" lg:h-1/2 w-full h-full p-4 lg:w-1/2 hover:scale-90 transition rounded-xl duration-300 flex flex-col serviceHover">
      <span className=" h-fit flex justify-center lg:justify-start">{img}</span>
      <span className=" w-full h-fit justify-start text-center lg:text-start">
        <p className=" text-white text-xl font-bold">{title}</p>
      </span>
      <span className=" w-full h-fit text-sm text-neutral-300">{desc}</span>
    </div>
  );
};

export default OptionTiles;
