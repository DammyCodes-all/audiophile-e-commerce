"use client";

import { BigBtn } from "@/components/btn";
import { calculateCartTotal, useCartContext } from "@/components/CartContext";
import CartProduct from "@/components/CartProduct";
const Summary = () => {
  const { cartProducts } = useCartContext();
  return (
    <div className="size-full rounded-md md:w-4/10 bg-theme-white flex flex-col gap-8 p-10">
      <h2 className="uppercase tracking-[1.2px] font-bold">summary</h2>
      <div className="flex flex-col gap-5 justify-center ">
        {cartProducts.map((product) => (
          <CartProduct
            name={product.name}
            key={product.name}
            amount={product.amount}
            summary
            price={product.price}
            imageUrl={product.imageUrl ?? ""}
          />
        ))}
      </div>
      <div>
        <div className="w-full flex justify-between items-center">
          <p className="text-theme-black/50 ">TOTAL</p>
          <h2 className="text-xl font-bold">{`$${calculateCartTotal(
            cartProducts
          ).toLocaleString()}`}</h2>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-theme-black/50 uppercase">shipping</p>
          <h2 className="text-xl font-bold">{`$ 50`}</h2>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-theme-black/50 uppercase">Vat(included)</p>
          <h2 className="text-xl font-bold">{`$ 1,079`}</h2>
        </div>

        <div className="w-full flex justify-between items-center mt-4">
          <p className="text-theme-black/50 uppercase">grand total</p>
          <h2 className="text-xl font-bold text-theme-dark-orange">{`$${(
            calculateCartTotal(cartProducts) +
            50 +
            1079
          ).toLocaleString()}`}</h2>
        </div>
      </div>
      <BigBtn text="Continue & pay" />
    </div>
  );
};

export default Summary;
