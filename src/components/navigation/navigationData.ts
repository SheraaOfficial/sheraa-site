
// Define navigation link types
export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

// Create and export about links
export const aboutLinks: NavLink[] = [
  { title: "Introduction", href: "/about", description: "Learn about Sheraa's mission and values" },
  { title: "Our Approach", href: "/about/approach", description: "Discover our founder-first philosophy" },
  { title: "Our Vision", href: "/about/vision", description: "See our vision for Sharjah's future" },
  { title: "Our Impact", href: "/about/impact", description: "Explore our ecosystem's achievements" },
  { title: "Our Hubs", href: "/about/hubs", description: "Visit our strategic locations" },
  { title: "Our Leadership", href: "/about/leadership", description: "Meet our visionary leaders" },
  { title: "Our Board of Advisors", href: "/about/board", description: "Learn from our expert advisors" },
];

// Create and export programs links
export const programsLinks: NavLink[] = [
  { title: "Introduction", href: "/programs", description: "Overview of our startup support programs" },
  { title: "Program Pathway", href: "/programs", description: "Your journey from idea to scale" },
  { title: "Start Young", href: "/programs/start-young", description: "Programs for student entrepreneurs" },
  { title: "Startup Dojo", href: "/programs/startup-dojo", description: "Summer incubation program" },
  { title: "Startup Dojo+", href: "/programs/startup-dojo-plus", description: "Advanced startup program" },
  { title: "Grow Smart", href: "/programs/grow-smart", description: "Scale your startup" },
  { title: "S3 Incubator", href: "/programs/s3-incubator", description: "Sheraa Startup Studio" },
  { title: "Build Ventures", href: "/programs/build-ventures", description: "Growth stage program" },
  { title: "Access Sharjah Challenge", href: "/programs/access-sharjah-challenge", description: "Solve real industry challenges" },
  { title: "SME Support", href: "/programs/sme-support", description: "Support for established businesses" },
];

// Create and export resources links
export const resourcesLinks: NavLink[] = [
  { title: "Introduction", href: "/resources", description: "Access startup resources and tools" },
  { title: "Guides & Toolkits", href: "/resources/guides", description: "Practical startup guides" },
  { title: "Advisory Services", href: "/resources/advisory", description: "Expert guidance" },
  { title: "Articles & Insights", href: "/resources/articles", description: "Latest startup trends" },
  { title: "Impact Reports", href: "/resources/impact-reports", description: "Our ecosystem impact" },
];

// Create and export events links
export const eventsLinks: NavLink[] = [
  { title: "Introduction", href: "/events", description: "Discover our events" },
  { title: "Sharjah Entrepreneurship Festival", href: "/events/sef", description: "Our flagship event" },
  { title: "SEF Agenda", href: "/events/sef/agenda", description: "Festival schedule" },
  { title: "SEF Registration", href: "/events/sef/registration", description: "Get your pass" },
  { title: "SEF FAQ", href: "/events/sef/faq", description: "Common questions" },
  { title: "Upcoming Events", href: "/events/upcoming", description: "Calendar of events" },
  { title: "News & Media", href: "/events/news", description: "Latest updates" },
];

// Create and export community links
export const communityLinks: NavLink[] = [
  { title: "Introduction", href: "/community", description: "Join our ecosystem" },
  { title: "Join Our Community", href: "/community/join", description: "Membership benefits" },
  { title: "Our Startups Showcase", href: "/community/startups", description: "Success stories" },
  { title: "Partnership Opportunities", href: "/community/partnerships", description: "Collaborate with us" },
];
