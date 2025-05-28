
import React from 'react';
import { Smartphone, Tablet, Wifi, Shield, Users, Code } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

const EnterpriseMobility = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile-First Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Enterprise <span className="text-purple-400">Mobility</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Empower your workforce with custom mobile applications and enterprise solutions 
                that drive productivity, enhance collaboration, and enable remote work capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Mobile Project
                </button>
                <button className="border-2 border-white/20 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-purple-400" />
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
              Mobile Solutions for Modern Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native mobile apps to enterprise-grade solutions, we deliver mobility solutions that transform how your business operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Native Mobile Apps',
                description: 'iOS and Android applications built for performance and user experience.'
              },
              {
                icon: Tablet,
                title: 'Tablet Solutions',
                description: 'Enterprise tablet applications for field work and presentations.'
              },
              {
                icon: Wifi,
                title: 'IoT Integration',
                description: 'Connect mobile devices with IoT sensors and smart systems.'
              },
              {
                icon: Shield,
                title: 'Security & Compliance',
                description: 'Enterprise-grade security with compliance standards.'
              },
              {
                icon: Users,
                title: 'Team Collaboration',
                description: 'Mobile solutions that enhance team productivity and communication.'
              },
              {
                icon: Code,
                title: 'API Development',
                description: 'Robust APIs to connect mobile apps with existing systems.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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

export default EnterpriseMobility;
