"use client";

import { useState } from 'react';

export default function TeamModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const teamMembers = [
    {
      name: "Greg",
      role: "Lead Developer",
      bio: "A lifelong sports enthusiast with a sharp eye for technology, Greg is dedicated to delivering innovative solutions that elevate the world of sports management. Whether enhancing operational efficiency or enriching the fan experience, there's always a smart strategy—and likely a game stat—close at hand.",
      image: "/team/greg.jpg" // You'll need to add this image to your public folder
    },
    {
      name: "Bobby",
      role: "Product Manager",
      bio: "Fueled by a lifelong passion for sport and a sharp product mindset, Bobby brings an unstoppable drive to everything he builds. Whether playing, coaching, or spectating, he sees opportunities to improve the game—and turn ideas into impactful, intuitive solutions for teams and organizations.",
      image: "/team/bobby.jpg" // You'll need to add this image to your public folder
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-50 to-gray-800 rounded-lg max-w-4xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          <p className="mt-4 text-gray-600">The passionate minds behind PlayMore.</p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 