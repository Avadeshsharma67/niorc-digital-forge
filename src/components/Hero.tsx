
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Zap, Users, CheckCircle, Star, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden pt-16 sm:pt-20">
      {/* Optimized background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced trust indicators with better mobile spacing */}
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 animate-fade-in">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
              <Award className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">#1 in India</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
              <TrendingUp className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">500+ Projects</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
              <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">98% Satisfaction</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
              <Bot className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">AI Powered</span>
            </div>
          </div>

          {/* Enhanced headline with better mobile typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in leading-tight px-2" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              #1 Digital Transformation
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              & AI Automation Company
            </span>
          </h1>
          
          {/* Enhanced value proposition with better mobile text sizing */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.4s' }}>
            🚀 <strong>Leading Digital Transformation Company in India</strong> with 500+ successful projects! 
            We deliver AI automation, full-stack development, enterprise mobility & strategic consulting. 
            <span className="text-blue-600 font-semibold"> Get FREE consultation today!</span>
          </p>

          {/* Strategy Before Development Section - Enhanced for Mobile */}
          <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.45s' }}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-blue-200 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Strategy Before Development
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-left">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Business Analysis First</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">We analyze your business needs before writing a single line of code</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">ROI-Focused Solutions</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Every feature is designed to maximize your return on investment</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Scalable Architecture</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Built to grow with your business from day one</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Future-Proof Technology</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Using latest tech stack that evolves with market trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced social proof */}
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 animate-fade-in px-2" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
              <span>Global Delivery</span>
            </div>
          </div>

          {/* Streamlined key differentiators with better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Bot className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-blue-600 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">AI Automation</h3>
              <p className="text-gray-600 text-xs sm:text-sm">RPA & intelligent automation solutions</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Code className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-purple-600 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Full-Stack Development</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Complete tech stack with cloud integration</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <Users className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-orange-600 mb-2 sm:mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Strategic Consulting</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Business analysis before development</p>
            </div>
          </div>

          {/* Optimized CTAs with better mobile layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10">🚀 Get FREE Consultation</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            
            <Link 
              to="/case-studies"
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 text-gray-700 hover:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 relative overflow-hidden group text-center"
            >
              <span className="relative z-10">📊 View Success Stories</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Additional trust signals with mobile optimization */}
          <div className="mt-6 sm:mt-8 text-center animate-fade-in px-2" style={{ animationDelay: '1s' }}>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Trusted by 500+ companies worldwide</p>
            <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 md:gap-6 text-gray-400">
              <span className="text-xs flex items-center"><span className="mr-1">🏆</span>Award Winning</span>
              <span className="text-xs flex items-center"><span className="mr-1">⚡</span>24hr Response</span>
              <span className="text-xs flex items-center"><span className="mr-1">🌍</span>Global Reach</span>
              <span className="text-xs flex items-center"><span className="mr-1">🔒</span>Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
