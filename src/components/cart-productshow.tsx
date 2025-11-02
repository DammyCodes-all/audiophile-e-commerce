"use client";

import Image from "next/image";
import { useState } from "react";
import ProductCartBtn from "./ProductCartBtn";
import { BigBtn } from "./btn";
import { useCartContext } from "./CartContext";

const CartProductShow = ({
  imageUrl,
  name,
  isNew,
  category,
  desc,
  price,
}: {
  imageUrl: string;
  name: string;
  isNew: boolean;
  category: string;
  desc: string;
  price: number;
}) => {
  const [count, setCount] = useState<number>(0);
  const { addToCart } = useCartContext();

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));

  const handleAddToCart = () => {
    if (count <= 0) return;
    addToCart({ amount: count, name, price, imageUrl });
    setCount(0);
  };
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-10 md:h-95 sm:h-100 lg:h-100">
      <div className="size-full bg-theme-lightgray overflow-hidden rounded-md flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="object-cover object-center"
        />
      </div>
      <div className="size-full flex-col space-y-3 justify-center items-center py-5  text-black text-left">
        <h4
          className={`tracking-[10px] text-theme-dark-orange text-md ${
            isNew ? "" : "opacity-0"
          }`}
        >
          NEW PRODUCT
        </h4>
        <h1 className="font-bold leading-11 tracking-[1.43px] uppercase text-4xl">
          {name} <br /> {category}
        </h1>
        <p className="text-theme-black/50 text-sm leading-6 mt-5">{desc}</p>
        <h1 className="font-bold">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h1>
        <div className="lg:w-9/10 w-full flex gap-4 items-center">
          <ProductCartBtn
            count={count}
            onIncrement={increment}
            onDecrement={decrement}
          />
          <BigBtn text="ADD to cart" className="h-full" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default CartProductShow;
