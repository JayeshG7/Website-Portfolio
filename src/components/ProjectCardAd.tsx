import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardAdProps {
  name: string;
  context: string;
  deliverableIcon: string;
  objective: string;
  audience: string;
  insight: string;
  thumbnailSrc: string;
  pdfLink: string;
  pptLink: string;
  metrics?: string;
  index: number;
}

export default function ProjectCardAd({
  name,
  context,
  deliverableIcon,
  objective,
  audience,
  insight,
  thumbnailSrc,
  pdfLink,
  pptLink,
  metrics,
  index
}: ProjectCardAdProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="bg-gray-900/30 backdrop-blur-sm border border-blue-500/50 shadow-lg p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-gray-900/50">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <Image
            src={deliverableIcon}
            alt=""
            width={32}
            height={32}
            className="rounded"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-400">{context}</p>
          </div>
        </div>

        {/* Overview List */}
        <ul className="list-disc list-inside text-gray-200 flex-1 mb-4 space-y-2">
          <li>
            <strong>Objective:</strong> {objective}
          </li>
          <li>
            <strong>Target Audience:</strong> {audience}
          </li>
          <li>
            <strong>Key Insight:</strong> {insight}
          </li>
        </ul>

        {/* Thumbnail */}
        <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={thumbnailSrc}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-3">
          <Link
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-gray-600 text-sm font-medium hover:bg-gray-800 transition text-gray-200"
          >
            View PDF
          </Link>
          <Link
            href={pptLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-blue-600 text-sm font-medium hover:bg-blue-700 transition text-white"
          >
            Download PPT
          </Link>
        </div>

        {/* Metrics */}
        {metrics && (
          <p className="text-sm text-gray-400 border-t border-gray-700 pt-3">
            {metrics}
          </p>
        )}
      </div>
    </motion.div>
  );
} 