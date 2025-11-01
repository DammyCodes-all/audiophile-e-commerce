import About from "@/components/about";
import PageHead from "@/components/page-head";
import Product from "@/components/product";
import ProductShowContainer from "@/components/product-showcard-container";
import { headphoneProductList } from "@/lib/constants";

const HeadPhonesPage = () => {
  return (
    <>
      <PageHead>HEADPHONES</PageHead>
      <main className="min-h-dvh px-10 lg:px-[165px] flex flex-col gap-10 space-y-20 pb-20">
        <section
          id="product-container"
          className="w-full flex-col gap-40 items-center pt-30"
        >
          {headphoneProductList.map((product) => {
            const order = product.name === "xx99 mark I";
            return (
              <Product
                key={product.name}
                imageUrl={product.imageUrl}
                category={"HEADPHONES"}
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

export default HeadPhonesPage;
