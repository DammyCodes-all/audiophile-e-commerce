import Image from "next/image";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="bg-theme-dark min-h-dvh flex justify-center px-4 sm:px-10 lg:px-[165px] md:justify-between items-center relative overflow-hidden pb-10 ">
      <div className="space-y-6 text-center md:text-left z-10">
        <h3 className="font-normal text-theme-white/50 tracking-[6px] sm:tracking-[10px] leading-[100%] text-xs sm:text-sm md:text-base text-center md:text-left">
          NEW PRODUCTS
        </h3>
        <h1 className="font-bold tracking-[1px] sm:tracking-[2px] leading-[110%] uppercase text-[2rem] sm:text-[2.5rem] md:text-[56px]">
          XX99 Mark II <br /> Headphones
        </h1>
        <p className="text-theme-white/75 leading-[22px] text-xs sm:text-sm md:text-[15px] max-w-[349px] mx-auto md:mx-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button className="uppercase flex justify-center items-center rounded-none font-bold tracking-[1px] bg-theme-dark-orange hover:bg-theme-light-orange transition-colors duration-300 text-xs sm:text-sm cursor-pointer px-6 sm:px-8 py-3 sm:py-4 hover:border-theme-dark-orange hover:border-2">
            See Product
          </Button>
        </div>
      </div>
      <div
        className="
        absolute inset-0 flex justify-center items-center
        md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
        size-full
        z-0
      "
      >
        <Image
          src={"/images/hero-desktop.jpg"}
          alt="bg-hero"
          fill
          className="opacity-70 hidden md:block object-cover object-center"
          loading="eager"
        />
        <Image
          src={"/images/hero.png"}
          alt="bg-hero"
          width={600}
          height={400}
          className="block md:hidden object-contain w-full max-h-[600px] sm:max-h-[750px] -mt-8 opacity-40 pointer-events-none transform -translate-y-2 scale-105"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
