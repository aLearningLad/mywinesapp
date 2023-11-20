import Image from "next/image";

interface ProductCardProps {
  cardWidth: string;
  cardHeight: string;
  title: string;
  desc: string;
  info: string;
  img: string;
  price: number;
  displayedPrice: string;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  cardHeight,
  cardWidth,
  title,
  desc,
  info,
  img,
  price,
  displayedPrice,
}) => {
  return (
    <div
      style={{ height: cardHeight, width: cardWidth }}
      className="group relative cursor-pointer cardHover hover:scale-90 transition duration-300 bg-neutral-500 bg-opacity-40 rounded-2xl flex lg:flex-row flex-col"
    >
      <div className=" text-3xl gap-1 flex-col text-center rounded-2xl text-neutral-300 z-40 group-hover:hidden flex justify-center items-center absolute h-full w-full bg-black bg-opacity-70 left-0 right-0 bottom-0 top-0 ">
        View
        <span className=" text-5xl flex w-fit h-fit text-white">{title}</span>
        <span className="flex mt-4 text-sm items-center gap-2">
          from
          <h4 className=" text-lg">{displayedPrice}</h4>
        </span>
      </div>
      <div className=" w-full transition duration-300 group-hover:w-5/12 h-full relative">
        <Image
          src={img}
          fill
          alt="itemimg"
          objectFit="cover"
          className="absolute rounded-2xl group-hover:rounded-tl-2xl group-hover:rounded-bl-2xl  "
        />
      </div>
      <div className=" hidden w-7/12 h-full group-hover:flex flex-col">
        <div className="hidden h-full  group-hover:flex flex-col pl-4 py-10 pr-3">
          <h1 className="text-4xl font-bold w-full justify-start flex text-start">
            {title}
          </h1>
          <span className=" mt-7 text-neutral-800 text-2xl hidden group-hover:flex justify-start text-start w-full py-2">
            {desc}
          </span>
          <span className=" hidden mt-3 w-full group-hover:flex text-start text-neutral-700 h-fit overflow-auto">
            {info}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
