'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBarChart2 } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';

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
    <GlassCard
      variant="prominent"
      hover={true}
      neonBorder="cyan"
      className="inline-flex items-center gap-3 px-6 py-3"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="p-2 bg-cyan-500/20 rounded-lg"
      >
        <FiBarChart2 className="text-cyan-400 text-xl" />
      </motion.div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
          Analytics Dashboard
        </p>
        <p className="text-base font-bold text-cyan-400">
          {isLoading ? (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading...
            </motion.span>
          ) : (
            `${visitors.toLocaleString()} unique visitors`
          )}
        </p>
      </div>
    </GlassCard>
  );
} 