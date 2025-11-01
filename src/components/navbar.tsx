"use client";

import { useState } from "react";
import { navLinks } from "@/lib/constants";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink } from "./nav-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <ShoppingCart />
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
