import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Build Your Entire Marketing Department in 90 Days | US Marketing",
  description: "Stop chasing leads. We deliver a complete, automated lead generation system that puts Sales Qualified Leads (SQLs) directly on your calendar.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafafc] text-slate-900 selection:bg-primary selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
