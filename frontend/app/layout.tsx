import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const font = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Istiaq Hossain",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className + " py-5 bg-[#FBFEFB] dark:bg-[#1B1917]"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-[786px] mx-auto px-5">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
