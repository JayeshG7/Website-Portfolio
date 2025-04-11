"use client";

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import Tabs from '@/components/Tabs';
import ProjectCardCS from '@/components/ProjectCardCS';
import ProjectCardAd from '@/components/ProjectCardAd';

const csProjects = [
  {
    title: "PrairieLearn Productivity Enhancer",
    techStack: ["javascript", "typescript", "html", "css"],
    problem: "Students using PrairieLearn lacked visibility into upcoming deadlines and academic tasks.",
    solution: "Built a Chrome extension that overlays deadlines in a clean, intuitive UI, iteratively improved through user feedback.",
    impact: "Helped over 100 users reduce academic stress and improved task tracking during exam periods.",
    imageSrc: "/projects/prairielearn-extension.png",
    githubLink: "https://github.com/jayeshg7/prairielearn-extension",
    demoLink: "https://prairielearn-enhancer.vercel.app"
  },
  {
    title: "Weather Forecast Scheduler",
    techStack: ["javascript", "html", "css", "api"],
    problem: "Students lacked a simple way to plan around local weather conditions when managing class schedules.",
    solution: "Built a responsive web app that combines OpenWeather API data with personal course schedules for daily planning.",
    impact: "Reduced API call volume by 40% through intelligent caching and modular architecture; used in demo sessions for product feedback.",
    imageSrc: "/projects/weather-scheduler.png",
    githubLink: "https://github.com/jayeshg7/weather-scheduler",
    demoLink: "https://weather-scheduler.vercel.app"
  },
  {
    title: "Portfolio Website",
    techStack: ["react", "typescript", "tailwind"],
    problem: "Needed a modern, responsive portfolio to showcase projects",
    solution: "Built a Next.js site with dynamic routing and smooth animations",
    impact: "Improved page load times by 40% using Next.js Image optimization",
    imageSrc: "/projects/portfolio.png",
    githubLink: "https://github.com/yourusername/portfolio",
    demoLink: "https://yourportfolio.com"
  },
  // Add more CS projects...
];

const adProjects = [
  {
    name: "Brand Awareness Campaign",
    context: "Digital Marketing Strategy",
    deliverableIcon: "/icons/campaign.svg",
    objective: "Increase brand awareness among Gen Z audience",
    audience: "18-24 year olds in urban areas",
    insight: "87% prefer authentic, user-generated content",
    thumbnailSrc: "/projects/campaign-preview.jpg",
    pdfLink: "/documents/campaign.pdf",
    pptLink: "/documents/presentation.ppt",
    metrics: "Reached 2M+ impressions with 8.5% engagement rate"
  },
  // Add more Ad projects...
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("CS Projects");
  const tabs = ["CS Projects", "Advertising Projects"];

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        
        <Tabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onChange={setActiveTab} 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "CS Projects" ? (
            csProjects.map((project, index) => (
              <ProjectCardCS key={index} {...project} index={index} />
            ))
          ) : (
            adProjects.map((project, index) => (
              <ProjectCardAd key={index} {...project} index={index} />
            ))
          )}
        </div>
      </div>
    </PageContainer>
  );
}

