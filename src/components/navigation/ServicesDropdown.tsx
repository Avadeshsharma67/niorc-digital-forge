
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface ServicesDropdownProps {
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
  onServiceClick: () => void;
}

const ServicesDropdown = ({ servicesOpen, setServicesOpen, onServiceClick }: ServicesDropdownProps) => {
  const location = useLocation();

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

  return (
    <div className="relative group animate-fade-in">
      <button 
        className={`transition-all duration-500 flex items-center space-x-1 font-medium relative transform-gpu text-sm lg:text-base ${
          location.pathname.startsWith('/services') ? 'text-blue-400' : 'text-white hover:text-blue-400'
        }`}
        onMouseEnter={() => setServicesOpen(true)}
      >
        <span>Services</span>
        <ChevronDown className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} />
        <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 ${
          location.pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
      </button>
      
      <div 
        className={`absolute top-full left-0 mt-3 w-72 sm:w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 py-4 sm:py-6 px-3 sm:px-4 transition-all duration-500 transform-gpu z-50 ${
          servicesOpen 
            ? 'opacity-100 visible translate-y-0 scale-100' 
            : 'opacity-0 invisible translate-y-2 scale-95'
        }`}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center animate-fade-in">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse"></span>
              High-Demand Services
            </h3>
            <div className="space-y-1">
              {highDemandServices.map((service, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={onServiceClick}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                    isActive(service.path)
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-sm'
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3 sm:pt-4">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3 flex items-center animate-fade-in">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse"></span>
              Always-On Services
            </h3>
            <div className="space-y-1">
              {alwaysOnServices.map((service, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={onServiceClick}
                  style={{ animationDelay: `${(index + 5) * 50}ms` }}
                  className={`block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                    isActive(service.path)
                      ? 'text-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-sm'
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
