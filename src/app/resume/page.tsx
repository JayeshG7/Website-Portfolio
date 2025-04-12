import Link from 'next/link';
import PageContainer from '@/components/PageContainer';

const skills = [
  'Java', 'Python', 'SQL', 'Excel', 'Tailwind', 'Google Analytics', 
];

export default function Resume() {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-6 text-white">Resume</h1>
            
            <p className="text-lg mb-6 text-gray-200">
            An analytical problem solver from a top-ranked CS program, combining technical depth with strategic thinking to deliver impactful, user-driven product solutions.
            Currently studying Computer Science + Advertising at UIUC (GPA 3.87), I’ve built AI chatbots, browser tools, and marketing workflows that drive measurable outcomes. I thrive at the intersection of product, data, and customer insight—bringing a cross-functional mindset to every project.
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap mb-8">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full mr-2 mb-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Download Button and LinkedIn Link */}
            <div className="flex items-center flex-wrap gap-4 mb-4">
              <Link
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                download
                title="Download Resume PDF"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Resume
              </Link>

              <Link
                href="https://www.linkedin.com/in/jayesh-ghosh-a7aab5336/"
                className="inline-flex items-center text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                title="View Profile on LinkedIn"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                View on LinkedIn
              </Link>
            </div>

            <p className="text-sm italic text-gray-400 mt-4">
              Last updated: April 2025
            </p>
          </div>

          {/* Right Column - PDF Preview */}
          <div className="md:col-span-2">
            <div className="relative border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-white/5">
              {/* PDF Preview */}
              <iframe
                src="/resume.pdf"
                className="w-full h-[600px]"
                title="Resume PDF Preview"
              />

              {/* Open in New Tab Button */}
              <Link
                href="/resume.pdf"
                className="absolute top-4 right-4 inline-flex items-center px-4 py-2 bg-gray-900/80 text-white text-sm rounded-md hover:bg-gray-900 transition-colors backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Resume in New Tab"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
                Open in New Tab
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

