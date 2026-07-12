import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/google-tag-manager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamedevglory.com"),
  title: "Async Unity Coaching for Indie Devs | Game Dev Glory",
  description:
    "Get async Unity coaching in a private Discord channel with code feedback, debugging direction, and next-step guidance for $99/month.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Async Unity Coaching for Indie Devs | Game Dev Glory",
    description:
      "Get async Unity coaching in a private Discord channel with code feedback, debugging direction, and next-step guidance for $99/month.",
    type: "website",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Game Dev Glory logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <GoogleTagManagerNoScript />
        {children}
        <GoogleTagManager />
      </body>
    </html>
  );
}
