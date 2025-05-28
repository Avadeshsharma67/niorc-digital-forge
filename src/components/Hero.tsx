
import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/5 via-cyan-400/5 to-blue-600/5 rounded-full animate-spin-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Powering Digital Excellence Since 2024
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
                  Niorc
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Transform Your Business with
                </p>
                <p className="text-2xl lg:text-3xl font-semibold text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Precision</span>
                </p>
              </div>
              
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Elevate your business with premium digital services and cutting-edge automation solutions. 
                From AI-powered workflows to enterprise mobility, we deliver innovation that drives measurable results.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 hover:from-blue-400 hover:via-blue-500 hover:to-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 flex items-center justify-center transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">Get Started Today</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-gradient-to-r border-blue-400/40 hover:border-cyan-400/60 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 backdrop-blur-sm">
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gradient-to-r border-blue-500/30">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-400 mt-1">Support Available</div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main tech visualization with enhanced gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-blue-500/30 shadow-2xl"></div>
              
              {/* Enhanced floating elements */}
              <div className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-2xl flex items-center justify-center animate-bounce delay-300 backdrop-blur-sm border border-blue-400/50">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg"></div>
              </div>
              
              <div className="absolute top-24 right-16 w-16 h-16 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full animate-pulse delay-500 backdrop-blur-sm border border-purple-400/50"></div>
              
              <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-3xl animate-bounce delay-700 backdrop-blur-sm border border-cyan-400/50"></div>
              
              <div className="absolute bottom-12 right-12 w-18 h-18 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-2xl animate-pulse delay-1000 backdrop-blur-sm border border-blue-500/50"></div>
              
              {/* Enhanced central element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-3xl shadow-2xl shadow-blue-500/30 animate-spin-slow flex items-center justify-center border-4 border-white/20">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">N</span>
                </div>
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-16 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-200"></div>
              <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-ping delay-800"></div>
              <div className="absolute top-1/3 right-8 w-4 h-4 bg-purple-400 rounded-full animate-ping delay-1200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
