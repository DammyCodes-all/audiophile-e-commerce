"use client";

import ProductCartBtn from "./ProductCartBtn";
import { useState } from "react";
import Image from "next/image";
const CartProduct = ({
  amount,
  name,
  price,
  imageUrl,
}: {
  amount: number;
  name: string;
  price: number;
  imageUrl: string;
}) => {
  const [count, setCount] = useState<number>(amount ?? 0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));
  return (
    <div className="w-full flex justify-between items-center gap-5">
      <div>
        <div className="flex items-center justify-center aspect-square">
          <Image
            src={imageUrl}
            alt={name}
            width={100}
            height={100}
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-center text-black">
          <p className="font-bold">{name}</p>
          <p className="text-black/50 font-bold">${price.toLocaleString()}</p>
        </div>
      </div>
      <ProductCartBtn
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  );
};

export default CartProduct;
