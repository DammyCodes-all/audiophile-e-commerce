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
  const earphone = db.data.find(
    (data) => data.category === "earphones" && data.slug === id
  );
  if (!earphone) notFound();
  const imageUrl = earphone.image.mobile;
  const isNewProduct = earphone.new || false;
  return (
    <main className="flex flex-col px-10 lg:px-[165px] space-y-13">
      <div className="w-full text-lg pt-19">
        <GoBackButton />
      </div>
      <CartProductShow
        imageUrl={imageUrl}
        name={earphone.name}
        isNew={isNewProduct}
        category="earphones"
        price={earphone.price}
        desc={earphone.description}
      />
      <FeaturesAndContent
        features={earphone.features}
        includes={earphone.includes}
      />
      <Gallery gallery={earphone.gallery} />
      <p className="w-full text-center flex text-black items-center justify-center text-2xl font-bold uppercase">
        You may also like
      </p>
      <div className="flex sm:flex-row flex-col justify-center items-center md:justify-between gap-10">
        {earphone.others.map((item) => (
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
