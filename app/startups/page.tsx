'use client';

import { motion } from 'motion/react';
import { Rocket, Users, Target, Shield } from 'lucide-react';

const startupSupport = [
  {
    icon: Target,
    title: 'Strategy',
    description: 'Guidance to scale your startup effectively.',
  },
  {
    icon: Users,
    title: 'Talent',
    description: 'Connect with skilled students to build your product.',
  },
  {
    icon: Rocket,
    title: 'Growth',
    description: 'Access networks and resources for faster growth.',
  },
  {
    icon: Shield,
    title: 'Mentorship',
    description: 'Learn from experienced founders and experts.',
  },
];

export default function Startups() {
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
            Startups
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Support your startup with strategy and talent
          </h1>

          <p className="text-gray-600">
            Helping startups grow with the right people, guidance, and opportunities.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Scale Your Vision
            </h2>

            <p className="text-gray-600 mb-6">
              Build faster with access to talent, mentorship, and real-world collaboration.
            </p>

            {/* List */}
            <ul className="space-y-3 mb-6">
              {[
                'Access to student talent',
                'Mentorship from experts',
                'Networking opportunities',
                'Support for product growth',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
              Register Your Startup
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/startup-1/800/600"
              alt="Startups"
              className="rounded-2xl object-cover w-full aspect-[4/3]"
            />
          </div>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {startupSupport.map((support, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card"
            >
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-4">
                <support.icon size={20} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {support.title}
              </h3>

              <p className="text-sm text-gray-500">
                {support.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}