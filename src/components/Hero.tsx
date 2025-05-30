
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Text3D from './3d/Text3D';
import PremiumCard3D from './3d/PremiumCard3D';
import FloatingElements from './3d/FloatingElements';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = [
    'Transform Your Business with',
    'Accelerate Growth with',
    'Revolutionize Operations with',
    'Scale Efficiently with'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    if (typedText.length < currentPhrase.length) {
      const timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [typedText, currentIndex]);

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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced floating elements */}
      <FloatingElements />
      
      {/* Premium gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className={`text-white space-y-10 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/40 rounded-full text-blue-200 text-sm font-medium backdrop-blur-xl shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
                Powering Digital Excellence Since 2024
              </div>
              
              <div className="animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <Text3D size="3xl" color="white" className="mb-4">
                  Niorc
                </Text3D>
              </div>
              
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="min-h-[3rem]">
                  <Text3D size="2xl" color="blue" className="mb-2">
                    {typedText}
                    <span className="animate-pulse text-cyan-400">|</span>
                  </Text3D>
                </div>
                
                <Text3D size="2xl" color="cyan">
                  Digital Precision
                </Text3D>
              </div>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10" style={{ animationDelay: '0.8s' }}>
                Elevate your business with premium digital services and cutting-edge automation solutions. 
                From AI-powered workflows to enterprise mobility, we deliver innovation that drives measurable results.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <button 
                onClick={handleGetStarted}
                className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-700 flex items-center justify-center transform hover:scale-105 shadow-2xl hover:shadow-blue-500/40 overflow-hidden backdrop-blur-xl border border-blue-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              </button>
              
              <button 
                onClick={handleWatchDemo}
                className="group border-2 border-gradient-to-r border-white/30 hover:border-cyan-400/60 text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 backdrop-blur-xl relative overflow-hidden shadow-2xl hover:shadow-cyan-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Watch Demo</span>
              </button>
            </div>

            {/* Premium Stats Cards */}
            <div className="grid grid-cols-3 gap-6 pt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <PremiumCard3D glowColor="blue" className="text-center">
                <Text3D size="xl" color="blue">500+</Text3D>
                <div className="text-sm text-gray-400 mt-2">Projects Delivered</div>
              </PremiumCard3D>
              
              <PremiumCard3D glowColor="purple" className="text-center">
                <Text3D size="xl" color="purple">98%</Text3D>
                <div className="text-sm text-gray-400 mt-2">Client Satisfaction</div>
              </PremiumCard3D>
              
              <PremiumCard3D glowColor="cyan" className="text-center">
                <Text3D size="xl" color="cyan">24/7</Text3D>
                <div className="text-sm text-gray-400 mt-2">Support Available</div>
              </PremiumCard3D>
            </div>
          </div>

          {/* Right Content - Premium Visual */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative w-full h-[600px] lg:h-[700px]">
              {/* Main premium showcase */}
              <PremiumCard3D 
                glowColor="blue" 
                className="absolute inset-0 p-12"
                intensity={1.5}
              >
                <div className="relative h-full flex items-center justify-center">
                  {/* Central premium logo */}
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white/30 backdrop-blur-xl animate-float">
                      <Text3D size="3xl" color="white">N</Text3D>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"></div>
                      </div>
                      <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
                      </div>
                      <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </PremiumCard3D>
              
              {/* Floating premium cards */}
              <PremiumCard3D 
                glowColor="purple" 
                className="absolute top-8 right-8 w-32 h-32 p-4"
              >
                <div className="h-full flex items-center justify-center">
                  <Text3D size="lg" color="purple">AI</Text3D>
                </div>
              </PremiumCard3D>
              
              <PremiumCard3D 
                glowColor="cyan" 
                className="absolute bottom-8 left-8 w-36 h-36 p-4"
              >
                <div className="h-full flex items-center justify-center">
                  <Text3D size="lg" color="cyan">API</Text3D>
                </div>
              </PremiumCard3D>
              
              <PremiumCard3D 
                glowColor="pink" 
                className="absolute top-1/3 left-4 w-24 h-24 p-4"
              >
                <div className="h-full flex items-center justify-center">
                  <Text3D size="md" color="purple">ML</Text3D>
                </div>
              </PremiumCard3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
