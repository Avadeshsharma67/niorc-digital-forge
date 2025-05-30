
import React from 'react';
import { Sparkles, Star, Zap, Globe, Shield, Cpu } from 'lucide-react';

interface FloatingElementProps {
  icon: React.ComponentType<any>;
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const FloatingElement = ({ 
  icon: Icon, 
  className = '', 
  delay = 0, 
  size = 'md',
  color = 'blue' 
}: FloatingElementProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'md': return 'w-12 h-12';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-6 h-6';
      case 'lg': return 'w-8 h-8';
      default: return 'w-6 h-6';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'blue': return 'from-blue-400/30 to-cyan-400/30 border-blue-400/40';
      case 'purple': return 'from-purple-400/30 to-pink-400/30 border-purple-400/40';
      case 'cyan': return 'from-cyan-400/30 to-blue-400/30 border-cyan-400/40';
      case 'green': return 'from-green-400/30 to-emerald-400/30 border-green-400/40';
      default: return 'from-blue-400/30 to-cyan-400/30 border-blue-400/40';
    }
  };

  return (
    <div 
      className={`
        ${className} ${getSizeClasses()}
        absolute rounded-2xl bg-gradient-to-br ${getColorClasses()}
        backdrop-blur-2xl border flex items-center justify-center
        shadow-2xl hover:scale-125 transition-all duration-700 cursor-pointer
        group animate-float
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className={`${getIconSize()} text-white/90 group-hover:text-white transition-colors duration-300`} />
      
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses()}
        opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl -z-10
      `} />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
    </div>
  );
};

const FloatingElements = () => {
  return (
    <>
      {/* Tech Icons */}
      <FloatingElement 
        icon={Cpu}
        className="top-1/4 left-1/6"
        delay={0}
        size="md"
        color="blue"
      />
      
      <FloatingElement 
        icon={Globe}
        className="top-1/3 right-1/4"
        delay={200}
        size="lg"
        color="cyan"
      />
      
      <FloatingElement 
        icon={Shield}
        className="bottom-1/3 left-1/4"
        delay={400}
        size="sm"
        color="purple"
      />
      
      <FloatingElement 
        icon={Zap}
        className="bottom-1/4 right-1/3"
        delay={600}
        size="md"
        color="green"
      />
      
      {/* Decorative Icons */}
      <FloatingElement 
        icon={Sparkles}
        className="top-1/6 right-1/6"
        delay={100}
        size="sm"
        color="blue"
      />
      
      <FloatingElement 
        icon={Star}
        className="bottom-1/6 left-1/5"
        delay={300}
        size="sm"
        color="purple"
      />
      
      {/* Additional floating particles */}
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float opacity-60" style={{ animationDelay: '500ms' }} />
      <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-50" style={{ animationDelay: '700ms' }} />
      <div className="absolute top-1/5 left-2/3 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '900ms' }} />
    </>
  );
};

export default FloatingElements;
