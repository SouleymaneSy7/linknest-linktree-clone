import type { Metadata } from "next";
import { Space_Grotesk, AR_One_Sans } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const AROneSans = AR_One_Sans({
  variable: "--font-ar-one-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linknest - Linktree Clone",
  description: "A Linktree Clone Project For Next.js Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${AROneSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
