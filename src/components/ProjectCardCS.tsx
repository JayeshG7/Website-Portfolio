import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardCSProps {
  title: string;
  techStack: string[];
  problem: string;
  solution: string;
  impact: string;
  imageSrc: string;
  githubLink: string;
  demoLink?: string;
  index: number;
}

export default function ProjectCardCS({
  title,
  techStack,
  problem,
  solution,
  impact,
  imageSrc,
  githubLink,
  demoLink,
  index
}: ProjectCardCSProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/50 shadow-lg p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-900/50">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap mb-4">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full mr-2 mb-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Overview List */}
        <ul className="list-disc list-inside text-gray-200 flex-1 mb-4 space-y-2">
          <li>
            <strong>Problem:</strong> {problem}
          </li>
          <li>
            <strong>Solution:</strong> {solution}
          </li>
          <li>
            <strong>Impact:</strong> {impact}
          </li>
        </ul>

        {/* Project Image */}
        <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-gray-600 text-sm font-medium hover:bg-gray-800 transition text-gray-200"
          >
            GitHub
          </Link>
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-600 text-sm font-medium hover:bg-blue-700 transition text-white"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
} 