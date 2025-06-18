
import { Home, Info, Rocket, Users, Calendar, Award, Search, FileText, Target, Palette, BarChart3, BookOpen, Mic, Shield, Briefcase, Coffee, Zap } from 'lucide-react';

export interface SophisticatedNavigationItem {
  name: string;
  path: string;
  icon: any;
  special?: boolean;
  subItems?: {
    name: string;
    path: string;
    description?: string;
  }[];
}

export const sophisticatedNavigationItems: SophisticatedNavigationItem[] = [
  {
    name: 'About',
    path: '/about',
    icon: Info,
    subItems: [
      { 
        name: 'Overview', 
        path: '/about',
        description: 'Learn about Sheraa\'s mission and vision'
      },
      { 
        name: 'Leadership Team', 
        path: '/about/leadership',
        description: 'Meet our executive leadership'
      },
      { 
        name: 'Board of Advisors', 
        path: '/about/board',
        description: 'Our strategic advisors and board members'
      }
    ]
  },
  {
    name: 'Programs',
    path: '/programs',
    icon: Rocket,
    subItems: [
      { 
        name: 'All Programs', 
        path: '/programs',
        description: 'Explore our complete program portfolio'
      },
      { 
        name: 'Start Young', 
        path: '/programs/start-young',
        description: 'Youth entrepreneurship programs'
      },
      { 
        name: 'Startup Dojo', 
        path: '/programs/startup-dojo',
        description: 'Intensive startup incubation'
      },
      { 
        name: 'S3 Incubator', 
        path: '/programs/s3-incubator',
        description: 'Our flagship growth program'
      },
      { 
        name: 'Access Sharjah Challenge', 
        path: '/programs/access-sharjah-challenge',
        description: 'Global startup challenge'
      },
      { 
        name: 'Deal Dock', 
        path: '/programs/deal-dock',
        description: 'Investment matching platform'
      }
    ]
  },
  {
    name: 'Community',
    path: '/community',
    icon: Users,
    subItems: [
      { 
        name: 'Overview', 
        path: '/community',
        description: 'Join our thriving ecosystem'
      },
      { 
        name: 'Membership', 
        path: '/community/membership',
        description: 'Become a Sheraa member'
      },
      { 
        name: 'Startups', 
        path: '/community/startups',
        description: 'Discover our portfolio companies'
      },
      { 
        name: 'Partnerships', 
        path: '/community/partnerships',
        description: 'Partner with Sheraa'
      },
      { 
        name: 'Feed', 
        path: '/feed',
        description: 'Community updates and news'
      }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
    subItems: [
      { 
        name: 'All Events', 
        path: '/events',
        description: 'Upcoming and past events'
      },
      { 
        name: 'SEF 2026', 
        path: '/events/sef',
        description: 'Sharjah Entrepreneurship Festival'
      },
      { 
        name: 'Upcoming Events', 
        path: '/events/upcoming',
        description: 'What\'s coming next'
      }
    ]
  },
  {
    name: 'Insights',
    path: '/insights',
    icon: Search,
    subItems: [
      { 
        name: 'Guides & Toolkits', 
        path: '/insights/guides',
        description: 'Practical resources for entrepreneurs'
      },
      { 
        name: 'Advisory Services', 
        path: '/insights/advisory',
        description: 'Expert guidance and mentorship'
      },
      { 
        name: 'Articles', 
        path: '/insights/articles',
        description: 'Latest insights and trends'
      },
      { 
        name: 'Impact Reports', 
        path: '/insights/impact-reports',
        description: 'Our ecosystem impact data'
      }
    ]
  },
  {
    name: 'Resources',
    path: '/reports',
    icon: FileText,
    subItems: [
      { 
        name: 'Reports', 
        path: '/reports',
        description: 'Research and analysis reports'
      },
      { 
        name: 'Blog', 
        path: '/blog',
        description: 'Stories and updates from our ecosystem'
      },
      { 
        name: 'Podcast', 
        path: '/podcast',
        description: 'Conversations with entrepreneurs'
      },
      { 
        name: 'Impact Report', 
        path: '/impact-report',
        description: 'Annual impact and achievements'
      }
    ]
  },
  {
    name: 'More',
    path: '#',
    icon: Target,
    subItems: [
      { 
        name: 'Careers', 
        path: '/careers',
        description: 'Join the Sheraa team'
      },
      { 
        name: 'Eligibility Checker', 
        path: '/eligibility',
        description: 'Check program eligibility'
      },
      { 
        name: 'Dashboard', 
        path: '/dashboard',
        description: 'Your personal dashboard'
      },
      { 
        name: 'Profile', 
        path: '/profile',
        description: 'Manage your profile'
      },
      { 
        name: 'Contact', 
        path: '/contact',
        description: 'Get in touch with us'
      },
      { 
        name: 'Privacy Policy', 
        path: '/privacy-policy',
        description: 'Our privacy commitment'
      },
      { 
        name: 'Terms of Use', 
        path: '/terms-of-use',
        description: 'Terms and conditions'
      }
    ]
  },
  {
    name: 'Perfume',
    path: '/perfume',
    icon: Palette,
    subItems: [
      { 
        name: 'Overview', 
        path: '/perfume',
        description: 'Discover Sharjah Perfume'
      },
      { 
        name: 'About', 
        path: '/perfume/about',
        description: 'The story behind our fragrance'
      },
      { 
        name: 'Buy Now', 
        path: '/perfume/buy',
        description: 'Purchase Sharjah Perfume'
      },
      { 
        name: 'Gallery', 
        path: '/perfume/gallery',
        description: 'Visual journey of our perfume'
      }
    ]
  },
  {
    name: 'SEF 2026',
    path: '/events/sef',
    icon: Award,
    special: true
  }
];
