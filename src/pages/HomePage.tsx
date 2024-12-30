import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { designers } from '../data/designers';
import { DesignerCard } from '../components/DesignerCard';
import { SearchBar } from '../components/SearchBar';
import { PopularLocations } from '../components/PopularLocations';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { Logo } from '../components/Logo';
import { FAQ } from '../components/FAQ';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="The Design Refuge | Find Your Perfect Interior Designer"
        description="Connect with top-rated local interior designers. Browse portfolios, read reviews, and find the perfect designer for your home renovation project."
      />

      <Navbar />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-16">
          <PopularLocations />
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-3">Featured Designers</h2>
          <p className="text-xl text-gray-600 mb-8">Discover exceptional talent in your area</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designers.slice(0, 6).map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sage-300 via-sage-175 to-azure-100 rounded-3xl p-12 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8">Why Choose The Design Refuge?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
                <p className="text-gray-600">Every designer is thoroughly vetted for quality and professionalism</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">Find designers who understand your area's style and requirements</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Direct Connection</h3>
                <p className="text-gray-600">Connect directly with designers, no middleman required</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <FAQ title="Interior Designer or Decorator FAQs" />
        </div>
      </main>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-coral-500/20 via-azure-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4 mb-6 transform hover:scale-105 transition-transform">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-serif bg-gradient-to-r from-coral-400 to-azure-400 bg-clip-text text-transparent">
                  The Design Refuge
                </h3>
                <p className="text-white/80">Where Vision Meets Design</p>
              </div>
            </div>
            <p className="text-lg text-white/80 max-w-xl text-center">
              The Design Refuge - Your preferred directory for everything design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif mb-6 text-coral-400">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-white/80 hover:text-coral-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-coral-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6 text-azure-400">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/for-designers" className="text-white/80 hover:text-azure-400 transition-colors">
                    For Designers
                  </Link>
                </li>
                <li>
                  <Link to="/list-with-us" className="text-white/80 hover:text-azure-400 transition-colors">
                    List Your Business
                  </Link>
                </li>
                <li>
                  <Link to="/designers" className="text-white/80 hover:text-azure-400 transition-colors">
                    Browse Designers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6 text-sage-400">Stay Inspired</h3>
              <p className="text-white/80 mb-4">
                Join our community for the latest design trends and inspiration.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-coral-500 text-white rounded-r-lg hover:bg-coral-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};