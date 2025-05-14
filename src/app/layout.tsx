import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next";

// Removed the incorrect function call:
// const geistSans = GeistSans({
//   variable: '--font-geist-sans',
// });

export const metadata: Metadata = {
  title: 'Churdhar Explorer - Your Guide to Churdhar Trek',
  description: 'Explore Churdhar: find rentals, travel information, maps, and reviews for your adventure.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}> {/* Use imported GeistSans.variable directly */}
      <body className="antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
