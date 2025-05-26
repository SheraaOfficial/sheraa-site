import { Home, Compass, TrendingUp, Users, Info, FileText, Calendar, Sparkles } from "lucide-react";

export interface NavigationLink {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export const homeLinks: NavigationLink[] = [
  {
    title: "About Sheraa",
    href: "/about",
    description: "Learn about our mission, vision, and impact on Sharjah's entrepreneurship ecosystem"
  },
  {
    title: "Programs",
    href: "/programs",
    description: "Explore our comprehensive suite of programs designed to support entrepreneurs at every stage"
  },
  {
    title: "Community",
    href: "/community",
    description: "Connect with fellow founders, mentors, and investors in our vibrant ecosystem"
  },
  {
    title: "Events",
    href: "/events",
    description: "Attend workshops, webinars, and networking events to grow your knowledge and connections"
  },
  {
    title: "News & Insights",
    href: "/resources",
    description: "Stay up-to-date on the latest trends, insights, and success stories from the Sheraa community"
  }
];

export const discoverLinks: NavigationLink[] = [
  {
    title: "About Sheraa",
    href: "/about",
    description: "Learn about our mission, vision, and impact on Sharjah's entrepreneurship ecosystem"
  },
  {
    title: "Why Sharjah",
    href: "/about/why-sharjah", 
    description: "Discover the advantages of building your startup in Sharjah"
  },
  {
    title: "Our Impact",
    href: "/about/impact",
    description: "See how we're transforming the entrepreneurial landscape"
  },
  {
    title: "Leadership Team",
    href: "/about/team",
    description: "Meet the visionary leaders driving Sheraa forward"
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our mission to empower the next generation of entrepreneurs"
  }
];

export const growLinks: NavigationLink[] = [
  {
    title: "All Programs",
    href: "/programs",
    description: "Explore all our entrepreneurship programs"
  },
  {
    title: "Startup Dojo",
    href: "/programs/startup-dojo",
    description: "For student entrepreneurs"
  },
  {
    title: "S3 Incubator",
    href: "/programs/s3-incubator",
    description: "For early-stage startups"
  },
  {
    title: "Access Sharjah Challenge",
    href: "/programs/access-sharjah-challenge",
    description: "For growth-stage startups"
  },
  {
    title: "Deal Dock",
    href: "/programs/deal-dock",
    description: "For startups seeking investments"
  },
  {
    title: "SME Support",
    href: "/programs/sme-support",
    description: "For established businesses"
  }
];

export const communityLinks: NavigationLink[] = [
  {
    title: "Join Our Community",
    href: "/community/join",
    description: "Become part of our ecosystem"
  },
  {
    title: "Startup Directory",
    href: "/community/startups",
    description: "Explore our portfolio startups"
  },
  {
    title: "Partnerships",
    href: "/community/partnerships",
    description: "Collaborate with Sheraa"
  },
  {
    title: "Founder Portal",
    href: "/community/founder-portal",
    description: "Exclusive resources for founders"
  }
];

export const insightsLinks: NavigationLink[] = [
  {
    title: "Resources",
    href: "/resources",
    description: "Access guides, templates, and tools to help you build and scale your startup"
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read articles and interviews with industry experts and successful entrepreneurs"
  },
  {
    title: "Podcast",
    href: "/podcast",
    description: "Listen to inspiring stories and practical advice from the Sheraa community"
  },
  {
    title: "Reports",
    href: "/reports",
    description: "Download research reports and data insights on the Sharjah entrepreneurship ecosystem"
  }
];

export const eventsLinks: NavigationLink[] = [
  {
    title: "SEF 2026",
    href: "/events/sef-landing",
    description: "Sharjah Entrepreneurship Festival"
  },
  {
    title: "Upcoming Events",
    href: "/events/upcoming",
    description: "Workshops, webinars & more"
  },
  {
    title: "Past Events",
    href: "/events/past",
    description: "Our previous community gatherings"
  }
];

export const applyLinks: NavigationLink[] = [
  {
    title: "Eligibility Checker",
    href: "/eligibility",
    description: "Find the right Sheraa program for your startup stage and needs"
  },
  {
    title: "Application Portal",
    href: "/apply",
    description: "Start or continue your application to Sheraa's programs"
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with our team for any questions or support"
  }
];

export const sefLink: NavigationLink = {
  title: "SEF 2026",
  href: "/events/sef-landing",
  description: "Join us at the Sharjah Entrepreneurship Festival"
};

export const perfumeLinks: NavigationLink[] = [
  {
    title: "About Sharjah Perfume",
    href: "/perfume",
    description: "Discover the essence of Sharjah through unique fragrances"
  },
  {
    title: "Our Collection",
    href: "/perfume/collection",
    description: "Explore our curated selection of perfumes inspired by Sharjah's heritage"
  },
  {
    title: "Visit Our Store",
    href: "/perfume/store",
    description: "Find our exclusive perfumes at select retailers in Sharjah"
  }
];
