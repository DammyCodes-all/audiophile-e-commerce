"use client";

import { BigBtn } from "@/components/btn";
import { calculateCartTotal, useCartContext } from "@/components/CartContext";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal = ({ open, onOpenChange }: SuccessModalProps) => {
  const { cartProducts, clearCart } = useCartContext();
  const router = useRouter();
  const firstCartItems = cartProducts[0];

  const handleClose = () => {
    clearCart();
    onOpenChange(false);
    router.push("/");
  };

  if (!firstCartItems) return null;

  const grandTotal = calculateCartTotal(cartProducts) + 50 + 1079;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-theme-white rounded-md p-8 max-w-[90vw] sm:max-w-lg">
        <div className="flex flex-col justify-center gap-6 sm:gap-8">
          <div className="w-full">
            <div className="size-14 sm:size-16 rounded-full bg-theme-dark-orange p-3 sm:p-4 flex items-center justify-center">
              <Check className="text-white size-full" />
            </div>
          </div>

          <div className="font-bold text-xl sm:text-2xl tracking-[1.2px] flex flex-col gap-2">
            <p className="text-theme-black uppercase tracking-[1.2px] ">
              Thank you <br /> for your order
            </p>
            <p className="text-theme-black/50 text-base sm:text-lg font-normal tracking-normal">
              You will receive an email confirmation shortly.
            </p>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-stretch overflow-hidden rounded-lg">
            <div className="flex-1 bg-theme-lightgray flex flex-col gap-4 items-center justify-center p-6 size-full">
              <div className="flex  justify-between items-center border-b border-theme-black/8 pb-4 w-full ">
                <div className="flex gap-2 items-center">
                  <div className="flex items-center justify-center aspect-square w-16 sm:w-20 overflow-hidden">
                    <Image
                      src={firstCartItems.imageUrl}
                      alt={firstCartItems.name}
                      width={70}
                      height={70}
                      className="object-contain object-center size-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1 text-black text-sm sm:text-base text-center sm:text-left">
                    <p className="font-bold">{firstCartItems.name}</p>
                    <p className="text-black/50 font-bold">
                      ${firstCartItems.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-theme-black/50 font-bold text-lg">
                  x{firstCartItems.amount}
                </p>
              </div>
              {cartProducts.length > 1 && (
                <div className="text-theme-black/50 text-xs sm:text-sm font-bold ">
                  and {cartProducts.length - 1} other item
                  {cartProducts.length - 1 > 1 ? "s" : ""}
                </div>
              )}
            </div>

            <div className="bg-theme-black flex flex-col gap-2 p-6 justify-center items-center sm:items-start sm:w-1/2">
              <p className="text-theme-white/50 text-xs uppercase">
                Grand Total
              </p>
              <p className="text-white font-bold text-xl sm:text-2xl tracking-[1.2px]">
                ${grandTotal.toLocaleString()}
              </p>
            </div>
          </div>

          <AlertDialogAction asChild>
            <div onClick={handleClose}>
              <BigBtn text="back to home" className="w-full" />
            </div>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SuccessModal;
