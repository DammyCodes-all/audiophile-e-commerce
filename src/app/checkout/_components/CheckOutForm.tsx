"use client";

import { useState } from "react";
import { z } from "zod";
import Input from "./input";
import RadioOption from "@/app/checkout/_components/radio";

const checkoutFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^[+]?[\d\s-()]+$/, "Invalid phone number"),
  address: z
    .string()
    .min(1, "Address is required")
    .min(5, "Address must be at least 5 characters"),
  zipCode: z
    .string()
    .min(1, "ZIP code is required")
    .regex(/^\d{4,6}$/, "Invalid ZIP code"),
  city: z
    .string()
    .min(1, "City is required")
    .min(2, "City must be at least 2 characters"),
  country: z
    .string()
    .min(1, "Country is required")
    .min(2, "Country must be at least 2 characters"),
  paymentMethod: z.enum(["e-Money", "Cash on Delivery"]),
  eMoneyNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{9}$/.test(val), {
      message: "e-Money number must be 9 digits",
    }),
  eMoneyPin: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{4}$/.test(val), {
      message: "PIN must be 4 digits",
    }),
});

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

const CheckOutForm = () => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-Money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutFormData, string>>
  >({});

  const validateField = (name: keyof CheckoutFormData, value: string) => {
    try {
      // Validate single field
      const fieldSchema = checkoutFormSchema.shape[name];
      fieldSchema.parse(value);
      // Clear error if validation passes
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Get the first error message only
        const firstError = error.issues[0];
        setErrors((prev) => ({
          ...prev,
          [name]: firstError?.message || "Invalid value",
        }));
      }
    }
  };

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
        <div className=" flex justify-between items-center gap-4">
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
        <div className=" flex justify-between items-center gap-4">
          <Input
            name="phone"
            label="Phone Number"
            placeholder="+1 234-555-0136"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-10 font-bold">
        <h2 className="text-theme-dark-orange text-left uppercase traking-[1.2px]">
          shipping info
        </h2>
        <div className=" flex justify-between items-center gap-4">
          <Input
            name="address"
            label="Address"
            placeholder="1137 Williams Avenue"
            value={formData.address}
            onChange={handleInputChange}
            error={errors.address}
          />
        </div>
        <div className=" flex justify-between items-center gap-4">
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
        <div className=" flex justify-between items-center gap-4">
          <Input
            name="country"
            label="Country"
            placeholder="United States"
            value={formData.country}
            onChange={handleInputChange}
            error={errors.country}
          />
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-10 font-bold">
        <h2 className="text-theme-dark-orange text-left uppercase traking-[1.2px]">
          payment details
        </h2>
        <div className="flex justify-between gap-4">
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
        <div className="flex justify-between items-center gap-4">
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
