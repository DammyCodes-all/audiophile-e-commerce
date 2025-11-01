import Image from "next/image";
const About = () => {
  return (
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
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
