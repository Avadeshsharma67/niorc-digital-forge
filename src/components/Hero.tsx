
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Zap, Users, CheckCircle, Star, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden pt-16 sm:pt-20">
      {/* Simplified background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Trust indicators with simplified animations */}
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
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

          {/* Simplified headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              #1 Digital Transformation
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              & AI Automation Company
            </span>
          </h1>
          
          {/* Simplified value proposition */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            🚀 <strong>Leading Digital Transformation Company in India</strong> with 500+ successful projects! 
            We deliver AI automation, full-stack development, enterprise mobility & strategic consulting. 
            <span className="text-blue-600 font-semibold"> Get FREE consultation today!</span>
          </p>

          {/* Social proof */}
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-2">
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

          {/* Simplified key differentiators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto px-2 sm:px-4">
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

          {/* Simplified CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center group"
            >
              <span>🚀 Get FREE Consultation</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/case-studies"
              className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-600 hover:bg-gray-800 text-gray-700 hover:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 text-center"
            >
              📊 View Success Stories
            </Link>
          </div>

          {/* Simplified trust signals */}
          <div className="mt-6 sm:mt-8 text-center px-2">
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
