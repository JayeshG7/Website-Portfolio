"use client";

import dynamic from 'next/dynamic';
import PageContainer from '@/components/PageContainer';
import ProjectCardCS from '@/components/ProjectCardCS';
import ProjectCardAd from '@/components/ProjectCardAd';
import DataAnalyticsCard from '@/components/DataAnalyticsCard';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import { FiCode, FiBarChart2, FiTrendingUp, FiSmartphone } from 'react-icons/fi';

// Lazy load ConstellationBackground
const ConstellationBackground = dynamic(() => import('@/components/ConstellationBackground'), {
  ssr: false,
  loading: () => null
});

// Featured project data (RecycleLens - iOS + iSEE partnership)
const featuredProject = {
  title: "RecycleLens",
  category: "Sustainability / iOS Development",
  description: "iOS app solving campus recycling contamination by fixing the real problem: students lack time at disposal, not environmental awareness.",
  problem: "Existing apps force single-item scans with page navigation between each result. That fails when you're tossing multiple items mid-commute - no one scans twice. Result: 25% of recyclables hit landfills, contamination ruins entire bins.",
  solution: "Built native iOS app with Google's Gemini Vision API. Key decision: persistent camera with scan overlays - rapid sequential scanning without navigation. Instagram adoption strategy targeting sophomores. Survey validation: 60% usage intent.",
  impact: "30+ student prototype tests proved the insight: 78% found it intuitive mid-disposal. Partnered with UIUC Institute for Sustainability, Energy, and Environment (iSEE).",
  metrics: {
    primary: "78%",
    primaryLabel: "Intuitive Rating",
    secondary: "iSEE",
    secondaryLabel: "UIUC Partnership",
  },
  videoSrc: "/videos/recyclelens_demo.mp4", // Add your video here - falls back to image if not present
  imageSrc: "/images/recyclelens_preview.png", // Fallback image
  tools: ["Swift", "SwiftUI", "Gemini Vision API", "Python", "Instagram Marketing"],
  githubLink: "https://github.com/JayeshG7/recyclelens", // Update with your actual repo link
  pdfLink: "/pdf/recyclelens_presentation.pdf", // Update with your actual presentation link
};

// Second featured project (FantaFlow - Brand Repositioning)
const fantaFlowProject = {
  title: "FantaFlow",
  category: "Marketing Research / Consumer Insights / Campaign Strategy",
  description: "Gen-Z brand repositioning using mixed-methods research and celebrity partnerships to transform Fanta from overlooked soda to nostalgic indulgence for style-conscious students.",
  problem: "Fanta showed zero campus purchases in retail while energy drinks dominated. Research revealed the identity crisis: 25% of frequent drinkers claimed health-conscious attitudes despite consuming 5+ servings weekly. Brand needed clear positioning to compete in mobile-first, trend-driven student environments.",
  solution: "Conducted naturalistic observation across three campus locations and analyzed 247K+ MRI Simmons consumer attitudes. Discovered Fanta captured 33% market share at fountain stations where accessibility was optimized - revealing impulse-purchase potential. Identified 13% of consumers (32.5M weighted) as indulgence-oriented 'treaters' indexing 151 for guilt-free enjoyment. Developed 'A Taste of Nostalgic Fun' campaign featuring Sabrina Carpenter partnership, sensory orange marketing, and vintage-meets-fresh aesthetics targeting busy, style-conscious Gen-Z students.",
  impact: "Campaign strategy validated through student surveys showing 60% usage intent. Research established fountain-focused distribution as optimal channel for casual, on-the-go consumption among phone-engaged students. Successfully triangulated observational findings, secondary research, and crosstab analysis to reposition Fanta as nostalgia-driven treat rather than health beverage.",
  metrics: {
    primary: "60%",
    primaryLabel: "Usage Intent",
    secondary: "247K+",
    secondaryLabel: "Attitudes Analyzed",
  },
  imageSrc: "/images/fantaimage.png", // Add your Fanta campaign image here
  tools: ["MRI Simmons Research", "Naturalistic Observation", "Instagram Marketing", "Celebrity Partnerships", "Brand Repositioning"],
  pdfLink: "/pdf/fantaproject.pdf",
};

