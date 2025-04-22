'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2 } from 'react-icons/fi';

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState({ unique: 0, total: 0 });

  useEffect(() => {
    // This is a placeholder for actual analytics data
    // In production, you would fetch this from your analytics API
    const fetchVisitors = async () => {
      try {
        // For Vercel Analytics
        const response = await fetch('/api/visitors');
        const data = await response.json();
        // Adding offset to the numbers
        setVisitors({
          unique: data.unique + 100,
          total: data.total + 150,
        });
      } catch (error) {
        console.error('Error fetching visitor data:', error);
        // Set default values with offset if fetch fails
        setVisitors({ unique: 100, total: 150 });
      }
    };

    fetchVisitors();
  }, []);

  return (
    <motion.div 
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-lg border border-blue-500/20"
      whileHover={{ scale: 1.02 }}
    >
      <FiBarChart2 className="text-blue-400 text-xl" />
      <div className="text-center">
        <p className="text-blue-400 font-semibold">
          Analytics Dashboard
        </p>
        <p className="text-sm text-gray-300">
          {visitors.unique.toLocaleString()} unique visitors • {visitors.total.toLocaleString()} total visits
        </p>
      </div>
    </motion.div>
  );
} 