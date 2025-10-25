import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'subtle' | 'default' | 'prominent';
  hover?: boolean;
  neonBorder?: 'cyan' | 'blue' | 'purple' | 'none';
  children: React.ReactNode;
  className?: string;
}

const GlassCard = React.memo<GlassCardProps>(({ 
  variant = 'default', 
  hover = false,
  neonBorder = 'none',
  children, 
  className = '',
  ...motionProps 
}) => {
  const variantClasses = {
    subtle: 'glass-subtle',
    default: 'glass',
    prominent: 'glass-prominent'
  };

  const neonBorderClasses = {
    cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    blue: 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
    purple: 'hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
    none: ''
  };

  const hoverClasses = hover 
    ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-xl will-change-transform' 
    : '';

  return (
    <motion.div
      className={`
        ${variantClasses[variant]}
        ${hoverClasses}
        ${neonBorderClasses[neonBorder]}
        rounded-xl shadow-lg
        ${className}
      `}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;

