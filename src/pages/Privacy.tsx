
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Database, UserCheck, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        "Personal information (name, email, phone number) when you contact us",
        "Technical information about your device and browser",
        "Usage data about how you interact with our website",
        "Cookies and similar tracking technologies"
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        "To provide and improve our services",
        "To communicate with you about our services",
        "To analyze website usage and performance",
        "To comply with legal obligations"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "We do not sell or rent your personal information",
        "We may share information with trusted service providers",
        "We may disclose information if required by law",
        "We may share anonymized data for analytics"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Eye className="w-6 h-6" />,
      content: [
        "We use industry-standard encryption",
        "Regular security audits and updates",
        "Access controls and authentication",
        "Secure data transmission protocols"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At Niorc Consulting, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.id} className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Your Rights */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Your Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Access & Control</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Request access to your data</li>
                  <li>• Request data correction</li>
                  <li>• Request data deletion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Opt-Out Options</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Unsubscribe from emails</li>
                  <li>• Disable cookies</li>
                  <li>• Withdraw consent</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">hello@niorc.in.net</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+91 6367987334</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
