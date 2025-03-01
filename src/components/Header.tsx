'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 dark:bg-black/30 backdrop-blur-lg shadow-md' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="font-mono text-lg tracking-tight hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
          Aditi Kumar
        </Link>

        <nav className="flex items-center space-x-8">
          <Link 
            href="/work" 
            className={`font-mono hover:text-purple-500 dark:hover:text-purple-400 transition-colors ${
              pathname === '/work' ? 'text-purple-500 dark:text-purple-400' : ''
            }`}
          >
            Work
          </Link>
          <Link 
            href="/projects" 
            className={`font-mono hover:text-purple-500 dark:hover:text-purple-400 transition-colors ${
              pathname === '/projects' ? 'text-purple-500 dark:text-purple-400' : ''
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/books" 
            className={`font-mono hover:text-purple-500 dark:hover:text-purple-400 transition-colors ${
              pathname === '/books' ? 'text-purple-500 dark:text-purple-400' : ''
            }`}
          >
            Books
          </Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 