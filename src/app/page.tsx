'use client';  // Add this at the top since we're using client-side features

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  
  // Animation variants for different elements
  const lightBulbVariants = {
    initial: { 
      opacity: 0, 
      y: -20,
      scale: 0.5,
      rotate: -45
    },
    animate: {
      opacity: [0, 1, 0.8, 1],
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.8,
        opacity: {
          times: [0, 0.4, 0.7, 1],
          duration: 1.2
        }
      }
    },
    hover: {
      scale: 1.1,
      rotate: 15,
      boxShadow: "0 0 15px rgba(255, 255, 0, 0.5)",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const peopleVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.175, 0.885, 0.32, 1.275], // Custom bounce
        delay: 1.4
      }
    },
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, -5, 0],
      transition: { 
        duration: 0.6,
        rotate: {
          times: [0, 0.25, 0.5, 0.75, 1],
          duration: 0.6
        }
      }
    }
  };

  const searchVariants = {
    initial: { 
      opacity: 0, 
      rotate: -30,
      scale: 0.7
    },
    animate: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 2.0
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -15, 15, -15, 0],
      transition: { 
        duration: 0.5,
        rotate: {
          times: [0, 0.25, 0.5, 0.75, 1],
          duration: 0.5
        }
      }
    }
  };

  const laptopVariants = {
    initial: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    animate: {
      opacity: [0, 0.5, 1],
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 2.6,
        opacity: {
          times: [0, 0.5, 1],
          duration: 1
        }
      }
    }
  };

  const chartVariants = {
    initial: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000], // Custom easing
        delay: 3.4
      }
    },
    hover: {
      scale: 1.05,
      y: [-2, 2, -2],
      transition: { 
        y: {
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3
        }
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Light Bulb Overlay */}
      <motion.div
        className="fixed cursor-pointer"
        style={{
          top: '4.5%',
          right: '16.5%',
          width: '65px',
          height: '65px',
          backgroundColor: 'rgba(255, 255, 0, 0.2)',
          border: '1px solid yellow',
          zIndex: 20,
          borderRadius: '12px'
        }}
        variants={lightBulbVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      />

      {/* People/Team Icon Overlay */}
      <motion.div
        className="fixed cursor-pointer"
        style={{
          top: '13%',
          right: '23%',
          width: '95px',
          height: '95px',
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          border: '1px solid lime',
          zIndex: 20,
          borderRadius: '12px'
        }}
        variants={peopleVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      />

      {/* Search/Magnifying Glass Overlay */}
      <motion.div
        className="fixed cursor-pointer"
        style={{
          top: '42%',
          right: '14%',
          width: '90px',
          height: '90px',
          backgroundColor: 'rgba(0, 191, 255, 0.2)',
          border: '1px solid deepskyblue',
          zIndex: 20,
          borderRadius: '12px'
        }}
        variants={searchVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      />

      {/* Code Editor/Laptop Overlay */}
      {pathname === '/' && (
        <motion.div
          className="fixed"
          style={{
            top: '32%',
            left: '10%',
            width: '600px',
            height: '340px',
            backgroundColor: 'rgba(255, 165, 0, 0.15)',
            border: '1px solid rgba(255, 165, 0, 0.3)',
            zIndex: 20,
            borderRadius: '8px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            transformOrigin: 'center center',
            backdropFilter: 'blur(2px)'
          }}
          variants={laptopVariants}
          initial="initial"
          animate="animate"
        />
      )}

      {/* Growth Chart Overlay */}
      <motion.div
        className="fixed cursor-pointer"
        style={{
          top: '2%',
          left: '0%',
          width: '320px',
          height: '240px',
          backgroundColor: 'rgba(165, 42, 42, 0.15)',
          border: '1px solid brown',
          zIndex: 20,
          borderRadius: '16px'
        }}
        variants={chartVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      />

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
            href="/contact/" 
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
