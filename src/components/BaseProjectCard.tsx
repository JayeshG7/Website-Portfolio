import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiFileText, FiDatabase, FiPieChart } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';

interface BaseProjectCardProps {
  index: number;
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  category: 'cs' | 'data' | 'advertising';
  links: {
    github?: string;
    live?: string;
    report?: string;
    survey?: string;
    dataset?: string;
  };
  // Content sections
  problem?: string;
  solution?: string;
  impact?: string;
  businessQuestion?: string;
  methodology?: string;
  keyFindings?: string[];
}

const categoryColors = {
  cs: {
    neonBorder: 'blue' as const,
    glow: 'shadow-[0_0_25px_rgba(59,130,246,0.2)]',
    button: 'glass-prominent hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-500/50 hover:border-blue-400/70',
    tag: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
    accent: 'text-blue-400',
  },
  data: {
    neonBorder: 'purple' as const,
    glow: 'shadow-[0_0_25px_rgba(168,85,247,0.2)]',
    button: 'glass-prominent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-500/50 hover:border-purple-400/70',
    tag: 'bg-purple-500/10 text-purple-300 border border-purple-500/20',
    accent: 'text-purple-400',
  },
  advertising: {
    neonBorder: 'cyan' as const,
    glow: 'shadow-[0_0_25px_rgba(6,182,212,0.2)]',
    button: 'glass-prominent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-500/50 hover:border-cyan-400/70',
    tag: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
    accent: 'text-cyan-400',
  },
};

export default function BaseProjectCard({
  index,
  title,
  tools,
  imageUrl,
  category,
  links,
  problem,
  solution,
  impact,
  businessQuestion,
  methodology,
  keyFindings,
}: BaseProjectCardProps) {
  const colors = categoryColors[category];

  return (
    <GlassCard
      variant="prominent"
      hover={true}
      neonBorder={colors.neonBorder}
      className={`h-full flex flex-col ${colors.glow}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full rounded-t-xl overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>
        
        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tools?.slice(0, 4).map((tool, i) => (
            <span
              key={i}
              className={`px-2 py-1 rounded-full text-xs font-medium ${colors.tag}`}
            >
              {tool}
            </span>
          ))}
          {tools?.length > 4 && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors.tag}`}>
              +{tools.length - 4}
            </span>
          )}
        </div>

        {/* Content - Condensed, no scroll */}
        <div className="space-y-3 mb-4 flex-grow">
          {/* CS Project Format */}
          {category === 'cs' && (
            <>
              {problem && (
                <div>
                  <h4 className={`text-xs font-semibold mb-1 uppercase tracking-wide ${colors.accent}`}>Challenge</h4>
                  <p className="text-gray-300 text-sm line-clamp-2">{problem}</p>
                </div>
              )}
              {impact && (
                <div>
                  <h4 className={`text-xs font-semibold mb-1 uppercase tracking-wide ${colors.accent}`}>Impact</h4>
                  <p className="text-gray-300 text-sm font-medium line-clamp-2">{impact}</p>
                </div>
              )}
            </>
          )}

          {/* Data Analytics & Advertising Format */}
          {category !== 'cs' && (
            <>
              {businessQuestion && (
                <div>
                  <h4 className={`text-xs font-semibold mb-1 uppercase tracking-wide ${colors.accent}`}>Question</h4>
                  <p className="text-gray-300 text-sm line-clamp-3">{businessQuestion}</p>
                </div>
              )}
              {keyFindings && keyFindings.length > 0 && (
                <div>
                  <h4 className={`text-xs font-semibold mb-1 uppercase tracking-wide ${colors.accent}`}>Key Insights</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {keyFindings.slice(0, 2).map((finding, i) => (
                      <li key={i} className="line-clamp-1">• {finding}</li>
                    ))}
                    {keyFindings.length > 2 && (
                      <li className="text-gray-400 text-xs">+{keyFindings.length - 2} more insights</li>
                    )}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer - Actions */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {links.github && (
            <motion.a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm transition-all duration-300 ${colors.button}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-3.5 h-3.5" /> Code
            </motion.a>
          )}
          {links.live && (
            <motion.a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm transition-all duration-300 ${colors.button}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="w-3.5 h-3.5" /> Demo
            </motion.a>
          )}
          {links.report && (
            <motion.a
              href={links.report}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm transition-all duration-300 ${colors.button}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText className="w-3.5 h-3.5" /> Report
            </motion.a>
          )}
          {links.dataset && (
            <motion.a
              href={links.dataset}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm transition-all duration-300 ${colors.button}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDatabase className="w-3.5 h-3.5" /> Data
            </motion.a>
          )}
          {links.survey && (
            <motion.a
              href={links.survey}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-sm transition-all duration-300 ${colors.button}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPieChart className="w-3.5 h-3.5" /> Survey
            </motion.a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
