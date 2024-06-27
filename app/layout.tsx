import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 

export const metadata: Metadata = {
  title: "Sinc Partners",
  description: "A UI prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
