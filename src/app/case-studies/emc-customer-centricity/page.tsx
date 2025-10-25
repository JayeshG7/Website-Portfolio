"use client";

import { motion } from 'framer-motion';
import { caseStudies, getNextAndPreviousCases } from '@/data/caseStudies';
import PageContainer from '@/components/PageContainer';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Lazy load ConstellationBackground
const ConstellationBackground = dynamic(() => import('@/components/ConstellationBackground'), {
  ssr: false,
  loading: () => null
});

export default function EMCCaseStudy() {
  const caseStudy = caseStudies.find(cs => cs.slug === 'emc-customer-centricity')!;
  const { previous, next } = getNextAndPreviousCases(caseStudy.slug);

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-4"
          >
            {/* Navigation */}
            <div className="mb-8">
              <GlassButton
                href="/case-studies"
                variant="ghost"
                icon={<FiArrowLeft />}
                iconPosition="left"
              >
                Back to Case Studies
              </GlassButton>
            </div>

            {/* Header */}
            <div className="relative py-12 mb-8">
              <div className="relative space-y-6">
                {/* Title and Company */}
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="gradient-text">{caseStudy.title}</span>
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                  <p className="text-xl md:text-2xl text-gray-300">
                    {caseStudy.company}
                  </p>
                </div>

                {/* Tags with enhanced styling */}
                <div className="flex flex-wrap gap-3">
                  {caseStudy.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-medium 
                        bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <MetricCard
                value={caseStudy.metrics.metric1}
                label={caseStudy.metrics.metric1Label || "Market Position"}
                icon="📈"
              />
              <MetricCard
                value={caseStudy.metrics.metric2}
                label={caseStudy.metrics.metric2Label || "Revenue Growth"}
                icon="🎯"
              />
              <MetricCard
                value={caseStudy.metrics.timeFrame}
                label={caseStudy.metrics.timeFrameLabel || "Time Period"}
                icon="⏱️"
              />
            </div>

            {/* Main Content */}
            <div className="space-y-12 py-8">
              <Section title="Overview" icon="🔍">
                <GlassCard variant="prominent" className="p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {caseStudy.fullContent.overview}
                  </p>
                </GlassCard>
              </Section>

              <Section title="Key Challenges" icon="⚡">
                <GlassCard variant="prominent" className="p-6">
                  <ul className="space-y-4">
                    {caseStudy.fullContent.challenges.map((challenge, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Section>

              <Section title="Solution" icon="💡">
                <GlassCard variant="prominent" className="p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {caseStudy.fullContent.solution}
                  </p>
                </GlassCard>
              </Section>

              <Section title="Results" icon="📊">
                <GlassCard variant="prominent" className="p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {caseStudy.fullContent.results}
                  </p>
                </GlassCard>
              </Section>

              <Section title="Key Learnings" icon="🎓">
                <GlassCard variant="prominent" className="p-6">
                  <ul className="space-y-4">
                    {caseStudy.fullContent.keyLearnings.map((learning, i) => (
                      <li 
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Section>

              <Section title="Conclusion" icon="✨">
                <GlassCard variant="prominent" className="p-6 space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {caseStudy.fullContent.conclusion.summary}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    {caseStudy.fullContent.conclusion.strategicTakeaway}
                  </p>
                </GlassCard>
              </Section>
            </div>

            {/* Navigation between case studies */}
            <GlassCard variant="prominent" className="p-6 mt-12">
              <div className="flex justify-between items-center">
                {previous && (
                  <GlassButton
                    href={`/case-studies/${previous.slug}`}
                    variant="ghost"
                    icon={<FiArrowLeft />}
                    iconPosition="left"
                  >
                    {previous.title}
                  </GlassButton>
                )}
                {!previous && <div />}
                {next && (
                  <GlassButton
                    href={`/case-studies/${next.slug}`}
                    variant="ghost"
                    icon={<FiArrowRight />}
                    iconPosition="right"
                  >
                    {next.title}
                  </GlassButton>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </PageContainer>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function MetricCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <GlassCard variant="prominent" className="p-6 border border-purple-500/20">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-medium text-gray-300">{label}</h3>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </GlassCard>
  );
}
