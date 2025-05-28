
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

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

  const isActive = (path: string) => location.pathname === path;

  const handleServiceClick = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' 
        : 'bg-black/80 backdrop-blur-sm border-b border-blue-900/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 border border-blue-400/50">
              <span className="text-white font-bold text-xl">N</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Niorc</span>
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              to="/" 
              className={`transition-all duration-300 font-medium relative group ${
                isActive('/') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`transition-all duration-300 flex items-center space-x-1 font-medium relative ${
                  location.pathname.startsWith('/services') ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  location.pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-6 px-4 transition-all duration-300 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                      High-Demand Services
                    </h3>
                    {highDemandServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={handleServiceClick}
                        className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive(service.path)
                            ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
                      Always-On Services
                    </h3>
                    {alwaysOnServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={handleServiceClick}
                        className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive(service.path)
                            ? 'text-purple-600 bg-gradient-to-r from-purple-50 to-pink-50'
                            : 'text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className={`transition-all duration-300 font-medium relative group ${
                isActive('/about') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-300 font-medium relative group ${
                isActive('/contact') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              to="/contact"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-500 font-bold shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-blue-900/20 rounded-b-2xl animate-fade-in">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                Home
              </Link>
              <div className="px-4 py-3">
                <h3 className="text-white font-bold mb-3 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                  High-Demand Services
                </h3>
                {highDemandServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                      isActive(service.path)
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/10'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="px-4 py-3">
                <h3 className="text-white font-bold mb-3 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
                  Always-On Services
                </h3>
                {alwaysOnServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                      isActive(service.path)
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/about') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/contact') 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-3 rounded-lg transition-all duration-300 mt-4 font-bold"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
