import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayesh Ghosh",
  description: "Portfolio website showcasing my work in Computer Science, Data Analytics, and Advertising",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0F0F0F] relative">
          {/* Background image and gradient overlay */}
          <div 
            className="fixed inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: 'url("/images/website_bg_image.png")',
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
