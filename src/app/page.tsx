'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[500px] h-[600px] mb-8">
              <Image
                src="/images/lego-programmer.jpg"
                alt="LEGO programmer figure with glasses, a bun hairstyle, and a binary code t-shirt, accompanied by a small robot companion"
                fill
                priority
                className="object-contain"
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-mono mb-4 text-gray-900 dark:text-white">
                Hi, I'm Aditi
              </h1>
              <p className="text-lg font-mono text-gray-600 dark:text-gray-300">
                I'm a software engineer and researcher.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 