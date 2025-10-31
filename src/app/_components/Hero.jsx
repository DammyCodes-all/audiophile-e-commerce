import Image from "next/image";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="bg-theme-dark min-h-dvh pt-30 flex justify-center px-10 lg:px-[165px] md:justify-between items-center relative overflow-hidden">
      <div className="space-y-6 text-center md:text-left z-10">
        <h3 className="font-normal text-theme-white/50 tracking-[10px] leading-[100%] text-center md:text-left">
          NEW PRODUCTS
        </h3>
        <h1 className="font-bold tracking-[2px] leading-[58px] uppercase text-[56px]">
          XX99 Mark II <br /> Headphones
        </h1>
        <p className="text-theme-white/75 leading-[25px] text-[15px] max-w-[349px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button className="uppercase flex justify-center items-center rounded-none font-bold tracking-[1px] bg-theme-dark-orange hover:bg-theme-light-orange transition-colors duration-300 text-sm cursor-pointer px-8 py-4 hover:border-theme-dark-orange hover:border-2">
            See Product
          </Button>
        </div>
      </div>
      <div
        className="overflow-x-hidden
        absolute inset-0 flex justify-center items-center
        md:static md:flex-none
        z-0
      "
      >
        <Image
          src={"/images/hero.png"}
          alt="bg-hero"
          width={600}
          height={600}
          className="
            object-cover mt-10 md:-mt-15
            w-[700px] h-[700px] sm:w-[800px] sm:h-[800px] opacity-40
            md:w-[500px] md:h-[500px] md:opacity-70
          "
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
