import GoBackButton from "@/components/go-back";
import CheckOutForm from "./_components/CheckOutForm";
import Summary from "./_components/Summary";

const CheckOutPage = () => {
  return (
    <div className="bg-theme-lightgray size-full min-h-screen">
      <main className="text-theme-black px-10 lg:px-[125px] py-5 space-y-10 pt-20">
        <GoBackButton />
        <section className="flex justify-between gap-10 flex-col md:flex-row">
          <CheckOutForm />
          <Summary />
        </section>
      </main>
    </div>
  );
};

export default CheckOutPage;
