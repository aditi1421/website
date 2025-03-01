'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

export default function Work() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/"
              className="font-mono text-sm text-gray-600 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              ← Back to home
            </Link>
            
            <h1 className="text-4xl font-mono mt-8 mb-12 text-gray-900 dark:text-white">Work Experience</h1>

            <div className="space-y-12">
              {/* Work Experience Entry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-900 dark:text-white">Research Engineer</h3>
                <p className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-4">
                  Illinois Institute of Technology • Chicago, IL • July 2024 - Present
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-gray-600 dark:text-gray-300">
                  <li>Key achievement or responsibility</li>
                  <li>Another significant contribution</li>
                  <li>Technical skills or tools used</li>
                </ul>
              </motion.div>

              {/* Add more work experience entries here */}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 