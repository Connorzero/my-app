import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MakeswiftProvider } from "@/makeswift/provider";
import { DraftModeScript } from "@makeswift/runtime/next/server";
import "@/makeswift/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <DraftModeScript />
      </head>
      <body className={inter.className}>
        <MakeswiftProvider>{children}</MakeswiftProvider>
      </body>
    </html>
  );
}
