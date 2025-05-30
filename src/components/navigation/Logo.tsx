
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group animate-fade-in">
      <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 border border-blue-400/50 transform-gpu perspective-1000 animate-depth-pulse">
        <span className="text-white font-bold text-xl relative z-10 animate-3d-float">N</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-cyan-600/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-hologram"></div>
        
        {/* 3D depth layers */}
        <div className="absolute inset-1 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-lg transform translate-z-[-2px] group-hover:translate-z-[-5px] transition-transform duration-500"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-md transform translate-z-[-4px] group-hover:translate-z-[-8px] transition-transform duration-500"></div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 animate-glow">
          Niorc
        </span>
        <Sparkles className="w-4 h-4 text-blue-400 animate-3d-spin group-hover:rotate-12 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default Logo;
