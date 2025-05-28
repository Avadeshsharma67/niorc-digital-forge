
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
  ArrowRight,
  Sparkles
} from 'lucide-react';

const ServicesSection = () => {
  const highDemandServices = [
    {
      icon: Bot,
      title: 'Digital Transformation',
      description: 'AI Automation, RPA, and Business Process Automation to streamline your operations.',
      path: '/services/digital-transformation',
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'from-blue-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobility',
      description: 'Custom mobile apps and enterprise solutions for modern businesses.',
      path: '/services/enterprise-mobility',
      gradient: 'from-purple-500 via-pink-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Product Engineering',
      description: 'API development, cloud integration, and scalable product solutions.',
      path: '/services/product-engineering',
      gradient: 'from-emerald-500 via-cyan-500 to-blue-600',
      bgGradient: 'from-emerald-50 to-cyan-50',
      iconBg: 'from-emerald-500 to-blue-600'
    },
    {
      icon: TestTube,
      title: 'Quality Engineering',
      description: 'Comprehensive test automation and quality assurance services.',
      path: '/services/quality-engineering',
      gradient: 'from-orange-500 via-red-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Paid campaigns, trend analysis, and performance optimization.',
      path: '/services/digital-marketing',
      gradient: 'from-cyan-500 via-blue-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      iconBg: 'from-cyan-500 to-blue-600'
    }
  ];

  const alwaysOnServices = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy and community management.',
      path: '/services/social-media',
      gradient: 'from-pink-500 via-rose-500 to-purple-600',
      bgGradient: 'from-pink-50 to-purple-50',
      iconBg: 'from-pink-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Blogs, visuals, captions, and content strategy that converts.',
      path: '/services/content-marketing',
      gradient: 'from-indigo-500 via-purple-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconBg: 'from-indigo-500 to-blue-600'
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <div 
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Enhanced gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-500`}></div>
      
      {/* Sparkle effect */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="w-5 h-5 text-gray-400 animate-pulse" />
      </div>
      
      <div className="relative z-10">
        {/* Enhanced Icon */}
        <div className={`w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
          <service.icon className="w-10 h-10 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          {service.description}
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="space-y-4">
          <Link 
            to={service.path}
            className="block w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-blue-600 hover:to-purple-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg transition-all duration-500 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
          <button className="w-full border-2 border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-gray-700 hover:text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-500 flex items-center justify-center group/btn">
            Book Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High-Demand Services */}
        <div className="mb-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Most Popular Services
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                High-Demand
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge digital solutions designed for the modern enterprise. 
              Each service is crafted to deliver measurable results and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {highDemandServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Always-On Services */}
        <div>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full text-purple-700 text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Continuous Support
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                Always-On
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Continuous support and management services to keep your digital presence thriving 24/7. 
              Never miss an opportunity with our always-active solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {alwaysOnServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
