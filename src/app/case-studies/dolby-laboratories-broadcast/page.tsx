"use client";

import { motion } from 'framer-motion';
import { caseStudies, getNextAndPreviousCases } from '@/data/caseStudies';
import PageContainer from '@/components/PageContainer';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function DolbyCaseStudy() {
  const caseStudy = caseStudies.find(cs => cs.slug === 'dolby-laboratories-broadcast')!;
  const { previous, next } = getNextAndPreviousCases(caseStudy.slug);

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Case Studies
          </Link>
        </div>

        {/* Header */}
        <div className="relative py-12 mb-8">
          <div className="relative space-y-6">
            {/* Title and Company */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {caseStudy.title}
              </h1>
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
            label={caseStudy.metrics.metric1Label || "Market Control"}
            icon="📈"
          />
          <MetricCard
            value={caseStudy.metrics.metric2}
            label={caseStudy.metrics.metric2Label || "Cable Head Ends"}
            icon="🎯"
          />
          <MetricCard
            value={caseStudy.metrics.timeFrame}
            label={caseStudy.metrics.timeFrameLabel || "Year"}
            icon="⏱️"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-12 py-8">
          <Section title="Overview" icon="🔍">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {caseStudy.fullContent.overview}
              </p>
            </div>
          </Section>

          <Section title="Key Challenges" icon="⚡">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
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
            </div>
          </Section>

          <Section title="Solution" icon="💡">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {caseStudy.fullContent.solution}
              </p>
            </div>
          </Section>

          <Section title="Results" icon="📊">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {caseStudy.fullContent.results}
              </p>
            </div>
          </Section>

          <Section title="Key Learnings" icon="🎓">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
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
            </div>
          </Section>

          <Section title="Conclusion" icon="✨">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                {caseStudy.fullContent.conclusion.summary}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed italic">
                {caseStudy.fullContent.conclusion.strategicTakeaway}
              </p>
            </div>
          </Section>
        </div>

        {/* Navigation between case studies */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800">
          {previous && (
            <Link
              href={`/case-studies/${previous.slug}`}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              {previous.title}
            </Link>
          )}
          {next && (
            <Link
              href={`/case-studies/${next.slug}`}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              {next.title}
              <FiArrowRight className="ml-2" />
            </Link>
          )}
        </div>
      </motion.div>
    </PageContainer>
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
    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-medium text-gray-300">{label}</h3>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
} 