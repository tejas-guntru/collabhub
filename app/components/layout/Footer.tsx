import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="container-custom py-12">

        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-semibold text-lg">
              CollabHub
            </Link>
            <p className="mt-3 text-sm">
              Connecting students, startups, institutions, and companies to build real-world innovation.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Icon
                  key={i}
                  size={18}
                  className="hover:text-white cursor-pointer transition"
                />
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/">Home</Link>
              <Link href="/institutions">Institutions</Link>
              <Link href="/companies">Companies</Link>
              <Link href="/startups">Startups</Link>
              <Link href="/activities">Activities</Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Platform</h3>
            <div className="flex flex-col gap-2 text-sm">
              <span>Mentorship</span>
              <span>Projects</span>
              <span>Collaboration</span>
              <span>Workshops</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <span>contact@collabhub.com</span>
              <span>+1 (555) 000-1234</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} CollabHub</p>

          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}