'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2 } from 'react-icons/fi';

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState({ unique: 0, total: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch('/api/visitors');
        if (!response.ok) {
          throw new Error('Failed to fetch visitor data');
        }
        const data = await response.json();
        setVisitors({
          unique: data.unique + 832,  // Adding static offset for unique visitors
          total: data.total + 1256,   // Adding static offset for total visits
        });
      } catch (error) {
        console.error('Error fetching visitor data:', error);
        // Set default values with offset if fetch fails
        setVisitors({ unique: 832, total: 1256 });
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
            `${visitors.unique.toLocaleString()} unique visitors • ${visitors.total.toLocaleString()} total visits`
          )}
        </p>
      </div>
    </motion.div>
  );
} 