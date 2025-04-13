import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import type { CaseStudy } from '@/data/caseStudies';

interface CaseStudyCardProps extends CaseStudy {
  index: number;
}

export default function CaseStudyCard({
  slug,
  title,
  company,
  preview,
  tags,
  metrics,
  index
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
      <div className="group relative bg-black/40 backdrop-blur-sm border border-gray-800/50 
        hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 
        hover:shadow-lg hover:shadow-purple-500/10"
      >
        <div className="h-full flex flex-col">
          {/* Content */}
          <div className="flex-1 space-y-6">
            {/* Title and Company */}
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 
                transition-colors"
              >
                {title}
              </h3>
              <p className="text-gray-400">{company}</p>
            </div>

            {/* Preview Text */}
            <p className="text-gray-300">{preview}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-purple-500/10 
                    text-purple-300 border border-purple-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-xl font-bold text-purple-400">{metrics.metric1}</p>
                <p className="text-sm text-gray-400">{metrics.metric1Label}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold text-purple-400">{metrics.metric2}</p>
                <p className="text-sm text-gray-400">{metrics.metric2Label}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold text-purple-400">{metrics.timeFrame}</p>
                <p className="text-sm text-gray-400">{metrics.timeFrameLabel}</p>
              </div>
            </div>
          </div>

          {/* Learn More Link */}
          <div className="mt-6 flex items-center gap-2 text-purple-300 
            group-hover:text-purple-400 transition-colors"
          >
            <span>Learn More</span>
            <FiArrowRight className="text-lg" />
          </div>
        </div>
      </div>
    </Link>
  );
} 