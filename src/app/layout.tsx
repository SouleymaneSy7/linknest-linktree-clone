import type { Metadata } from "next";
import { Space_Grotesk, AR_One_Sans } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  adjustFontFallback: false,
});

const AROneSans = AR_One_Sans({
  variable: "--font-ar-one-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: false,
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
        className={`${AROneSans.className} ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
