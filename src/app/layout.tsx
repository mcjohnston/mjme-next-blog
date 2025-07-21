import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  // subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  // subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Johnston - Full Stack Web Developer",
  description: "The personal site and portfolio of Matthew Johnston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${manrope.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
