import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';

interface RelatedProjectsProps {
  currentSlug: string;
}

export default function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
  const currentCase = caseStudies.find(cs => cs.slug === currentSlug);
  const relatedCases = caseStudies
    .filter(cs => cs.slug !== currentSlug && cs.category === currentCase?.category)
    .slice(0, 2);

  if (relatedCases.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Related Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedCases.map((cs, index) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/case-studies/${cs.slug}`}
              className="block p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 
                transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {cs.title}
              </h3>
              <p className="text-gray-400">{cs.preview}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 