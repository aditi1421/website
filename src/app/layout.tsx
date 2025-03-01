import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Aditi Kumar - Engineer',
  description: 'Personal website showcasing my engineering work and projects',
  metadataBase: new URL('https://aditikumar.co'),
  openGraph: {
    title: 'Aditi Kumar - Engineer',
    description: 'Personal website showcasing my engineering work and projects',
    url: 'https://aditikumar.co',
    siteName: 'Aditi Kumar',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 