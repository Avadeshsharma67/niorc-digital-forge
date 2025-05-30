import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group animate-fade-in">
      <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 border border-blue-400/50 transform-gpu perspective-1000">
        <span className="text-white font-bold text-xl relative z-10">N</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-cyan-600/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
          Niorc
        </span>
        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default Logo;