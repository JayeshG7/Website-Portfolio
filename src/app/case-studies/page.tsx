import { caseStudies } from '@/data/caseStudies';
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';

export const metadata = {
  title: 'Case Studies | Jayesh Ghosh',
  description: 'Explore detailed case studies of my projects and their impact.',
};

export default function CaseStudies() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Case Studies</h1>
          <p className="text-xl text-gray-300">
            Deep dives into selected projects and their impact.
          </p>
        </header>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="block p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">{study.title}</h2>
                <p className="text-gray-300">{study.metaDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/10 
                        text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
} 