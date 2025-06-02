
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sheraa",
  "alternateName": "Sharjah Entrepreneurship Center",
  "url": "https://sheraa.ae",
  "logo": "https://sheraa.ae/sheraa-logo.png",
  "description": "Sharjah's official hub for aspiring founders and established ventures. We empower changemakers to build impactful businesses and shape the future.",
  "foundingDate": "2016",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sharjah Research Technology and Innovation Park",
    "addressLocality": "Sharjah",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-6-509-4000",
    "contactType": "General Inquiries",
    "email": "info@sheraa.ae"
  },
  "sameAs": [
    "https://linkedin.com/company/sheraa",
    "https://twitter.com/sheraa_ae",
    "https://instagram.com/sheraa_ae",
    "https://facebook.com/sheraa.ae"
  ],
  "founder": {
    "@type": "Person",
    "name": "H.H. Dr. Sheikh Sultan bin Muhammad Al Qasimi"
  },
  "keywords": "entrepreneurship, startup incubator, innovation, Sharjah, UAE, business development",
  "slogan": "Creating the Next Wave of Entrepreneurs"
};

export const eventStructuredData = (eventData: any) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventData.name,
  "description": eventData.description,
  "startDate": eventData.startDate,
  "endDate": eventData.endDate,
  "location": {
    "@type": "Place",
    "name": eventData.location.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": eventData.location.address,
      "addressLocality": "Sharjah",
      "addressCountry": "AE"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Sheraa",
    "url": "https://sheraa.ae"
  },
  "offers": {
    "@type": "Offer",
    "price": eventData.price || "0",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock",
    "url": eventData.registrationUrl
  }
});

export const programStructuredData = (programData: any) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": programData.name,
  "description": programData.description,
  "provider": {
    "@type": "Organization",
    "name": "Sheraa",
    "url": "https://sheraa.ae"
  },
  "courseMode": "blended",
  "educationalLevel": "professional",
  "timeRequired": programData.duration,
  "offers": {
    "@type": "Offer",
    "price": programData.price || "0",
    "priceCurrency": "AED"
  }
});
