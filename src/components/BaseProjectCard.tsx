import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiFileText, FiDatabase, FiPieChart, FiChevronDown } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

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
    hover: 'hover:ring-blue-500/50 hover:shadow-blue-500/20 hover:border-blue-500/75',
    button: 'bg-blue-500 hover:bg-blue-600',
    tag: 'bg-blue-500/20 text-blue-300',
  },
  data: {
    hover: 'hover:ring-purple-500/50 hover:shadow-purple-500/20 hover:border-purple-500/75',
    button: 'bg-purple-500 hover:bg-purple-600',
    tag: 'bg-purple-500/20 text-purple-300',
  },
  advertising: {
    hover: 'hover:ring-[#E84A27]/50 hover:shadow-[#E84A27]/20 hover:border-[#E84A27]/75',
    button: 'bg-[#E84A27] hover:bg-[#E84A27]/80',
    tag: 'bg-[#E84A27]/20 text-[#E84A27]',
  },
};

export default function BaseProjectCard({
  index,
  title,
  description,
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  // Handle scroll position
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setIsAtBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative h-[650px] rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 
        transition-all duration-300 hover:ring-2 hover:shadow-xl ${colors.hover}`}
    >
      <div className="h-full flex flex-col">
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
            <div className="h-full w-full bg-gray-800" />
          )}
        </div>

        {/* Content Section */}
        <div 
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
          <div className="p-6 pb-24 space-y-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            
            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {tools?.map((tool, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${colors.tag}`}
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              {/* CS Project Format */}
              {category === 'cs' && (
                <>
                  {problem && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Problem</h4>
                      <p className="text-gray-300">{problem}</p>
                    </div>
                  )}
                  {solution && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300">{solution}</p>
                    </div>
                  )}
                  {impact && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Impact</h4>
                      <p className="text-gray-300">{impact}</p>
                    </div>
                  )}
                </>
              )}

              {/* Data Analytics & Advertising Format */}
              {category !== 'cs' && (
                <>
                  {businessQuestion && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Business Question</h4>
                      <p className="text-gray-300">{businessQuestion}</p>
                    </div>
                  )}
                  {methodology && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Methodology</h4>
                      <p className="text-gray-300">{methodology}</p>
                    </div>
                  )}
                  {keyFindings && keyFindings.length > 0 && (
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Findings</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {keyFindings.map((finding, i) => (
                          <li key={i}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          {isScrollable && !isAtBottom && (
            <div className="absolute bottom-20 left-0 right-0 pointer-events-none">
              <div className="h-20 bg-gradient-to-t from-gray-900/90 to-transparent" />
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiChevronDown size={24} />
              </motion.div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 shadow-lg">
          <div className="flex flex-wrap gap-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${colors.button}`}
              >
                <FiGithub /> Code
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${colors.button}`}
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
            {links.report && (
              <a
                href={links.report}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${colors.button}`}
              >
                <FiFileText /> Report
              </a>
            )}
            {links.dataset && (
              <a
                href={links.dataset}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${colors.button}`}
              >
                <FiDatabase /> Dataset
              </a>
            )}
            {links.survey && (
              <a
                href={links.survey}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${colors.button}`}
              >
                <FiPieChart /> Survey
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
