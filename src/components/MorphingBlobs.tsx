
import React from 'react';

const MorphingBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large morphing blob */}
      <div className="absolute top-10 left-10 w-96 h-96 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full animate-morph blur-3xl"></div>
      </div>
      
      {/* Medium morphing blob */}
      <div className="absolute top-1/3 right-20 w-64 h-64 opacity-15">
        <div className="w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-morph blur-2xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Small morphing blob */}
      <div className="absolute bottom-20 left-1/3 w-48 h-48 opacity-25">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full animate-morph blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-400/30 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-cyan-400/40 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-10 h-10 bg-purple-400/25 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-pink-400/35 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default MorphingBlobs;
