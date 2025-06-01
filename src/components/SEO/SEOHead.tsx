
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

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

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sheraa" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Sheraa - Sharjah Entrepreneurship Center" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="theme-color" content="#003366" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sheraa",
          "alternateName": "Sharjah Entrepreneurship Center",
          "url": "https://sheraa.ae",
          "logo": `${url}/lovable-uploads/sheraa-logo.png`,
          "description": "Sharjah's official entrepreneurship hub empowering founders from idea to global success",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "AE",
            "addressRegion": "Sharjah",
            "addressLocality": "Sharjah"
          },
          "sameAs": [
            "https://www.linkedin.com/company/sheraa",
            "https://www.instagram.com/sheraa.ae",
            "https://www.facebook.com/sheraa.ae"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
