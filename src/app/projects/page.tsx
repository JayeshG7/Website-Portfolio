"use client";

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import Tabs from '@/components/Tabs';
import ProjectCardCS from '@/components/ProjectCardCS';
import ProjectCardAd from '@/components/ProjectCardAd';
import DataAnalyticsCard from '@/components/DataAnalyticsCard';
import { motion } from 'framer-motion';

const csProjects = [
  
  {
    title: "PrairieLearn Productivity Enhancer",
    description: "A Chrome extension that helps students track and manage PrairieLearn assignments more effectively.",
    techStack: ["python", "typescript", "html", "Jupyter Notebook"],
    problem: "PrairieLearn users struggled to keep track of assignment deadlines across multiple courses, leading to missed tasks and last‑minute cramming.",
    solution: "Developed a Chrome extension in TypeScript that overlays upcoming deadlines and task summaries directly within the PrairieLearn interface. Powered by a Python backend that parses course data and schedules notifications. Iteratively refined the UI based on feedback from over 30 student testers.",
    impact: "Helped over 100 users reduce academic stress and improved task tracking during exam periods by 35%.",
    imageSrc: "/images/PL_image.png",
    githubLink: "https://github.com/JayeshG7/-PrairieLearn-Enhancements-Chrome-Extension-",
    tools: ["python", "typescript", "html", "Jupyter Notebook"],
  },
  {
    title: "Weather Forecast Scheduler",
    description: "A responsive web app that integrates weather data with personal schedules for better planning.",
    techStack: ["JavaScript", "Python", "NWS API", "Caching", "React", "Leaflet"],
    problem: "Students lacked a simple way to plan around local weather conditions when managing class schedules.",
    solution: "Built a responsive web app that integrates the National Weather Service (NWS) API with personal course schedules, featuring interactive maps with live weather overlays and dynamic condition‑based alerts",
    impact: "Reduced API requests by 40% through intelligent caching, improved on‑time class attendance by 15% for pilot users (n=60), and earned a 4.7/5 satisfaction rating in demo sessions.",
    imageSrc: "/images/wi_image.png",
    githubLink: "https://github.com/JayeshG7/Weather-Forecast-Integration-System.git",
    demoLink: "https://weather-scheduler.vercel.app",
    tools: ["JavaScript", "Python", "NWS API", "Caching", "React", "Leaflet"],
  },
  {
    title: "Zombie Zork: Distributed Text Adventure Game",
    description: "A scalable, multiplayer text adventure game built with a distributed architecture.",
    techStack: ["Python", "aiohttp", "REST APIs", "Distributed Systems", "Game Design"],
    problem: "Traditional text-based adventure games are constrained by monolithic architectures, limiting scalability, user collaboration, and real-time responsiveness. There's a gap in the market for a distributed, multiplayer-first system that enables dynamic environments, persistent game state, and modular world expansion.",
    solution: "Designed and implemented a scalable, zombie-themed text adventure game using a hub-and-spoke distributed architecture. Key features include central hub server coordinating multiple domain servers, asynchronous communication using aiohttp for responsive gameplay, RESTful API endpoints enabling seamless player movement, dynamic item system, and persistent state management.",
    impact: "Reduced server load by 60% through efficient inter-node caching, enabled real-time multi-user gameplay across distributed domains, achieved 100% item tracking accuracy, and built a modular system supporting future expansion.",
    imageSrc: "/images/zork_image.png",
    githubLink: "https://github.com/jayeshg7/zombie_zork",
    tools: ["Python", "aiohttp", "REST APIs", "Distributed Systems", "Game Design"],
  },
  // Add more CS projects...
];

