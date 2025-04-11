
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayesh Ghosh - Portfolio",
  description: "Personal portfolio website of Jayesh Ghosh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Fixed Background Container */}
        <div 
          className="fixed inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url("/images/website_bg_image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlend: 'overlay',
          }}
          aria-hidden="true"
        />
        
        {/* Main Content Wrapper */}
        <div className="relative flex min-h-screen w-full z-10">
          <Sidebar />
          <main className="flex-1 w-full min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
