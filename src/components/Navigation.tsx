
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const highDemandServices = [
    { name: 'Digital Transformation', path: '/services/digital-transformation' },
    { name: 'Enterprise Mobility', path: '/services/enterprise-mobility' },
    { name: 'Product Engineering', path: '/services/product-engineering' },
    { name: 'Quality Engineering', path: '/services/quality-engineering' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  const alwaysOnServices = [
    { name: 'Social Media Management', path: '/services/social-media' },
    { name: 'Content Marketing', path: '/services/content-marketing' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-white text-xl font-bold">Niorc</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-6 px-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">High-Demand Services</h3>
                      {highDemandServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Always-On Services</h3>
                      {alwaysOnServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-blue-900/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <div className="px-3 py-2">
                <h3 className="text-white font-semibold mb-2">High-Demand Services</h3>
                {highDemandServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-1 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="px-3 py-2">
                <h3 className="text-white font-semibold mb-2">Always-On Services</h3>
                {alwaysOnServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-1 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link to="/about" className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
