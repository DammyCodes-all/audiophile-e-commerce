import navLinks from "@/lib/constants";
import { ShoppingCart, Menu } from "lucide-react";
import { NavLink } from "./nav-link";

const Navbar = () => {
  return (
    <div className="w-full  flex fixed top-0 justify-center items-center px-10 lg:px-[165px]">
      <div className="flex justify-between items-center py-8 lg:py-9 max-w-[1110px] mx-auto border-b border-theme-white w-full">
        <div className="flex gap-9 justify-center items-center">
          <Menu className="text-theme-white md:hidden cursor-pointer" />
          <h2 className="font-extrabold text-theme-white text-lg md:text-xl lg:text-2xl">
            audiophile
          </h2>
        </div>

        <nav className="md:flex gap-8 items-center justify-center leading-0.5 text-md hidden">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} name={link.name} />
          ))}
        </nav>

        <ShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
