
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Smartphone, 
  Code, 
  TestTube, 
  TrendingUp, 
  Share2, 
  FileText,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const highDemandServices = [
    {
      icon: Bot,
      title: 'Digital Transformation',
      description: 'AI Automation, RPA, and Business Process Automation to streamline your operations.',
      path: '/services/digital-transformation',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobility',
      description: 'Custom mobile apps and enterprise solutions for modern businesses.',
      path: '/services/enterprise-mobility',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Product Engineering',
      description: 'API development, cloud integration, and scalable product solutions.',
      path: '/services/product-engineering',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      icon: TestTube,
      title: 'Quality Engineering',
      description: 'Comprehensive test automation and quality assurance services.',
      path: '/services/quality-engineering',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Paid campaigns, trend analysis, and performance optimization.',
      path: '/services/digital-marketing',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  const alwaysOnServices = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy and community management.',
      path: '/services/social-media',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Blogs, visuals, captions, and content strategy that converts.',
      path: '/services/content-marketing',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link 
            to={service.path}
            className="block w-full bg-gray-900 hover:bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 group-hover:bg-blue-600"
          >
            Learn More
          </Link>
          <button className="w-full border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
            Book Demo
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-Demand Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              High-Demand <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our cutting-edge digital solutions designed for the modern enterprise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highDemandServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Always-On Services */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Always-On <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous support and management services to keep your digital presence thriving 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {alwaysOnServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