const csProjects = [
  {
    title: "PrairieLearn Productivity Enhancer",
    description: "Chrome extension solving assignment tracking by surfacing deadlines where students work - inside PrairieLearn, not separate apps.",
    techStack: ["Python", "TypeScript", "HTML", "Jupyter Notebook"],
    problem: "Students missed deadlines from context-switching: checking dates meant leaving PrairieLearn, opening calendars, returning. Friction caused cramming and late work.",
    solution: "TypeScript extension overlays deadlines and task summaries in-app. Python backend parses courses, schedules notifications. 30+ student tests refined UI for minimal disruption.",
    impact: "100+ users. 35% better on-time completion during exams when cognitive load peaks. Proved thesis: remove friction, improve follow-through.",
    imageSrc: "/images/PL_image.png",
    githubLink: "https://github.com/JayeshG7/-PrairieLearn-Enhancements-Chrome-Extension-",
    tools: ["Python", "TypeScript", "HTML", "Chrome API"],
  },
  {
    title: "Weather Forecast Scheduler",
    description: "Web app overlaying live weather onto course schedules - solving the planning coordination problem for campus commuters.",
    techStack: ["JavaScript", "Python", "NWS API", "Caching", "React", "Leaflet"],
    problem: "Students checking weather opened separate apps, mentally mapped conditions to class times/locations. Friction led to poor decisions - underprepared or skipped classes.",
    solution: "NWS API data overlaid on course schedules. Leaflet maps show live weather by location with condition-based alerts (rain, snow) tied to class times. Smart caching maintains real-time accuracy, cuts API load.",
    impact: "60-user pilot: 15% better on-time arrival, 40% fewer API requests, 4.7/5 satisfaction. Validated hypothesis: less planning friction, better attendance.",
    imageSrc: "/images/wi_image.png",
    githubLink: "https://github.com/JayeshG7/Weather-Forecast-Integration-System.git",
    demoLink: "https://weather-scheduler.vercel.app",
    tools: ["JavaScript", "Python", "NWS API", "Caching", "React", "Leaflet"],
  },
  {
    title: "Zombie Zork: Distributed Text Adventure Game",
    description: "Multiplayer text game proving distributed architecture enables real-time collaboration at scale without state loss.",
    techStack: ["Python", "aiohttp", "REST APIs", "Distributed Systems", "Game Design"],
    problem: "Traditional text adventures use monolithic design - adding players degrades performance, expanding worlds requires rebuilds, real-time collaboration impossible.",
    solution: "Hub-and-spoke architecture: central hub coordinates domain servers managing discrete zones. Async aiohttp enables responsive cross-domain play, REST APIs power seamless movement, dynamic item system tracks 100% across nodes. Persistent state supports modular expansion.",
    impact: "60% lower server load via inter-node caching. Real-time multi-user play across domains, zero state loss. Modular design ready for expansion. Proves distributed thinking beats monolithic constraints.",
    imageSrc: "/images/zork_image.png",
    githubLink: "https://github.com/jayeshg7/zombie_zork",
    tools: ["Python", "aiohttp", "REST APIs", "Distributed Systems", "Game Design"],
  },
];