const adProjects = [
  {
    name: "Amazon Echo: Value Analysis",
    context: "Digital Marketing Strategy",
    objective: "How does Amazon Echo create customer value across technical, experiential, functional, and social dimensions?",
    audience: "This analysis applies a four-part value framework—economic, functional, experiential, and social—to dissect the Echo's product strategy. Using my background in Computer Science, Data Analytics, and Advertising, I examined how features like on-device AI, voice UX, and network effects drive user adoption, retention, and ecosystem lock-in.",
    insight: "Amazon Echo is a masterclass in ecosystem design. It turns a $35 voice assistant into a gateway for Amazon's broader services—Prime, Music, Shopping—through smart product architecture and behavioral engagement loops. Its real strength lies in how emotional design, habit-forming functionality, and social influence combine to create sticky, scalable value.",
    thumbnailSrc: "/images/echo_preview.png",
    pdfLink: "/pdf/echo.pdf",
    tools: ["Product Strategy", "UX Analysis", "AI/Voice Interfaces", "Data Storytelling", "Ecosystem Thinking"],
  },
  {
    name: "Red Bull: Creative Strategy Brief",
    context: "Digital Marketing Strategy",
    objective: "Red Bull needed a way to deepen its relevance with Gen Z—an audience that values control, momentum, and brands that reflect their pace and mindset. While the brand already owns adrenaline and energy, the challenge was to evolve the message beyond action sports and into culture, creativity, and mental performance.",
    audience: "This one-page brief reframed Red Bull as more than a drink—it became a mindset. Using behavioral insight and cultural tension, the strategy focused on the idea that Gen Z doesn't chase energy—they manufacture it.",
    insight: "Fuel the Mindset became the core brand promise. The idea spoke to Red Bull's original DNA while expanding its relevance into flow state energy—whether you're skating at 6 a.m. or editing at 2 a.m.",
    thumbnailSrc: "/images/redbull_preview.png",
    pdfLink: "/pdf/redbull.pdf",
    tools: ["Brand Strategy", "Consumer Insight", "Campaign Messaging", "Cultural Relevance"],
  },
  {
    name: "Hyundai Motors: College Market Insight Study",
    context: "Market Research & Analysis",
    objective: "How can Hyundai better understand the needs, priorities, and perceptions of college students when it comes to car ownership and brand positioning?",
    audience: "Designed and conducted a comprehensive 20-question survey targeting college students aged 18-24, measuring perceived importance of car ownership, purchase drivers, and brand sentiment toward Hyundai versus competitors.",
    insight: "From 120 responses, 74% ranked cost-related concerns as their top barrier. While Hyundai was perceived as affordable, only 31% rated its advertising as persuasive, suggesting an opportunity to sharpen value proposition for younger buyers.",
    thumbnailSrc: "/images/survey_pic.png",
    pptLink: "https://illinois.qualtrics.com/jfe/form/SV_1LAIec8tHv6MDeC",
    tools: ["Market Research", "Survey Design", "Data Analysis", "Competitive Analysis"],
  }
];

