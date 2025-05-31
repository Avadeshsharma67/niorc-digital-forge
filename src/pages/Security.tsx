
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Security = () => {
  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "End-to-end encryption for all data transmission and storage",
      icon: <Lock className="w-8 h-8" />,
      features: ["AES-256 encryption", "TLS 1.3 protocols", "Encrypted databases", "Secure key management"]
    },
    {
      title: "Access Controls",
      description: "Multi-layered access controls and authentication systems",
      icon: <Eye className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Role-based access", "Regular access reviews", "Zero-trust architecture"]
    },
    {
      title: "Infrastructure Security",
      description: "Secure cloud infrastructure with continuous monitoring",
      icon: <Server className="w-8 h-8" />,
      features: ["AWS/Azure security", "Network segmentation", "DDoS protection", "Intrusion detection"]
    },
    {
      title: "Compliance & Auditing",
      description: "Regular security audits and compliance certifications",
      icon: <CheckCircle2 className="w-8 h-8" />,
      features: ["SOC 2 compliance", "Regular penetration testing", "Security audits", "Vulnerability assessments"]
    }
  ];

  const certifications = [
    { name: "ISO 27001", status: "Certified" },
    { name: "SOC 2 Type II", status: "Compliant" },
    { name: "GDPR", status: "Compliant" },
    { name: "CCPA", status: "Compliant" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Security & Trust
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your security is our priority. We implement enterprise-grade security measures to protect your data and ensure your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Our Security Commitment</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We understand that your data is your most valuable asset. That's why we've built security into every layer of our operations, 
              from infrastructure to processes, ensuring your information remains protected at all times.
            </p>
          </div>

          {/* Security Measures Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    {measure.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{measure.title}</h3>
                    <p className="text-gray-400">{measure.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {measure.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Certifications & Compliance</h2>
            <p className="text-lg text-gray-300">
              We maintain the highest industry standards through rigorous certifications and compliance programs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black/50 rounded-xl p-6 text-center border border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <span className="text-sm text-green-400">{cert.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Security Best Practices</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Regular Security Training</h3>
                    <p className="text-gray-300">All team members undergo continuous security awareness training.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Incident Response Plan</h3>
                    <p className="text-gray-300">24/7 monitoring with rapid incident response procedures.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Backup & Recovery</h3>
                    <p className="text-gray-300">Automated backups with tested disaster recovery procedures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Report a Security Issue</h3>
                <p className="text-gray-300 mb-6">
                  If you discover a security vulnerability, please report it to us immediately.
                </p>
                <a 
                  href="mailto:security@niorc.in.net"
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold"
                >
                  security@niorc.in.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Updates */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Stay Informed</h2>
          <p className="text-lg text-gray-300 mb-8">
            We regularly update our security measures and will notify you of any important changes that may affect you.
          </p>
          <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Last Security Review</h3>
            <p className="text-gray-300">December 15, 2024 - All systems passed comprehensive security audit</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
