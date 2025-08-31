import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "../styles/reset.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soralia - Gaming Tournaments",
  description: "Discover the best gaming tournaments and events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen m-0 p-0`}
        style={{ margin: 0, padding: 0 }}
      >
        <nav className="bg-blue-900 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Soralia
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="transition duration-200 px-3 py-2 rounded-md hover:bg-blue-800">
                Home
              </Link>
              <Link href="/tournaments" className="transition duration-200 px-3 py-2 rounded-md hover:bg-blue-800">
                Tournaments
              </Link>
              <Link href="/staff" className="transition duration-200 px-3 py-2 rounded-md hover:bg-blue-800">
                Staff
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
