"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar({ onOpenSignup }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mr-3 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">PM</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">PlayMore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <button
              onClick={onOpenSignup}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        <div className="md:hidden bg-white/20 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-4">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-base font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 