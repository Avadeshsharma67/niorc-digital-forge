
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
  title = "Niorc Consulting - #1 Digital Transformation & AI Automation Company India | 500+ Successful Projects",
  description = "🚀 Leading Digital Transformation Company in India with 500+ successful projects! Expert AI automation, full-stack development, enterprise mobility & strategic consulting. 98% client satisfaction. Get FREE consultation today! Serving 25+ countries globally.",
  keywords = "digital transformation company India, AI automation services, full-stack development company, enterprise mobility solutions, digital marketing agency India, business automation, cloud solutions, mobile app development, web development services, strategic consulting, product engineering, quality engineering, New Delhi technology company, best digital transformation services, AI integration company, RPA automation, custom software development, enterprise solutions, digital innovation, technology consulting firm, Niorc Consulting",
  image = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&h=630&q=80",
  type = "website"
}: SEOHeadProps) => {
  const location = useLocation();
  const currentUrl = `https://niorc.in.net${location.pathname}`;
  const siteName = "Niorc Consulting";

  useEffect(() => {
    // Enhanced title with consistent branding - always include Niorc Consulting
    const fullTitle = title.includes('Niorc Consulting') ? title : `${title} | ${siteName}`;
    document.title = fullTitle;

    // Update site name in head
    let siteNameMeta = document.querySelector('meta[name="application-name"]');
    if (!siteNameMeta) {
      siteNameMeta = document.createElement('meta');
      siteNameMeta.setAttribute('name', 'application-name');
      document.head.appendChild(siteNameMeta);
    }
    siteNameMeta.setAttribute('content', siteName);

    // Update Apple mobile web app title
    let appleMeta = document.querySelector('meta[name="apple-mobile-web-app-title"]');
    if (!appleMeta) {
      appleMeta = document.createElement('meta');
      appleMeta.setAttribute('name', 'apple-mobile-web-app-title');
      document.head.appendChild(appleMeta);
    }
    appleMeta.setAttribute('content', siteName);

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
      { name: 'publisher', content: 'Niorc Consulting' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'theme-color', content: '#2563eb' },
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

    // Enhanced Open Graph tags with proper site name
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
      { property: 'og:image:alt', content: 'Niorc Consulting - Leading Digital Transformation & AI Automation Services' },
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
      { name: 'twitter:image:alt', content: 'Niorc Consulting - Leading Digital Transformation & AI Automation Services' }
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

    // Enhanced structured data for better search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Niorc Consulting",
      "alternateName": ["Niorc", "Niorc Digital", "Niorc Technologies"],
      "description": "Leading digital transformation company specializing in AI automation, full-stack development, enterprise mobility, and digital marketing solutions. Serving 500+ clients globally with 98% satisfaction rate.",
      "url": "https://niorc.in.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://niorc.in.net/favicon.ico",
        "width": 64,
        "height": 64
      },
      "image": image,
      "telephone": ["+91 6367987334", "+91 8764579775"],
      "email": ["hello@niorc.in.net", "founder@niorc.in.net"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN",
        "postalCode": "110001"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.2090
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "UAE" }
      ],
      "foundingDate": "2020",
      "numberOfEmployees": "50+",
      "slogan": "Complete Digital Solutions Beyond Design-Only Agencies",
      "brand": {
        "@type": "Brand",
        "name": "Niorc Consulting"
      },
      "sameAs": [
        "https://linkedin.com/company/niorc-consulting",
        "https://twitter.com/niorcconsulting",
        "https://discord.gg/QFzNbDSmtH"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Transformation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Transformation",
              "description": "Complete AI-powered business automation and digital transformation solutions",
              "serviceType": "Digital Transformation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Mobility",
              "description": "Custom mobile applications and enterprise mobility solutions",
              "serviceType": "Enterprise Mobility"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product Engineering",
              "description": "End-to-end product development and engineering services",
              "serviceType": "Product Engineering"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Quality Engineering",
              "description": "Comprehensive QA and testing solutions for reliability",
              "serviceType": "Quality Engineering"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "description": "Data-driven marketing solutions for growth acceleration",
              "serviceType": "Digital Marketing"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "knowsAbout": [
        "Digital Transformation",
        "AI Automation",
        "Enterprise Mobility",
        "Product Engineering",
        "Quality Engineering",
        "Digital Marketing",
        "Full-Stack Development",
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

    // Add breadcrumb structured data for services
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://niorc.in.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://niorc.in.net/services"
        }
      ]
    };

    let breadcrumbScript = document.querySelector('script[data-type="breadcrumb"]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.setAttribute('data-type', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEOHead;
