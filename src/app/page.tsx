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
            <div className="text-theme-black z-10 w-5/10 h-full flex items-center px-12 md:px-18">
              <div className="relative z-20 p-6 flex flex-col justify-center h-full items-center">
                <h1 className="font-bold tracking-[2px] text-2xl uppercase">
                  ZX7 SPEAKER
                </h1>
                <BigBtn
                  text="SEE PRODUCT"
                  className="bg-transparent border-2 border-theme-black hover:bg-theme-black mt-8 text-black hover:text-white w-fit"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="min-h-[50dvh]"></div>
      </section>
    </main>
  );
}
