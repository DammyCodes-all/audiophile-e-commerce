"use client";
import { useState } from "react";
import { z } from "zod";
import GoBackButton from "@/components/go-back";
import CheckOutForm from "./_components/CheckOutForm";
import Summary from "./_components/Summary";

export const checkoutFormSchema = z.object({
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

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

const CheckOutPage = () => {
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
      const fieldSchema = checkoutFormSchema.shape[name];
      fieldSchema.parse(value);
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
        setErrors((prev) => ({
          ...prev,
          [name]: firstError?.message || "Invalid value",
        }));
      }
    }
  };

  const handleSubmit = () => {
    try {
      checkoutFormSchema.parse(formData);
      return { success: true, data: formData };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
        error.issues.forEach((issue) => {
          const fieldName = issue.path[0] as keyof CheckoutFormData;
          if (!newErrors[fieldName]) {
            newErrors[fieldName] = issue.message;
          }
        });
        setErrors(newErrors);
      }
      return { success: false, data: null };
    }
  };

  return (
    <div className="bg-theme-lightgray size-full min-h-screen">
      <main className="text-theme-black px-10 lg:px-[125px] py-5 space-y-10 pt-20">
        <GoBackButton />
        <section className="flex justify-between gap-10 flex-col md:flex-row">
          <CheckOutForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            validateField={validateField}
          />
          <Summary onCheckout={handleSubmit} />
        </section>
      </main>
    </div>
  );
};

export default CheckOutPage;
