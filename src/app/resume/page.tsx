'use client';

import dynamic from 'next/dynamic';
import PageContainer from '@/components/PageContainer';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { FiDownload, FiLinkedin, FiExternalLink } from 'react-icons/fi';

// Lazy load ConstellationBackground
const ConstellationBackground = dynamic(() => import('@/components/ConstellationBackground'), {
  ssr: false,
  loading: () => null
});

const skillCategories = [
  {
    name: 'Technical Development',
    icon: '💻',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'REST APIs', 'Git']
  },
  {
    name: 'Data & Analytics',
    icon: '📊',
    skills: ['SQL', 'R', 'Excel', 'Power BI', 'Tableau', 'Google Analytics']
  },
  {
    name: 'Product & Strategy',
    icon: '🎯',
    skills: ['A/B Testing', 'User Research', 'Agile/Scrum', 'Sprint Planning', 'Stakeholder Management']
  },
  {
    name: 'Design & Marketing',
    icon: '🎨',
    skills: ['Figma', 'Tailwind CSS', 'SEO', 'Marketing Analytics', 'UI/UX']
  }
];

export default function Resume() {
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
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column */}
              <motion.div variants={staggerItem}>
                <GlassCard variant="prominent" className="p-6">
                  <h1 className="text-4xl font-bold mb-6">
                    <span className="gradient-text">Resume</span>
                  </h1>
            
                  <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                    An analytical problem solver from a top-ranked CS program, combining technical depth with strategic thinking to deliver impactful, user-driven product solutions. Currently studying Computer Science and Advertising at UIUC (GPA 3.86), I&apos;ve built AI chatbots, browser tools, and marketing workflows that drive measurable outcomes.
                  </p>

                  {/* Skills by Category */}
                  <div className="space-y-6 mb-8">
                    {skillCategories.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                          <span className="text-lg">{category.icon}</span>
                          {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="bg-cyan-500/10 text-cyan-400 px-3 py-1.5 rounded-full text-xs border border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-500/15 transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Download Button and LinkedIn Link */}
                  <div className="flex flex-col gap-3 mb-4">
                    <GlassButton
                      href="/pdf/web_resume.pdf"
                      variant="primary"
                      neonColor="cyan"
                      icon={<FiDownload className="w-4 h-4" />}
                      iconPosition="left"
                      external
                      className="w-full justify-center"
                    >
                      Download Resume
                    </GlassButton>

                    <GlassButton
                      href="https://www.linkedin.com/in/jayesh-ghosh-a7aab5336/"
                      variant="secondary"
                      icon={<FiLinkedin className="w-4 h-4" />}
                      iconPosition="left"
                      external
                      className="w-full justify-center"
                    >
                      View on LinkedIn
                    </GlassButton>
                  </div>

                  <p className="text-sm italic text-gray-400 mt-4">
                    Last updated: October 2025
                  </p>
                </GlassCard>
              </motion.div>

              {/* Right Column - PDF Preview */}
              <motion.div variants={staggerItem} className="md:col-span-2">
                <GlassCard variant="prominent" className="relative p-0 overflow-hidden">
                  {/* PDF Preview */}
                  <iframe
                    src="/pdf/web_resume.pdf"
                    className="w-full h-[600px]"
                    title="Resume PDF Preview"
                  />

                  {/* Open in New Tab Button */}
                  <div className="absolute top-4 right-4">
                    <GlassButton
                      href="/pdf/web_resume.pdf"
                      variant="secondary"
                      icon={<FiExternalLink className="w-4 h-4" />}
                      iconPosition="right"
                      external
                      className="text-sm"
                    >
                      Open in New Tab
                    </GlassButton>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </PageContainer>
      </div>
    </div>
  );
}

