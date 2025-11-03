"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { BigBtn } from "@/components/btn";
import { calculateCartTotal, useCartContext } from "@/components/CartContext";
import CartProduct from "@/components/CartProduct";
import type { CheckoutFormData } from "../page";
import { api } from "@/convex/_generated/api";
import SuccessModal from "./SuccesModal";

interface SummaryProps {
  onCheckout: () => { success: boolean; data: CheckoutFormData | null };
}

const Summary = ({ onCheckout }: SummaryProps) => {
  const { cartProducts } = useCartContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const createOrder = useMutation(api.orders.createOrder);

  const subtotal = calculateCartTotal(cartProducts);
  const shipping = 50;
  const vat = 1079;
  const grandTotal = subtotal + shipping + vat;

  const handleSubmit = async () => {
    // Validate form
    const result = onCheckout();
    if (!result.success || !result.data) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderId = `ORD-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)
        .toUpperCase()}`;

      const orderEmailData = {
        formData: result.data,
        items: cartProducts.map((item) => ({
          name: item.name,
          price: item.price,
          amount: item.amount,
          imageUrl: item.imageUrl,
        })),
        subtotal,
        shipping,
        vat,
        grandTotal,
        orderId,
      };

      let emailSent = false;

      try {
        const emailResponse = await fetch("/api/send-order-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderEmailData),
        });

        if (emailResponse.ok) {
          emailSent = true;
        } else {
          toast.error("Failed to send confirmation email");
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        toast.error("Failed to send confirmation email");
      }

      // Save order to Convex regardless of email status
      try {
        await createOrder({
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          address: result.data.address,
          city: result.data.city,
          country: result.data.country,
          zipCode: result.data.zipCode,
          paymentMethod: result.data.paymentMethod,
          eMoneyNumber: result.data.eMoneyNumber,
          eMoneyPin: result.data.eMoneyPin,
          items: cartProducts.map((item) => ({
            name: item.name,
            price: item.price,
            amount: item.amount,
            imageUrl: item.imageUrl,
          })),
          subtotal,
          shipping,
          vat,
          grandTotal,
        });

        // Show success modal instead of clearing cart immediately
        setShowSuccessModal(true);

        if (emailSent) {
          toast.success(
            "Order placed successfully! Check your email for confirmation."
          );
        } else {
          toast.warning(
            "Order placed but confirmation email failed. Please contact support."
          );
        }
      } catch (convexError) {
        console.error("Convex error:", convexError);
        toast.error("Failed to save order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="w-full md:w-[35%] size-full rounded-md bg-theme-white flex flex-col gap-5 p-6 md:p-8">
        <h2 className="uppercase tracking-[1.2px] font-bold">summary</h2>
        <div className="flex flex-col gap-5 justify-center ">
          {cartProducts.map((product) => (
            <CartProduct
              name={product.name}
              key={product.name}
              amount={product.amount}
              summary
              price={product.price}
              imageUrl={product.imageUrl ?? ""}
            />
          ))}
        </div>
        <div>
          <div className="w-full flex justify-between items-center">
            <p className="text-theme-black/50 ">TOTAL</p>
            <h2 className="text-xl font-bold">{`$${calculateCartTotal(
              cartProducts
            ).toLocaleString()}`}</h2>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-theme-black/50 uppercase">shipping</p>
            <h2 className="text-xl font-bold">{`$ 50`}</h2>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-theme-black/50 uppercase">Vat(included)</p>
            <h2 className="text-xl font-bold">{`$ 1,079`}</h2>
          </div>

          <div className="w-full flex justify-between items-center mt-4">
            <p className="text-theme-black/50 uppercase">grand total</p>
            <h2 className="text-xl font-bold text-theme-dark-orange">{`$${(
              calculateCartTotal(cartProducts) +
              50 +
              1079
            ).toLocaleString()}`}</h2>
          </div>
        </div>
        <BigBtn
          text={isSubmitting ? "Processing..." : "Continue & pay"}
          onClick={handleSubmit}
          disabled={isSubmitting}
        />
      </div>
      <SuccessModal
        open={showSuccessModal}
        onOpenChange={setShowSuccessModal}
      />
    </>
  );
};

export default Summary;
