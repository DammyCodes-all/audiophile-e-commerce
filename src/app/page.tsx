import Hero from "@/app/_components/Hero";
import ProductShowContainer from "@/components/product-showcard-container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="min-h-dvh pt-30 mx-auto flex-col flex justify-center items-center px-10 lg:px-[165px] gap-35">
        <ProductShowContainer />
        <div className="bg-theme-dark-orange w-full h-[560px] rounded-xl relative flex justify-between items-center">
          <div></div>
          <div>
            <h3 className="font-bold tracking-[2px] leading-14 text-[56px]">
              ZX9 <br /> SPEAKER
            </h3>
          </div>
          <div className="absolute inset-0 w-8/10 h-full">
            <Image
              src={"/images/oval.png"}
              alt=""
              className=""
              loading="lazy"
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
}
