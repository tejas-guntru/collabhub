'use client';

import { motion } from 'motion/react';

const brands = [
  { name: 'TechNova', logo: 'https://picsum.photos/seed/technova/200/100' },
  { name: 'EduCore', logo: 'https://picsum.photos/seed/educore/200/100' },
  { name: 'InnoLab', logo: 'https://picsum.photos/seed/innolab/200/100' },
  { name: 'FutureWorks', logo: 'https://picsum.photos/seed/futureworks/200/100' },
  { name: 'SkillSet', logo: 'https://picsum.photos/seed/skillset/200/100' },
  { name: 'VentureX', logo: 'https://picsum.photos/seed/venturex/200/100' },
  { name: 'GrowthMind', logo: 'https://picsum.photos/seed/growthmind/200/100' },
  { name: 'CollabNet', logo: 'https://picsum.photos/seed/collabnet/200/100' },
];

export default function Brands() {
  return (
    <section className="section bg-gray-900 text-white overflow-hidden relative">

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none" />

      {/* Header */}
      <div className="container-custom mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Brands & Partners
          </span>

          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Collaborating with organizations that drive innovation
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            We partner with industry leaders to unlock real opportunities for students, startups, and enterprises.
          </p>

        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">

        <div className="flex animate-marquee gap-8 py-12">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-44 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center p-5 grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}