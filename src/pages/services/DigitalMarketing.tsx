
import React from 'react';
import { TrendingUp, Target, BarChart3, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const handleBoostGrowthClick = () => {
    navigate('/contact');
  };

  const handleMarketingAuditClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-cyan-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Growth-Driven Marketing
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Digital <span className="text-cyan-400">Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Drive growth with data-driven digital marketing strategies. From paid campaigns 
                to trend analysis, we optimize your marketing for maximum ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBoostGrowthClick}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Boost Your Growth
                </button>
                <button 
                  onClick={handleMarketingAuditClick}
                  className="border-2 border-white/20 hover:border-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Marketing Audit
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-cyan-400" />
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
              Data-Driven Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital marketing strategies are built on data insights and proven methodologies to drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Paid Advertising',
                description: 'Google Ads, Facebook Ads, and multi-platform campaign management.'
              },
              {
                icon: BarChart3,
                title: 'Analytics & Insights',
                description: 'Deep data analysis and performance optimization strategies.'
              },
              {
                icon: TrendingUp,
                title: 'Trend Analysis',
                description: 'Market trend identification and competitive analysis.'
              },
              {
                icon: Megaphone,
                title: 'Brand Marketing',
                description: 'Brand positioning and awareness campaigns that convert.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-cyan-600" />
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

export default DigitalMarketing;
