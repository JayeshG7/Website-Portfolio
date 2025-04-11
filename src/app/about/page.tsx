import Link from 'next/link';
import PageContainer from '@/components/PageContainer';

// Icons from Heroicons (you can replace with your own SVGs)
const CodeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const DataIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function About() {
  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center py-16 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Jayesh Ghosh: Where Code Meets Creativity
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
          Product-minded. Data-fluent. Strategy-driven. I build tools and insights that move people and businesses.
          </p>
        </header>

        {/* My Journey */}
        <section className="bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="max-w-4xl mx-auto py-12 px-6">
            <p className="text-lg leading-relaxed text-gray-200">
            At fourteen, I launched my first website—MarineHub—a place for saltwater aquarium lovers to swap tips on raising fish and corals. It was static, simple, and full of passion. I taught myself HTML and CSS, and even added a “Contact Me” tab so fellow hobbyists could reach out with questions. 
            That small site taught me two big things: People connect through well-crafted experiences, and Technology should always serve the user. That same energy—curiosity, clarity, and care—still drives everything I build today.
            </p>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {/* Experience Card */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-large text-blue-400">Technical Product Management Intern</h3>
                <p className="text-gray-300">Liberty Infospace- EasyDo Tasks • Summer 2024</p>
                <ul className="mt-2 space-y-2 text-gray-200">
                  <li>• Collaborated and developed an AI chatbot that improved engagement by 30% and cut response time by 12%</li>
                  <li>• Conducted user feedback analysis for 150+ users to prioritize features and reduce tech debt by 15%</li>
                  <li>• Supported agile sprints, wrote internal docs, and streamlined product workflow</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-large text-blue-400">
                  University of Illinois at Urbana-Champaign
                </h3>
                <p className="text-gray-300">BS Computer Science & Advertising • May 2026</p>
                <ul className="mt-2 space-y-2 text-gray-200">
                  <li>• GPA: 3.9/4.0</li>
                  <li>• Dean's List x 3</li>
                  <li>• Key Courses: Data Structures, Algorithms, Systems Programming, Brand Strategy, Consumer Insight</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-12">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <CodeIcon />, label: "Product" },
              { icon: <UserIcon />, label: "Cross-Functional Collaboration" },
              { icon: <MarketingIcon />, label: " Marketing" },
              { icon: <DataIcon />, label: "Data Analytics" },
            ].map((strength, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-blue-400">{strength.icon}</div>
                <span className="text-gray-200 font-medium">{strength.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Me? */}
        <section className="py-12">
          <blockquote className="max-w-xl mx-auto text-center italic text-lg text-gray-300">
          “I bridge the gap between technical depth and marketing instinct—turning raw data into insights, and insights into products that people love to use.”
          </blockquote>
        </section>

        {/* Call to Action */}
        <section className="py-12 flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition-colors"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-md border border-blue-400 text-blue-400 text-center hover:bg-blue-600/10 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </PageContainer>
  );
}

