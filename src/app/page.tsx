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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            {/* Image Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto">
                <Image
                  src="/images/lego-programmer.png"
                  alt="LEGO programmer figure with glasses, a bun hairstyle, and a binary code t-shirt, accompanied by a small robot companion"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Text Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 pt-8 lg:pt-16"
            >
              <div className="max-w-xl">
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
      </div>
    </main>
  );
} 