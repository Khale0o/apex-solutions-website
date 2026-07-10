import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX Solutions | Premium Startup Engineering",
  description:
    "APEX Solutions builds high-performance web apps, mobile products, SaaS platforms, and AI systems for ambitious startups.",
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
  openGraph: {
    title: "APEX Solutions | Premium Startup Engineering",
    description:
      "Dark, futuristic product engineering for startups that need velocity and polish.",
    type: "website",
    locale: "en_US",
    siteName: "APEX Solutions",
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