const dataProjects = [
  {
    title: "Auto Brand Preferences: Attitudes, Recall, and Purchase Intent",
    tools: ["Excel", "Quantitative Analysis", "Survey Research", "Data Visualization"],
    businessQuestion: "What influences perople in their twenties when choosing between major car brands — and how do brand consideration, attitude, and purchase intention differ across Chevy, Ford, Toyota, and Hyundai?",
    methodology: "Collected survey responses from 104 individuals through a structured questionnaire evaluating four car brands. The survey captured brand recall (1 = Yes, 2 = No), consideration, attitude, and purchase intention on a 7-point scale. Responses were segmented by gender and age group, and all visual analysis was conducted in Excel.",
    keyFindings: [
      "Chevy leads across all metrics — perfect recall (100%), highest brand attitude (6.67), and strongest purchase intention (6.46).",
      "Hyundai ranks high in consideration (4.33) but underperforms in purchase intention (3.28), suggesting a trust or value gap.",
      "Ford and Toyota show moderate performance across all three metrics, indicating stable but less compelling brand positions.",
      "22–25 year-olds dominate the dataset (46%), followed by 18–21 year-olds (34%) and 26–30 year-olds (18%), with minimal response from under-18s.",
      "Female respondents make up 59%, adding balance and gender diversity to brand perception insights.",  
    ],
    visualSrc: "/images/auto_ex.png",
    reportLink: "gen_auto.pdf",
  },
  {
    title: "A Decade of GPA Data at UIUC",
    businessQuestion: "Grades are more than academic results—they signal academic difficulty, teaching effectiveness, and resource gaps. This project explores: Which courses and instructors at the University of Illinois (2010–2020) had the highest rates of student failure? What patterns emerge across departments and terms? Are there signs of grade inequality or opportunities for targeted academic support?",
    methodology: "This analysis used R (tidyverse, ggplot2) to clean and explore a decade's worth of GPA data across 69,000+ courses. After filtering incomplete records, we investigated failure patterns (F grades) by subject, instructor, and term. Custom boxplots and bar charts visualized variance in grading, while descriptive statistics (mean, mode, standard deviation) profiled enrollment patterns and outlier behavior. ECON and MATH were selected for deeper instructor-level analysis due to high enrollment and notable grade dispersion.",
    keyFindings: [
      
      "MATH and CHEM top the list of departments with the most F grades issued over 10 years, followed by ECON and CS.",
      "Significant instructor-level variation in ECON courses suggests grading inconsistency or differing course difficulty.",
      "Fall terms had the highest student enrollment, while Winter saw minimal participation.",
      "The average class had 57 students, but with high variance (SD ≈ 72), indicating major differences in course sizes.",
      "Hoffman, Ruth A was the most frequently appearing instructor across the data set.",
      "ACCY course numbers clustered around 312, possibly denoting a central/equivalent difficulty range.",
      "Subjects like PSYC, STAT, and CHLH also appeared in the top 10 for failure rates, raising questions of support equity.",
      "Some outlier courses issued >30 F grades in a single term, potentially signaling misalignment between instruction and student readiness."
    ],
    visualSrc: "/images/gpa_cover.png",
    reportLink: "/gpa_analysis.html",
    tools: ["R", "Tidyverse", "ggplot2", "Data Wrangling", "Descriptive Stats", "Visualization", "Data Cleaning", "Academic Analytics"],
  },
  {
    title: "Movie Analytics Dashboard: Budget, Revenue, and Ratings from IMDb",    
    businessQuestion: "What drives a movie's success—budget, genre, cast, or something else entirely? This project investigates the financial and critical performance of films using IMDb data. Key questions include: How does budget correlate with gross revenue? Which genres earn more on average? How do IMDb scores distribute across the dataset? And how can we use interactivity to make this exploration dynamic for different filters like language and release year?",
    methodology: "The dataset (cleaned in Excel) was imported into Power BI (Web), where custom visualizations were created to explore over a thousand films by budget, revenue, IMDb rating, and genre. The dashboard includes a scatter plot, histogram, bar chart, and slicers to let users segment by genre, release year, and language. Visual elements were formatted for clarity, interactivity, and insight.",
    keyFindings: [
      "Most films fall between IMDb scores of 5 and 7, with a clear bell curve around the 6–6.5 range.",
      "Family and Musical films consistently show the highest average gross revenue, even if they don't dominate in number.",
      "Budget and revenue have a positive correlation, but several low-budget titles significantly outperformed expectations.",
      "Language and genre filters reveal significant variability in revenue and rating patterns across different segments.",
      "Interactive filters allow users to dynamically explore niche trends, e.g., the success of animation in specific decades or language-specific performance.",
    ],
    visualSrc: "/images/imdb_image.png",
    reportLink: "/pdf/imdb.pdf",
    tools: ["Data Visualization", "Power BI", "Exploratory Analysis", "Dashboard Design", "Data Wrangling", "Entertainment Analytics"],
  },
  // Add more data projects...
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("CS Projects");
  const tabs = ["CS Projects", "Data Analytics", "Advertising Projects"];

  const renderProjects = () => {
    switch (activeTab) {
      case "CS Projects":
        return csProjects.map((project, index) => (
          <div key={index} className="self-start h-[48rem]">
            <motion.div
              
              
            
              className="..."
            >
              <ProjectCardCS {...project} index={index} />
            </motion.div>
          </div>
        ));
      case "Data Analytics":
        return dataProjects.map((project, index) => (
          <div key={index} className="self-start h-[48rem]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="..."
            >
              <DataAnalyticsCard {...project} index={index} />
            </motion.div>
          </div>
        ));
      case "Advertising Projects":
        return adProjects.map((project, index) => (
          <div key={index} className="self-start h-[48rem]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="..."
            >
              <ProjectCardAd {...project} index={index} />
            </motion.div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        
        <Tabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onChange={setActiveTab} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {renderProjects()}
        </div>
      </div>
    </PageContainer>
  );
}

