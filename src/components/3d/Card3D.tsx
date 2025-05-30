
import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D = ({ children, className = '', intensity = 1 }: Card3DProps) => {
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15 * intensity;
    const rotateY = ((x - centerX) / centerX) * 15 * intensity;
    
    setTransform(`
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(${isHovered ? 20 : 0}px)
      scale3d(${isHovered ? 1.05 : 1}, ${isHovered ? 1.05 : 1}, 1)
    `);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)');
  };

  return (
    <div className="transform-gpu transition-all duration-300">
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          ${className}
          relative transform-gpu transition-all duration-300 
          bg-gradient-to-br from-white/10 via-white/5 to-transparent 
          backdrop-blur-xl border border-white/20
          shadow-xl hover:shadow-2xl
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:rounded-lg
          after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500/10 after:via-purple-500/10 after:to-cyan-500/10
          after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:rounded-lg
          overflow-hidden
        `}
        style={{
          transform,
          boxShadow: isHovered 
            ? '0 25px 50px rgba(0, 0, 0, 0.2), 0 0 30px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
            : '0 10px 25px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="relative z-10 p-6">
          {children}
        </div>
        
        {/* Holographic shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 skew-x-12 pointer-events-none" />
        
        {/* 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-lg pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
      </Card>
    </div>
  );
};

export default Card3D;
