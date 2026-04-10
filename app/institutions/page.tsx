'use client';

import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Real-World Projects',
    description: 'Integrate industry-led projects into your curriculum.',
  },
  {
    icon: Users,
    title: 'Industry Connections',
    description: 'Direct access to companies for internships and placements.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'Collaborate with international partners and experts.',
  },
  {
    icon: GraduationCap,
    title: 'Skill Development',
    description: 'Workshops tailored to current industry demands.',
  },
];

export default function Institutions() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section bg-white"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold uppercase text-sm tracking-wider mb-3 block">
            Institutions
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Partner with us for real-world learning
          </h1>

          <p className="text-gray-600">
            Bridging academia and industry through collaboration and innovation.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Empower Your Students
            </h2>

            <p className="text-gray-600 mb-6">
              Gain access to industry projects, internships, and collaborative
              opportunities that prepare students for real-world success.
            </p>

            {/* List */}
            <ul className="space-y-3 mb-6">
              {[
                'Industry-led projects',
                'Internships & placements',
                'Collaborative research',
                'Workshops & certifications',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
              Partner With Us
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/inst-1/800/600"
              alt="Institutions"
              className="rounded-2xl object-cover w-full aspect-[4/3]"
            />
          </div>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card"
            >
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={20} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}