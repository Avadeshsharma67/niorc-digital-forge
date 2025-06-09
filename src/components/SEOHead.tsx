
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
  title = "Niorc Consulting - Leading Digital Transformation & AI Automation Services",
  description = "Transform your business with Niorc Consulting's premium digital services. Expert solutions in AI automation, digital transformation, enterprise technology, and innovative business consulting.",
  keywords = "Niorc Consulting, digital transformation, AI automation, enterprise technology, business consulting, digital solutions, technology consulting, enterprise mobility, product engineering, quality engineering, digital marketing, India, Delhi",
  image = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&h=630&q=80",
  type = "website"
}: SEOHeadProps) => {
  const location = useLocation();
  const currentUrl = `https://niorc.in.net${location.pathname}`;

  useEffect(() => {
    // Update title with consistent branding
    document.title = title.includes('Niorc Consulting') ? title : `${title} | Niorc Consulting`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title.includes('Niorc Consulting') ? title : `${title} | Niorc Consulting`);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) ogSiteName.setAttribute('content', 'Niorc Consulting');

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title.includes('Niorc Consulting') ? title : `${title} | Niorc Consulting`);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', image);

    // Add application name for better branding
    let appName = document.querySelector('meta[name="application-name"]');
    if (!appName) {
      appName = document.createElement('meta');
      appName.setAttribute('name', 'application-name');
      document.head.appendChild(appName);
    }
    appName.setAttribute('content', 'Niorc Consulting');

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEOHead;
