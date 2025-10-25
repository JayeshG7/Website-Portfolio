'use client';

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { FiExternalLink, FiMail, FiLinkedin, FiGithub, FiSmartphone, FiTrendingUp } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/animations';
import Link from 'next/link';

// Lazy load ConstellationBackground
const ConstellationBackground = dynamic(() => import('@/components/ConstellationBackground'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <div className="bg-black">
      {/* Constellation Background */}
      <div className="fixed inset-0 z-0">
        <ConstellationBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* SECTION 1: HERO - Tighter, more impactful */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-12 min-h-[70vh]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
            className="text-center space-y-6 max-w-5xl mx-auto"
          >
            {/* Hero Glass Container - adds visual structure */}
            <motion.div 
              variants={staggerItem}
              className="glass-subtle p-8 md:p-12 rounded-2xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-white block mb-2">Hey, I&apos;m</span>
                <span 
                  className="gradient-text block"
                  style={{
                    textShadow: '0 0 80px rgba(6, 182, 212, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)'
                  }}
                >
                  Jayesh Ghosh
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <span className="text-cyan-400 font-semibold">Computer Science and Advertising at University of Illinois </span>   <br /> Building products at the intersection of technology and user needs
          </motion.p>

              {/* Quick capabilities pills */}
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  Product Management 
                </span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  Enterprise AI Strategy
                </span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/30">
                  Full Stack Development
                </span>
              </motion.div>
        </motion.div>

            {/* Scroll indicator - smaller */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-4"
            >
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-12 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent mx-auto"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: FEATURED WORK - Grid layout on desktop */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
            initial="visible"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="max-w-7xl mx-auto w-full"
          >
            {/* Section header with divider - animated like hero */}
            <motion.div 
              className="text-center mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <div className="inline-block">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="gradient-text">Featured Work</span>
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
              </div>
            </motion.div>

            {/* Grid layout: 3 columns on large screens, 2 on medium, 1 on mobile */}
            <motion.div 
              className="text-center mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: Firstsource */}
              <motion.div variants={staggerItem}>

                
          <GlassCard 
            variant="prominent"
            hover={true}
            neonBorder="cyan"
                  className="p-6 h-full flex flex-col"
                >
                  {/* Large icon */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-cyan-600/10 rounded-xl flex items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <FiTrendingUp className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Procurement Transformation</h3>
                  <p className="text-cyan-400 font-medium text-sm mb-3">Digital Transformation Consultant Intern</p>
                  <p className="text-sm text-gray-400 mb-1">Firstsource Solutions</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    Led strategic evaluation of AI-enabled Procure-to-Pay platforms for a global BPO, developing implementation roadmap with significant efficiency improvements.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                      $2M+ ROI
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                      7 entities
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                      70% reduction
                    </span>
                  </div>
                  
                  <Link href="/resume" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mt-auto">
                    View Experience <FiExternalLink className="w-4 h-4" />
                  </Link>
          </GlassCard>
              </motion.div>

              {/* Card 2: RecycleLens */}
              <motion.div variants={staggerItem}>
          <GlassCard 
            variant="prominent"
            hover={true}
                  neonBorder="purple"
                  className="p-6 h-full flex flex-col"
                >
                  {/* Large icon */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      <FiSmartphone className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">RecycleLens</h3>
                  <p className="text-purple-400 font-medium text-sm mb-3">iOS Development & User Research</p>
                  <p className="text-sm text-gray-400 mb-1">UIUC Institute for Sustainability Partnership</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    iOS app addressing campus recycling contamination through computer vision, reducing decision-making friction from minutes to seconds.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                      78% intuitive
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                      ML-powered
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                      iOS Native
                    </span>
                  </div>
                  
                  <Link href="/projects" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium mt-auto">
                    View Project <FiExternalLink className="w-4 h-4" />
                  </Link>
          </GlassCard>
              </motion.div>

              {/* Card 3: EasyDo */}
              <motion.div variants={staggerItem}>
          <GlassCard 
            variant="prominent"
            hover={true}
                  neonBorder="blue"
                  className="p-6 h-full flex flex-col"
                >
                  {/* Large icon */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <HiSparkles className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">AI Customer Support</h3>
                  <p className="text-blue-400 font-medium text-sm mb-3">Technical Product Management Intern</p>
                  <p className="text-sm text-gray-400 mb-1">EasyDo Tasks</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    Contributed to product roadmap and feature development for AI-powered customer support platform serving SMBs through user research.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30">
                      150+ SMEs
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30">
                      12% faster
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30">
                      -15% tech debt
                    </span>
                  </div>
                  
                  <Link href="/resume" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mt-auto">
                    View Experience <FiExternalLink className="w-4 h-4" />
                  </Link>
          </GlassCard>
        </motion.div>
        
            </div>
            </motion.div>

            {/* CTA Button */}
        <motion.div 
          variants={staggerItem}
              className="text-center mt-12"
        >
          <GlassButton 
            href="/projects"
            variant="primary"
            neonColor="cyan"
                className="px-8 py-4 text-lg"
              >
                View All Projects
          </GlassButton>
        </motion.div>
          </motion.div>
        </section>

        {/* Visual Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        {/* SECTION 3: EXPERTISE - Cleaner, more visual */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="max-w-5xl mx-auto w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="gradient-text">Technical Depth Meets Strategic Thinking</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Interdisciplinary background enabling work spanning enterprise systems, mobile development, and product strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard variant="subtle" className="p-6 text-center group hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Technical Execution</h3>
                <p className="text-gray-400 text-sm">CS foundation enabling system design and implementation</p>
              </GlassCard>
              
              <GlassCard variant="subtle" className="p-6 text-center group hover:border-blue-500/40 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Strategic Thinking</h3>
                <p className="text-gray-400 text-sm">Advertising perspective informing product and business strategy</p>
              </GlassCard>
              
              <GlassCard variant="subtle" className="p-6 text-center group hover:border-purple-500/40 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-400 text-sm">Analytics coursework shaping research and optimization</p>
              </GlassCard>
            </div>
          </motion.div>
        </section>

        {/* Visual Divider */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>

        {/* SECTION 4: CONTACT FOOTER - More prominent and visual */}
        <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 pb-24">
      <motion.div 
            initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
            variants={fadeInUp}
            className="max-w-4xl mx-auto w-full"
          >
            <GlassCard variant="prominent" className="p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let&apos;s Connect</h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Interested in discussing product strategy, technical implementation, or opportunities
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                  <a
                    href="mailto:jayeshghosh2003@gmail.com"
                    className="group inline-flex items-center gap-3 px-6 py-3 glass-prominent rounded-lg hover:scale-105 transition-all border border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] w-full sm:w-auto justify-center"
                  >
                    <FiMail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-cyan-400 font-medium">Email Me</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/jayesh-ghosh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 glass-prominent rounded-lg hover:scale-105 transition-all border border-blue-400/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] w-full sm:w-auto justify-center"
                  >
                    <FiLinkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-blue-400 font-medium">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/JayeshG7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 glass-prominent rounded-lg hover:scale-105 transition-all border border-purple-400/30 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] w-full sm:w-auto justify-center"
                  >
                    <FiGithub className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-purple-400 font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </GlassCard>
      </motion.div>
    </section>
      </div>
    </div>
  );
}
