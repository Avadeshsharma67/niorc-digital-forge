
import React from 'react';
import { Bot, Zap, BarChart3, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

const DigitalTransformation = () => {
  const benefits = [
    'Reduce operational costs by up to 60%',
    'Increase processing speed by 10x',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional cost increases',
    'Free up employees for strategic work',
    'Improve compliance and audit trails'
  ];

  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that learn and adapt to your business processes.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cog,
      title: 'RPA Implementation',
      description: 'Robotic Process Automation to handle repetitive tasks with precision.',
      features: ['Process Mapping', 'Bot Development', 'Exception Handling', 'Performance Monitoring']
    },
    {
      icon: BarChart3,
      title: 'Business Process Optimization',
      description: 'Streamline and optimize your workflows for maximum efficiency.',
      features: ['Process Analysis', 'Workflow Design', 'Integration Planning', 'Change Management']
    },
    {
      icon: Zap,
      title: 'Digital Workflow Automation',
      description: 'End-to-end automation of complex business workflows.',
      features: ['Document Management', 'Approval Workflows', 'Data Integration', 'Real-time Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Digital <span className="text-blue-400">Transformation</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge AI automation, RPA, and business process 
                optimization. Reduce costs, increase efficiency, and unlock new growth opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white/20 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                <Bot className="w-32 h-32 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business operations and drive digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Digital Transformation Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our proven approach to digital transformation delivers measurable results 
                and sustainable competitive advantages for your business.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                    <div className="text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">10x</div>
                    <div className="text-gray-600">Speed Increase</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-gray-600">Operation Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadCapture />
      <Footer />
    </div>
  );
};

export default DigitalTransformation;
