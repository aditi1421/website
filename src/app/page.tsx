'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ThreeScene from '@/components/ThreeScene';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Three.js */}
      <section className="relative h-screen">
        <ThreeScene />
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aditi Kumar
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineer & Problem Solver
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              Hello! I'm an engineer passionate about building innovative solutions to complex problems. 
              With a background in [your specific engineering field], I specialize in [your specialties].
            </p>
            <p className="text-lg mb-6">
              I believe in creating elegant, efficient, and user-friendly solutions that make a real impact.
              When I'm not coding or designing, you can find me [your hobbies or interests].
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4">Engineering</h3>
              <ul className="space-y-2">
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
              </ul>
            </motion.div>

            {/* Skill Category 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <ul className="space-y-2">
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
              </ul>
            </motion.div>

            {/* Skill Category 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
              <ul className="space-y-2">
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="mb-4">
                Brief description of the project and your role in it.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:underline">View Project</a>
                <a href="#" className="text-primary hover:underline">GitHub</a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="mb-4">
                Brief description of the project and your role in it.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:underline">View Project</a>
                <a href="#" className="text-primary hover:underline">GitHub</a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="mb-4">
                Brief description of the project and your role in it.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:underline">View Project</a>
                <a href="#" className="text-primary hover:underline">GitHub</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form className="contact-form">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="mb-2">Email: your.email@example.com</p>
                <p className="mb-2">Location: Your City, Country</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="#" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="mailto:your.email@example.com" className="social-icon">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <div className="container">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 