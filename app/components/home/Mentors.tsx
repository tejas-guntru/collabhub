'use client';

import { motion } from 'motion/react';

const mentors = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Innovation Strategist',
    image: 'https://picsum.photos/seed/sarah/400/400',
    bio: 'Former Google Lead with 15+ years in tech innovation and startup scaling.',
  },
  {
    name: 'Marcus Thorne',
    role: 'Venture Capitalist',
    image: 'https://picsum.photos/seed/marcus/400/400',
    bio: 'Founder of Thorne Ventures, specializing in early-stage tech and education.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Academic Director',
    image: 'https://picsum.photos/seed/elena/400/400',
    bio: 'Leading researcher in collaborative learning and institutional development.',
  },
  {
    name: 'David Kim',
    role: 'Product Design Lead',
    image: 'https://picsum.photos/seed/david/400/400',
    bio: 'Award-winning designer focused on human-centric digital experiences.',
  },
];

export default function Mentors() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold uppercase text-sm tracking-wider mb-3 block">
            Our Mentors
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Guided by experienced professionals
          </h2>

          <p className="text-gray-600">
            Industry experts helping you grow, build, and succeed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              {/* Image */}
              <div className="w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-900">
                {mentor.name}
              </h3>

              <p className="text-sm text-indigo-600 mb-2">
                {mentor.role}
              </p>

              <p className="text-sm text-gray-500 leading-relaxed">
                {mentor.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}