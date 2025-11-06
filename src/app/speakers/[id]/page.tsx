import db from "@/lib/db.json";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/go-back";
import CartProductShow from "@/components/cart-productshow";
import FeaturesAndContent from "@/components/FeaturesAndContent";
import Gallery from "@/components/Gallery";
import ProductCard from "@/app/_components/ProductCard";
import About from "@/components/about";
import ProductShowContainer from "@/components/product-showcard-container";
import { getCategoryFromSlug } from "@/lib/utils";

const Dynamicpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const speaker = db.data.find(
    (data) => data.category === "speakers" && data.slug === id
  );
  if (!speaker) notFound();
  const imageUrl = speaker.image.mobile;
  const isNewProduct = speaker.new || false;
  return (
    <main className="flex flex-col px-10 lg:px-[165px] space-y-13">
      <div className="w-full text-lg pt-19">
        <GoBackButton />
      </div>
      <CartProductShow
        imageUrl={imageUrl}
        name={speaker.name}
        isNew={isNewProduct}
        category="speakers"
        price={speaker.price}
        desc={speaker.description}
      />
      <FeaturesAndContent
        features={speaker.features}
        includes={speaker.includes}
      />
      <Gallery gallery={speaker.gallery} />
      <p className="w-full text-center flex items-center justify-center text-2xl font-bold uppercase text-black">
        You may also like
      </p>
      <div className="flex sm:flex-row flex-col justify-center items-center md:justify-between gap-10">
        {speaker.others.map((item) => (
          <ProductCard
            key={item.name}
            imageUrl={item.image.tablet}
            name={item.name}
            href={`${getCategoryFromSlug(item.slug)}/${item.slug}`}
          />
        ))}
      </div>
      <div className="w-full mt-40">
        <ProductShowContainer />
      </div>
      <About />
    </main>
  );
};

export default Dynamicpage;
