import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
});

export const metadata: Metadata = {
  title: 'CollabHub - Empowering Collaboration',
  description:
    'A unified platform empowering collaboration between students, institutions, startups, and companies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={karla.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}