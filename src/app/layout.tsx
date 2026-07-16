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
  title: "Beginner Game Programming Coaching | Game Dev Glory",
  description:
    "Game Dev Glory helps beginner game developers go from copying tutorials to building small, complete games with confidence.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Beginner Game Programming Coaching | Game Dev Glory",
    description:
      "Build your first complete game with a practical path and personal feedback.",
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
