'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

export default function Papers() {
  const papers = [
    {
      title: 'Attention is All You Need',
      authors: 'Vaswani et al.',
      year: '2017',
      link: 'https://arxiv.org/abs/1706.03762'
    },
    {
      title: 'LLM Post-Training: A Deep Dive into Reasoning Large Language Models',
      authors: 'Kumar et al.',
      year: '2024',
      link: 'https://arxiv.org/abs/2502.21321'
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
              Papers I've Read
            </h1>

            <div className="space-y-12">
              {papers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="prose dark:prose-invert max-w-none"
                >
                  <h2 className="text-2xl font-mono font-semibold text-gray-900 dark:text-white mb-2">
                    {paper.title}
                  </h2>
                  <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {paper.authors} • {paper.year}
                  </p>
                  <p className="font-mono text-gray-600 dark:text-gray-300 mb-4">
                    {paper.thoughts}
                  </p>
                  <a 
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    Read Paper →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 