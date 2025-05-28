
import React from 'react';
import { Share2, Users, Calendar, Heart } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-pink-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium mb-6">
                <Share2 className="w-4 h-4 mr-2" />
                Always-On Service
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Social Media <span className="text-pink-400">Management</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build and maintain a strong social media presence with our comprehensive 
                social media management and community engagement services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Manage My Social Media
                </button>
                <button className="border-2 border-white/20 hover:border-pink-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Social Media Audit
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-pink-500/30 flex items-center justify-center">
                <Share2 className="w-32 h-32 text-pink-400" />
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
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to daily management, we handle all aspects of your social media presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Share2,
                title: 'Content Strategy',
                description: 'Comprehensive social media strategy and content planning.'
              },
              {
                icon: Users,
                title: 'Community Management',
                description: 'Active community engagement and follower growth strategies.'
              },
              {
                icon: Calendar,
                title: 'Content Scheduling',
                description: 'Consistent posting schedules across all your social platforms.'
              },
              {
                icon: Heart,
                title: 'Engagement Optimization',
                description: 'Maximize engagement rates and build authentic relationships.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-pink-600" />
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

export default SocialMedia;
