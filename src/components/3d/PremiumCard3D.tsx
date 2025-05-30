
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface PremiumCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

const PremiumCard3D = ({ 
  children, 
  className = '', 
  intensity = 1, 
  glowColor = 'blue' 
}: PremiumCard3DProps) => {
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getGlowColors = () => {
    switch (glowColor) {
      case 'blue': return 'shadow-blue-500/20 hover:shadow-blue-500/40';
      case 'purple': return 'shadow-purple-500/20 hover:shadow-purple-500/40';
      case 'cyan': return 'shadow-cyan-500/20 hover:shadow-cyan-500/40';
      case 'pink': return 'shadow-pink-500/20 hover:shadow-pink-500/40';
      default: return 'shadow-blue-500/20 hover:shadow-blue-500/40';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -20 * intensity;
    const rotateY = ((x - centerX) / centerX) * 20 * intensity;
    
    setTransform(`
      perspective(1200px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(${isHovered ? 30 : 0}px)
      scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)
    `);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)');
  };

  return (
    <div className="transform-gpu transition-all duration-500">
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          ${className}
          relative transform-gpu transition-all duration-500 
          bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.02]
          backdrop-blur-3xl border border-white/[0.18] rounded-2xl
          shadow-2xl ${getGlowColors()}
          before:absolute before:inset-0 before:bg-gradient-to-br 
          before:from-white/[0.15] before:via-transparent before:to-white/[0.05]
          before:opacity-0 hover:before:opacity-100 before:transition-opacity 
          before:duration-500 before:rounded-2xl before:pointer-events-none
          after:absolute after:inset-0 after:bg-gradient-conic 
          after:from-transparent after:via-white/[0.08] after:to-transparent
          after:opacity-0 hover:after:opacity-100 after:transition-opacity 
          after:duration-700 after:rounded-2xl after:pointer-events-none
          overflow-hidden group
        `}
        style={{
          transform,
          boxShadow: isHovered 
            ? `0 35px 80px rgba(0, 0, 0, 0.3), 
               0 0 50px ${glowColor === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 
                         glowColor === 'purple' ? 'rgba(147, 51, 234, 0.2)' :
                         glowColor === 'cyan' ? 'rgba(6, 182, 212, 0.2)' :
                         'rgba(236, 72, 153, 0.2)'}, 
               inset 0 1px 2px rgba(255, 255, 255, 0.3)` 
            : '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="relative z-10 p-8">
          {children}
        </div>
        
        {/* Enhanced holographic effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12 pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
        
        {/* Corner highlights */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-tl-2xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/30 to-transparent rounded-tr-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-white/30 to-transparent rounded-bl-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-white/30 to-transparent rounded-br-2xl pointer-events-none" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl border border-gradient-to-r border-transparent bg-gradient-conic from-blue-500/50 via-purple-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" 
             style={{ 
               background: `conic-gradient(from 0deg, transparent, ${glowColor === 'blue' ? '#3b82f6' : 
                                                                    glowColor === 'purple' ? '#9333ea' :
                                                                    glowColor === 'cyan' ? '#06b6d4' :
                                                                    '#ec4899'}, transparent)`,
               WebkitMask: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude',
               padding: '1px'
             }} 
        />
      </Card>
    </div>
  );
};

export default PremiumCard3D;
