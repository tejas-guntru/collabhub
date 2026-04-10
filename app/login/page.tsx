'use client';

import { motion } from 'motion/react';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-gray-100 rounded-2xl p-8"
      >

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500">
            Log in to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-indigo-600" />
              Remember me
            </label>

            <a href="#" className="text-indigo-600 hover:underline">
              Forgot?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            Log in
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100" />

        {/* OAuth */}
        <div className="space-y-3">
          <button className="w-full py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition">
            Continue with Google
          </button>

          <button className="w-full py-2.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition">
            Continue with GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>

      </motion.div>
    </div>
  );
}