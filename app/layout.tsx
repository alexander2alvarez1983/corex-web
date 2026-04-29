import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Corex Systems | Tratamiento de agua y ósmosis inversa en Colombia",
  description:
    "Corex Systems S.A.S. ofrece soluciones en tratamiento de agua, ósmosis inversa, filtración crítica, instrumentación y control para sector salud, industrial, alimentos y farmacéutico en Colombia.",
  keywords: [
    "tratamiento de agua Colombia",
    "osmosis inversa Medellin",
    "plantas de agua industrial",
    "tratamiento agua hemodialisis",
    "filtracion critica",
    "Corex Systems",
  ],
  authors: [{ name: "Corex Systems S.A.S." }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
