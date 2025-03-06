'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-16"
          >
            <div className="max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-mono mb-6 text-gray-900 dark:text-white">
                Hi, I'm Aditi
              </h1>
              <div className="space-y-6">
                <p className="text-lg font-mono text-gray-600 dark:text-gray-300">
                  I'm a software engineer and researcher.
                </p>
                <p className="font-mono text-gray-600 dark:text-gray-300 leading-relaxed">
                  Trying to design and understand the user space for people with mobility aids, conducting interviews and doing a lot of literature review about this space.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 