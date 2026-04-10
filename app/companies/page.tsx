'use client';

import { motion } from 'motion/react';
import { Building2, Users, Target, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Talent Pool',
    description: 'Access skilled students ready to collaborate.',
  },
  {
    icon: Target,
    title: 'Mentorship',
    description: 'Guide and mentor future innovators.',
  },
  {
    icon: Building2,
    title: 'Brand Visibility',
    description: 'Increase visibility among students and institutions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Leverage fresh ideas to solve real problems.',
  },
];

export default function Companies() {
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
            Companies
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect with talented students
          </h1>

          <p className="text-gray-600">
            Collaborate, innovate, and build with the next generation of talent.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://picsum.photos/seed/comp-1/800/600"
              alt="Companies"
              className="rounded-2xl object-cover w-full aspect-[4/3]"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Drive Innovation Forward
            </h2>

            <p className="text-gray-600 mb-6">
              Work with students, explore new ideas, and build meaningful collaborations.
            </p>

            {/* List */}
            <ul className="space-y-3 mb-6">
              {[
                'Access to student talent',
                'Mentorship opportunities',
                'Innovation projects',
                'Employer branding',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs">
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

        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card"
            >
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon size={20} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>

              <p className="text-sm text-gray-500">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}