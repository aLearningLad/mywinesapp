"use client";

import { CartItemType } from "@/myTypes";
import { useStore } from "../../(store)/store";
import toast from "react-hot-toast";
import { CartItem } from "..";

const CartMap = () => {
  const removeItem = useStore((store) => store.removeFromCart);
  const entireCart = useStore((store) => store.cartItems);

  const handleRemove = (item: CartItemType) => {
    removeItem(item);
    toast(`You removed ${item.title} from cart`);
  };

  return (
    <div className=" w-full h-full flex items-center flex-col gap-2">
      {entireCart.map((item: CartItemType) => (
        <CartItem
          id={item.id as number}
          key={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          desc={item.desc}
          handleRemove={() => handleRemove(item)}
        />
      ))}
    </div>
  );
};

export default CartMap;
