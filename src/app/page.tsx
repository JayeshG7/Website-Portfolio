import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jayesh Ghosh</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer crafting digital experiences with modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/projects/page.tsx" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link 
              href="/contact/page.tsx" 
              className="px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-600 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
