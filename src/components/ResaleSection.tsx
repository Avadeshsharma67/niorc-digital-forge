
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Package, 
  DollarSign, 
  Zap, 
  Star, 
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  ShoppingCart
} from 'lucide-react';

const ResaleSection = () => {
  const resaleProducts = [
    {
      icon: Smartphone,
      title: 'EdVix Mobile Learning Platform',
      description: 'Complete e-learning mobile app with admin dashboard, payment integration, and content management.',
      features: ['White-label ready', 'Full source code', 'Documentation included', 'Setup support'],
      price: 'Starting at ₹2,99,999',
      gradient: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Suite',
      description: 'Full-featured online store with inventory management, payment gateway, and mobile app.',
      features: ['Multi-vendor support', 'Payment gateway ready', 'Mobile app included', 'Admin panel'],
      price: 'Starting at ₹4,99,999',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Corporate Website Template',
      description: 'Professional business website with CMS, contact forms, and SEO optimization.',
      features: ['Fully customizable', 'SEO optimized', 'Contact integration', 'Fast deployment'],
      price: 'Starting at ₹99,999',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Launch',
      description: 'Deploy proven solutions in weeks, not months'
    },
    {
      icon: DollarSign,
      title: 'Higher Margins',
      description: 'Sell complete solutions with 60-80% profit margins'
    },
    {
      icon: Package,
      title: 'Complete Package',
      description: 'Get source code, documentation, and setup support'
    },
    {
      icon: RefreshCw,
      title: 'Ongoing Updates',
      description: 'Regular updates and new features included'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-8">
            <RefreshCw className="w-4 h-4 mr-2" />
            Resale & White-label Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Sell Our Products
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              As Your Own
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Why build from scratch when you can rebrand and resell our proven digital products? 
            Get complete solutions with full commercial rights and your branding.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-blue-200 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {resaleProducts.map((product, index) => (
            <div key={index} className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-blue-100 mb-6">{product.description}</p>
              
              <div className="space-y-3 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-2xl font-bold text-white mb-6">{product.price}</div>
              
              <Link 
                to="/contact?service=Resale Solutions"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Get Details
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Join successful agencies and freelancers who are already selling our white-label solutions. 
              Get complete commercial rights and unlimited resale opportunities.
            </p>
            <Link 
              to="/contact?service=Resale Partnership"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Become a Resale Partner
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResaleSection;
