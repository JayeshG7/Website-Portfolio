'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2 } from 'react-icons/fi';

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setVisitors(832);
      } catch (error) {
        console.error('Error fetching visitor data:', error);
        setVisitors(832);
      } finally {
        setIsLoading(false);
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
          {isLoading ? (
            'Loading...'
          ) : (
            `${visitors.toLocaleString()} unique visitors`
          )}
        </p>
      </div>
    </motion.div>
  );
} 