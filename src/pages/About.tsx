
import React from 'react';
import { Users, Target, Award, Zap, Globe, Shield, Rocket, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LeadCapture from '../components/LeadCapture';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver exact solutions tailored to your business needs with meticulous attention to detail.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology and creative approaches drive everything we do.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, committed to your success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is never compromised in our pursuit of outstanding results.'
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries with localized digital solutions.',
      metric: '25+ Countries'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security standards ensuring your data protection.',
      metric: '100% Secure'
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Rapid deployment with our agile development methodology.',
      metric: '50% Faster'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Dedicated to achieving measurable results for every project.',
      metric: '98% Success Rate'
    }
  ];

  const certifications = [
    'ISO 27001 Certified',
    'Google Cloud Partner',
    'Microsoft Azure Partner',
    'AWS Solutions Provider',
    'Agile Development Certified',
    'Digital Marketing Excellence'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with improved spacing */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Niorc</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're a team of digital innovators passionate about transforming businesses through 
            cutting-edge technology, automation, and strategic digital solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower businesses with digital precision that drives growth, efficiency, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence through innovation, security, and client-focused solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                    <achievement.icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {achievement.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Partnerships</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadCapture />
      <Footer />
    </div>
  );
};

export default About;
