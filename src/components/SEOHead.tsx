import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "Niorc Consulting - Complete Digital Transformation & Full-Stack Development Services",
  description = "Transform your business with Niorc Consulting's complete digital solutions. Strategic consulting, full-stack development, AI integration, enterprise mobility, and digital marketing services. Custom project boards, design + development bundles, and white-label resale opportunities. Based in New Delhi, India, serving clients globally.",
  keywords = "Niorc Consulting, digital transformation, full-stack development, AI integration, strategic consulting, enterprise mobility, product engineering, quality engineering, digital marketing, custom development, white-label solutions, project management, New Delhi India, global technology consulting, business automation, cloud solutions, mobile app development",
  image = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&h=630&q=80",
  type = "website"
}: SEOHeadProps) => {
  const location = useLocation();
  const currentUrl = `https://niorc.in.net${location.pathname}`;
  const siteName = "Niorc Consulting";

  useEffect(() => {
    // Enhanced title with consistent branding
    const fullTitle = title.includes('Niorc Consulting') ? title : `${title} | ${siteName}`;
    document.title = fullTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]') || 
      document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || 
      document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords);
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Enhanced meta tags for better SEO
    const metaTags = [
      { name: 'author', content: 'Niorc Consulting' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'theme-color', content: '#2563eb' },
      { name: 'application-name', content: siteName },
      { name: 'apple-mobile-web-app-title', content: siteName },
      { name: 'msapplication-TileColor', content: '#2563eb' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ];

    metaTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Enhanced Open Graph tags
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Niorc Consulting - Complete Digital Solutions' },
      { property: 'og:updated_time', content: new Date().toISOString() }
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Enhanced Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@niorcconsulting' },
      { name: 'twitter:creator', content: '@niorcconsulting' },
      { name: 'twitter:image:alt', content: 'Niorc Consulting - Complete Digital Solutions' }
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add structured data for organization with enhanced details
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteName,
      "description": description,
      "url": "https://niorc.in.net",
      "logo": "https://niorc.in.net/favicon.ico",
      "sameAs": [
        "https://linkedin.com/company/niorc-consulting",
        "https://twitter.com/niorcconsulting"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "hello@niorc.in.net",
        "telephone": "+91 6367987334",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Delhi",
        "addressLocality": "New Delhi"
      },
      "foundingDate": "2020",
      "numberOfEmployees": "50+",
      "slogan": "Complete Digital Solutions Beyond Design-Only Agencies",
      "offers": [
        {
          "@type": "Service",
          "name": "Digital Transformation",
          "description": "Complete digital transformation with AI integration and process automation"
        },
        {
          "@type": "Service", 
          "name": "Full-Stack Development",
          "description": "End-to-end development from frontend to backend and database"
        },
        {
          "@type": "Service",
          "name": "Strategic Consulting",
          "description": "Business analysis and technology strategy consulting"
        },
        {
          "@type": "Service",
          "name": "Enterprise Mobility",
          "description": "Mobile solutions for enterprise productivity and workforce enablement"
        }
      ],
      "knowsAbout": [
        "Digital Transformation",
        "Full-Stack Development", 
        "AI Integration",
        "Enterprise Mobility",
        "Product Engineering",
        "Quality Engineering",
        "Digital Marketing",
        "Strategic Consulting"
      ]
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEOHead;