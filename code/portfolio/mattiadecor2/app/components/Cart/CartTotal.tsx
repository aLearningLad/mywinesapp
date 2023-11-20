"use client";

import { useStore } from "../../(store)/store";

const CartTotal = () => {
  const cartTotal = useStore((store) => store.cartTotal);

  return (
    <p className="text-xl flex items-center gap-1">
      R{cartTotal}
      <p className=" text-sm">incl. VAT</p>
    </p>
  );
};

export default CartTotal;
