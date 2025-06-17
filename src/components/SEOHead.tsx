
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
  keywords = "Niorc Consulting, digital transformation company India, AI automation services, full-stack development company, enterprise mobility solutions, digital marketing agency India, business automation, cloud solutions, mobile app development, web development services, strategic consulting, product engineering, quality engineering, New Delhi technology company, best digital transformation services, AI integration company, RPA automation, custom software development, enterprise solutions, digital innovation, technology consulting firm",
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

    // Clear and set fresh meta tags for better search indexing
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
    existingMetas.forEach(meta => meta.remove());

    // Core SEO meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Niorc Consulting' },
      { name: 'publisher', content: 'Niorc Consulting' },
      { name: 'application-name', content: siteName },
      { name: 'apple-mobile-web-app-title', content: siteName },
      
      // Enhanced robots directives for better crawling
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
      
      // Brand and identity
      { name: 'theme-color', content: '#2563eb' },
      { name: 'msapplication-TileColor', content: '#2563eb' },
      { name: 'format-detection', content: 'telephone=no' },
      
      // Mobile optimization
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Geographic targeting
      { name: 'geo.region', content: 'IN-DL' },
      { name: 'geo.placename', content: 'New Delhi, India' },
      { name: 'geo.position', content: '28.6139;77.2090' },
      { name: 'ICBM', content: '28.6139, 77.2090' },
      
      // Business information
      { name: 'company', content: 'Niorc Consulting' },
      { name: 'classification', content: 'Digital Transformation, AI Automation, Technology Consulting' },
      { name: 'category', content: 'Technology Services' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'revisit-after', content: '1 days' }
    ];

    metaTags.forEach(({ name, content }) => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
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
      { property: 'og:locale:alternate', content: 'en_IN' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Niorc Consulting - Leading Digital Transformation & AI Automation Services' },
      { property: 'og:updated_time', content: new Date().toISOString() },
      { property: 'article:publisher', content: 'https://niorc.in.net' },
      { property: 'article:author', content: 'Niorc Consulting' }
    ];

    // Clear existing OG tags
    const existingOg = document.querySelectorAll('meta[property^="og:"]');
    existingOg.forEach(meta => meta.remove());

    ogTags.forEach(({ property, content }) => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    // Enhanced Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@niorcconsulting' },
      { name: 'twitter:creator', content: '@niorcconsulting' },
      { name: 'twitter:image:alt', content: 'Niorc Consulting - Leading Digital Transformation & AI Automation Services' },
      { name: 'twitter:domain', content: 'niorc.in.net' }
    ];

    // Clear existing Twitter tags
    const existingTwitter = document.querySelectorAll('meta[name^="twitter:"]');
    existingTwitter.forEach(meta => meta.remove());

    twitterTags.forEach(({ name, content }) => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    // Enhanced structured data for better search visibility
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://niorc.in.net/#organization",
          "name": "Niorc Consulting",
          "alternateName": ["Niorc", "Niorc Digital", "Niorc Technologies", "N Arc Consulting", "Niorc Consulting Engelplus"],
          "description": "Leading digital transformation company specializing in AI automation, full-stack development, enterprise mobility, and digital marketing solutions. Serving 500+ clients globally with 98% satisfaction rate.",
          "url": "https://niorc.in.net",
          "logo": {
            "@type": "ImageObject",
            "url": "https://niorc.in.net/favicon.ico",
            "width": 64,
            "height": 64
          },
          "image": {
            "@type": "ImageObject",
            "url": image,
            "width": 1200,
            "height": 630
          },
          "telephone": ["+91 6367987334", "+91 8764579775"],
          "email": ["hello@niorc.in.net", "founder@niorc.in.net"],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "New Delhi",
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
            { "@type": "Country", "name": "UAE" },
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "France" }
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
            "https://discord.gg/QFzNbDSmtH",
            "https://www.facebook.com/niorcconsulting",
            "https://www.instagram.com/niorcconsulting"
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
                  "name": "AI Automation Services",
                  "description": "Intelligent automation solutions with machine learning and RPA",
                  "serviceType": "AI Automation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Development",
                  "description": "End-to-end web and mobile application development services",
                  "serviceType": "Software Development"
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
            "Strategic Consulting",
            "RPA Implementation",
            "Cloud Solutions",
            "Mobile App Development",
            "Business Process Automation"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://niorc.in.net/#website",
          "url": "https://niorc.in.net",
          "name": "Niorc Consulting",
          "description": description,
          "publisher": {
            "@id": "https://niorc.in.net/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://niorc.in.net/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://niorc.in.net/#localbusiness",
          "name": "Niorc Consulting",
          "image": image,
          "telephone": "+91 6367987334",
          "email": "hello@niorc.in.net",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "New Delhi",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6139,
            "longitude": 77.2090
          },
          "url": "https://niorc.in.net",
          "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-15:00"],
          "priceRange": "$$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500"
          }
        }
      ]
    };

    // Clear existing structured data
    const existingJsonLd = document.querySelectorAll('script[type="application/ld+json"]');
    existingJsonLd.forEach(script => script.remove());

    const jsonLd = document.createElement('script');
    jsonLd.setAttribute('type', 'application/ld+json');
    jsonLd.textContent = JSON.stringify(structuredData);
    document.head.appendChild(jsonLd);

    // Add language and hreflang attributes
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', 'en');

    // Add hreflang links for international SEO
    const hreflangs = [
      { hreflang: 'en', href: currentUrl },
      { hreflang: 'en-in', href: currentUrl },
      { hreflang: 'en-us', href: currentUrl },
      { hreflang: 'en-gb', href: currentUrl },
      { hreflang: 'x-default', href: currentUrl }
    ];

    // Clear existing hreflang links
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    hreflangs.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEOHead;
