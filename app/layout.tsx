//Aca van los componentes que van a estar en todas mis paginas
//Es mi directorio PRINCIPAL

//Tipografia
//Titulo de la pagina

import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";

//swiper
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"



//navbar + header
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matias Iaquinta",
  description: "Personal portfolio made by Matias Iaquinta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      
        <Navbar />
        <Header />

        {children}
      
      </body>
    </html>
  );
}
