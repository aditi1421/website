'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const BookCard = ({ 
  title, 
  thoughts, 
  author
}: { 
  title: string; 
  thoughts: string; 
  author: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 aspect-square flex flex-col"
    >
      <div className="p-8 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-mono font-semibold text-gray-900 dark:text-white mb-6">
            {title}
          </h3>
          <p className="font-mono text-gray-600 dark:text-gray-300">
            {thoughts}
          </p>
        </div>
        <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-6">
          Author: {author}
        </div>
      </div>
    </motion.div>
  );
};

export default function Books() {
  const books = [
    {
      title: 'The Design of Everyday Things',
      thoughts: 'Good Design feels effortless, bad design causes frustration.',
      author: 'Don Norman'
    },
    {
      title: 'Source Code',
      thoughts: 'Early life of Bill Gates and how he got into tech',
      author: 'Bill Gates'
    },
    {
      title: 'The Technological Republic',
      thoughts: 'Solve Problems',
      author: 'Alex Karp'
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
              Books
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <BookCard key={index} {...book} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 