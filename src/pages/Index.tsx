
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Coming Soon Content */}
      <div className="text-center relative z-10 px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Niorc
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Coming Soon
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Something amazing is on the way. We're working hard to bring you an incredible experience.
        </p>
        
        <div className="text-gray-400 text-lg">
          Stay tuned for updates
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-200"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
