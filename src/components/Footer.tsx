import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Youtube,
  MessageCircle,
  Award,
  Star,
  Globe,
  Shield
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Automation & Digital Transformation', path: '/services/digital-transformation' },
    { name: 'Enterprise Mobility Solutions', path: '/services/enterprise-mobility' },
    { name: 'Full-Stack Product Engineering', path: '/services/product-engineering' },
    { name: 'Quality Engineering & Testing', path: '/services/quality-engineering' },
    { name: 'Digital Marketing & Growth', path: '/services/digital-marketing' },
    { name: 'Strategic Technology Consulting', path: '/contact?service=Strategic Consulting' },
  ];

  const company = [
    { name: 'About Niorc Consulting', path: '/about' },
    { name: 'Career Opportunities', path: '/careers' },
    { name: 'Client Success Stories', path: '/case-studies' },
    { name: 'Technology Blog', path: '/blog' },
    { name: 'Contact & Consultation', path: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Security & Compliance', path: '/security' },
  ];

  const trustSignals = [
    { icon: Award, text: '#1 in India', color: 'text-yellow-400' },
    { icon: Star, text: '500+ Projects', color: 'text-blue-400' },
    { icon: Globe, text: '25+ Countries', color: 'text-green-400' },
    { icon: Shield, text: 'ISO Certified', color: 'text-purple-400' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Trust Signals Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center justify-center space-x-2">
              <signal.icon className={`w-5 h-5 ${signal.color}`} />
              <span className="text-gray-300 font-medium text-sm">{signal.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white text-2xl font-bold">Niorc</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              🚀 India's #1 Digital Transformation Company. Powering growth through AI automation, 
              full-stack development, and strategic consulting. 500+ successful projects, 98% client satisfaction.
            </p>
            
            {/* Enhanced Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div className="flex flex-col">
                  <a href="mailto:hello@niorc.in.net" className="text-gray-300 hover:text-blue-400 transition-colors">
                    hello@niorc.in.net
                  </a>
                  <a href="mailto:founder@niorc.in.net" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                    founder@niorc.in.net
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="flex flex-col">
                  <a href="tel:+916367987334" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91 6367987334
                  </a>
                  <a href="tel:+918764579775" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                    +91 8764579775
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">New Delhi, India 🇮🇳</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">Mon-Fri: 8:00 AM - 5:00 PM IST</p>
              <p className="text-green-400 text-sm">⚡ 24/7 Support Available</p>
            </div>
          </div>

          {/* Enhanced Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-400" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm leading-relaxed hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-green-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm leading-relaxed hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-400" />
              Legal & Connect
            </h3>
            <ul className="space-y-3 mb-8">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm leading-relaxed hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400">🌐 Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://discord.gg/QFzNbDSmtH" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110"
                  title="Join our Discord Community"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/niorc-consultings/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110"
                  title="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group transform hover:scale-110"
                  title="Subscribe to our YouTube"
                >
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
              <h4 className="text-white font-semibold mb-2">🚀 Ready to Transform?</h4>
              <p className="text-blue-200 text-sm mb-3">Get FREE consultation today!</p>
              <Link 
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Niorc Consulting. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-gray-500 text-xs">
                <span>🏆 Award Winning</span>
                <span>🔒 ISO Certified</span>
                <span>🌍 Global Reach</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ for digital transformation</span>
            </div>
          </div>
          
          {/* SEO Footer Links */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong>Niorc Consulting</strong> - Leading digital transformation company in India specializing in AI automation, 
                full-stack development, enterprise mobility, and strategic consulting. Serving clients across 25+ countries 
                with 500+ successful projects and 98% satisfaction rate. Get your FREE consultation today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;