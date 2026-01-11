import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "../styles/reset.css";
import Nav from "@/components/Nav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soralia Studio",
  description: "Discover the best gaming tournaments and events",
  icons: {
    icon: '/placeholders/soraalia.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased min-h-screen m-0 p-0 bg-gradient-to-br from-[#0f3a8a] to-[#0a2540]`}
        style={{ margin: 0, padding: 0, fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