const adProjects = [
  {
    name: "Amazon Echo: Value Analysis",
    context: "Digital Marketing Strategy",
    objective: "How does Echo create value across technical, experiential, functional, and social dimensions?",
    audience: "Four-part framework analysis dissecting Echo's product strategy. Examined how on-device AI, voice UX, and network effects drive adoption, retention, and ecosystem lock-in using CS + Analytics + Advertising lens.",
    insight: "Masterclass in ecosystem design: $35 voice assistant becomes gateway to Prime, Music, Shopping via smart architecture and behavioral loops. Strength: emotional design + habit-forming functionality + social influence = sticky, scalable value.",
    thumbnailSrc: "/images/echo_preview.png",
    pdfLink: "/pdf/echo.pdf",
    tools: ["Product Strategy", "UX Analysis", "AI/Voice Interfaces", "Data Storytelling", "Ecosystem Thinking"],
  },
  {
    name: "Red Bull: Creative Strategy Brief",
    context: "Digital Marketing Strategy",
    objective: "How to deepen Gen-Z relevance for a brand owning adrenaline but needing evolution beyond action sports into culture and mental performance?",
    audience: "One-page brief reframing Red Bull as mindset, not drink. Used behavioral insight and cultural tension: Gen-Z doesn't chase energy - they manufacture it.",
    insight: "'Fuel the Mindset' became core promise. Honored original DNA while expanding to flow-state energy - whether skating at 6 a.m. or editing at 2 a.m. Positioned for momentum and control Gen-Z values.",
    thumbnailSrc: "/images/redbull_preview.png",
    pdfLink: "/pdf/Redbull_cb.pdf",
    tools: ["Brand Strategy", "Consumer Insight", "Campaign Messaging", "Cultural Relevance"],
  },
  {
    name: "Hyundai Motors: College Market Insight Study",
    context: "Market Research & Analysis",
    objective: "What drives college student (18-24) needs, priorities, and perceptions around car ownership and Hyundai brand positioning?",
    audience: "20-question survey measuring ownership importance, purchase drivers, brand sentiment versus competitors.",
    insight: "120 responses: 74% cited cost as top barrier. Hyundai seen as affordable, but only 31% found ads persuasive. Gap: value proposition needs sharper messaging for young buyers.",
    thumbnailSrc: "/images/survey_pic.png",
    pptLink: "https://illinois.qualtrics.com/jfe/form/SV_1LAIec8tHv6MDeC",
    tools: ["Market Research", "Survey Design", "Data Analysis", "Competitive Analysis"],
  }
];

const dataProjects = [
  {
    title: "Auto Brand Preferences: Attitudes, Recall, and Purchase Intent",
    tools: ["Excel", "Quantitative Analysis", "Survey Research", "Data Visualization"],
    businessQuestion: "What drives twentysomethings' car brand choices? How do consideration, attitude, and purchase intent differ across Chevy, Ford, Toyota, Hyundai?",
    methodology: "104-person survey evaluating four brands. Captured recall (binary), consideration/attitude/intent (7-point scale). Segmented by gender/age, analyzed in Excel.",
    keyFindings: [
      "Chevy dominates: 100% recall, 6.67 attitude, 6.46 intent - clear winner.",
      "Hyundai paradox: strong consideration (4.33) but weak intent (3.28) - trust gap.",
      "Ford and Toyota: moderate across metrics - stable but unremarkable.",
      "Sample: 46% ages 22-25, 34% ages 18-21, 59% female.",  
    ],
    visualSrc: "/images/auto_ex.png",
    reportLink: "gen_auto.pdf",
  },
  {
    title: "A Decade of GPA Data at UIUC",
    businessQuestion: "Which UIUC courses/instructors (2010-2020) had highest failure rates? What patterns signal difficulty, teaching gaps, or support needs?",
    methodology: "R (tidyverse, ggplot2) analysis of 69K+ courses. Investigated F-grade patterns by subject, instructor, term. Boxplots/bar charts for variance, descriptive stats for enrollment patterns. Deep-dive: ECON and MATH (high enrollment, grade dispersion).",
    keyFindings: [
      "MATH and CHEM lead F-grade counts, followed by ECON and CS.",
      "ECON shows major instructor variance - grading inconsistency or difficulty gaps.",
      "Fall: highest enrollment. Winter: minimal. Average class: 57 students (SD 72) - huge size variance.",
      "PSYC, STAT, CHLH in top 10 failures - support equity questions.",
      "Outliers: courses with 30+ F grades/term - instruction-readiness mismatch.",
    ],
    visualSrc: "/images/gpa_cover.png",
    reportLink: "/gpa_analysis.html",
    tools: ["R", "Tidyverse", "ggplot2", "Data Wrangling", "Descriptive Stats", "Visualization", "Data Cleaning", "Academic Analytics"],
  },
  {
    title: "Movie Analytics Dashboard: Budget, Revenue, and Ratings from IMDb",    
    businessQuestion: "What drives movie success - budget, genre, cast? How do budget/revenue correlate? Which genres earn most? How do scores distribute? How to make exploration interactive?",
    methodology: "SQL cleaned/structured raw IMDb data - normalized, handled nulls, created views. Power BI visualized 1K+ films by budget, revenue, rating, genre. Scatter, histogram, bar chart, slicers for genre/year/language segmentation.",
    keyFindings: [
      "Scores: 5-7 bell curve, peak 6-6.5.",
      "Family and Musical: highest avg revenue, not volume.",
      "Budget-revenue correlation positive, but low-budget outliers significantly outperformed.",
      "Language/genre filters show major variability in revenue/rating patterns.",
      "Interactive slicers enable niche exploration (animation by decade, language-specific trends).",
    ],
    visualSrc: "/images/imdb_image.png",
    reportLink: "/pdf/imdb.pdf",
    tools: ["SQL", "Data Visualization", "Power BI", "Exploratory Analysis", "Dashboard Design", "Data Wrangling", "Entertainment Analytics"],
  },
];

