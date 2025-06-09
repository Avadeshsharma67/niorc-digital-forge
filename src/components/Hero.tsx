import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Zap, Users, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden pt-20">
      {/* Optimized background decoration with reduced complexity */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced trust indicators with better mobile spacing */}
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Complete Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <Bot className="w-4 h-4 text-blue-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">AI Integration</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Consulting-First</span>
            </div>
          </div>

          {/* Improved headline hierarchy with better mobile sizing */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Complete Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Ecosystems
            </span>
          </h1>
          
          {/* Enhanced value proposition with better mobile text sizing */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Beyond design-only agencies. We deliver strategic consulting + full-stack development + AI integration. 
            Complete solutions from concept to deployment with transparent project tracking.
          </p>

          {/* Streamlined key differentiators with better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Code className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">End-to-End Development</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Complete tech stack with AI integration and modern infrastructure</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Strategy-First Approach</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Business analysis and strategic planning before development begins</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-orange-600 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Transparent Process</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Real-time project boards and milestone tracking for full visibility</p>
            </div>
          </div>

          {/* Optimized CTAs with better mobile layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            
            <Link 
              to="/services/digital-transformation"
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 text-gray-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 relative overflow-hidden group text-center"
            >
              <span className="relative z-10">View Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;