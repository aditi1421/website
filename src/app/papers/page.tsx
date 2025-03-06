'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const PaperCard = ({ 
  title, 
  abstract, 
  authors,
  link
}: { 
  title: string; 
  abstract: string; 
  authors: string;
  link: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-8">
        <div>
          <h3 className="text-xl font-mono font-semibold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          <p className="font-mono text-gray-600 dark:text-gray-300 mb-6">
            {abstract}
          </p>
          <div className="font-mono text-sm text-gray-500 dark:text-gray-400">
            Authors: {authors}
          </div>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
          >
            Read Paper →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Papers() {
  const papers = [
    {
      title: 'Assistive Navigation for Stroke Survivors',
      abstract: 'A novel approach to help stroke survivors navigate crowded environments using computer vision and haptic feedback.',
      authors: 'Aditi Kumar, John Doe, Jane Smith',
      link: 'https://example.com/paper1'
    },
    {
      title: 'Reinforcement Learning in Robotics',
      abstract: 'Exploring the application of reinforcement learning algorithms in robotic control systems.',
      authors: 'Aditi Kumar, Alice Johnson',
      link: 'https://example.com/paper2'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              className="font-mono text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              ← Back to home
            </Link>
            
            <h1 className="text-4xl font-mono mt-8 mb-12 text-gray-900 dark:text-white">
              Research Papers
            </h1>

            <div className="grid grid-cols-1 gap-6">
              {papers.map((paper, index) => (
                <PaperCard key={index} {...paper} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 