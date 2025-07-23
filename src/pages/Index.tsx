
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Youtube, Instagram, MapPin, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-800">NIORC</span>
          </Link>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              ABOUT US
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              OUR WORKS
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              SERVICES
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8 animate-fade-in">
            Get Ready!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-16 animate-fade-in">
            Something Awesome is Coming Soon
          </p>
        </div>
      </div>

      {/* Social Media Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <MapPin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
