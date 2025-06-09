
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
  title = "Niorc Consulting - Full-Stack Development & AI Integration Services",
  description = "Complete digital solutions beyond design-only agencies. Strategic consulting + full-stack development + AI integration. Design + Development bundles, client project boards, and resale opportunities. Transform your business with end-to-end technology solutions.",
  keywords = "Niorc Consulting, full-stack development, AI integration, strategic consulting, design development bundle, client project board, resale solutions, digital transformation, enterprise technology, consulting-first approach, custom development India, white-label solutions",
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
      { name: 'msapplication-TileColor', content: '#2563eb' }
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
      { property: 'og:image:alt', content: 'Niorc Consulting - Full-Stack Development Services' }
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
      { name: 'twitter:creator', content: '@niorcconsulting' }
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

    // Add structured data for organization
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
        "email": "info@niorc.in.net"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Delhi"
      },
      "offers": [
        {
          "@type": "Service",
          "name": "Full-Stack Development",
          "description": "Complete end-to-end development services with AI integration"
        },
        {
          "@type": "Service", 
          "name": "Strategic Consulting",
          "description": "Business analysis and technology strategy consulting"
        },
        {
          "@type": "Service",
          "name": "Design + Development Bundle",
          "description": "Complete solution from UI/UX design to full-stack development"
        }
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
