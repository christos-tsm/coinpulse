import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coinpulse",
  description: "Crypto Screener app with built-in high-frequency terminal & dashboard",
};

/**
 * Application root layout component that renders the document HTML and body scaffolding.
 *
 * Renders an `<html lang="en" class="dark">` element and a `<body>` that applies the configured font CSS variables and `antialiased` class, includes the top-level header, and hosts the provided page content.
 *
 * @param children - The React node(s) to render as the page content inside the layout's body.
 * @returns The root JSX element representing the HTML document layout.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}