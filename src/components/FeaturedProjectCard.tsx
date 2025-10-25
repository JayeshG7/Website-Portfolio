'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiTrendingUp, FiUsers, FiPlay, FiPause, FiVolume2, FiVolumeX, FiFileText } from 'react-icons/fi';
import GlassButton from './ui/GlassButton';
import { useState, useRef } from 'react';

interface FeaturedProjectCardProps {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  metrics: {
    primary: string;
    primaryLabel: string;
    secondary: string;
    secondaryLabel: string;
  };
  imageSrc?: string;
  videoSrc?: string;
  tools: string[];
  githubLink?: string;
  pdfLink?: string;
}

export default function FeaturedProjectCard({
  title,
  category,
  description,
  problem,
  solution,
  impact,
  metrics,
  imageSrc,
  videoSrc,
  tools,
  githubLink,
  pdfLink,
}: FeaturedProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-prominent rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left: Video/Image + Quick Metrics */}
        <div className="relative h-[400px] lg:h-auto group overflow-hidden">
          {videoSrc ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain bg-black"
                style={{ transform: 'scale(1.4)' }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              
              {/* Video Controls */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="glass-prominent p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <FiPause className="w-5 h-5 text-white" />
                  ) : (
                    <FiPlay className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="glass-prominent p-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <FiVolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <FiVolume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </>
          ) : imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-blue-900/30" />
          )}
          
          {/* Overlay metrics */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-prominent p-4 rounded-lg border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <FiUsers className="text-cyan-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{metrics.primaryLabel}</span>
                </div>
                <p className="text-2xl font-bold text-white">{metrics.primary}</p>
              </div>
              <div className="glass-prominent p-4 rounded-lg border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <FiTrendingUp className="text-cyan-400" />
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{metrics.secondaryLabel}</span>
                </div>
                <p className="text-2xl font-bold text-white">{metrics.secondary}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="p-8 lg:p-10 flex flex-col">
          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
              Featured Project
            </span>
            <span className="ml-2 text-sm text-gray-400">/ {category}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {description}
          </p>

          {/* Problem → Solution → Impact */}
          <div className="space-y-4 mb-6 flex-grow">
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-1 uppercase tracking-wide">Challenge</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-1 uppercase tracking-wide">Solution</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-1 uppercase tracking-wide">Impact</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-medium">{impact}</p>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-cyan-500/5 text-cyan-300 text-xs rounded-full border border-cyan-500/20"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {githubLink && (
              <GlassButton
                href={githubLink}
                variant="primary"
                neonColor="cyan"
                icon={<FiGithub className="w-4 h-4" />}
                external
              >
                View Code
              </GlassButton>
            )}
            {pdfLink && (
              <GlassButton
                href={pdfLink}
                variant="secondary"
                icon={<FiFileText className="w-4 h-4" />}
                external
              >
                View Presentation
              </GlassButton>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

