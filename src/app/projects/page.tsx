'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/Header';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  githubUrl 
}: { 
  title: string; 
  description: string; 
  tags: string[];
  githubUrl: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-mono font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 font-mono">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-mono rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: 'Pong AI Agent',
      description: 'An AI agent trained using Reinforcement Learning to master the game of Pong. The agent learns optimal paddle movement strategies through experience and demonstrates superhuman performance.',
      tags: ['Python', 'Reinforcement Learning'],
      githubUrl: 'https://github.com/aditi1421/pong-agent'
    },
    {
      title: 'Transformer Model',
      description: 'Coded the Transformer model from scratch in Pytorch, based on the paper "Attention is All You Need". ',
      tags: ['PyTorch','NLP','Deep Learning'],
      githubUrl: 'https://github.com/aditi1421/Transformer'
    },
    {
        title: 'Assistive Navigation for Stroke Survivors',
        description: 'Designed an assistive technology solution for stroke survivors to navigate crowded environments.',
        tags: ['HCI','Design','Research'],
        githubUrl: 'In Progress'
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
              Projects
            </h1>

            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 