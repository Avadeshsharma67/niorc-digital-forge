
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ to, isActive, children, className = '' }: NavLinkProps) => {
  return (
    <Link 
      to={to}
      className={`
        transition-all duration-500 font-medium relative group transform-gpu
        ${isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'}
        ${className}
      `}
    >
      {children}
      <span className={`
        absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 
        transition-all duration-500 transform origin-left
        ${isActive ? 'w-full scale-x-100' : 'w-0 group-hover:w-full group-hover:scale-x-100'}
      `}></span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
    </Link>
  );
};

export default NavLink;
