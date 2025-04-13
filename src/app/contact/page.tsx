"use client";

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white">Get in Touch</h1>
          <p className="text-lg text-gray-300">Let&apos;s create something amazing together.</p>
        </header>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="bg-white/10 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg h-full flex flex-col justify-between space-y-6 backdrop-blur-sm">
            {/* Direct Email */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="flex items-center space-x-3 text-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jayeshghosh21@gmail.com" className="hover:text-blue-400 transition-colors">
                  jayeshghosh21@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/jayesh-ghosh-a7aab5336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/jayeshg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Availability */}
            <div className="text-gray-300">
              <h3 className="text-lg font-medium text-white mb-2">Availability</h3>
              <p>Available for internships and collaborations</p>
              <p className="text-sm text-gray-400 mt-1">Response time: Within 3 days</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg space-y-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           text-white placeholder-gray-400"
                  placeholder="Your name"
                  required
                  aria-required="true"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           text-white placeholder-gray-400"
                  placeholder="Your message..."
                  required
                  aria-required="true"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         transition w-full md:w-auto font-medium"
              >
                Send Message
              </button>
            </form>

            {/* Footer Note */}
            <p className="text-sm italic text-gray-400 mt-4">
              Your message is safe—no spam, ever.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
