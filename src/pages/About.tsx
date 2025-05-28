
import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';
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

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in digital transformation'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Technology expert specializing in AI and automation'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative director with a passion for user-centered design'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Niorc</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-3xl object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
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

export default About;
