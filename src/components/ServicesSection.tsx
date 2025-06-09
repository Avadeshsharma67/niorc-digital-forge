
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
  Sparkles,
  Star,
  Users,
  Palette,
  Clock,
  DollarSign,
  Trello,
  RefreshCw
} from 'lucide-react';

const ServicesSection = () => {
  const consultingServices = [
    {
      icon: Users,
      title: 'Strategic Consulting',
      description: 'Business analysis, technology roadmaps, and digital transformation strategy before any development begins.',
      path: '/contact?service=Strategic Consulting',
      gradient: 'from-emerald-500 via-teal-500 to-blue-600',
      bgGradient: 'from-emerald-50 to-blue-50',
      iconBg: 'from-emerald-500 to-blue-600',
      popular: true,
      consulting: true
    },
    {
      icon: Palette,
      title: 'Design + Development Bundle',
      description: 'Complete solution from UI/UX design to full-stack development. Fixed pricing or flexible hourly rates.',
      path: '/contact?service=Design + Development Bundle',
      gradient: 'from-purple-500 via-pink-500 to-red-600',
      bgGradient: 'from-purple-50 to-red-50',
      iconBg: 'from-purple-500 to-red-600',
      bundle: true
    },
    {
      icon: Trello,
      title: 'Client Project Board',
      description: 'Trello-style project management with real-time updates, milestone tracking, and transparent communication.',
      path: '/contact?service=Client Project Board',
      gradient: 'from-blue-500 via-cyan-500 to-teal-600',
      bgGradient: 'from-blue-50 to-teal-50',
      iconBg: 'from-blue-500 to-teal-600',
      new: true
    }
  ];

  const highDemandServices = [
    {
      icon: Bot,
      title: 'AI-Powered Full-Stack',
      description: 'Complete AI integration with custom backends, intelligent automation, and scalable full-stack solutions.',
      path: '/services/digital-transformation',
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobility',
      description: 'Native mobile apps with backend integration, API development, and enterprise-grade security.',
      path: '/services/enterprise-mobility',
      gradient: 'from-purple-500 via-pink-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Product Engineering',
      description: 'End-to-end product development including backend APIs, databases, cloud infrastructure, and frontend.',
      path: '/services/product-engineering',
      gradient: 'from-emerald-500 via-cyan-500 to-blue-600',
      bgGradient: 'from-emerald-50 to-cyan-50',
      iconBg: 'from-emerald-500 to-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Resale & White-label Solutions',
      description: 'Ready-to-deploy solutions like EdVix platform. Rebrand and resell our proven digital products.',
      path: '/contact?service=Resale Solutions',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 to-pink-50',
      iconBg: 'from-orange-500 to-pink-600',
      unique: true
    }
  ];

  const alwaysOnServices = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy with backend integration for analytics and automation.',
      path: '/services/social-media',
      gradient: 'from-pink-500 via-rose-500 to-purple-600',
      bgGradient: 'from-pink-50 to-purple-50',
      iconBg: 'from-pink-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Content + Tech Stack',
      description: 'Content strategy powered by CMS development, automated publishing, and performance analytics.',
      path: '/services/content-marketing',
      gradient: 'from-indigo-500 via-purple-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconBg: 'from-indigo-500 to-blue-600'
    }
  ];

  const handleBookDemo = (serviceName: string) => {
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  const ServiceCard = ({ service, index }) => (
    <div 
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Enhanced badges */}
      {service.popular && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg animate-pulse">
          <Star className="w-4 h-4 mr-1" />
          Popular
        </div>
      )}
      {service.consulting && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <Users className="w-4 h-4 mr-1" />
          Consulting-First
        </div>
      )}
      {service.bundle && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <DollarSign className="w-4 h-4 mr-1" />
          Bundle
        </div>
      )}
      {service.new && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <Sparkles className="w-4 h-4 mr-1" />
          New
        </div>
      )}
      {service.unique && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <RefreshCw className="w-4 h-4 mr-1" />
          Unique
        </div>
      )}

      {/* Optimized gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-500`}></div>
      
      <div className="relative z-10">
        {/* Enhanced Icon */}
        <div className={`w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
          <service.icon className="w-10 h-10 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          {service.description}
        </p>
        
        {/* Optimized CTA Buttons */}
        <div className="space-y-4">
          <Link 
            to={service.path}
            className="block w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-blue-600 hover:to-purple-600 text-white text-center py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
          </Link>
          <button 
            onClick={() => handleBookDemo(service.title)}
            className="w-full border-2 border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-gray-700 hover:text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group/btn"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 relative z-10" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Optimized background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300/30 to-orange-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Consulting-First Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold mb-8">
              <Users className="w-4 h-4 mr-2" />
              Consulting-First Approach
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-emerald-900 to-teal-900 bg-clip-text text-transparent">
                Strategy Before
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">
                Development
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Unlike design-only agencies, we start with strategic consulting to understand your business, 
              then deliver complete technical solutions that actually solve your problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Full-Stack Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Code className="w-4 h-4 mr-2" />
              Full-Stack Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Complete Tech
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Ecosystems
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              End-to-end development including AI integration, backend systems, databases, APIs, 
              and modern frontend applications. We build the complete technical stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highDemandServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Always-On Services */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full text-purple-700 text-sm font-semibold mb-8">
              <Clock className="w-4 h-4 mr-2" />
              Continuous Support
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                Always-On
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ongoing support with technical integration. Content and social media management 
              powered by custom development and automation tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {alwaysOnServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 7} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
