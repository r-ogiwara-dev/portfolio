import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "r.ogiwara | Portfolio",
  description: "バックエンドエンジニア r.ogiwara のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
