

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/provider";
import Header from "@/components/UI/Header/header";
import styles from "./layout.module.css"
import Footer from "@/components/UI/Footer/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXT_JS",
  description: "Изучаю Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={styles.container}>
          <Providers >
            <Header/>
            <main className={styles.main}>
              {children}
            </main>
            <Footer/>
          </Providers>
        </div>
      </body>
    </html>
  );
}
