"use client";

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiDownload, FiShare2, FiTwitter, FiLinkedin } from 'react-icons/fi';
import PageContainer from '@/components/PageContainer';
import { caseStudies, getNextAndPreviousCases } from '@/data/caseStudies';

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = useParams();
  const caseStudy = caseStudies.find(cs => cs.slug === slug);
  const { previous, next } = getNextAndPreviousCases(slug as string);

  useEffect(() => {
    if (!caseStudy) {
      router.push('/case-studies');
    }
  }, [caseStudy, router]);

  if (!caseStudy) return null;

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4"
      >
        {/* Enhanced Header Section */}
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

        {/* Metrics Cards with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            value={caseStudy.metrics.metric1}
            label="Key Metric 1"
            icon="📈"
          />
          <MetricCard
            value={caseStudy.metrics.metric2}
            label="Key Metric 2"
            icon="🎯"
          />
          <MetricCard
            value={caseStudy.metrics.timeFrame}
            label="Time Frame"
            icon="⏱️"
          />
        </div>

        {/* Main Content with Enhanced Typography */}
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
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 
                      flex items-center justify-center text-purple-300 text-sm">
                      {i + 1}
                    </span>
                    <span className="text-lg">{challenge}</span>
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

          <Section title="Results" icon="🎉">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {caseStudy.fullContent.results}
              </p>
            </div>
          </Section>

          <Section title="Key Learnings" icon="📝">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
              <ul className="space-y-4">
                {caseStudy.fullContent.keyLearnings.map((learning, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 
                      flex items-center justify-center text-purple-300 text-sm">
                      ✓
                    </span>
                    <span className="text-lg">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section title="Conclusion" icon="✅">
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {caseStudy.fullContent.conclusion.summary}
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-purple-300 font-semibold mb-3">Strategic Takeaway</h4>
                <p className="text-lg text-gray-300 italic leading-relaxed">
                  {caseStudy.fullContent.conclusion.strategicTakeaway}
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Enhanced Actions Section */}
        <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 mt-12">
          <div className="max-w-5xl mx-auto py-4 px-4 flex flex-wrap items-center justify-between gap-4">
            
            {/* Download and Share Buttons - Temporarily disabled
            <div className="flex items-center gap-4">
              <a
                href={caseStudy.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500 
                  text-white font-medium hover:bg-purple-600 transition-all"
              >
                <FiDownload /> Download PDF
              </a>
              <div className="flex items-center gap-2">
                <ShareButton icon={FiTwitter} platform="Twitter" />
                <ShareButton icon={FiLinkedin} platform="LinkedIn" />
                <ShareButton icon={FiShare2} platform="Copy Link" />
              </div>
            </div>
            */}
            

            <div className="flex items-center gap-4">
              {previous && (
                <Link
                  href={`/case-studies/${previous.slug}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiArrowLeft /> Previous Case
                </Link>
              )}
            </div>

            {/* Next Case */}
            <div>
              {next && (
                <Link
                  href={`/case-studies/${next.slug}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  Next Case <FiArrowRight />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

// Enhanced Section Component
function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Enhanced Metric Card Component
function MetricCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all">
      <div className="flex flex-col items-center text-center space-y-3">
        <span className="text-2xl">{icon}</span>
        <p className="text-2xl font-bold text-purple-300">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}

// Enhanced Share Button Component
/*function ShareButton({ icon: Icon, platform }: { icon: any; platform: string }) {
  return (
    <button
      className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 
        transition-all duration-300"
      title={`Share on ${platform}`}
    >
      <Icon size={20} />
    </button>
  );
} */