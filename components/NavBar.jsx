'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import WaitlistModal from './WaitlistModal';
import TeamModal from './TeamModal';

export default function NavBar() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300 ${
                isScrolled ? 'bg-blue-600 shadow-md' : 'bg-blue-300'
              }`}>
                <span className="text-white font-bold text-2xl">PM</span>
              </div>
              <span className={`text-2xl font-bold tracking-tight ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>PlayMore</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsTeamModalOpen(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Meet the Team
            </button>
            <button
              onClick={() => setIsWaitlistModalOpen(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isScrolled 
                  ? 'bg-blue-600 text-white border-2 border-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 border-2 border-white hover:bg-blue-50'
              }`}
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-blue-900/90 backdrop-blur-md'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                setIsTeamModalOpen(true);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                isScrolled ? 'text-gray-900 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-blue-800'
              }`}
            >
              Meet the Team
            </button>
            <button
              onClick={() => {
                setIsWaitlistModalOpen(true);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                isScrolled ? 'text-gray-900 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-blue-800'
              }`}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />
    </nav>
  );
}