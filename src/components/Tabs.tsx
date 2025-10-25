'use client';

import { motion } from 'framer-motion';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const getTabStyles = (tab: string, isActive: boolean) => {
    const baseStyles = 'rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300';
    
    if (isActive) {
      switch (tab) {
        case "CS Projects":
          return `${baseStyles} glass-prominent text-white border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]`;
        case "Data Analytics":
          return `${baseStyles} glass-prominent text-white border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]`;
        case "Advertising Projects":
          return `${baseStyles} glass-prominent text-white border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]`;
        default:
          return `${baseStyles} glass text-gray-300 border border-white/20`;
      }
    } else {
      return `${baseStyles} glass-subtle text-gray-400 border border-white/10 hover:border-white/30 hover:text-gray-200 hover:scale-[1.02]`;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          onClick={() => onChange(tab)}
          className={getTabStyles(tab, activeTab === tab)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  );
} 