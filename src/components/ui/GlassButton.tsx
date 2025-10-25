import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  neonColor?: 'cyan' | 'blue' | 'purple';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
}

const GlassButton = React.memo<GlassButtonProps>(({ 
  href,
  onClick,
  variant = 'primary',
  neonColor = 'cyan',
  children,
  className = '',
  icon,
  iconPosition = 'left',
  external = false
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-lg
    font-medium text-base
    transition-all duration-300
    will-change-transform
  `;

  const variantClasses = {
    primary: `
      glass-prominent text-white
      hover:scale-105
      ${neonColor === 'cyan' ? 'hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-400/50' : ''}
      ${neonColor === 'blue' ? 'hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:border-blue-400/50' : ''}
      ${neonColor === 'purple' ? 'hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:border-purple-400/50' : ''}
    `,
    secondary: `
      border-2 border-white/20 text-white
      glass
      hover:border-white/40 hover:scale-105
    `,
    ghost: `
      text-gray-300 hover:text-white
      hover:bg-white/5
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        <motion.div
          className="contents"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
});

GlassButton.displayName = 'GlassButton';

export default GlassButton;

