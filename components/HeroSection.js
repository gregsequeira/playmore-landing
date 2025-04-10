"use client";

import { useState } from "react";
import SignupForm from "./SignupForm";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Revolutionize Your Sports Management
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Streamline your team's organization, communication, and performance tracking with PlayMore's powerful platform.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
        >
          Join Waitlist
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <SignupForm onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
} 