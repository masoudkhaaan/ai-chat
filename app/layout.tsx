import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "چت بات",
  description: "هوش مصنوعی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
