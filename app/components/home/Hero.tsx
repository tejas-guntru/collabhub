'use client';

import { motion } from 'motion/react';
import { ArrowRight, Users, Building2, Rocket, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { icon: GraduationCap, label: 'Students', value: '10,000+' },
  { icon: Building2, label: 'Institutions', value: '500+' },
  { icon: Rocket, label: 'Startups', value: '200+' },
  { icon: Users, label: 'Companies', value: '150+' },
];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-blue-200/40 rounded-full blur-3xl" />
      </div>

      {/* Container */}
      <div className="container-custom">

        {/* 🧠 Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <span className="inline-block px-5 py-2 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
              🚀 The Future of Collaboration
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.05]">
              Empowering Collaboration Between{' '}
              <span className="gradient-text">
                Students, Institutions, Startups & Companies
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              A unified platform where innovation meets opportunity — enabling real-world collaboration, learning, and growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

              <Link
                href="/activities"
                className="group w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center"
              >
                Explore Platform
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>

              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold text-lg hover:border-indigo-500 hover:text-indigo-600 transition-all"
              >
                Collaborate With Us
              </Link>

            </div>
          </motion.div>
        </div>

        {/* 📊 Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={22} />
              </div>

              <div className="text-2xl md:text-3xl font-black text-gray-900">
                {stat.value}
              </div>

              <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}