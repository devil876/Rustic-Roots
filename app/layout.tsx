import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhauladhar Basera | A Homestay in Shahpur, Kangra",
  description:
    "A four-room family homestay tucked into the pine slopes above Shahpur, Kangra — Dhauladhar views, home-cooked Pahadi meals, and slow mountain mornings.",
  keywords: [
    "homestay Shahpur",
    "Kangra homestay",
    "Himachal Pradesh homestay",
    "Dhauladhar view stay",
    "Shahpur Kangra accommodation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} antialiased bg-[var(--color-parchment)]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
