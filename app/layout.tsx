import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Dr. Moitrayee Das | Psychology",
  description:
    "Academic portfolio of Dr. Moitrayee Das, Assistant Professor of Psychology at FLAME University.",
  icons: {
    icon: "/images/9.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
  <body className={`${manrope.variable} font-manrope`}>
    {children}
</body>
</html>
  );
}