import db from "@/lib/db.json";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/go-back";
import CartProductShow from "@/components/cart-productshow";
import FeaturesAndContent from "@/components/FeaturesAndContent";
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
    </main>
  );
};

export default Dynamicpage;
