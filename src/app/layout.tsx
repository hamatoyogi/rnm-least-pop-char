import type { Metadata } from 'next';

import './globals.css';
import './components/background.css';

import localFont from 'next/font/local';
import { Background } from './components/background';

// Font files can be colocated inside of `app`
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
const myFont = localFont({ src: './get-schwifty.woff' });

export const metadata: Metadata = {
  title: 'R&M Least Popular Character',
  description: 'Rick and Morty Least Popular Character',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
