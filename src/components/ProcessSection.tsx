
import React from 'react';
import { Lightbulb, Search, Code, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: 'Discovery & Strategy',
      description: 'We deeply analyze your business needs, market position, and goals to create a tailored digital strategy.',
      icon: Search,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Planning & Design',
      description: 'Our team creates detailed technical specifications and designs the perfect solution architecture.',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies and perform rigorous quality assurance.',
      icon: Code,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Deployment & Support',
      description: 'We ensure smooth deployment and provide ongoing maintenance and support for your solution.',
      icon: CheckCircle,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-8 animate-fade-in">
            Our Process
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              How We Deliver Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Our proven methodology ensures successful digital transformation projects from concept to completion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="relative">
                <div className="absolute -top-12 -left-6 text-8xl font-bold text-gray-100 opacity-70 select-none">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 relative">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
