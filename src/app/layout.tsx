import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/lib/fonts";
import Navbar from "@/components/navbar";
export const metadata: Metadata = {
  title: "Audiophile E-Commerce",
  description: "Your one-stop shop for high-quality audio gear",
};
import Footer from "@/components/footer";

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
        <Navbar /> {children} <Footer />
      </body>
    </html>
  );
}
