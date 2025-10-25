'use client';

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { FiArrowDown, FiCode, FiTrendingUp } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/animations';
import VisitorCounter from '@/components/VisitorCounter';

// Lazy load ParticleBackground
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center space-y-8 max-w-6xl mx-auto"
      >
        {/* Hero Text */}
        <motion.div variants={staggerItem} className="space-y-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Jayesh Ghosh</span>
          </h1>
          <motion.p 
            variants={staggerItem}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Building <span className="text-cyan-400 font-semibold">AI-enabled solutions</span> and{' '}
            <span className="text-blue-400 font-semibold">user-driven products</span> at the intersection of{' '}
            <span className="text-purple-400 font-semibold">engineering</span> and{' '}
            <span className="text-purple-400 font-semibold">strategy</span>
          </motion.p>
        </motion.div>

        {/* Metric Cards */}
        <motion.div 
          variants={staggerItem}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12"
        >
          <GlassCard 
            variant="prominent"
            hover={true}
            neonBorder="cyan"
            className="p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HiAcademicCap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">3.86 GPA</div>
            <div className="text-sm text-gray-400">University of Illinois</div>
            <div className="text-xs text-cyan-400 font-medium mt-1">T5 CS Program</div>
          </GlassCard>

          <GlassCard 
            variant="prominent"
            hover={true}
            neonBorder="blue"
            className="p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiTrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">$2M+ ROI</div>
            <div className="text-sm text-gray-400">Digital Transformation</div>
            <div className="text-xs text-blue-400 font-medium mt-1">AI Strategy Impact</div>
          </GlassCard>

          <GlassCard 
            variant="prominent"
            hover={true}
            neonBorder="purple"
            className="p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiCode className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">Full Stack</div>
            <div className="text-sm text-gray-400">Product + Engineering</div>
            <div className="text-xs text-purple-400 font-medium mt-1">AI & Data-Driven</div>
          </GlassCard>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <GlassButton 
            href="/projects"
            variant="primary"
            neonColor="cyan"
            className="min-w-[180px]"
          >
            View Projects
          </GlassButton>
          <GlassButton 
            href="/case-studies"
            variant="secondary"
            className="min-w-[180px]"
          >
            Case Studies
          </GlassButton>
          <GlassButton 
            href="/contact"
            variant="primary"
            neonColor="blue"
            className="min-w-[180px]"
          >
            Let&apos;s Connect
          </GlassButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <FiArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Visitor Counter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute bottom-20 sm:bottom-24 text-center w-full z-10"
      >
        <VisitorCounter />
      </motion.div>
    </section>
  );
}
