import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khalil Asaad Mustafa | Developer Portfolio",
  description:
    "Terminal-inspired developer portfolio for Khalil Asaad Mustafa, a computer science student focused on backend, mobile, cloud, and AI-powered product features."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
