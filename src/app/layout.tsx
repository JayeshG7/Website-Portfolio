import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jayeshghosh.com'),
  title: "Jayesh Ghosh | Computer Science & Advertising",
  description: "Portfolio of Jayesh Ghosh - Computer Science student at UIUC with expertise in full-stack development, data analytics, and marketing strategy. Explore projects in software engineering, data visualization, and strategic marketing.",
  keywords: ["Jayesh Ghosh", "UIUC", "Computer Science", "Data Analytics", "Marketing Strategy", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Jayesh Ghosh" }],
  creator: "Jayesh Ghosh",
  publisher: "Jayesh Ghosh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jayeshghosh.com",
    title: "Jayesh Ghosh | Computer Science & Marketing Strategy",
    description: "Portfolio showcasing projects in software engineering, data analytics, and strategic marketing",
    siteName: "Jayesh Ghosh Portfolio",
    images: [{
      url: "/images/Web_profile.png",
      width: 1200,
      height: 630,
      alt: "Jayesh Ghosh Portfolio"
    }]
  },
  alternates: {
    canonical: 'https://jayeshghosh.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
  // You can safely remove the twitter metadata if you prefer
  // LinkedIn doesn't use its own metadata format - it uses OpenGraph
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jayeshghosh.com" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <div className="min-h-screen bg-[#0F0F0F] relative">
          {/* Background image and gradient overlay */}
          <div 
            className="fixed inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: 'url("/images/bg_image.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
          
          {/* Content container */}
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
