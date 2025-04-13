import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function CaseStudyCard({ title, description, slug }: {
  title: string;
  description: string;
  slug: string;
}) {
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
            </div>

            {/* Preview Text */}
            <p className="text-gray-300">{description}</p>
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