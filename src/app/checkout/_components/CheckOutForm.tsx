import React from "react";
import Input from "./input";

const CheckOutForm = () => {
  return (
    <div className="size-full bg-theme-white p-15 flex flex-col gap-10 rounded-md">
      <h1 className="uppercase tracking-[1.2px] text-2xl font-bold">
        CheckOut
      </h1>
      <div className="mt-5 flex flex-col gap-10 font-bold">
        <h2 className="text-theme-dark-orange text-left uppercase traking-[1.2px]">
          Billing details
        </h2>
        <Input name="Name" placeholder="John Doe" error={"lol"} />
      </div>
    </div>
  );
};

export default CheckOutForm;
