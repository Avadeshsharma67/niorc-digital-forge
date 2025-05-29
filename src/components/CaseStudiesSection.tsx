
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'Digital Transformation for Fortune 500 Retail Company',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500',
      description: 'Complete overhaul of e-commerce infrastructure resulting in 43% increase in online sales.',
      link: '/case-studies/retail-transformation'
    },
    {
      title: 'AI-Powered Workflow Automation for Healthcare Provider',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500',
      description: 'Reduced administrative workload by 67% and improved patient satisfaction scores by 28%.',
      link: '/case-studies/healthcare-automation'
    },
    {
      title: 'Enterprise Mobile Solution for Global Logistics Company',
      category: 'Enterprise Mobility',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500',
      description: 'Fleet management solution that improved operational efficiency by 32% in the first year.',
      link: '/case-studies/logistics-mobility'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-semibold mb-8 animate-fade-in">
            Case Studies
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
              Our Work Speaks For Itself
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Explore how we've helped businesses across industries achieve remarkable results through innovative digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {study.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {study.description}
                </p>
                
                <a 
                  href={study.link}
                  className="inline-flex items-center text-blue-600 font-semibold group"
                >
                  View case study
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a 
            href="/case-studies"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            View all case studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
