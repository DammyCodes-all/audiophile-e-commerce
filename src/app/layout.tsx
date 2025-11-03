import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartContextProvider } from "@/components/CartContext";
import { ConvexClientProvider } from "@/components/ConvexProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Audiophile E-Commerce",
  description: "Your one-stop shop for high-quality audio gear",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased max-w-[1440px] mx-auto text-theme-light`}
      >
        <ConvexClientProvider>
          <CartContextProvider>
            <Navbar /> {children} <Footer />
            <Toaster 
              position="top-center"
              richColors
              closeButton
            />
          </CartContextProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
