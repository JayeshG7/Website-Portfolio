'use client';

import { caseStudies } from '@/data/caseStudies';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PageContainer from '@/components/PageContainer';
import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';

// Lazy load ConstellationBackground
const ConstellationBackground = dynamic(() => import('@/components/ConstellationBackground'), {
  ssr: false,
  loading: () => null
});

export default function CaseStudies() {
  return (
    <div className="bg-black min-h-screen">
      {/* Constellation Background */}
      <div className="fixed inset-0 z-0">
        <ConstellationBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <PageContainer>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <motion.header variants={staggerItem} className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">Case Studies</span>
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] mb-6" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                In-depth explorations of strategic business challenges and data-driven solutions showcasing analytical frameworks and measurable business impact.
              </p>
            </motion.header>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  variants={staggerItem}
                  custom={index}
                >
                  <Link href={`/case-studies/${study.slug}`} className="block h-full">
                    <GlassCard
                      variant="prominent"
                      hover={true}
                      neonBorder="purple"
                      className="p-6 h-full flex flex-col"
                    >
                      <div className="flex flex-col flex-grow space-y-4">
                        <h2 className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                          {study.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed flex-grow">
                          {study.metaDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm rounded-full bg-purple-500/10 
                                text-purple-300 border border-purple-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </PageContainer>
      </div>
    </div>
  );
} 