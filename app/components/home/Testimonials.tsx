'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content: "CollabHub has completely transformed how our institution connects with the industry. Our students are now working on real-world projects that matter.",
    author: "Prof. James Wilson",
    role: "Dean, Tech Institute of Excellence",
    image: "https://picsum.photos/seed/james/100/100",
  },
  {
    content: "As a startup, finding the right talent and mentorship is crucial. This platform provided us with both, plus a strategic roadmap for growth.",
    author: "Aisha Patel",
    role: "Founder, InnovateX",
    image: "https://picsum.photos/seed/aisha/100/100",
  },
  {
    content: "The quality of collaboration we've found here is unmatched. We've integrated several student-led innovations into our core products.",
    author: "Robert Chen",
    role: "CTO, Global Systems Corp",
    image: "https://picsum.photos/seed/robert/100/100",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Hear from those who have benefited from our platform.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-5 left-10 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <Quote size={24} fill="currentColor" />
              </div>
              
              <div className="mb-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-gray-50">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
