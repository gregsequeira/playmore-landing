'use client';

import { useState } from 'react';
import Link from 'next/link';
import WaitlistModal from './WaitlistModal';

export default function NavBar() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to handle navbar background
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 0);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className={`w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 ${
                isScrolled ? 'shadow-md' : ''
              }`}>
                <span className="text-white font-bold text-2xl">PM</span>
              </div>
              <span className={`text-2xl font-bold tracking-tight ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>PlayMore</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </nav>
  );
} 