
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLinksProps {
  currentPage?: string;
  className?: string;
}

const InternalLinks = ({ currentPage, className = "" }: InternalLinksProps) => {
  const serviceLinks = [
    { 
      path: '/services/digital-transformation', 
      title: 'Digital Transformation Services',
      description: 'Modernize your business with cutting-edge digital solutions'
    },
    { 
      path: '/services/enterprise-mobility', 
      title: 'Enterprise Mobility Solutions',
      description: 'Mobile-first approaches for modern workforce productivity'
    },
    { 
      path: '/services/product-engineering', 
      title: 'Product Engineering Excellence',
      description: 'End-to-end product development and engineering services'
    },
    { 
      path: '/services/quality-engineering', 
      title: 'Quality Engineering & Testing',
      description: 'Comprehensive QA and testing solutions for reliability'
    },
    { 
      path: '/services/digital-marketing', 
      title: 'Digital Marketing Strategies',
      description: 'Data-driven marketing solutions for growth acceleration'
    }
  ];

  const pageLinks = [
    { 
      path: '/about', 
      title: 'About Niorc Consulting',
      description: 'Learn about our mission, values, and expertise'
    },
    { 
      path: '/case-studies', 
      title: 'Client Success Stories',
      description: 'Real results from our digital transformation projects'
    },
    { 
      path: '/blog', 
      title: 'Technology Insights Blog',
      description: 'Latest trends and insights in digital innovation'
    },
    { 
      path: '/contact', 
      title: 'Get in Touch',
      description: 'Start your digital transformation journey today'
    }
  ];

  // Filter out current page
  const filteredServices = serviceLinks.filter(link => link.path !== currentPage);
  const filteredPages = pageLinks.filter(link => link.path !== currentPage);

  const getRelevantLinks = () => {
    if (currentPage?.startsWith('/services/')) {
      return [...filteredServices.slice(0, 3), ...filteredPages.slice(0, 2)];
    }
    return [...filteredServices.slice(0, 2), ...filteredPages.slice(0, 3)];
  };

  const relevantLinks = getRelevantLinks();

  return (
    <div className={`bg-gray-50 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Explore More Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternalLinks;
