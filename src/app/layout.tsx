
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Chatbot } from '@/components/chatbot/chatbot'; // Import Chatbot

export const metadata: Metadata = {
  title: 'Vistra - Your Guide to Churdhar Trek',
  description: 'Vistra: Explore Churdhar - find rentals, travel information, maps, contact, and reviews for your adventure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Chatbot /> {/* Add Chatbot here */}
        <SpeedInsights />
      </body>
    </html>
  );
}
