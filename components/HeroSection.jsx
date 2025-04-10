'use client';

import { useState } from 'react';
import WaitlistModal from './WaitlistModal';
import TeamModal from './TeamModal';

export default function HeroSection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <div className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8">
          Revolutionize Your Sports Management
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the waiting list for our upcoming sports management platform. 
          Be the first to experience a new way of managing your sports organization.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsWaitlistModalOpen(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Waitlist
          </button>
          <button
            onClick={() => setIsTeamModalOpen(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Meet the Team
          </button>
        </div>
      </div>

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />
    </div>
  );
} 