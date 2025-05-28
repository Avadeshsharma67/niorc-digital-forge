
import React from 'react';
import { Code, Cloud, Database, Layers } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

const ProductEngineering = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-green-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                Scalable Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Product <span className="text-green-400">Engineering</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build scalable, robust products with our comprehensive engineering services. 
                From API development to cloud integration, we bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-white/20 hover:border-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Technical Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
                <Code className="w-32 h-32 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Engineering Excellence for Modern Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our product engineering services cover the entire development lifecycle, from concept to deployment and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: 'API Development',
                description: 'RESTful and GraphQL APIs designed for scalability and performance.',
                features: ['RESTful Services', 'GraphQL Implementation', 'API Documentation', 'Version Management']
              },
              {
                icon: Cloud,
                title: 'Cloud Integration',
                description: 'Seamless cloud solutions with AWS, Azure, and Google Cloud.',
                features: ['Cloud Migration', 'Serverless Architecture', 'Container Orchestration', 'Auto-scaling']
              },
              {
                icon: Database,
                title: 'Data Architecture',
                description: 'Robust data solutions for complex business requirements.',
                features: ['Database Design', 'Data Warehousing', 'Real-time Analytics', 'Data Migration']
              },
              {
                icon: Layers,
                title: 'System Integration',
                description: 'Connect disparate systems for unified business operations.',
                features: ['Legacy Integration', 'Third-party APIs', 'Middleware Solutions', 'Event-driven Architecture']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCapture />
      <Footer />
    </div>
  );
};

export default ProductEngineering;
