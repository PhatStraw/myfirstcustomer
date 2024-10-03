import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My First Customer",
  description: "Get actionable feedback and improve your app's user experience with our service.",
  keywords: "user testing, feedback, software development, app improvement",
  authors: [{ name: "Kevin Sims", url: "https://phats.vercel.app" }],
  openGraph: {
    title: "My First Customer",
    description: "Your first super user for actionable feedback.",
    url: "https://myfirstcustomer.xyz",
    siteName: "My First Customer",
    images: [
      {
        url: "https://myfirstcustomer.xyz/logomfc.png",
        width: 800,
        height: 600,
        alt: "My First Customer Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
