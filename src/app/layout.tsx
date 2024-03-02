import type { Metadata } from "next";
// import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utilities/Navbar";

// const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
