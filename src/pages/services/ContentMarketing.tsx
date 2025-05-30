
import React from 'react';
import { FileText, Image, Edit, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

const ContentMarketing = () => {
  const navigate = useNavigate();

  const handleStartContentStrategyClick = () => {
    navigate('/contact');
  };

  const handleContentAuditClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                Always-On Service
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Content <span className="text-indigo-400">Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Engage your audience with compelling content that drives results. From blogs 
                to visuals, we create content that converts and builds brand authority.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleStartContentStrategyClick}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Start Content Strategy
                </button>
                <button 
                  onClick={handleContentAuditClick}
                  className="border-2 border-white/20 hover:border-indigo-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Content Audit
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-indigo-500/30 flex items-center justify-center">
                <FileText className="w-32 h-32 text-indigo-400" />
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
              Comprehensive Content Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we create content that resonates with your audience and drives business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: 'Blog Writing',
                description: 'SEO-optimized blog posts that educate and engage your audience.'
              },
              {
                icon: Image,
                title: 'Visual Content',
                description: 'Eye-catching graphics, infographics, and visual storytelling.'
              },
              {
                icon: Edit,
                title: 'Content Creation',
                description: 'Social media captions, email content, and marketing copy.'
              },
              {
                icon: BarChart,
                title: 'Content Strategy',
                description: 'Data-driven content strategies that align with your business goals.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-indigo-600" />
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

export default ContentMarketing;
