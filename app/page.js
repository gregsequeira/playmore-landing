"use client";

import { useState } from "react";
import NavBar from '../components/NavBar';
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <NavBar onOpenSignup={() => setIsSignupOpen(true)} />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />

      {/* Signup Form Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative transform transition-all duration-300">
            <button
              onClick={() => setIsSignupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <SignupForm onClose={() => setIsSignupOpen(false)} />
          </div>
        </div>
      )}
    </main>
  );
} 