
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import VisitorCounter from '../components/VisitorCounter';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms = () => {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      id: "services",
      title: "Our Services",
      icon: <FileText className="w-6 h-6" />,
      content: "Niorc Consulting provides digital transformation, enterprise mobility, product engineering, quality engineering, and digital marketing services. Service details and deliverables will be specified in individual service agreements."
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: <Scale className="w-6 h-6" />,
      content: "Users must provide accurate information, maintain confidentiality of account credentials, use services in compliance with applicable laws, and respect intellectual property rights."
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from the use of our services."
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
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Please read these terms carefully before using our services.
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
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Agreement Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Niorc Consulting's website and services. 
              By using our services, you agree to these terms in full. If you disagree with any part of these terms, 
              you may not access our services.
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
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Payment Terms */}
          <div className="mt-12 p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/30">
            <h2 className="text-2xl font-bold mb-6 text-green-400">Payment Terms</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Payment Schedule</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Project milestone payments</li>
                  <li>• Monthly retainer options</li>
                  <li>• Net 30 payment terms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Accepted Methods</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Bank transfers</li>
                  <li>• Credit cards</li>
                  <li>• Digital payments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mt-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>All intellectual property rights in our services and website content belong to Niorc Consulting unless otherwise specified.</p>
              <p>Upon full payment, clients receive ownership rights to custom-developed solutions as specified in individual service agreements.</p>
              <p>Our proprietary methodologies, frameworks, and tools remain the intellectual property of Niorc Consulting.</p>
            </div>
          </div>

          {/* Termination */}
          <div className="mt-12 p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl border border-red-500/30">
            <h2 className="text-2xl font-bold mb-6 text-red-400">Termination</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Either party may terminate services with 30 days written notice. Immediate termination may occur in cases of:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Breach of contract terms</li>
              <li>• Non-payment of fees</li>
              <li>• Violation of applicable laws</li>
              <li>• Misuse of services</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <VisitorCounter />
    </div>
  );
};

export default Terms;
