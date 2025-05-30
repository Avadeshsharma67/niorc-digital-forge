
import React from 'react';

interface Text3DProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: 'blue' | 'purple' | 'cyan' | 'white';
  className?: string;
}

const Text3D = ({ children, size = 'md', color = 'blue', className = '' }: Text3DProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'text-sm';
      case 'md': return 'text-base';
      case 'lg': return 'text-lg';
      case 'xl': return 'text-xl';
      case '2xl': return 'text-2xl';
      case '3xl': return 'text-3xl lg:text-5xl';
      default: return 'text-base';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'blue': return 'bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400';
      case 'purple': return 'bg-gradient-to-r from-purple-400 via-purple-500 to-pink-400';
      case 'cyan': return 'bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-400';
      case 'white': return 'bg-gradient-to-r from-white via-gray-100 to-white';
      default: return 'bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400';
    }
  };

  const getTextShadow = () => {
    switch (color) {
      case 'blue': return '0 4px 8px rgba(59, 130, 246, 0.4), 0 8px 16px rgba(6, 182, 212, 0.2)';
      case 'purple': return '0 4px 8px rgba(147, 51, 234, 0.4), 0 8px 16px rgba(236, 72, 153, 0.2)';
      case 'cyan': return '0 4px 8px rgba(6, 182, 212, 0.4), 0 8px 16px rgba(59, 130, 246, 0.2)';
      case 'white': return '0 4px 8px rgba(255, 255, 255, 0.4), 0 8px 16px rgba(0, 0, 0, 0.1)';
      default: return '0 4px 8px rgba(59, 130, 246, 0.4), 0 8px 16px rgba(6, 182, 212, 0.2)';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <span 
        className={`
          ${getSizeClasses()}
          ${getColorClasses()}
          bg-clip-text text-transparent font-bold
          relative z-10
          hover:scale-105 transition-all duration-300 transform-gpu
          animate-gradient bg-[length:200%_200%]
        `}
        style={{
          textShadow: getTextShadow(),
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
        }}
      >
        {children}
      </span>
      
      {/* 3D depth effect */}
      <span 
        className={`
          absolute top-1 left-1 ${getSizeClasses()} font-bold 
          ${color === 'white' ? 'text-black/20' : 'text-black/30'}
          -z-10
        `}
        aria-hidden="true"
      >
        {children}
      </span>
      
      {/* Glow effect */}
      <span 
        className={`
          absolute inset-0 ${getSizeClasses()} 
          ${getColorClasses()}
          bg-clip-text text-transparent font-bold
          blur-sm opacity-70 -z-20
          animate-pulse
        `}
        aria-hidden="true"
      >
        {children}
      </span>
    </div>
  );
};

export default Text3D;
