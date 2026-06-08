import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khalil Asaad Mustafa | Developer Portfolio",
  description:
    "Terminal-inspired developer portfolio for Khalil Asaad Mustafa, a computer science student focused on backend, mobile, cloud, and AI-powered product features.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  }
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
