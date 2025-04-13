'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center space-y-6">
        {/* Profile Image */}
        {/* <div>
          <Image
            src="/images/web_profile.png"
            alt="Jayesh Ghosh"
            width={96}
            height={96}
            className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-white/20 shadow-lg"
            priority
          />
        </div> */}

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
          Hi, I&apos;m <span className="text-blue-400">Jayesh Ghosh</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
          Computer Science and Advertising student building smart, scalable products backed by data and driven by users.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projects/" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link 
            href="/case-studies/" 
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
