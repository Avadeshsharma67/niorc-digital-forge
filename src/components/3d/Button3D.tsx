
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const Button3D = ({ children, onClick, variant = 'primary', size = 'default', className = '' }: Button3DProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 hover:from-purple-500 hover:via-purple-600 hover:to-pink-500 text-white shadow-lg shadow-purple-500/30';
      case 'ghost':
        return 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white shadow-lg shadow-white/10';
      default:
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <div className="relative perspective-1000">
      <Button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        className={`
          ${getVariantStyles()}
          ${getSizeStyles()}
          ${className}
          relative font-bold rounded-xl transition-all duration-300 transform-gpu
          ${isHovered ? 'scale-110 rotate-3d shadow-2xl' : 'scale-100'}
          ${isPressed ? 'scale-95 translate-y-1' : ''}
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent 
          before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 before:rounded-xl
          after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/20 after:to-transparent after:opacity-0 hover:after:opacity-100 
          after:transition-opacity after:duration-500 after:rounded-xl after:pointer-events-none
          animate-glow-pulse overflow-hidden
        `}
        style={{
          transform: isHovered 
            ? `rotateX(${isPressed ? '2deg' : '-5deg'}) rotateY(${isPressed ? '1deg' : '5deg'}) translateZ(${isPressed ? '5px' : '20px'})` 
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          boxShadow: isHovered 
            ? `0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(6, 182, 212, 0.3)` 
            : '0 10px 20px rgba(59, 130, 246, 0.2)',
        }}
      >
        <span className="relative z-10 drop-shadow-sm">{children}</span>
        
        {/* 3D depth effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-xl pointer-events-none" />
        
        {/* Holographic effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-cyan-400/30 to-blue-400/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl animate-shimmer pointer-events-none" />
      </Button>
    </div>
  );
};

export default Button3D;
