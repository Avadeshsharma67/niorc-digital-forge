
import React from 'react';

const MorphingBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simplified with fewer blobs and reduced effects */}
      <div className="absolute top-20 left-20 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute bottom-20 right-20 w-80 h-80 opacity-8">
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default MorphingBlobs;
