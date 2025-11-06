"use client";

import ProductCartBtn from "./ProductCartBtn";
import Image from "next/image";
import { useCartContext } from "./CartContext";
const CartProduct = ({
  amount,
  name,
  price,
  imageUrl,
  summary,
}: {
  amount: number;
  name: string;
  price: number;
  imageUrl: string;
  summary?: boolean;
}) => {
  const { updateAmount } = useCartContext();

  const increment = () => updateAmount(name, amount + 1);
  const decrement = () => updateAmount(name, Math.max(0, amount - 1));
  return (
    <div className="w-full flex justify-between items-center gap-5">
      <div className="flex gap-5 items-center">
        <div className="flex items-center bg-theme-lightgray rounded-xl justify-center aspect-square w-16 sm:w-20">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={70}
              height={70}
              className="object-contain object-center size-full"
            />
          ) : null}
        </div>
        <div className="flex flex-col justify-center gap-2 text-black text-md">
          <p className="font-bold md:text-md text-sm">{name}</p>
          <p className="text-black/50 font-bold md:text-md text-sm">
            ${price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex-1">
        {summary ? (
          <p className="font-bold text-theme-black/50">x{amount}</p>
        ) : (
          <ProductCartBtn
            count={amount}
            onIncrement={increment}
            onDecrement={decrement}
          />
        )}
      </div>
    </div>
  );
};

export default CartProduct;
