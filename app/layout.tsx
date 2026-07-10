import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX Solutions ",
  description:
    "APEX Solutions builds scalable web, mobile, SaaS, and AI products for modern companies.",
  keywords: [
    "APEX Solutions",
    "startup website",
    "web applications",
    "mobile applications",
    "SaaS platforms",
    "AI systems",
  ],
  authors: [{ name: "APEX Solutions" }],
  creator: "APEX Solutions",
  metadataBase: new URL("https://apex-solutions.example"),
  icons: {
    icon: "/brand/apex-logo-512.png",
    apple: "/brand/apex-logo-512.png",
  },
  openGraph: {
    title: "APEX Solutions | Web, Mobile & AI Product Engineering",
    description:
      "Build scalable Web, Mobile & AI products with a premium software engineering partner.",
    type: "website",
    locale: "en_US",
    siteName: "APEX Solutions",
    images: [
      {
        url: "/brand/apex-social-preview.png",
        width: 1200,
        height: 630,
        alt: "APEX Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Solutions | Web, Mobile & AI Product Engineering",
    description: "Build scalable Web, Mobile & AI products.",
    images: ["/brand/apex-social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}