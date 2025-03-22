import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Header from '@/components/Header';

import './globals.css';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Craig Clayton | React & Next.js Developer',
  description:
    'Passionate front-end developer with a focus on building fast, modern, and accessible web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} />
        <Header />
        <main className='h-[80vh] flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
