import { productShowcaseData } from "@/lib/constants";
import ProductShowCard from "./product-showcard";

const ProductShowContainer = () => {
  return (
    <div className="container flex sm:gap-3 gap-25 justify-center items-center px-4 sm:flex-row flex-col">
      {productShowcaseData.map((product) => (
        <ProductShowCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductShowContainer;
