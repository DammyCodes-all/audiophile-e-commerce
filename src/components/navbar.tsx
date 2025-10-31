import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full  flex fixed top-0 justify-center items-center px-10 md:px-20 lg:px-30">
      <div className="flex justify-between items-center py-5 max-w-[1110px] mx-auto border-b border-theme-white w-full">
        <h2 className="font-extrabold text-theme-white text-lg md:text-xl lg:text-2xl">
          audiophile
        </h2>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
