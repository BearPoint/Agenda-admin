import "./../globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const notoSans = Roboto_Mono({
  weight: ["400", "200", "300", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}