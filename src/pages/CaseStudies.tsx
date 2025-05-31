
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, TrendingUp, Users, Clock, ExternalLink, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'digital-transformation', name: 'Digital Transformation' },
    { id: 'enterprise-mobility', name: 'Enterprise Mobility' },
    { id: 'product-engineering', name: 'Product Engineering' },
    { id: 'marketing', name: 'Digital Marketing' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Global E-commerce Platform Transformation",
      client: "TechCorp International",
      category: "digital-transformation",
      industry: "E-commerce",
      duration: "8 months",
      teamSize: "12 members",
      challenge: "Legacy e-commerce platform causing performance issues and limiting business growth. Customer complaints about slow loading times and poor mobile experience.",
      solution: "Complete platform migration to modern microservices architecture with React frontend, Node.js APIs, and cloud infrastructure on AWS.",
      results: [
        "300% improvement in page load speed",
        "85% increase in mobile conversions",
        "50% reduction in operational costs",
        "99.9% uptime achieved"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 2,
      title: "Enterprise Mobile App for Field Operations",
      client: "Manufacturing Solutions Ltd",
      category: "enterprise-mobility",
      industry: "Manufacturing",
      duration: "6 months",
      teamSize: "8 members",
      challenge: "Field technicians were using paper-based processes, leading to delays, errors, and poor data visibility for management.",
      solution: "Developed cross-platform mobile application with offline capabilities, real-time sync, and integration with existing ERP systems.",
      results: [
        "60% reduction in processing time",
        "95% improvement in data accuracy",
        "40% increase in field productivity",
        "Real-time visibility for management"
      ],
      technologies: ["React Native", "Firebase", "GraphQL", "SAP Integration"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 3,
      title: "AI-Powered Customer Support Platform",
      client: "ServicePro Technologies",
      category: "product-engineering",
      industry: "Software",
      duration: "10 months",
      teamSize: "15 members",
      challenge: "High customer support costs and long response times affecting customer satisfaction and business scalability.",
      solution: "Built AI-powered support platform with chatbots, automated ticket routing, and predictive analytics for proactive support.",
      results: [
        "70% reduction in response time",
        "45% decrease in support costs",
        "90% customer satisfaction rate",
        "24/7 automated support availability"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 4,
      title: "Digital Marketing Campaign Optimization",
      client: "Fashion Forward Brands",
      category: "marketing",
      industry: "Fashion",
      duration: "4 months",
      teamSize: "6 members",
      challenge: "Low ROI on digital marketing campaigns and poor conversion rates across multiple channels.",
      solution: "Implemented data-driven marketing strategy with A/B testing, personalization, and advanced analytics across all digital channels.",
      results: [
        "250% increase in ROAS",
        "180% improvement in conversion rate",
        "400% growth in organic traffic",
        "65% reduction in customer acquisition cost"
      ],
      technologies: ["Google Analytics", "Facebook Ads", "SEO Tools", "Marketing Automation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 5,
      title: "Healthcare Data Management System",
      client: "MedTech Solutions",
      category: "digital-transformation",
      industry: "Healthcare",
      duration: "12 months",
      teamSize: "18 members",
      challenge: "Fragmented patient data across multiple systems causing inefficiencies and compliance issues.",
      solution: "Developed unified healthcare data platform with HIPAA compliance, real-time analytics, and seamless integration with existing systems.",
      results: [
        "100% HIPAA compliance achieved",
        "80% reduction in data retrieval time",
        "55% improvement in patient care efficiency",
        "Zero data breaches"
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "Apache Kafka", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 6,
      title: "Fintech Mobile Banking Solution",
      client: "NextGen Bank",
      category: "enterprise-mobility",
      industry: "Financial Services",
      duration: "14 months",
      teamSize: "20 members",
      challenge: "Legacy banking systems preventing launch of modern mobile banking services for digital-first customers.",
      solution: "Built secure, scalable mobile banking platform with biometric authentication, real-time transactions, and advanced security features.",
      results: [
        "500,000+ users onboarded in first 6 months",
        "99.99% transaction success rate",
        "Bank-grade security certification",
        "4.8/5 app store rating"
      ],
      technologies: ["Flutter", "Node.js", "PostgreSQL", "AWS", "Blockchain"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative digital solutions.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">100+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">250%</div>
                <div className="text-gray-400">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.client}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    View Full Case Study
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can help transform your business and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold inline-flex items-center justify-center"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="mailto:hello@niorc.in.net"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
