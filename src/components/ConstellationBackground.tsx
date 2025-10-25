'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

const ConstellationBackground = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | undefined>(undefined);

  // Generate random stars - MORE NUMEROUS & VARIED
  useEffect(() => {
    const generateStars = () => {
      const starCount = 180; // Sweet spot: magical but performant
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        // Create size variety: mostly small, some medium, few large
        const sizeRandom = Math.random();
        let size;
        if (sizeRandom < 0.7) {
          size = Math.random() * 1 + 0.5; // 70% small stars (0.5-1.5px)
        } else if (sizeRandom < 0.95) {
          size = Math.random() * 1.5 + 1.5; // 25% medium stars (1.5-3px)
        } else {
          size = Math.random() * 1 + 3; // 5% large stars (3-4px)
        }
        
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: size,
          opacity: Math.random() * 0.5 + 0.4, // Slightly dimmer for subtlety
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  // Track mouse position - THROTTLED for performance
  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout) return;
      
      throttleTimeout = setTimeout(() => {
        mousePos.current = { x: e.clientX, y: e.clientY };
        throttleTimeout = null;
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    let frameCount = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      
      frameCount++;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;

      // Update and draw stars
      stars.forEach((star, i) => {
        // Gentle floating movement
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + i) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Mouse interaction - MAGICAL GLOW EFFECT
        const dx = mousePos.current.x - star.x;
        const dy = mousePos.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 250; // Sweet spot for interaction
        const mouseInfluence = Math.max(0, 1 - distance / maxDistance);
        
        // Exponential influence for more dramatic effect
        const enhancedInfluence = mouseInfluence * mouseInfluence;

        // Draw star with magical glow
        const finalOpacity = Math.min(currentOpacity + enhancedInfluence * 0.9, 1);
        const finalSize = star.size + enhancedInfluence * (star.size * 4); // Larger stars grow more

        // Outer glow - MAGICAL AURA
        if (enhancedInfluence > 0.1 || star.size > 2) {
          ctx.beginPath();
          const glowSize = finalSize * (3 + enhancedInfluence * 2);
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowSize);
          gradient.addColorStop(0, `rgba(6, 182, 212, ${finalOpacity * 0.7 * (enhancedInfluence + 0.3)})`);
          gradient.addColorStop(0.3, `rgba(59, 130, 246, ${finalOpacity * 0.4 * (enhancedInfluence + 0.3)})`);
          gradient.addColorStop(0.6, `rgba(168, 85, 247, ${finalOpacity * 0.2 * (enhancedInfluence + 0.3)})`);
          gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core star - BRIGHT POINT
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.arc(star.x, star.y, finalSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Add extra sparkle to stars under cursor
        if (enhancedInfluence > 0.5) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${enhancedInfluence * 0.5})`;
          ctx.arc(star.x, star.y, finalSize * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw constellation lines - MORE CONNECTIONS, SUBTLE
        if (frameCount % 2 === 0) { // Still optimize with frame skipping
          stars.forEach((otherStar, j) => {
            if (j <= i) return; // Avoid duplicate lines

            const dx = otherStar.x - star.x;
            const dy = otherStar.y - star.y;
            
            // Quick distance check before sqrt
            if (Math.abs(dx) > 130 || Math.abs(dy) > 130) return;
            
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Connect stars that are close enough - MORE CONNECTIONS
            if (distance < 130) {
              // Vary opacity based on distance AND star sizes
              const baseOpacity = (1 - distance / 130) * 0.25;
              const sizeBonus = ((star.size + otherStar.size) / 8) * 0.1; // Bigger stars = brighter lines
              const lineOpacity = Math.min(baseOpacity + sizeBonus, 0.4);
              
              const gradient = ctx.createLinearGradient(star.x, star.y, otherStar.x, otherStar.y);
              gradient.addColorStop(0, `rgba(6, 182, 212, ${lineOpacity})`);
              gradient.addColorStop(0.5, `rgba(59, 130, 246, ${lineOpacity * 0.8})`);
              gradient.addColorStop(1, `rgba(168, 85, 247, ${lineOpacity * 0.6})`);

              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.8;
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(otherStar.x, otherStar.y);
              ctx.stroke();
            }
          });
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [stars]);

  return (
    <>
      {/* Canvas for constellation effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black pointer-events-none" style={{ zIndex: 2 }} />
      
      {/* Large floating gradient orbs - MORE VISIBLE */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-cyan-500/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-blue-500/25 rounded-full blur-[140px] animate-float" style={{ animationDelay: '2s', animationDuration: '12s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[750px] h-[750px] bg-purple-500/25 rounded-full blur-[130px] animate-float" style={{ animationDelay: '4s', animationDuration: '14s' }} />
        <div className="absolute top-[60%] right-[30%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '6s', animationDuration: '16s' }} />
      </div>

      {/* Hexagonal grid overlay - tech aesthetic */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" style={{ zIndex: 2 }}>
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <path 
              d="M50 0L93.3 25L93.3 75L50 100L6.7 75L6.7 25Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-cyan-400"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </>
  );
});

ConstellationBackground.displayName = 'ConstellationBackground';

export default ConstellationBackground;

