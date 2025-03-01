'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ThreeScene from '@/components/ThreeScene';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] items-center">
          {/* Content Section - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-1/2 py-16 lg:py-32"
          >
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-mono mb-4 text-gray-900 dark:text-white">
                Hello!
              </h1>
              <p className="text-lg md:text-xl font-mono text-gray-800 dark:text-white mb-6">
                Software Engineer & Creative Developer
              </p>
              <p className="font-mono text-gray-700 dark:text-white mb-24">
                Love to build things and design better technologies.
              </p>

              {/* Contact Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-mono mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
                <p className="font-mono text-gray-700 dark:text-white mb-6">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <div className="flex space-x-6">
                  <a 
                    href="https://github.com/aditi1421" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl text-gray-700 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aditi-kumar-/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl text-gray-700 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://twitter.com/aditibits" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-2xl text-gray-700 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="mailto:aditi12kumar@gmail.com" 
                    className="text-2xl text-gray-700 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three.js Scene - Right Side */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-1/2 h-[400px] lg:h-[600px] relative"
          >
            <ThreeScene />
          </motion.div>
        </div>
      </div>

      <footer className="py-6 text-center text-gray-700 dark:text-white border-t border-gray-200 dark:border-gray-800">
        <p className="font-mono">© {new Date().getFullYear()} Aditi Kumar. All Rights Reserved.</p>
      </footer>
    </main>
  );
} 