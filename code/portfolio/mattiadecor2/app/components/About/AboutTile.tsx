import Image from "next/image";

interface AboutTilesProps {
  img: string;
  title: string;
  desc: string;
  cat: string;
  link: string;
}

const AboutTiles: React.FC<AboutTilesProps> = ({
  img,
  title,
  desc,
  cat,
  link,
}) => {
  return (
    <div className="group items-center text-center lg:text-justify lg:h-1/2 w-full h-full p-4 lg:w-1/2 hover:scale-90 transition rounded-xl duration-300 flex flex-col serviceHover">
      <span className=" h-[90px] lg:h-[60px] flex justify-center lg:justify-start">
        <Image
          src={img}
          width={80}
          height={60}
          objectFit="cover"
          alt="img"
          className="rounded-full bg-white p-1"
        />
      </span>
      <span className=" w-full h-fit py-2 justify-start text-center lg:text-start">
        <p className=" text-white text-xl font-bold flex items-center gap-2">
          {title}
          <p className=" text-[10px] text-neutral-300">for {cat}</p>
        </p>
      </span>
      <span className=" w-full h-fit text-sm text-neutral-300 py-1">
        {desc}
      </span>
      <span className=" w-full h-fit flex justify-center mt-2 lg:mt-0 lg:justify-end">
        <button className=" group-hover:bg-black group-hover:text-white w-fit h-fit px-5 bg-white text-black rounded-xl py-2">
          <a className="h-full w-full" href={link} target="_blank">
            Learn More
          </a>
        </button>
      </span>
    </div>
  );
};

export default AboutTiles;
