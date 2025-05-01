
export const getPageTitle = (section?: string): string => {
  switch (section) {
    case 'approach':
      return 'Our Approach';
    case 'vision':
      return 'Our Vision';
    case 'hubs':
      return 'Our Hubs';
    case 'leadership':
      return 'Our Leadership';
    case 'board':
      return 'Board of Advisors';
    default:
      return 'About Sheraa';
  }
};

export const getPageSubtitle = (section?: string): string => {
  switch (section) {
    case 'approach':
      return 'Founder-First, Community-Driven: How we support entrepreneurs and innovators at every stage.';
    case 'vision':
      return 'Establishing Sharjah as a leading global hub for entrepreneurship and innovation.';
    case 'hubs':
      return 'Strategically located at the heart of innovation within Sharjah\'s academic and research landscape.';
    case 'leadership':
      return 'Meet the visionary team guiding Sheraa\'s mission and impact.';
    case 'board':
      return 'Distinguished leaders providing strategic guidance and expertise.';
    default:
      return 'Empowering entrepreneurs, building Sharjah\'s future.';
  }
};
