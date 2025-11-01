import About from "@/components/about";
import PageHead from "@/components/page-head";
import Product from "@/components/product";
import ProductShowContainer from "@/components/product-showcard-container";
import { earphoneProductList } from "@/lib/constants";

const EarphonesPage = () => {
  return (
    <>
      <PageHead>EARPHONES</PageHead>
      <main className="min-h-dvh px-10 lg:px-[165px] flex flex-col gap-10 space-y-20 pb-20">
        <section
          id="product-container"
          className="w-full flex-col gap-40 items-center pt-30 flex"
        >
          {earphoneProductList.map((product) => {
            const order = product.name === "zx7";
            return (
              <Product
                key={product.name}
                imageUrl={product.imageUrl}
                category={"SPEAKERS"}
                desc={product.desc}
                name={product.name}
                order={order}
              />
            );
          })}
        </section>
        <div className="w-full mt-20">
          <ProductShowContainer />
        </div>
        <About />
      </main>
    </>
  );
};

export default EarphonesPage;
