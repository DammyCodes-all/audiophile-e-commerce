type Include = { quantity: number; item: string };

const FeaturesAndContent = ({
  features,
  includes = [],
}: {
  features: string;
  includes?: Include[];
}) => {
  return (
    <section className="flex md:flex-row flex-col gap-15 md:justify-between justify-center text-theme-black">
      <div className="size-full flex flex-col justify-center gap-5">
        <h1 className="font-bold tracking-[1.2px] uppercase text-2xl">
          Features
        </h1>
        <p className="text-theme-black/50">{features}</p>
      </div>

      <div className="size-full flex sm:flex-row flex-col justify-between md:flex-col md:w-4/10">
        <h1 className="font-bold tracking-[1.2px] uppercase text-2xl size-full md:size-fit">
          in the box
        </h1>

        <ul className="mt-4 space-y-3 size-full md:size-fit">
          {includes.map((inc, idx) => (
            <li key={`${inc.item}-${idx}`} className="flex items-start gap-4">
              <span className="font-bold text-theme-dark-orange min-w-9">
                {inc.quantity}x
              </span>
              <span className="text-theme-black/60">{inc.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesAndContent;
