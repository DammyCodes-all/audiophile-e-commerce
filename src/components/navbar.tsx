"use client";

import { useState } from "react";
import { navLinks } from "@/lib/constants";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink } from "./nav-link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { calculateCartTotal, useCartContext } from "./CartContext";
import CartProduct from "./CartProduct";
import { BigBtn } from "./btn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartProducts, clearCart } = useCartContext();

  return (
    <div className="w-full flex bg-theme-dark justify-center items-center px-10 lg:px-[165px] z-50 ">
      <div className="flex justify-between items-center py-5 lg:py-9 max-w-[1110px] mx-auto border-b border-theme-white/20 w-full">
        <div className="flex gap-9 justify-center items-center">
          {/* Hamburger Icon for mobile */}
          <button
            className="text-theme-white md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
          <h2 className="font-extrabold text-theme-white text-2xl hidden sm:block">
            audiophile
          </h2>
        </div>

        <h2 className="font-extrabold text-theme-white text-2xl block sm:hidden">
          audiophile
        </h2>

        {/* Desktop Nav */}
        <nav className="md:flex gap-8 items-center justify-center leading-0.5 text-md hidden">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} name={link.name} />
          ))}
        </nav>

        <Dialog>
          <DialogTrigger asChild>
            <button
              aria-label="Open cart"
              className="text-theme-white cursor-pointer"
            >
              <ShoppingCart />
            </button>
          </DialogTrigger>
          <DialogContent
            position="top-right-sm"
            className="text-theme-black p-10"
            showCloseButton={false}
          >
            <DialogTitle className="flex justify-between items-center w-full">
              <p className="uppercase font-bold">
                Cart {cartProducts.length ? `(${cartProducts.length})` : ""}
              </p>
              <Button
                onClick={() => clearCart()}
                variant={"ghost"}
                className="text-theme-black/50 text-sm underline hover:bg-theme-white hover:text-theme-dark-orange transition-colors cursor-pointer duration-200"
              >
                Remove all
              </Button>
            </DialogTitle>
            {cartProducts.length === 0 && (
              <DialogDescription>Your cart is empty.</DialogDescription>
            )}
            <div className="flex flex-col gap-10 justify-center">
              {cartProducts.map((product) => (
                <CartProduct
                  name={product.name}
                  key={product.name}
                  amount={product.amount}
                  price={product.price}
                  imageUrl={product.imageUrl ?? ""}
                />
              ))}
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-theme-black/50 ">TOTAL</p>
              <h2 className="text-xl font-bold">{`$${calculateCartTotal(
                cartProducts
              ).toLocaleString()}`}</h2>
            </div>
            <BigBtn text="CheckOut" className="w-full" />
          </DialogContent>
        </Dialog>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 md:hidden">
          <button
            className="absolute top-8 right-8 text-theme-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                name={link.name}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
