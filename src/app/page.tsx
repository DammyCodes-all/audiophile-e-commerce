import Hero from "@/app/_components/Hero";
import ProductShowContainer from "@/components/product-showcard-container";
import { Zx9Showcase } from "./_components/zx9-showcase";
import Image from "next/image";
import { BigBtn } from "@/components/btn";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="min-h-dvh pt-30 mx-auto flex-col flex justify-center items-center px-10 lg:px-[165px]">
        <ProductShowContainer />
        {/* {speakers and airpods showcase} */}
        <section className="space-y-8 mt-30 size-full">
          <Zx9Showcase />
          <div className="bg-theme-lightgray rounded-md w-full h-80 relative overflow-hidden">
            <div className="absolute inset-0 size-full">
              <Image
                src={"/images/zx7-speaker.png"}
                alt="zx7-speaker"
                fill
                className="scale-x-[-1] object-cover object-bottom-right"
              />
            </div>
            <div className="text-theme-black z-10 w-7/10 md:w-5/10 h-full flex items-center px-6 sm:px-12 md:px-18">
              <div className="relative z-20 p-6 flex flex-col justify-center h-full">
                <h1 className="font-bold tracking-[2px] text-2xl uppercase w-fit">
                  ZX7 SPEAKER
                </h1>
                <BigBtn
                  text="SEE PRODUCT"
                  className="bg-transparent border-2 border-theme-black hover:bg-theme-black mt-8 text-black hover:text-white w-fit"
                />
              </div>
            </div>
          </div>
          <section className="flex justify-between items-center w-full h-80 sm:flex-row flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="rounded-lg w-full h-full overflow-hidden">
              <Image
                src={"/images/yx1-earphone.jpg"}
                alt="yx1-earphone"
                width={400}
                height={400}
                className="rounded-lg object-cover size-full"
              />
            </div>
            <div className="rounded-lg bg-theme-lightgray size-full flex flex-col items-center justify-center text-theme-black">
              <h1 className="font-bold tracking-[2px] text-2xl uppercase w-fit">
                yx1 earphones
              </h1>
              <BigBtn
                text="SEE PRODUCT"
                className="bg-transparent border-2 border-theme-black hover:bg-theme-black mt-8 text-black hover:text-white w-fit"
              />
            </div>
          </section>
        </section>
        {/* brief about section */}
        <section className="w-full mt-20 justify-between items-center flex gap-2 md:flex-row flex-col">
          <div className="size-full md:order-1">
            <Image
              src={"/images/image-best-gear.jpg"}
              alt=""
              width={500}
              height={500}
              className="object-cover size-full rounded-md"
            />
          </div>
          <div className="size-full flex flex-col justify-center px-5 text-center md:text-left ">
            <h2 className="text-black font-bold leading-11 tracking-[1.43px] uppercase text-3xl">
              Bringing you the
              <span className="text-theme-dark-orange"> best</span> audio gear
            </h2>
            <p className="text-theme-black/75 leading-[25px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
