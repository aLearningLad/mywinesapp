import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useStore } from "../../(store)/store";

interface CartItemProps {
  title: string;
  img: string;
  price: string | number;
  desc: string;
  id: number;
  handleRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  title,
  img,
  price,
  desc,
  handleRemove,
  id,
}) => {
  return (
    <div className=" w-full lg:w-7/12 group bg-neutral-300 bg-opacity-40 max-h-fit min-h-[150px] border-4 rounded-xl hover:scale-95 transition duration-300 p-2 hover:border-transparent hover:bg-cyan-300 hover:bg-opacity-50 flex">
      <div className=" w-fit h-full flex items-center">
        <Image
          src={img}
          width={140}
          height={120}
          className=" rounded-xl"
          alt="cartImg"
        />
      </div>

      <div className=" w-9/12 h-full flex items-center">
        <p className=" text-xl text-neutral-600 group-hover:text-neutral-900 font-semibold pl-2">
          {title}
        </p>
      </div>
      <div className=" h-full gap-1 w-fit lg:w-2/12 flex items-center justify-center pl-3 flex-col">
        <p className=" group-hover:text-xl transition duration-300">
          @R{price}
        </p>
        <button
          onClick={handleRemove}
          className=" lg:group-hover:flex lg:hidden flex transition duration-300 ease-in"
        >
          <BsFillTrash3Fill size={24} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