export default function Projects() {
  return (
    <div className="bg-black min-h-screen">
      {/* Constellation Background */}
      <div className="fixed inset-0 z-0">
        <ConstellationBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <PageContainer>
            <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl mx-auto space-y-24"
          >
            {/* Header Section */}
            <motion.div variants={staggerItem} className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="gradient-text">Portfolio</span>
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] mb-6" />
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">                Work spanning <span className="text-cyan-400 font-semibold">technical development</span>, <span className="text-purple-400 font-semibold">data analytics</span>, and <span className="text-blue-400 font-semibold">strategic marketing</span> demonstrating how a UIUC CS and Advertising background ships products that solve real problems with measurable outcomes.
              </p>
            </motion.div>

            {/* Featured Project 1: RecycleLens */}
            <motion.section variants={staggerItem} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 glass-prominent rounded-lg border border-cyan-500/30">
                  <FiSmartphone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Featured: Campus Sustainability App</h2>
                  <p className="text-gray-400">Computer vision iOS app reducing recycling contamination, partnered with UIUC iSEE</p>
                </div>
              </div>
              <FeaturedProjectCard {...featuredProject} />
            </motion.section>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {/* Featured Project 2: FantaFlow */}
            <motion.section variants={staggerItem} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 glass-prominent rounded-lg border border-purple-500/30">
                  <FiTrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Featured: Strategic Marketing Research</h2>
                  <p className="text-gray-400">Gen-Z brand repositioning using mixed-methods research and celebrity partnerships</p>
                </div>
              </div>
              <FeaturedProjectCard {...fantaFlowProject} />
            </motion.section>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            {/* CS Projects Section */}
            <motion.section variants={staggerItem} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 glass-prominent rounded-lg border border-blue-500/30">
                  <FiCode className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Computer Science Projects</h2>
                  <p className="text-gray-400">Full-stack development, distributed systems, and technical problem-solving</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {csProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="h-[650px]"
            >
              <ProjectCardCS {...project} index={index} />
            </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {/* Data Analytics Section */}
            <motion.section variants={staggerItem} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 glass-prominent rounded-lg border border-purple-500/30">
                  <FiBarChart2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Data Analytics Projects</h2>
                  <p className="text-gray-400">Quantitative research, visualization, and data-driven insights</p>
                </div>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataProjects.map((project, index) => (
            <motion.div
                    key={index}
                    variants={staggerItem}
                    className="h-[650px]"
            >
              <DataAnalyticsCard {...project} index={index} />
            </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Visual Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            {/* Advertising Projects Section */}
            <motion.section variants={staggerItem} className="space-y-8 pb-16">
              <div className="flex items-center gap-4">
                <div className="p-3 glass-prominent rounded-lg border border-cyan-500/30">
                  <FiTrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Strategic Marketing Projects</h2>
                  <p className="text-gray-400">Brand strategy, consumer insight, and data-driven marketing</p>
                </div>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adProjects.map((project, index) => (
            <motion.div
                    key={index}
                    variants={staggerItem}
                    className="h-[650px]"
            >
              <ProjectCardAd {...project} index={index} />
            </motion.div>
                ))}
          </div>
            </motion.section>
          </motion.div>
        </PageContainer>
      </div>
    </div>
  );
}
