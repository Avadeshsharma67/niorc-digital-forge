
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './navigation/Logo';
import NavLink from './navigation/NavLink';
import ServicesDropdown from './navigation/ServicesDropdown';
import MobileMenu from './navigation/MobileMenu';
import Button3D from './3d/Button3D';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    window.location.href = '/contact';
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            
            <Button3D onClick={handleGetStartedClick} variant="primary" size="default">
              Get Started
            </Button3D>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button3D 
              onClick={handleMobileMenuToggle}
              variant="ghost"
              size="sm"
              className="p-2"
            >
              {isOpen ? 
                <X className="w-6 h-6 animate-spin" /> : 
                <Menu className="w-6 h-6 hover:rotate-90 transition-transform duration-300" />
              }
            </Button3D>
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
