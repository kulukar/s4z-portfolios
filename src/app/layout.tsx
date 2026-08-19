import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "../components/providers/smooth-scroll";
import { PageGrain } from "../components/layout/page-grain";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Sareh Azis Panegar — UI/UX Designer",
  description:
    "UI/UX Designer based in Indonesia, creating clear and thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll />
      <body className={`${manrope.variable} ${syne.variable}`}>
        {children}
        <PageGrain />
      </body>
    </html>
  );
}
