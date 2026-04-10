'use client';

import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield } from 'lucide-react';

const values = [
  { icon: Target, title: 'Our Mission', description: 'To bridge the gap between academia and industry through meaningful collaboration and real-world projects.' },
  { icon: Eye, title: 'Our Vision', description: 'To become the global standard for innovation-driven partnerships and talent development.' },
  { icon: Heart, title: 'Our Values', description: 'Integrity, innovation, and inclusivity are at the heart of everything we do.' },
  { icon: Shield, title: 'Our Commitment', description: 'We are dedicated to creating a safe, productive, and impactful environment for all our partners.' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Bridging the gap between talent and opportunity.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a platform dedicated to bridging the gap between students, institutions, startups, and companies. Our goal is to create a unified ecosystem where innovation meets opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl -z-10" />
            <img
              src="https://picsum.photos/seed/about-1/800/600"
              alt="About CollabHub"
              className="rounded-[3rem] shadow-2xl shadow-indigo-100 object-cover w-full aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2022, CollabHub started with a simple observation: students were graduating with theoretical knowledge but lacked real-world experience, while companies were struggling to find talent that could hit the ground running.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We decided to build a platform that would facilitate direct collaboration, allowing students to work on actual industry problems while still in school, and giving companies a way to mentor and evaluate potential hires in a real-world setting.
            </p>
            <div className="pt-6">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Join Our Journey
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6">
                <value.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
