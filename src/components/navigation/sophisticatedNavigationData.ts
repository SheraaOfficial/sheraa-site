
import { Home, Users, BookOpen, Calendar, Star } from 'lucide-react';

export interface SophisticatedNavigationItem {
  name: string;
  path: string;
  icon: React.ComponentType<any>;
  subItems?: {
    name: string;
    path: string;
    description?: string;
  }[];
  special?: boolean;
}

export const sophisticatedNavigationItems: SophisticatedNavigationItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: Home
  },
  {
    name: 'About',
    path: '/about',
    icon: Users,
    subItems: [
      {
        name: 'Our Story',
        path: '/about',
        description: 'Learn about our mission and vision'
      },
      {
        name: 'Leadership',
        path: '/about/leadership',
        description: 'Meet our executive team'
      },
      {
        name: 'Board',
        path: '/about/board',
        description: 'Our advisory board members'
      },
      {
        name: 'Hubs & Locations',
        path: '/about/hubs',
        description: 'Our strategic locations in Sharjah'
      }
    ]
  },
  {
    name: 'Programs',
    path: '/programs',
    icon: BookOpen,
    subItems: [
      {
        name: 'S3 Incubator',
        path: '/programs/s3-incubator',
        description: 'Our flagship equity-free program'
      },
      {
        name: 'Startup Dojo',
        path: '/programs/startup-dojo',
        description: 'Youth entrepreneurship program'
      },
      {
        name: 'Startup Dojo+',
        path: '/programs/startup-dojo-plus',
        description: 'Advanced acceleration phase'
      },
      {
        name: 'Access Sharjah Challenge',
        path: '/programs/access-sharjah-challenge',
        description: 'Global startup competition'
      },
      {
        name: 'SME Support',
        path: '/programs/sme-support',
        description: 'Support for established businesses'
      }
    ]
  },
  {
    name: 'Community',
    path: '/community',
    icon: Users,
    subItems: [
      {
        name: 'Join Community',
        path: '/community/join',
        description: 'Become a Sheraa member'
      },
      {
        name: 'Startup Directory',
        path: '/community/startups',
        description: 'Discover our portfolio companies'
      },
      {
        name: 'Partnerships',
        path: '/community/partnerships',
        description: 'Partner with Sheraa'
      },
      {
        name: 'Founder Portal',
        path: '/community/founder-portal',
        description: 'Access exclusive resources'
      }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
    subItems: [
      {
        name: 'Upcoming Events',
        path: '/events/upcoming',
        description: 'Join our next events'
      },
      {
        name: 'Past Events',
        path: '/events/past',
        description: 'Event highlights and recordings'
      },
      {
        name: 'Workshops',
        path: '/events/workshops',
        description: 'Skill-building sessions'
      }
    ]
  },
  {
    name: 'Resources',
    path: '/resources',
    icon: BookOpen,
    subItems: [
      {
        name: 'Guides & Toolkits',
        path: '/resources/guides',
        description: 'Practical startup resources'
      },
      {
        name: 'Advisory Services',
        path: '/resources/advisory',
        description: 'Expert mentorship'
      },
      {
        name: 'Articles & Insights',
        path: '/resources/articles',
        description: 'Latest trends and insights'
      },
      {
        name: 'Impact Reports',
        path: '/resources/impact-reports',
        description: 'Our ecosystem impact'
      }
    ]
  },
  {
    name: 'SEF',
    path: '/events/sef-landing',
    icon: Star,
    special: true
  }
];
