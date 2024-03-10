"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../../providers/react-query/react-query-provider";
import { SnackbarProvider } from "../context/SnackbarContext/SnackbarContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background: "#EFF9F5"}} className={inter.className}>
        <ReactQueryProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
