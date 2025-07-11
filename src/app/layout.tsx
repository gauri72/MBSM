import type { Metadata } from "next";
import { Inter, Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tiro-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MBSM Trust",
  description: "MBSM Trust is dedicated to spiritual growth, community service, and making a positive impact in the world.",
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${tiroDevanagari.variable} font-tiro-devanagari`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
