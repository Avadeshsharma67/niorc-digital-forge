
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookText, Calendar, User, Clock, Tag, ChevronRight, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'digital-transformation', name: 'Digital Transformation' },
    { id: 'ai-automation', name: 'AI & Automation' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'industry-insights', name: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Digital Transformation",
      excerpt: "Explore how artificial intelligence is reshaping enterprise operations and driving digital transformation initiatives across industries.",
      content: "Artificial Intelligence is no longer a futuristic concept but a present reality that's transforming how enterprises operate...",
      author: "Rajesh Kumar",
      authorRole: "AI Solutions Architect",
      publishDate: "2024-12-10",
      readTime: "8 min read",
      category: "ai-automation",
      tags: ["AI", "Enterprise", "Digital Transformation", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=600&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices for 2024",
      excerpt: "Learn the latest best practices for building scalable, maintainable React applications that can grow with your business needs.",
      content: "React continues to evolve, and with it, the best practices for building scalable applications...",
      author: "Priya Sharma",
      authorRole: "Senior Frontend Developer",
      publishDate: "2024-12-08",
      readTime: "12 min read",
      category: "web-development",
      tags: ["React", "JavaScript", "Frontend", "Scalability"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=600&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first design and how it impacts user experience and business success.",
      content: "With mobile devices accounting for over 50% of web traffic globally, mobile-first design has become crucial...",
      author: "Amit Patel",
      authorRole: "UX/UI Designer",
      publishDate: "2024-12-05",
      readTime: "6 min read",
      category: "mobile-development",
      tags: ["Mobile", "UX Design", "Responsive", "User Experience"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=600&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Digital Marketing Trends That Will Shape 2025",
      excerpt: "Stay ahead of the curve with these emerging digital marketing trends that will define the landscape in 2025.",
      content: "The digital marketing landscape is constantly evolving, and 2025 promises to bring exciting new trends...",
      author: "Sneha Gupta",
      authorRole: "Digital Marketing Lead",
      publishDate: "2024-12-03",
      readTime: "10 min read",
      category: "digital-marketing",
      tags: ["Marketing", "Trends", "Strategy", "Digital"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600&q=80",
      featured: true
    },
    {
      id: 5,
      title: "Cloud Migration Strategies for Small and Medium Businesses",
      excerpt: "A comprehensive guide to cloud migration strategies specifically tailored for SMBs looking to modernize their infrastructure.",
      content: "Cloud migration can be daunting for small and medium businesses, but with the right strategy...",
      author: "Vikram Singh",
      authorRole: "Cloud Solutions Architect",
      publishDate: "2024-11-28",
      readTime: "14 min read",
      category: "digital-transformation",
      tags: ["Cloud", "Migration", "SMB", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600&q=80",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Progressive Web Apps: Benefits and Implementation",
      excerpt: "Discover how Progressive Web Apps are bridging the gap between web and mobile applications.",
      content: "Progressive Web Apps (PWAs) are revolutionizing how we think about web applications...",
      author: "Anita Reddy",
      authorRole: "Full Stack Developer",
      publishDate: "2024-11-25",
      readTime: "9 min read",
      category: "web-development",
      tags: ["PWA", "Web Development", "Mobile", "Performance"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=600&q=80",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
                <BookText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in digital transformation, technology, and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-black/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Stay Updated</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-bold">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
