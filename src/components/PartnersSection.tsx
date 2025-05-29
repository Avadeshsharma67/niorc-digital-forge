
import React from 'react';

const PartnersSection = () => {
  // Sample partner logos (in a real implementation, you would use actual partner logos)
  const partners = [
    { name: 'Microsoft', logo: 'https://via.placeholder.com/150x80?text=Microsoft' },
    { name: 'Google', logo: 'https://via.placeholder.com/150x80?text=Google' },
    { name: 'Amazon', logo: 'https://via.placeholder.com/150x80?text=Amazon' },
    { name: 'IBM', logo: 'https://via.placeholder.com/150x80?text=IBM' },
    { name: 'Salesforce', logo: 'https://via.placeholder.com/150x80?text=Salesforce' },
    { name: 'Oracle', logo: 'https://via.placeholder.com/150x80?text=Oracle' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 animate-fade-in">Trusted By Industry Leaders</h3>
          <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We partner with the world's leading technology companies to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-12 md:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
