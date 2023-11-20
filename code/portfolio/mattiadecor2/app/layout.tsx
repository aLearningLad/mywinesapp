import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Mattia's Decor",
  description: "Hygge & Scandinavian Interior Design Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
