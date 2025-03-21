import type { Metadata } from "next";
import { Joti_One, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const jotiOne = Joti_One({
  variable: "--font-joti_one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jotiOne.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
