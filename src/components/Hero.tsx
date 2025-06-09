
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Zap, Users, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-6 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Full-Stack Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Bot className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">AI Integration Experts</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Consulting-First Approach</span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Full-Stack Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Beyond Design
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We don't just design — we build complete digital ecosystems. From AI-powered automation to 
            scalable full-stack applications, we're your strategic technology partner for end-to-end solutions.
          </p>

          {/* Key differentiators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
              <Code className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 text-sm">Frontend, backend, databases, APIs — we handle the complete technical stack</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
              <Bot className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm">Custom AI solutions, automation, and intelligent business processes</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200">
              <Zap className="w-8 h-8 text-orange-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Consulting-First</h3>
              <p className="text-gray-600 text-sm">Strategic guidance before execution — we solve problems, not just build features</p>
            </div>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            
            <Link 
              to="/services/digital-transformation"
              className="border-2 border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 text-gray-700 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
          </div>

          {/* New bundle offer */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-900">New: Design + Development Bundle</span>
            </div>
            <p className="text-gray-600 mb-4">Complete solution from concept to deployment. Fixed pricing or flexible hourly rates.</p>
            <Link 
              to="/contact?service=Design + Development Bundle"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-600 px-4 py-2 rounded-lg font-medium transition-colors border border-blue-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
