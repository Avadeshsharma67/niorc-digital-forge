
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './navigation/Logo';
import NavLink from './navigation/NavLink';
import ServicesDropdown from './navigation/ServicesDropdown';
import MobileMenu from './navigation/MobileMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const handleServiceClick = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/contact');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 transform-gpu ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10 py-2' 
        : 'bg-black/80 backdrop-blur-sm border-b border-blue-900/20 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation with improved spacing */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <NavLink to="/" isActive={isActive('/')}>
              Home
            </NavLink>
            
            <ServicesDropdown 
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
              onServiceClick={handleServiceClick}
            />

            <NavLink to="/about" isActive={isActive('/about')}>
              About
            </NavLink>
            
            <NavLink to="/contact" isActive={isActive('/contact')}>
              Contact
            </NavLink>
            
            <button
              onClick={handleGetStartedClick}
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl transition-all duration-500 font-bold shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 overflow-hidden group text-sm lg:text-base"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-white hover:text-blue-400 transition-all duration-300 p-2 transform hover:scale-110"
            >
              {isOpen ? 
                <X className="w-6 h-6 animate-spin" /> : 
                <Menu className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>

        <MobileMenu 
          isOpen={isOpen}
          isActive={isActive}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navigation;
