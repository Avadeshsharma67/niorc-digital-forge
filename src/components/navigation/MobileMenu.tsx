
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  isActive: (path: string) => boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, isActive, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();

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

  const handleGetStartedClick = () => {
    navigate('/contact');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="bg-black/95 backdrop-blur-xl border-t border-blue-900/20 rounded-b-2xl animate-slide-in-left max-h-[80vh] overflow-y-auto">
        <div className="px-3 pt-3 pb-4 space-y-2">
          <Link 
            to="/" 
            onClick={onClose}
            className={`block px-3 py-2.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 animate-fade-in text-sm ${
              isActive('/') 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            Home
          </Link>
          
          <div className="px-3 py-2">
            <h3 className="text-white font-bold mb-2 flex items-center animate-fade-in text-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
              Core Services
            </h3>
            <div className="space-y-1">
              {highDemandServices.map((service, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={onClose}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`block px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105 animate-fade-in ${
                    isActive(service.path)
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="px-3 py-2">
            <h3 className="text-white font-bold mb-2 flex items-center animate-fade-in text-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse"></span>
              Ongoing Services
            </h3>
            <div className="space-y-1">
              {alwaysOnServices.map((service, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={onClose}
                  style={{ animationDelay: `${(index + 5) * 50}ms` }}
                  className={`block px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105 animate-fade-in ${
                    isActive(service.path)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/about" 
            onClick={onClose}
            className={`block px-3 py-2.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 text-sm ${
              isActive('/about') 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            About
          </Link>

          <Link 
            to="/case-studies" 
            onClick={onClose}
            className={`block px-3 py-2.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 text-sm ${
              isActive('/case-studies') 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            Case Studies
          </Link>

          <Link 
            to="/blog" 
            onClick={onClose}
            className={`block px-3 py-2.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 text-sm ${
              isActive('/blog') 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            Blog
          </Link>
          
          <Link 
            to="/contact" 
            onClick={onClose}
            className={`block px-3 py-2.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 text-sm ${
              isActive('/contact') 
                ? 'text-blue-400 bg-blue-500/10' 
                : 'text-white hover:text-blue-400 hover:bg-blue-500/10'
            }`}
          >
            Contact
          </Link>
          
          <button 
            onClick={handleGetStartedClick}
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-3 py-2.5 rounded-lg transition-all duration-500 mt-3 font-bold transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 animate-fade-in text-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
