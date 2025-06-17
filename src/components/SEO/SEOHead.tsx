
import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

// Safe SEO component that uses document.head directly instead of react-helmet-async
const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sheraa - Creating the Next Wave of Entrepreneurs | Sharjah's Premier Startup Hub",
  description = "Sharjah's official entrepreneurship hub empowering founders from idea to global success. Join 180+ startups, access $30K funding, expert mentorship, and world-class acceleration programs.",
  keywords = "startup incubator Sharjah, entrepreneur support UAE, startup funding, business acceleration, innovation hub, venture capital Middle East, startup ecosystem",
  image = "/lovable-uploads/sheraa-logo.png",
  url = "https://sheraa.ae",
  type = "website",
  noIndex = false
}) => {
  const fullTitle = title.includes('Sheraa') ? title : `${title} | Sheraa`;

  React.useEffect(() => {
    // Safely update document head
    document.title = fullTitle;
    
    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'Sheraa - Sharjah Entrepreneurship Center');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');
    updateMeta('theme-color', '#003366');
    
    if (noIndex) {
      updateMeta('robots', 'noindex, nofollow');
    }

    // Open Graph
    updateProperty('og:type', type);
    updateProperty('og:url', url);
    updateProperty('og:title', fullTitle);
    updateProperty('og:description', description);
    updateProperty('og:image', image);
    updateProperty('og:site_name', 'Sheraa');

    // Twitter
    updateProperty('twitter:card', 'summary_large_image');
    updateProperty('twitter:url', url);
    updateProperty('twitter:title', fullTitle);
    updateProperty('twitter:description', description);
    updateProperty('twitter:image', image);

  }, [fullTitle, description, keywords, image, url, type, noIndex]);

  return null; // This component doesn't render anything
};

export default SEOHead;
