import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";

interface HandPickedCardProps {
  title: string;
  img: string;
  price: string;
  id: number;
}

const HandPickedCard: React.FC<HandPickedCardProps> = ({
  title,
  img,
  price,
  id,
}) => {
  return (
    <div className=" w-full h-full flex flex-col">
      <div className=" w-full h-[70%] relative">
        <Image
          src={img}
          fill
          className=" rounded-tr-2xl rounded-tl-2xl"
          objectFit="cover"
          alt="handpickedcardimg"
        />
        <div className=" absolute bottom-0 w-full h-[120px] px-4 py-1 pickedLower flex items-end">
          <span className=" text-xl font-semibold">{title}</span>
        </div>
      </div>
      <div className=" w-full h-fit flex justify-between px-2 items-center">
        <span className=" text-black text-2xl">{price}</span>
        <Link
          href="/AllProducts"
          className=" w-[30px] hover:scale-105 transition duration-300 flex justify-center text-white items-center h-[30px] p-3 bg-cyan-500 rounded-full text-3xl"
        >
          +
        </Link>
      </div>
    </div>
  );
};

export default HandPickedCard;
