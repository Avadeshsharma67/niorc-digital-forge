
import React from 'react';
import { ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '5+', label: 'Years Experience', icon: CheckCircle }
  ];

  const features = [
    'Expert Team of Developers',
    'Cutting-edge Technology Stack',
    '24/7 Support & Maintenance',
    'Agile Development Process',
    'Quality Assurance',
    'Scalable Solutions'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-8 animate-fade-in">
              <span>Our Difference</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Digital Excellence Through
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Strategic Innovation
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              We're not just another digital agency. We're strategic partners who transform businesses through digital precision and innovative solutions tailored to your unique needs.
            </p>
            
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-2 animate-fade-in" 
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="/about" 
              className="inline-flex items-center text-blue-600 font-semibold group animate-fade-in" 
              style={{ animationDelay: '0.8s' }}
            >
              Learn more about our approach
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          
          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
