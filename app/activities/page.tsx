'use client';

import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Global Innovation Hackathon 2024',
    date: 'June 15-17, 2024',
    location: 'Virtual / Tech City',
    image: 'https://picsum.photos/seed/event-1/800/600',
    category: 'Hackathon',
  },
  {
    title: 'Startup Synergy Summit',
    date: 'July 22, 2024',
    location: 'Innovation Hub, NY',
    image: 'https://picsum.photos/seed/event-2/800/600',
    category: 'Conference',
  },
  {
    title: 'Future Talent Workshop Series',
    date: 'August 5-10, 2024',
    location: 'Various Institutions',
    image: 'https://picsum.photos/seed/event-3/800/600',
    category: 'Workshop',
  },
  {
    title: 'Corporate Collaboration Day',
    date: 'September 12, 2024',
    location: 'Global Systems HQ',
    category: 'Networking',
    image: 'https://picsum.photos/seed/event-4/800/600',
  },
];

export default function Activities() {
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
            Activities & Events
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore our initiatives
          </h1>

          <p className="text-gray-600">
            Events designed for collaboration, learning, and growth.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden rounded-xl mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <span className="text-xs text-indigo-600 font-medium">
                  {event.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-3">
                  {event.title}
                </h3>

                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                </div>

                <button className="text-indigo-600 text-sm font-medium hover:underline">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}