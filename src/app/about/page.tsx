'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageContainer from '@/components/PageContainer';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import { CodeIcon, MarketingIcon, DataIcon, UserIcon } from '@/components/Icons';
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from '@/utils/animations';

export default function About() {
  const experiences = [
    {
      title: 'Digital Transformation Consultant Intern',
      company: 'Firstsource',
      period: 'May 2025 - Aug 2025',
      highlights: [
        'Led AI-enabled Procure-to-Pay platform evaluation across 7 global entities',
        'Modeled 70% manual touchpoint reduction through intelligent automation',
        'Projected $2M+ annual ROI with enhanced compliance and efficiency',
        'Partnered with cross-functional teams to align technical capabilities with business needs'
      ]
    },
    {
      title: 'Technical Product Management Intern',
      company: 'Liberty Infospace - EasyDo Tasks',
      period: 'Summer 2024',
      highlights: [
        'Developed AI chatbot improving engagement by 30% and reducing response time by 12%',
        'Conducted user feedback analysis for 150+ users to prioritize features',
        'Reduced tech debt by 15% through strategic product workflow optimization',
        'Supported agile sprints and wrote internal documentation'
      ]
    }
  ];

  const projects = [
    {
      name: 'RecycleLens',
      description: 'AI-powered recycling classification system',
      details: 'Partnership with UIUC Industrial & Systems Engineering department',
      tech: 'Computer Vision, Machine Learning, React'
    }
  ];

  const coreStrengths = [
    { icon: <CodeIcon />, label: 'Product Management', color: 'cyan' },
    { icon: <UserIcon />, label: 'Cross-Functional Leadership', color: 'blue' },
    { icon: <MarketingIcon />, label: 'Digital Strategy', color: 'purple' },
    { icon: <DataIcon />, label: 'Data-Driven Analytics', color: 'cyan' }
  ];

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={staggerItem}
            className="text-5xl sm:text-6xl font-bold mb-4"
          >
            <span className="gradient-text">Where Code Meets Strategy</span>
          </motion.h1>
          <motion.p 
            variants={staggerItem}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Building AI-enabled products and campaigns that drive measurable business impact
          </motion.p>
        </motion.header>

        {/* My Journey Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mb-16"
        >
          <GlassCard 
            variant="prominent" 
            hover={true}
            className="p-8"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse-glow" />
                  <Image
                    src="/images/profile.png"
                    alt="Jayesh Ghosh"
                    width={160}
                    height={160}
                    className="rounded-full relative z-10 border-2 border-cyan-500/30"
                    priority
                  />
                </div>
              </div>
              
              {/* Journey Text */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 gradient-text">My Journey</h2>
                <p className="text-lg leading-relaxed text-gray-200">
                  At fourteen, I launched my first website—<span className="text-cyan-400 font-semibold">MarineHub</span>—a place for saltwater aquarium lovers to swap tips on raising fish and corals. It was static, simple, and full of passion. I taught myself HTML and CSS, and even added a &ldquo;Contact Me&rdquo; tab so fellow hobbyists could reach out with questions.
                </p>
                <p className="text-lg leading-relaxed text-gray-200 mt-4">
                  That small site taught me two big things: <span className="text-blue-400 font-semibold">People connect through well-crafted experiences</span>, and <span className="text-purple-400 font-semibold">technology should always serve the user</span>. That same energy—curiosity, clarity, and care—still drives everything I build today.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 
            variants={staggerItem}
            className="text-4xl font-bold mb-8 text-center"
          >
            <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlassCard
                  variant="default"
                  hover={true}
                  neonBorder={index === 0 ? 'cyan' : 'blue'}
                  className="p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-cyan-400 font-medium text-lg">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-200">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Featured Projects Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
        >
          {/* Education Card */}
          <motion.div variants={staggerItem}>
            <GlassCard
              variant="default"
              hover={true}
              neonBorder="blue"
              className="p-6 sm:p-8 h-full"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  University of Illinois at Urbana-Champaign
                </h3>
                <p className="text-blue-400 font-medium mb-4">
                  BS Computer Science & Advertising • May 2026
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span>
                    <span><strong className="text-white">GPA: 3.86/4.0</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span>
                    <span><strong className="text-white">Dean&apos;s List x3</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span>
                    <span><strong className="text-white">T5 CS Program</strong></span>
                  </li>
                  <li className="flex items-start gap-2 mt-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span className="text-sm">Key Courses: Data Structures, Algorithms, Systems Programming, Brand Strategy, Consumer Insight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span className="text-sm">Organizations: ACM, Phi Eta Sigma</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </motion.div>

          {/* Featured Projects Card */}
          <motion.div variants={staggerItem}>
            <GlassCard
              variant="default"
              hover={true}
              neonBorder="purple"
              className="p-6 sm:p-8 h-full"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Featured Work</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-purple-400 font-medium mb-2">{project.description}</p>
                  <p className="text-gray-300 text-sm mb-3">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, idx) => (
                      <span 
                        key={idx}
                        className="glass-subtle px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-6">
                <GlassButton
                  href="/projects"
                  variant="secondary"
                  className="w-full"
                >
                  View All Projects
                </GlassButton>
              </div>
            </GlassCard>
          </motion.div>
        </motion.section>

        {/* Core Strengths */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 
            variants={staggerItem}
            className="text-4xl font-bold mb-10 text-center"
          >
            <span className="gradient-text">Core Strengths</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreStrengths.map((strength, index) => (
              <motion.div 
                key={index} 
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <GlassCard
                  variant="subtle"
                  hover={true}
                  neonBorder={strength.color as 'cyan' | 'blue' | 'purple'}
                  className="p-6 text-center"
                >
                  <div className={`text-${strength.color}-400 mb-3 flex justify-center`}>
                    {strength.icon}
                  </div>
                  <span className="text-gray-200 font-medium text-sm sm:text-base block">
                    {strength.label}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Me? */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mb-16"
        >
          <GlassCard variant="prominent" className="p-8 sm:p-12">
            <blockquote className="text-center">
              <p className="text-2xl sm:text-3xl font-light text-gray-200 italic mb-4">
                &ldquo;I&apos;m passionate about turning user insights into meaningful products through{' '}
                <span className="text-cyan-400 font-semibold not-italic">strategy</span>,{' '}
                <span className="text-blue-400 font-semibold not-italic">analytics</span>, and{' '}
                <span className="text-purple-400 font-semibold not-italic">cross-functional collaboration</span>.&rdquo;
              </p>
            </blockquote>
          </GlassCard>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <GlassButton
            href="/projects"
            variant="primary"
            neonColor="cyan"
            className="min-w-[200px]"
          >
            View My Projects
          </GlassButton>
          <GlassButton
            href="/contact"
            variant="secondary"
            className="min-w-[200px]"
          >
            Get in Touch
          </GlassButton>
        </motion.section>
      </div>
    </PageContainer>
  );
}
