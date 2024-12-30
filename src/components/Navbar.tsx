import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Phone, FileText } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-20">
          <Link to="/" className="flex items-center mr-12">
            <Logo className="w-10 h-10" />
          </Link>

          <div className="hidden md:flex items-center space-x-8 flex-1">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/designers" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Users className="w-4 h-4" />
              <span>Designers</span>
            </Link>
            <Link to="/for-designers" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <FileText className="w-4 h-4" />
              <span>For Designers</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="/list-with-us"
              className="px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            >
              List Your Business
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};