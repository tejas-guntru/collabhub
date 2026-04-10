'use client';

import { motion } from 'motion/react';

const logos = [
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
];

export default function RecognizedBy() {
  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Recognized By
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted and acknowledged by leading organizations and institutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              src={logo.url}
              alt={logo.name}
              className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
