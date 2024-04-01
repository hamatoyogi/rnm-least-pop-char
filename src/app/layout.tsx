import type { Metadata } from 'next';

import './globals.css';
import './components/heading/heading.css';

import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
const schwiftyFont = localFont({
  src: './get-schwifty.woff',
  variable: '--font-schwifty',
});

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
      <body className={schwiftyFont.variable}>{children}</body>
    </html>
  );
}
