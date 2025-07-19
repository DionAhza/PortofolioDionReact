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

// app/layout.tsx atau app/page.tsx
export const metadata = {
  title: "DionAhza | Portofolio",
  description: "Website portofolio Dion Ahza Rabbani — berisi tentang saya, projek, sertifikat, dan kontak.",
  keywords: ["Dion Ahza", "Portofolio", "Web Developer", "React", "Laravel", "Next.js"],
  authors: [{ name: "Dion Ahza Rabbani", url: "https://dionahzarabbani.vercel.app" }],
  creator: "Dion Ahza Rabbani",
  metadataBase: new URL("https://dionahzarabbani.vercel.app"),
  openGraph: {
    title: "DionAhza | Portofolio",
    description: "Dion Ahza Rabbani Portfolio Website",
    url: "https://dionahzarabbani.vercel.app",
    siteName: "DionAhza Portfolio",
    images: [
      {
        url: "/assets/GambarDion.png", // pastikan gambar ini ada di folder public
        width: 1200,
        height: 630,
        alt: "Preview Portofolio Dion Ahza",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
