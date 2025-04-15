import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import Image from 'next/image';
import { CodeIcon, MarketingIcon, DataIcon, UserIcon } from '@/components/Icons';

export default function About() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white">
            Jayesh Ghosh: Where Code Meets Creativity
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Building products and campaigns that spark engagement and drive growth.
          </p>
        </header>

        {/* My Journey */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-12  bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.png"
              alt="Jayesh Ghosh"
              width={128}
              height={128}
              className="rounded-full"
              priority
            />
          </div>
          {/* Journey Text */}
          <p className="text-lg leading-relaxed text-gray-200 flex-1">
            At fourteen, I launched my first website—MarineHub—a place for saltwater aquarium lovers to swap tips on raising fish and corals. It was static, simple, and full of passion. I taught myself HTML and CSS, and even added a &ldquo;Contact Me&rdquo; tab so fellow hobbyists could reach out with questions. That small site taught me two big things: People connect through well-crafted experiences, and technology should always serve the user. That same energy—curiosity, clarity, and care—still drives everything I build today.
          </p>
        </div>

        {/* Experience & Education */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {/* Experience Card */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
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
          <div className="bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-large text-blue-400">
                  University of Illinois at Urbana-Champaign
                </h3>
                <p className="text-gray-300">BS Computer Science & Advertising • May 2026</p>
                <ul className="mt-2 space-y-2 text-gray-200">
                  <li>• GPA: 3.9/4.0</li>
                  <li>• Dean&apos;s List x 3</li>
                  <li>• Key Courses: Data Structures, Algorithms, Systems Programming, Brand Strategy, Consumer Insight</li>
                  <li>• Organizations: Association for Computing Machinery (ACM), Phi Eta Sigma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-12">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <CodeIcon />, label: 'Product Management' },
              { icon: <UserIcon />, label: 'Cross-Functional Collaboration' },
              { icon: <MarketingIcon />, label: 'Digital Marketing' },
              { icon: <DataIcon />, label: 'Data Analytics' }
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
            &ldquo;I&apos;m passionate about turning user insights into meaningful products through strategy, analytics, and cross-functional collaboration. &rdquo;
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

