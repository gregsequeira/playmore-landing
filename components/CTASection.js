"use client"; // ✅ Ensures this runs as a client-side component

import { useState } from "react";
import SignupForm from "./SignupForm";
import TeamModal from "./TeamModal";

export default function CTASection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sports Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our waitlist today and be among the first to experience the future of sports management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setIsTeamModalOpen(true)}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      {isWaitlistModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative transform transition-all duration-300">
            <button
              onClick={() => setIsWaitlistModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <SignupForm onClose={() => setIsWaitlistModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Team Modal */}
      <TeamModal 
        isOpen={isTeamModalOpen} 
        onClose={() => setIsTeamModalOpen(false)} 
      />
    </section>
  );
} 