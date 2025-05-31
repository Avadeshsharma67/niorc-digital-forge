
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock, Users, Star, Send } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New Delhi",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build scalable web applications and enterprise solutions.",
      requirements: [
        "5+ years of experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong understanding of microservices architecture",
        "Experience with DevOps practices and CI/CD"
      ],
      benefits: [
        "Competitive salary",
        "Remote work flexibility",
        "Health insurance",
        "Professional development budget"
      ]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "New Delhi",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive our digital marketing initiatives and help clients achieve their marketing goals.",
      requirements: [
        "3+ years in digital marketing",
        "Google Ads & Facebook Ads certification",
        "SEO/SEM expertise",
        "Analytics and data-driven approach"
      ],
      benefits: [
        "Performance bonuses",
        "Flexible working hours",
        "Training and certifications",
        "Team outings"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Create beautiful and intuitive user experiences for our clients' digital products.",
      requirements: [
        "4+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio of web and mobile designs",
        "User research and testing experience"
      ],
      benefits: [
        "Creative freedom",
        "Latest design tools",
        "Flexible schedule",
        "Professional growth"
      ]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Sales",
      location: "New Delhi",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying new opportunities and building client relationships.",
      requirements: [
        "5+ years in B2B sales",
        "Technology services background",
        "Strong communication skills",
        "Track record of meeting targets"
      ],
      benefits: [
        "Commission structure",
        "Travel opportunities",
        "Client networking events",
        "Career advancement"
      ]
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Team Collaboration",
      description: "We believe in the power of working together towards common goals.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and professional development.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const handleApply = (jobId) => {
    // In a real application, this would open an application form or redirect to an application page
    alert(`Application form for job ID ${jobId} would open here. Please send your resume to careers@niorc.in.net`);
  };

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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of digital transformation with us. We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-400">Years Growing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Why Work With Us?</h2>
            <p className="text-lg text-gray-300">
              Our values guide everything we do and create an environment where you can thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gray-900/50 rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Open Positions</h2>
            <p className="text-lg text-gray-300">
              Discover opportunities to grow your career with us.
            </p>
          </div>

          <div className="grid gap-6">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-black/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  {selectedJob === job.id ? (
                    <div className="space-y-6 border-t border-gray-700 pt-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleApply(job.id)}
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold flex items-center"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Apply Now
                        </button>
                        <button
                          onClick={() => setSelectedJob(null)}
                          className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all duration-300"
                        >
                          Show Less
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedJob(job.id)}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Application Process</h2>
          <p className="text-lg text-gray-300 mb-12">
            Our hiring process is designed to be transparent and respectful of your time.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply", description: "Submit your resume and cover letter" },
              { step: "2", title: "Screen", description: "Initial phone/video screening" },
              { step: "3", title: "Interview", description: "Technical and cultural fit interviews" },
              { step: "4", title: "Offer", description: "Reference check and job offer" }
            ].map((step, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Don't See a Perfect Match?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our team.
            </p>
            <a 
              href="mailto:careers@niorc.in.net"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 font-bold"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
