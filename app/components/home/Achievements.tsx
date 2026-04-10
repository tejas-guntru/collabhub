'use client';

import { motion } from 'motion/react';
import { Trophy, Star, Target, Award } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Innovation Platform 2024',
    description: 'Awarded for our revolutionary approach to student-startup synergy.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Star,
    title: 'Top 10 EdTech Startups',
    description: 'Recognized as one of the fastest-growing educational platforms.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Target,
    title: '95% Success Rate',
    description: 'Our collaborative projects consistently deliver measurable outcomes.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Award,
    title: 'Global Impact Award',
    description: 'Honored for creating sustainable opportunities for diverse talent.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Achievements() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Achievements
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              A track record of impactful initiatives and measurable outcomes
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              We bridge gaps between students, startups, and institutions — delivering real-world results and meaningful innovation.
            </p>

            {/* Highlight Card */}
            <div className="flex items-center gap-5 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
              
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Trophy className="text-indigo-600" size={26} />
              </div>

              <div>
                <div className="text-xl font-bold text-gray-900">50+ Awards</div>
                <div className="text-sm text-gray-600">
                  Recognized globally for excellence
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}