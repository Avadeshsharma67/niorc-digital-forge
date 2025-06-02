
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, Star, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const phrases = [
    'Transform Your Business with',
    'Accelerate Growth with',
    'Revolutionize Operations with',
    'Scale Efficiently with'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced typing animation effect
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    if (typedText.length < currentPhrase.length) {
      const timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [typedText, currentIndex]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  const handleWatchDemo = () => {
    const servicesSection = document.querySelector('[data-section="services"]');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center overflow-hidden">
      {/* Enhanced animated background with parallax */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs with mouse interaction */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-600/10 rounded-full animate-spin-slow"></div>
        
        {/* Enhanced floating particles with varied animations */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float delay-300 opacity-80"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-float delay-700 opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full animate-float delay-1000 opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-400/60 rounded-full animate-float delay-500 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400/60 rounded-full animate-float delay-1200 opacity-80"></div>
        <div className="absolute top-2/3 left-1/5 w-2.5 h-2.5 bg-blue-500/60 rounded-full animate-float delay-900 opacity-65"></div>
        
        {/* Shooting stars effect */}
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-4000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-6000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className={`text-white space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/40 rounded-full text-blue-200 text-sm font-medium backdrop-blur-md animate-fade-in shadow-lg hover:shadow-blue-500/20 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Powering Digital Excellence Since 2024
                <div className="absolute inset-0 bg-shimmer-gradient opacity-30 animate-shimmer rounded-full"></div>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight animate-fade-in-scale relative" style={{ animationDelay: '0.4s' }}>
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl relative">
                  Niorc
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl rounded-lg -z-10 animate-pulse"></div>
                </span>
              </h1>
              
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent min-h-[2.5rem] relative">
                  {typedText}
                  <span className="animate-pulse text-cyan-400">|</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-sm rounded -z-10"></div>
                </p>
                <p className="text-2xl lg:text-3xl font-semibold text-white relative">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">Digital Precision</span>
                </p>
              </div>
              
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.8s' }}>
                Elevate your business with premium digital services and cutting-edge automation solutions. 
                From AI-powered workflows to enterprise mobility, we deliver innovation that drives measurable results.
              </p>
            </div>

            {/* Enhanced CTA Buttons with more effects */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <button 
                onClick={handleGetStarted}
                className="group relative bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 hover:from-blue-400 hover:via-blue-500 hover:to-cyan-500 text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center transform hover:scale-105 shadow-2xl hover:shadow-blue-500/40 overflow-hidden animate-glow-pulse"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 drop-shadow-lg">Get Started Today</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
              
              <button 
                onClick={handleWatchDemo}
                className="group border-2 border-blue-400/50 hover:border-cyan-400/70 text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 backdrop-blur-md relative overflow-hidden shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Stats with more animations */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-blue-500/30 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-center group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 relative z-10">500+</div>
                <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors relative z-10">Projects Delivered</div>
              </div>
              <div className="text-center group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 relative z-10">98%</div>
                <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors relative z-10">Client Satisfaction</div>
              </div>
              <div className="text-center group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 relative z-10">24/7</div>
                <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors relative z-10">Support Available</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content with more sophisticated 3D effects */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative w-full h-96 lg:h-[600px]" style={{ perspective: '1000px' }}>
              {/* Main container with 3D transforms */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/25 to-purple-600/30 rounded-3xl backdrop-blur-md border border-blue-500/40 shadow-2xl animate-glow-pulse transition-transform duration-300"
                style={{
                  transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
                }}
              ></div>
              
              {/* Enhanced floating elements with 3D positioning */}
              <div 
                className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-blue-400/50 to-cyan-400/50 rounded-2xl flex items-center justify-center animate-float delay-300 backdrop-blur-md border border-blue-400/60 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transform: `translateZ(20px) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg animate-pulse"></div>
              </div>
              
              <div 
                className="absolute top-24 right-16 w-16 h-16 bg-gradient-to-br from-purple-400/50 to-blue-400/50 rounded-full animate-float delay-500 backdrop-blur-md border border-purple-400/60 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transform: `translateZ(30px) translate(${mousePosition.x * -15}px, ${mousePosition.y * -10}px)`
                }}
              ></div>
              
              <div 
                className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-3xl animate-float delay-700 backdrop-blur-md border border-cyan-400/60 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg overflow-hidden"
                style={{
                  transform: `translateZ(25px) translate(${mousePosition.x * 12}px, ${mousePosition.y * 8}px)`
                }}
              >
                <div className="absolute inset-0 bg-shimmer-gradient animate-shimmer"></div>
              </div>
              
              <div 
                className="absolute bottom-12 right-12 w-18 h-18 bg-gradient-to-br from-blue-500/50 to-purple-500/50 rounded-2xl animate-float delay-1000 backdrop-blur-md border border-blue-500/60 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
                style={{
                  transform: `translateZ(15px) translate(${mousePosition.x * -8}px, ${mousePosition.y * 12}px)`
                }}
              ></div>
              
              {/* Enhanced central element with dynamic glow */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl shadow-2xl shadow-blue-500/40 animate-spin-slow flex items-center justify-center border-4 border-white/30 animate-glow-pulse hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) translateZ(40px) scale(${1 + mousePosition.x * 0.1})`
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">N</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-lg animate-pulse"></div>
              </div>
              
              {/* Enhanced technology symbols with glowing effects */}
              <div 
                className="absolute top-1/4 right-1/4 flex items-center justify-center"
                style={{
                  transform: `translateZ(10px) translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
                }}
              >
                <div className="relative group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400/40 to-cyan-400/40 animate-float backdrop-blur-md flex items-center justify-center border border-blue-400/30 group-hover:scale-125 transition-all duration-300 shadow-lg">
                    <Zap className="w-6 h-6 text-blue-100 group-hover:text-blue-50 transition-colors drop-shadow-lg" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute bottom-1/4 left-1/4 flex items-center justify-center"
                style={{
                  transform: `translateZ(10px) translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`
                }}
              >
                <div className="relative group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/40 to-pink-400/40 animate-float delay-600 backdrop-blur-md flex items-center justify-center border border-purple-400/30 group-hover:scale-125 transition-all duration-300 shadow-lg">
                    <Star className="w-6 h-6 text-purple-100 group-hover:text-purple-50 transition-colors drop-shadow-lg" />
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
