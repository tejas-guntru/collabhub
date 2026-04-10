'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Institutions', path: '/institutions' },
  { name: 'Companies', path: '/companies' },
  { name: 'Startups', path: '/startups' },
  { name: 'Activities', path: '/activities' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-gray-900">
          CollabHub
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`transition ${
                pathname === link.path
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="container-custom py-4 flex flex-col gap-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === link.path
                      ? 'text-indigo-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <Link href="/login" className="text-gray-700">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-indigo-600 text-white text-center py-2 rounded-md"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}