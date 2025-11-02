"use client";

import { Plus, Minus } from "lucide-react";

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const ProductCartBtn = ({ count, onIncrement, onDecrement }: Props) => {
  return (
    <div className="flex bg-theme-lightgray p-3 gap-4 justify-between items-center w-28 h-full">
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        disabled={count === 0}
        className={`flex items-center justify-center ${
          count === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Minus className="size-3 hover:text-theme-dark-orange transition-colors duration-200 text-theme-black/50" />
      </button>

      <p className="font-bold">{count}</p>

      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="flex items-center justify-center cursor-pointer"
      >
        <Plus className="size-3 hover:text-theme-dark-orange transition-colors duration-200 text-theme-black/50" />
      </button>
    </div>
  );
};

export default ProductCartBtn;
