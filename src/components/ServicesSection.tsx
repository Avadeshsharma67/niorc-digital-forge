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
  RefreshCw,
  Zap,
  Award,
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const consultingServices = [
    {
      icon: Users,
      title: 'Strategic Technology Consulting',
      description: 'Comprehensive business analysis, digital strategy roadmaps, and technology consulting before any development begins. Get expert guidance on digital transformation.',
      path: '/contact?service=Strategic Consulting',
      gradient: 'from-emerald-500 via-teal-500 to-blue-600',
      bgGradient: 'from-emerald-50 to-blue-50',
      iconBg: 'from-emerald-500 to-blue-600',
      popular: true,
      consulting: true,
      keywords: ['digital strategy', 'business analysis', 'technology consulting', 'digital transformation strategy']
    },
    {
      icon: Palette,
      title: 'Complete Design + Development',
      description: 'End-to-end solution from UI/UX design to full-stack development and deployment. Fixed pricing with transparent project tracking and milestone delivery.',
      path: '/contact?service=Design + Development Bundle',
      gradient: 'from-purple-500 via-pink-500 to-red-600',
      bgGradient: 'from-purple-50 to-red-50',
      iconBg: 'from-purple-500 to-red-600',
      bundle: true,
      keywords: ['design development bundle', 'UI UX design', 'full stack development', 'web design development']
    },
    {
      icon: Trello,
      title: 'Transparent Project Management',
      description: 'Real-time project tracking with Trello-style boards, milestone updates, direct communication, and complete transparency throughout development.',
      path: '/contact?service=Client Project Board',
      gradient: 'from-blue-500 via-cyan-500 to-teal-600',
      bgGradient: 'from-blue-50 to-teal-50',
      iconBg: 'from-blue-500 to-teal-600',
      new: true,
      keywords: ['project management', 'project tracking', 'transparent development', 'agile methodology']
    }
  ];

  const highDemandServices = [
    {
      icon: Bot,
      title: 'AI Automation & Digital Transformation',
      description: 'Complete AI integration with RPA, intelligent automation, machine learning models, and scalable digital transformation solutions for enterprise growth.',
      path: '/services/digital-transformation',
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'from-blue-500 to-purple-600',
      popular: true,
      keywords: ['AI automation', 'RPA', 'digital transformation', 'machine learning', 'business automation']
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobility Solutions',
      description: 'Native mobile apps, cross-platform development, enterprise mobility, API integration, and mobile-first solutions for modern workforce productivity.',
      path: '/services/enterprise-mobility',
      gradient: 'from-purple-500 via-pink-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-500 to-pink-600',
      keywords: ['mobile app development', 'enterprise mobility', 'native apps', 'cross platform development']
    },
    {
      icon: Code,
      title: 'Full-Stack Product Engineering',
      description: 'End-to-end product development with modern tech stack, cloud infrastructure, API development, database design, and scalable architecture.',
      path: '/services/product-engineering',
      gradient: 'from-emerald-500 via-cyan-500 to-blue-600',
      bgGradient: 'from-emerald-50 to-cyan-50',
      iconBg: 'from-emerald-500 to-blue-600',
      keywords: ['full stack development', 'product engineering', 'API development', 'cloud solutions', 'web development']
    },
    {
      icon: TestTube,
      title: 'Quality Engineering & Testing',
      description: 'Comprehensive QA services, test automation, performance testing, security testing, and quality assurance for reliable software delivery.',
      path: '/services/quality-engineering',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 to-pink-50',
      iconBg: 'from-orange-500 to-pink-600',
      keywords: ['quality assurance', 'test automation', 'software testing', 'QA services', 'performance testing']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Growth',
      description: 'Data-driven digital marketing, SEO optimization, paid advertising, social media marketing, and growth hacking strategies for business expansion.',
      path: '/services/digital-marketing',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      bgGradient: 'from-cyan-50 to-indigo-50',
      iconBg: 'from-cyan-500 to-indigo-600',
      keywords: ['digital marketing', 'SEO services', 'paid advertising', 'social media marketing', 'growth marketing']
    },
    {
      icon: RefreshCw,
      title: 'White-Label & Resale Solutions',
      description: 'Ready-to-deploy digital products, white-label solutions, reseller partnerships, and custom platform development for agencies and businesses.',
      path: '/contact?service=Resale Solutions',
      gradient: 'from-violet-500 via-purple-500 to-pink-600',
      bgGradient: 'from-violet-50 to-pink-50',
      iconBg: 'from-violet-500 to-pink-600',
      unique: true,
      keywords: ['white label solutions', 'resale products', 'custom platforms', 'agency partnerships']
    }
  ];

  const alwaysOnServices = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, community management, social media automation, and engagement optimization across all platforms.',
      path: '/services/social-media',
      gradient: 'from-pink-500 via-rose-500 to-purple-600',
      bgGradient: 'from-pink-50 to-purple-50',
      iconBg: 'from-pink-500 to-purple-600',
      keywords: ['social media management', 'content creation', 'community management', 'social media marketing']
    },
    {
      icon: FileText,
      title: 'Content Marketing & SEO',
      description: 'Strategic content marketing, SEO-optimized content creation, blog writing, technical content, and content automation with CMS integration.',
      path: '/services/content-marketing',
      gradient: 'from-indigo-500 via-purple-500 to-blue-600',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconBg: 'from-indigo-500 to-blue-600',
      keywords: ['content marketing', 'SEO content', 'blog writing', 'content strategy', 'technical writing']
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
          Most Popular
        </div>
      )}
      {service.consulting && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <Award className="w-4 h-4 mr-1" />
          Consulting-First
        </div>
      )}
      {service.bundle && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <DollarSign className="w-4 h-4 mr-1" />
          Complete Bundle
        </div>
      )}
      {service.new && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <Sparkles className="w-4 h-4 mr-1" />
          New Feature
        </div>
      )}
      {service.unique && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
          <RefreshCw className="w-4 h-4 mr-1" />
          Unique Offering
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
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {service.description}
        </p>

        {/* Keywords for SEO */}
        {service.keywords && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {service.keywords.slice(0, 3).map((keyword, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
        
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
            <span className="relative z-10">Get FREE Quote</span>
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
              Strategic Consulting-First Approach
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
              Unlike design-only agencies, we start with comprehensive business analysis and strategic technology consulting 
              to understand your challenges, then deliver complete technical solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Core Digital Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Core Digital Transformation Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Complete Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              End-to-end digital transformation including AI automation, full-stack development, enterprise mobility, 
              quality engineering, and digital marketing. We build complete technology ecosystems that scale with your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Continuous Support & Marketing Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                Always-On
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                Marketing Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ongoing marketing and content services powered by technology integration. Social media management, 
              content marketing, and SEO services with automation tools and performance analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {alwaysOnServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index + 9} />
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join 500+ successful companies who chose our comprehensive digital transformation services. 
              Get a FREE consultation and custom strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                🚀 Get FREE Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/case-studies"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                📊 View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;