import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "VK Portfolio",
  description: "Open source portfolio website for Vinicius Kuhlmann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#EBEBEB] dark:bg-black dark:text-white">
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
