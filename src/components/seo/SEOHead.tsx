
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: object;
  alternateLanguages?: { lang: string; url: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sheraa - Creating the Next Wave of Entrepreneurs",
  description = "Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future.",
  keywords = ["entrepreneurship", "startup incubator", "Sharjah", "UAE", "innovation", "business incubation"],
  image = "/og-image.png",
  url = "https://sheraa.ae",
  type = "website",
  structuredData,
  alternateLanguages = [
    { lang: "en", url: "https://sheraa.ae" },
    { lang: "ar", url: "https://sheraa.ae/ar" }
  ]
}) => {
  const fullTitle = title.includes("Sheraa") ? title : `${title} | Sheraa`;
  const fullUrl = url.startsWith("http") ? url : `https://sheraa.ae${url}`;
  const fullImageUrl = image.startsWith("http") ? image : `https://sheraa.ae${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sheraa" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_AE" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@sheraa_ae" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      
      {/* Language Alternates */}
      {alternateLanguages.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional Meta for Performance */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#6B46C1" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};
