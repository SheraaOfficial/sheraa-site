
// Define navigation link types
export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

// Create and export Home links (formerly About links)
export const homeLinks: NavLink[] = [
  { title: "About Us", href: "/about", description: "Learn about Sheraa's mission and values" },
  { title: "Our Approach", href: "/about#approach", description: "Discover our founder-first philosophy" },
  { title: "Our Vision", href: "/about#vision", description: "See our vision for Sharjah's future" },
  { title: "Our Impact", href: "/about#impact", description: "Explore our ecosystem's achievements" },
  { title: "Our Hubs", href: "/about#hubs", description: "Visit our strategic locations" },
  { title: "Our Leadership", href: "/about#leadership", description: "Meet our visionary leaders" },
  { title: "Our Board of Advisors", href: "/about#board", description: "Learn from our expert advisors" },
  { title: "Careers", href: "/careers", description: "Join our team" },
];

// Create and export Discover links (new grouping for programs)
export const discoverLinks: NavLink[] = [
  { title: "Program Pathway", href: "/programs", description: "Your journey from idea to scale" },
  { title: "Start Young", href: "/programs/start-young", description: "Programs for student entrepreneurs" },
  { title: "Startup Dojo", href: "/programs/startup-dojo", description: "Summer incubation program" },
  { title: "Startup Dojo+", href: "/programs/startup-dojo-plus", description: "Advanced startup program" },
];

// Create and export Grow links (focused on growth and incubation)
export const growLinks: NavLink[] = [
  { title: "S3 Incubator", href: "/programs/s3-incubator", description: "Sheraa Startup Studio" },
  { title: "Build Ventures", href: "/programs/build-ventures", description: "Growth stage program" },
  { title: "Access Sharjah Challenge", href: "/programs/access-sharjah-challenge", description: "Solve real industry challenges" },
  { title: "SME Support", href: "/programs/sme-support", description: "Support for established businesses" },
];

// Create and export Community links - Remove SEF from here
export const communityLinks: NavLink[] = [
  { title: "Join Our Community", href: "/community/join", description: "Membership benefits" },
  { title: "Our Startups Showcase", href: "/community/startups", description: "Success stories" },
  { title: "Partnership Opportunities", href: "/community/partnerships", description: "Collaborate with us" },
];

// Create and export Insights links (formerly Resources)
export const insightsLinks: NavLink[] = [
  { title: "Guides & Toolkits", href: "/resources/guides", description: "Practical startup guides" },
  { title: "Advisory Services", href: "/resources/advisory", description: "Expert guidance" },
  { title: "Articles & Insights", href: "/resources/articles", description: "Latest startup trends" },
  { title: "Impact Reports", href: "/resources/impact-reports", description: "Our ecosystem impact" },
  { title: "News & Media", href: "/events/news", description: "Latest updates" },
];

// Create and export Apply links (focused on taking action)
export const applyLinks: NavLink[] = [
  { title: "Check Eligibility", href: "/eligibility", description: "Find the right program" },
  { title: "Apply for Programs", href: "/programs", description: "Start your journey" },
  { title: "Contact Us", href: "/contact", description: "Get in touch" },
];

// Create and export SEF link - New standalone SEF link for the main navigation
export const sefLink: NavLink = { 
  title: "SEF", 
  href: "/events/sef", 
  description: "Sharjah Entrepreneurship Festival"
};
