
import { NavigationLink } from "./types";

export const homeLinks: NavigationLink[] = [
  { title: "Home", href: "/", description: "Back to homepage" },
  { title: "About Sheraa", href: "/about", description: "Learn about our mission and vision" },
  { title: "Why Sharjah", href: "/about/why-sharjah", description: "Discover the advantages of Sharjah" },
  { title: "Our Impact", href: "/about/impact", description: "See how we're changing the ecosystem" },
];

export const discoverLinks: NavigationLink[] = [
  { title: "Programs Overview", href: "/programs", description: "Explore all our entrepreneurship programs" },
  { title: "All Programs", href: "/programs", description: "View all available programs" },
  { title: "Start Young", href: "/programs/start-young", description: "For students and early-stage founders" },
  { title: "Grow Smart", href: "/programs/grow-smart", description: "For startups with market traction" },
  { title: "Build Ventures", href: "/programs/build-ventures", description: "For growth-stage companies" },
];

export const growLinks: NavigationLink[] = [
  { title: "Startup Dojo", href: "/programs/startup-dojo", description: "For student entrepreneurs" },
  { title: "Startup Dojo+", href: "/programs/startup-dojo-plus", description: "For student startups with traction" },
  { title: "S3 Incubator", href: "/programs/s3-incubator", description: "For early-stage startups" },
  { title: "Access Sharjah Challenge", href: "/programs/access-sharjah-challenge", description: "For growth-stage startups" },
  { title: "Deal Dock", href: "/programs/deal-dock", description: "For startups seeking investment" },
  { title: "SME Support", href: "/programs/sme-support", description: "For established businesses" },
];

export const communityLinks: NavigationLink[] = [
  { title: "Join Our Community", href: "/community/join", description: "Become part of our ecosystem" },
  { title: "Startup Directory", href: "/community/startups", description: "Explore our portfolio startups" },
  { title: "Partnerships", href: "/community/partnerships", description: "Collaborate with Sheraa" },
  { title: "Founder Portal", href: "/community/founder-portal", description: "Exclusive resources for founders" },
];

export const insightsLinks: NavigationLink[] = [
  { title: "Resources", href: "/resources", description: "Guides, toolkits & advisory services" },
  { title: "Guides & Toolkits", href: "/resources/guides", description: "Practical resources for your business" },
  { title: "Advisory Services", href: "/resources/advisory", description: "Expert guidance when you need it most" },
  { title: "Articles & Insights", href: "/resources/articles", description: "Latest trends and success stories" },
  { title: "Impact Reports", href: "/resources/impact-reports", description: "Our ecosystem achievements" },
];

// Updated to "Events" only, not "Events & Festival"
export const eventsLinks: NavigationLink[] = [
  { title: "Upcoming Events", href: "/events", description: "Workshops, webinars & community meetups" },
  { title: "Event Calendar", href: "/events/calendar", description: "View all upcoming events" },
  { title: "Past Events", href: "/events/past", description: "Recap of our previous events" },
  { title: "Event Resources", href: "/events/resources", description: "Downloads and recordings" },
];

export const applyLinks: NavigationLink[] = [
  { title: "Eligibility Checker", href: "/eligibility", description: "Find the right program for you" },
  { title: "Startup Dojo Application", href: "/programs/startup-dojo", description: "For student entrepreneurs" },
  { title: "S3 Incubator Application", href: "/programs/s3-incubator", description: "For early-stage startups" },
  { title: "Access Sharjah Challenge", href: "/programs/access-sharjah-challenge", description: "For growth-stage startups" },
  { title: "Deal Dock Application", href: "/programs/deal-dock", description: "For investment-ready startups" },
];

export const sefLink: NavigationLink = {
  title: "SEF 2026",
  href: "/events/sef-landing",
  description: "Sharjah Entrepreneurship Festival - January 31-February 1, 2026"
};

export const perfumeLinks: NavigationLink[] = [
  {
    title: "Our Collection",
    href: "/perfume",
    description: "Explore our signature fragrance collection"
  },
  {
    title: "About Our Perfumes",
    href: "/perfume/about",
    description: "Learn about our crafting process and inspiration"
  },
  {
    title: "Gallery",
    href: "/perfume/gallery", 
    description: "Visual journey through our fragrance world"
  },
  {
    title: "Pricing & Packages",
    href: "/perfume/pricing",
    description: "View our perfume prices and gift sets"
  },
  {
    title: "Buy Online",
    href: "/perfume/buy",
    description: "Purchase our perfumes online"
  }
];
