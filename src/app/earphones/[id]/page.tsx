import db from "@/lib/db.json";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/go-back";
const Dynamicpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const earphones = db.data.find(
    (data) => data.category === "earphones" && data.slug === id
  );
  if (!earphones) notFound();
  console.log(earphones, id);
  return (
    <main className="flex flex-col gap-30 px-10 lg:px-[165px]">
      <div className="w-full text-lg py-19">
        <GoBackButton />
      </div>
    </main>
  );
};

export default Dynamicpage;
