import Input from "./input";
import RadioOption from "@/app/checkout/_components/radio";
import { CheckoutFormData } from "../page";

interface CheckOutFormProps {
  formData: CheckoutFormData;
  setFormData: React.Dispatch<React.SetStateAction<CheckoutFormData>>;
  errors: Partial<Record<keyof CheckoutFormData, string>>;
  validateField: (name: keyof CheckoutFormData, value: string) => void;
}

const CheckOutForm = ({
  formData,
  setFormData,
  errors,
  validateField,
}: CheckOutFormProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof CheckoutFormData;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (value || errors[fieldName]) {
      validateField(fieldName, value);
    }
  };

  const handlePaymentMethodChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      paymentMethod: value as "e-Money" | "Cash on Delivery",
    }));
  };

  return (
    <div className="w-full md:w-[65%] size-full bg-theme-white p-6 md:p-10 flex flex-col gap-10 rounded-md font-bold">
      <h1 className="uppercase tracking-[1.2px] text-2xl font-bold">
        CheckOut
      </h1>
      <div className="mt-5 flex flex-col gap-10 font-bold">
        <h2 className="text-theme-dark-orange text-left uppercase traking-[1.2px]">
          Billing details
        </h2>
        <div className=" flex justify-between sm:items-center gap-4 sm:flex-row flex-col">
          <Input
            name="name"
            label="Name"
            placeholder="Alexei Ward"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Input
            name="email"
            label="Email "
            placeholder="alexei@mail.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </div>
        <div className=" flex justify-between sm:items-center gap-4 sm:flex-row flex-col">
          <Input
            name="phone"
            label="Phone Number"
            placeholder="+1 234-555-0136"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <div className="flex-1 hidden sm:block"></div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-10 font-bold">
        <h2 className="text-theme-dark-orange text-left uppercase traking-[1.2px]">
          shipping info
        </h2>
        <div className=" flex justify-between sm:items-center gap-4 sm:flex-row flex-col">
          <Input
            name="address"
            label="Address"
            placeholder="1137 Williams Avenue"
            value={formData.address}
            onChange={handleInputChange}
            error={errors.address}
          />
        </div>
        <div className=" flex justify-between sm:items-center gap-4 sm:flex-row flex-col">
          <Input
            name="zipCode"
            label="ZIP Code"
            placeholder="10001"
            value={formData.zipCode}
            onChange={handleInputChange}
            error={errors.zipCode}
          />
          <Input
            name="city"
            label="City"
            placeholder="New York"
            value={formData.city}
            onChange={handleInputChange}
            error={errors.city}
          />
        </div>
        <div className=" flex justify-between sm:items-center gap-4 sm:flex-row flex-col">
          <Input
            name="country"
            label="Country"
            placeholder="United States"
            value={formData.country}
            onChange={handleInputChange}
            error={errors.country}
          />
          <div className="flex-1 hidden sm:block"></div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-10 font-bold">
        <h2 className="text-theme-dark-orange text-left uppercase traking-[1.2px]">
          payment details
        </h2>
        <div className="flex justify-between gap-4 sm:flex-row flex-col">
          <h1 className="flex-1">Payment Method</h1>
          <div className="flex flex-col gap-4 w-full flex-1">
            <RadioOption
              label="e-Money"
              value="e-Money"
              selected={formData.paymentMethod}
              onChange={handlePaymentMethodChange}
            />
            <RadioOption
              label="Cash on Delivery"
              value="Cash on Delivery"
              selected={formData.paymentMethod}
              onChange={handlePaymentMethodChange}
            />
          </div>
        </div>
      </div>
      {formData.paymentMethod === "e-Money" && (
        <div className="flex justify-between sm:items-center gap-4 sm:flex-row flex-col">
          <Input
            name="eMoneyNumber"
            label="e-Money Number"
            placeholder="238521993"
            value={formData.eMoneyNumber}
            onChange={handleInputChange}
            error={errors.eMoneyNumber}
          />
          <Input
            name="eMoneyPin"
            label="e-Money PIN"
            placeholder="6891"
            value={formData.eMoneyPin}
            onChange={handleInputChange}
            error={errors.eMoneyPin}
          />
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
