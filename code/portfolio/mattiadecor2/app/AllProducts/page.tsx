"use client";

import Link from "next/link";
import { MobileProductCard, Navbar, ProductCard } from "../components";
import { allProducts } from "../myData/allProducts";
import { BsFillBasket2Fill, BsHouseFill } from "react-icons/bs";
import { useStore } from "../(store)/store";
import { toast } from "react-hot-toast";
import { ProductCardType } from "@/myTypes";

const AllProducts = () => {
  const addToCart = useStore((store) => store.addToCart);

  const handleAddToCart = (item: ProductCardType) => {
    addToCart(item);
    toast(`Added ${item.title} to cart!`);
  };

  const itemCount = useStore((store) => store.cartItems.length);

  return (
    <section className="min-h-screen h-fit w-full flex flex-col mt-0 lg:mt-9 bg-gradient-to-br from-neutral-100 to-neutral-200">
      <nav className=" h-fit py-7 w-full hidden fixed top-0 backdrop-blur-md z-50 bg-white bg-opacity-60 lg:flex justify-center gap-8 px-20">
        <Link href="/" className=" w-fit h-full flex justify-end items-center">
          <BsHouseFill size={34} />
        </Link>
        <h1 className=" md:text-2xl text-xl xl:text-4xl font-semibold w-fit px-5 h-full flex items-center">
          Browse {"Mattia's"} Collection
        </h1>
        <span className="w-fit h-full justify-start flex items-center relative">
          <div className=" absolute w-[4px] h-[4px] top-0 right-0 rounded-full bg-cyan-700 text-white flex justify-center items-center p-2  ">
            {itemCount}
          </div>
          <Link href="/Checkout">
            <BsFillBasket2Fill size={30} />
          </Link>
        </span>
      </nav>
      <div className=" h-fit w-full flex lg:hidden bg-cyan-800">
        <Navbar />
      </div>
      <div className=" h-full w-full xl:hidden flex flex-col px-2 py-5 gap-5">
        {allProducts.map((item) => (
          <button onClick={() => handleAddToCart(item)} key={item.id}>
            <MobileProductCard
              id={item.id}
              title={item.title}
              desc={item.desc}
              info={item.info}
              price={item.price}
              img={item.img}
              displayedPrice={item.displayedPrice}
            />
          </button>
        ))}
      </div>
      <div className=" h-full w-full">
        <div className="xl:flex hidden xl:mt-9 mt-20 h-fit w-full flex-row overflow-auto xl:flex-wrap items-center p-10 gap-x-3 gap-y-4">
          {allProducts.map((card) => (
            <button
              onClick={() => handleAddToCart(card)}
              key={card.id}
              className=""
            >
              <ProductCard
                cardHeight={card.cardHeight}
                cardWidth={card.cardWidth}
                title={card.title}
                desc={card.desc}
                info={card.info}
                img={card.img}
                price={card.price}
                displayedPrice={card.displayedPrice}
                id={card.id}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
