'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useMouseParallax } from '@/utils/animations';

const ParticleBackground = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const { position, ref: parallaxRef } = useMouseParallax(20);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      ref={(node) => {
        containerRef.current = node;
        if (parallaxRef && typeof parallaxRef !== 'function') {
          (parallaxRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Animated Gradient Meshes - More Visible */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/25 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
        <div className="absolute bottom-[-5%] left-[30%] w-[550px] h-[550px] bg-purple-500/25 rounded-full blur-[110px] animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }} />
        <div className="absolute top-[50%] right-[20%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s', animationDuration: '9s' }} />
      </div>

      {/* Particle Grid with Parallax */}
      {isVisible && (
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-50">
            <defs>
              <pattern
                id="particle-grid"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="2"
                  fill="currentColor"
                  className="text-cyan-400"
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="1.5;2.5;1.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                <line
                  x1="30"
                  y1="30"
                  x2="60"
                  y2="30"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <line
                  x1="30"
                  y1="30"
                  x2="30"
                  y2="60"
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <line
                  x1="30"
                  y1="30"
                  x2="60"
                  y2="60"
                  stroke="url(#line-gradient)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
              
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#particle-grid)" />
          </svg>
        </div>
      )}

      {/* Radial Gradient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="w-full h-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />
      </div>

      {/* Animated Light Streaks */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-[10%] w-1 h-[200px] bg-gradient-to-b from-cyan-400 to-transparent animate-float" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-[20%] w-1 h-[250px] bg-gradient-to-b from-blue-400 to-transparent animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-0 left-[60%] w-1 h-[180px] bg-gradient-to-b from-purple-400 to-transparent animate-float" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
      </div>
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;

