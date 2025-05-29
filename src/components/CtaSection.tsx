
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-300 rounded-full animate-float delay-300"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float delay-700"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-cyan-300 rounded-full animate-float delay-500"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full animate-glow-pulse"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-8 border border-white/20 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Start Your Digital Journey Today
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Let's discuss how our digital solutions can help you achieve your business goals.
            Schedule a free consultation with our experts today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="/contact"
              className="group relative bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 flex items-center justify-center transform hover:scale-105 shadow-xl hover:shadow-white/20 overflow-hidden"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            
            <a
              href="/services"
              className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 flex items-center justify-center hover:bg-white/10 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
