import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google';
import PromoBanner from '@/components/layout/PromoBanner';
import Header from '@/components/layout/Header';
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const roboto = Roboto({ 
  weight: ['400', '500', '700'], 
  subsets: ['latin'], 
  variable: '--font-roboto' 
});

export const metadata: Metadata = {
  title: 'AGILIFY — Sistema emissor de notas fiscais com integração contábil',
  description: 'Emita NFC-e e NF-e e suas notas chegam sozinhas no contador em 15 minutos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${roboto.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-surface text-ink antialiased">
        <PromoBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}