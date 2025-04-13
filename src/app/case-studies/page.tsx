"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageContainer from '@/components/PageContainer';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyModal from '@/components/CaseStudyModal';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);

  return (
    <PageContainer>
      {/* Hero Section with Enhanced Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-16 mb-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84A27]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative space-y-6 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Case Studies
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Exploring real-world business challenges through data-driven solutions and strategic implementations.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Case Studies Grid with Enhanced Layout */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              {...caseStudy}
              index={index}
              onClick={() => setSelectedCase(caseStudy)}
            />
          ))}
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </PageContainer>
  );
} 