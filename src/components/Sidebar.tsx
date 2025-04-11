"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = {
  title: string;
  path: string;
  children?: { title: string; path: string }[];
};

const menuItems: MenuItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { 
    title: 'Projects', 
    path: '/projects',
    children: [
      { title: 'All Projects', path: '/projects' },
      { title: 'Featured', path: '/projects/featured' },
    ]
  },
  { 
    title: 'Case Studies', 
    path: '/case-studies',
    children: []
  },
  { title: 'Skills', path: '/skills' },
  { title: 'Resume', path: '/resume' },
  { title: 'Contact', path: '/contact' }
];

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="group">
      <button 
        aria-label="Open menu" 
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 18h16"
          />
        </svg>
      </button>

      <nav
        className="
          fixed top-0 left-0 h-full w-64
          bg-gray-900/50 backdrop-blur-sm text-white
          transform -translate-x-full
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-0
          z-40
        "
        aria-label="Main navigation"
      >
        <div className="h-full overflow-y-auto bg-gray-900/95">
          <div className="p-6 space-y-4 pt-16">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.path}
                    className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-800'
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <button
                      onClick={() => toggleExpanded(item.title)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                      aria-expanded={expandedItems.includes(item.title)}
                      aria-controls={`submenu-${item.title}`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedItems.includes(item.title) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && item.children.length > 0 && (
                  <div
                    id={`submenu-${item.title}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedItems.includes(item.title)
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-6 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className={`block py-2 px-4 rounded-lg transition-colors ${
                            pathname === child.path
                              ? 'bg-blue-600/50 text-white'
                              : 'hover:bg-gray-800'
                          }`}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
} 