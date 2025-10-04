import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const outfit = Outfit({
  subsets: ["latin"], weight : ["400", "500", "600", "700"],
  variable: "--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"], weight : ["400"],
  variable: "--font-ovo"
});


export const metadata: Metadata = {
  title: "Dipesh-portfolio",
  description: "Own website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
