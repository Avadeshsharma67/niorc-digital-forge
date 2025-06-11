
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Smartphone, 
  Cog, 
  Shield, 
  TrendingUp,
  PenTool,
  Users,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const ServiceCard = memo(({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  linkText,
  delay = 0 
}: {
  icon: any;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay?: number;
}) => (
  <div 
    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    <Link 
      to={link}
      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/link"
      aria-label={linkText}
    >
      <span>{linkText}</span>
      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
    </Link>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const ServicesSectionOptimized = memo(() => {
  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital transformation with AI integration, process automation, and modern technology implementation for enhanced business efficiency.",
      link: "/services/digital-transformation",
      linkText: "Explore Digital Transformation Solutions"
    },
    {
      icon: Smartphone,
      title: "Enterprise Mobility",
      description: "Mobile solutions for enterprise productivity, workforce enablement, and business process optimization across all devices and platforms.",
      link: "/services/enterprise-mobility",
      linkText: "Discover Enterprise Mobility Services"
    },
    {
      icon: Cog,
      title: "Product Engineering",
      description: "End-to-end product development from ideation to deployment, including full-stack development, architecture design, and scalable solutions.",
      link: "/services/product-engineering",
      linkText: "Learn About Product Engineering"
    },
    {
      icon: Shield,
      title: "Quality Engineering",
      description: "Comprehensive testing strategies, automated testing frameworks, performance optimization, and quality assurance for robust software delivery.",
      link: "/services/quality-engineering",
      linkText: "View Quality Engineering Services"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions including SEO, PPC campaigns, analytics, and conversion optimization to maximize your online presence.",
      link: "/services/digital-marketing",
      linkText: "Explore Digital Marketing Solutions"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Strategic content creation, brand storytelling, and content distribution strategies that engage audiences and drive business growth.",
      link: "/services/content-marketing",
      linkText: "Discover Content Marketing Services"
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Comprehensive social media management, community building, and social commerce strategies to enhance brand visibility and engagement.",
      link: "/services/social-media",
      linkText: "Learn About Social Media Management"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Beyond Design-Only Agencies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike design-only agencies, we provide complete development solutions with strategic consulting, 
            AI integration, and end-to-end project delivery for lasting business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
            aria-label="Start Your Digital Transformation Project - Free Consultation with Niorc Consulting"
          >
            <span>🚀 Start Your Transformation</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
});

ServicesSectionOptimized.displayName = 'ServicesSectionOptimized';

export default ServicesSectionOptimized;
