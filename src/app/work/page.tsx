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
                  <li>Working with three professors in robotics, HCI, and prosthetics to design better assistive technology</li>
                  <li>Conducting research and development in assistive technology solutions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-900 dark:text-white">Research Assistant</h3>
                <p className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-4">
                  Illinois Institute of Technology • Chicago, IL • Aug 2023 - May 2024
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-gray-600 dark:text-gray-300">
                  <li>Optimized network traffic analysis using an open-source tool, improving packet filter processing efficiency by 20%</li>
                  <li>Enhanced backend performance by refining algorithmic execution in C++</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-900 dark:text-white">Teaching Assistant - Systems Programming (C/C++)</h3>
                <p className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-4">
                  Illinois Institute of Technology • Chicago, IL • Jan 2024 - May 2024
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-gray-600 dark:text-gray-300">
                  <li>Mentored in the development and instruction of curriculum for CS 351 course, helping to increase student pass rates by 15% through tailored support</li>
                  <li>Provided students with hands-on experience in systems programming using x86 architecture</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-900 dark:text-white">Software Engineer Intern</h3>
                <p className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-4">
                  MapMyIndia • Delhi, India • May 2023 - July 2023
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-gray-600 dark:text-gray-300">
                  <li>Built and optimized backend microservices and REST APIs, improving system efficiency by 10%</li>
                  <li>Developed an automated CAPTCHA recognition system using machine learning, improving accuracy by 70%</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-900 dark:text-white">IIT ECO CAR EV Challenge</h3>
                <p className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-4">
                  Illinois Institute of Technology • Chicago, IL • Aug 2023 - May 2024
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-gray-600 dark:text-gray-300">
                  <li>Designed autonomous vehicle algorithms using sensor fusion (LiDAR, radar, cameras), improving obstacle detection by 15%</li>
                  <li>Integrated real-time data pipelines for efficient sensor processing and decision-making</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg p-6"
              >
                <h3 className="text-xl font-mono font-bold mb-2 text-gray-900 dark:text-white">Research Intern</h3>
                <p className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-4">
                  National University of Singapore • Singapore • Jun 2022 - Jul 2022
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-gray-600 dark:text-gray-300">
                  <li>Developed a prototype for visually impaired accessibility using audio cues and object detection, leveraging CNNs and distributed systems for real-time processing</li>
                  <li>Incorporated advanced optimization techniques for improved performance</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 