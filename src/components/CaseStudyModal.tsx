import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload } from 'react-icons/fi';

interface CaseStudyModalProps {
  caseStudy: {
    title: string;
    company: string;
    metrics: {
      metric1: string;
      metric2: string;
      timeFrame: string;
    };
    fullContent: {
      overview: string;
      challenges: string[];
      solution: string;
      results: string;
      keyLearnings: string[];
      conclusion: {
        summary: string;
        strategicTakeaway: string;
      };
    };
    pdfUrl: string;
  };
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl 
            bg-gray-900/95 backdrop-blur-sm border border-gray-800 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-gray-400
              hover:bg-gray-800 hover:text-white transition-all"
          >
            <FiX size={20} />
          </button>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">{caseStudy.title}</h2>
              <p className="text-gray-400">{caseStudy.company}</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 p-4 bg-gray-800/50 rounded-lg">
              <div>
                <p className="text-[#E84A27] font-bold text-xl">{caseStudy.metrics.metric1}</p>
                <p className="text-sm text-gray-400">Key Metric 1</p>
              </div>
              <div>
                <p className="text-[#E84A27] font-bold text-xl">{caseStudy.metrics.metric2}</p>
                <p className="text-sm text-gray-400">Key Metric 2</p>
              </div>
              <div>
                <p className="text-[#E84A27] font-bold text-xl">{caseStudy.metrics.timeFrame}</p>
                <p className="text-sm text-gray-400">Time Frame</p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              <Section title="Overview" icon="🔍">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {caseStudy.fullContent.overview}
                  </p>
                </div>
              </Section>

              <Section title="Key Challenges">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {caseStudy.fullContent.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Solution">
                <p className="text-gray-300">{caseStudy.fullContent.solution}</p>
              </Section>

              <Section title="Results">
                <p className="text-gray-300">{caseStudy.fullContent.results}</p>
              </Section>

              <Section title="Key Learnings" icon="📝">
                <ul className="space-y-4">
                  {caseStudy.fullContent.keyLearnings.map((learning, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E84A27]/20 
                        flex items-center justify-center text-[#E84A27] text-sm">
                        ✓
                      </span>
                      <span className="text-lg">{learning}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Conclusion" icon="✅">
                <div className="space-y-6">
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {caseStudy.fullContent.conclusion.summary}
                    </p>
                  </div>
                  
                  <div className="bg-[#E84A27]/10 border border-[#E84A27]/20 rounded-xl p-6">
                    <h4 className="text-[#E84A27] font-semibold mb-3">Strategic Takeaway</h4>
                    <p className="text-lg text-gray-300 italic leading-relaxed">
                      {caseStudy.fullContent.conclusion.strategicTakeaway}
                    </p>
                  </div>
                </div>
              </Section>
            </div>

            {/* Download PDF Button */}
            <div className="pt-4 border-t border-gray-800">
              <a
                href={caseStudy.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E84A27] text-white
                  hover:bg-[#E84A27]/90 transition-all"
              >
                <FiDownload /> Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({ title, icon, children }: { title: string; icon?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      {children}
    </div>
  );
} 