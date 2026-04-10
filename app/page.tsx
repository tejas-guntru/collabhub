'use client';

import { motion } from 'motion/react';
import Hero from './components/home/Hero';
import RecognizedBy from './components/home/RecognizedBy';
import Achievements from './components/home/Achievements';
import Brands from './components/home/Brands';
import Mentors from './components/home/Mentors';
import Testimonials from './components/home/Testimonials';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>

      {/* Recognized By */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RecognizedBy />
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Achievements />
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Brands />
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Mentors />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-indigo-600 relative overflow-hidden rounded-t-[3rem]">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            Ready to start your collaboration journey?
          </h2>

          <p className="text-lg md:text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students, institutions, and companies already building the future together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Started Now
            </Link>

            <button className="w-full sm:w-auto px-10 py-5 bg-indigo-700 text-white rounded-full font-bold text-lg hover:bg-indigo-800 transition-all border border-indigo-500/30">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}