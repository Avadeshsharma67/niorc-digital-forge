
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  Building,
  Zap,
  Target
} from 'lucide-react';

const ClientSuccessStories = () => {
  const successStories = [
    {
      company: "TechCorp Solutions",
      industry: "Manufacturing",
      challenge: "Manual inventory management causing 30% revenue loss",
      solution: "AI-powered inventory automation with real-time tracking",
      results: [
        "90% reduction in inventory errors",
        "300% faster order processing",
        "$2.5M annual cost savings",
        "99.8% order accuracy"
      ],
      testimonial: "Niorc transformed our entire operations. The AI automation solution delivered results beyond our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp Solutions",
      projectDuration: "4 months",
      teamSize: "8 experts",
      technologies: ["AI/ML", "React", "Node.js", "MongoDB"],
      rating: 5
    },
    {
      company: "HealthFirst Clinics",
      industry: "Healthcare",
      challenge: "Patient data scattered across multiple systems",
      solution: "Unified patient management system with mobile app",
      results: [
        "60% faster patient check-ins",
        "95% reduction in data errors",
        "40% increase in patient satisfaction",
        "100% HIPAA compliance"
      ],
      testimonial: "The seamless integration and user-friendly design made our staff adoption effortless. Patient care has never been better.",
      author: "Dr. Michael Chen",
      position: "Chief Medical Officer",
      projectDuration: "6 months",
      teamSize: "12 experts",
      technologies: ["React Native", "FHIR", "AWS", "PostgreSQL"],
      rating: 5
    },
    {
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Declining sales due to poor online presence",
      solution: "Omnichannel e-commerce platform with AI recommendations",
      results: [
        "450% increase in online sales",
        "65% improvement in customer retention",
        "200% boost in average order value",
        "50% reduction in cart abandonment"
      ],
      testimonial: "Our online transformation was remarkable. The AI-powered recommendations alone increased our revenue by 200%.",
      author: "Lisa Rodriguez",
      position: "Head of Digital Commerce",
      projectDuration: "5 months",
      teamSize: "10 experts",
      technologies: ["Next.js", "Shopify Plus", "AI/ML", "Stripe"],
      rating: 5
    }
  ];

  const overallStats = [
    { icon: TrendingUp, label: "Average ROI Increase", value: "340%" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Globe, label: "Countries Served", value: "25+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
            <Award className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Real Results for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped 500+ companies transform their operations and achieve remarkable growth through our strategic digital solutions.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {overallStats.map((stat, index) => (
            <div key={index} className="text-center bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Story Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                      <p className="text-blue-600 font-medium">{story.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Target className="w-5 h-5 text-red-500 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                        Solution
                      </h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                        Results Achieved
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial & Details */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200 mb-6">
                    <div className="flex items-center mb-4">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{story.testimonial}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {story.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{story.author}</div>
                        <div className="text-sm text-gray-600">{story.position}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{story.projectDuration}</div>
                      <div className="text-xs text-gray-600">Project Duration</div>
                    </div>
                    <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-200">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{story.teamSize}</div>
                      <div className="text-xs text-gray-600">Team Size</div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {story.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have transformed their business with our strategic digital solutions. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Your FREE Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/case-studies"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                View All Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
