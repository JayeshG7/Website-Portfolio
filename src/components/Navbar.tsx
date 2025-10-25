"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMail } from 'react-icons/fi';
import GlassButton from '@/components/ui/GlassButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/resume', label: 'Resume' }
  ];

  // Handle Let's Connect button click
  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    
    if (pathname === '/') {
      // On home page, smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to home page with hash
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-prominent shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Name */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-xl font-bold text-white transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                Jayesh Ghosh
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-gray-300 hover:text-white px-1 py-2 text-sm font-medium
                    transition-all duration-300 group
                    ${pathname === link.href ? 'text-cyan-400' : ''}`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300
                      ${pathname === link.href 
                        ? 'w-full shadow-[0_0_8px_rgba(6,182,212,0.6)]' 
                        : 'w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                      }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <GlassButton
                onClick={handleContactClick}
                variant="primary"
                neonColor="cyan"
                icon={<FiMail className="w-4 h-4" />}
                iconPosition="left"
              >
                Let&apos;s Connect
              </GlassButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-cyan-400
                hover:bg-white/5 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-prominent border-t border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div className="px-4 py-4 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium 
                      transition-all duration-300
                      ${pathname === link.href 
                        ? 'glass text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <GlassButton
                    onClick={handleContactClick}
                    variant="primary"
                    neonColor="cyan"
                    icon={<FiMail className="w-4 h-4" />}
                    iconPosition="left"
                    className="w-full"
                  >
                    Let&apos;s Connect
                  </GlassButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
} 