
import { 
  Home, 
  Users, 
  BookOpen, 
  Users2, 
  Calendar, 
  FileText,
  Star,
  Briefcase
} from 'lucide-react';
import { NavigationItem } from './types';

export const sophisticatedNavigationItems: NavigationItem[] = [
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
        name: 'About Sheraa',
        path: '/about',
        description: 'Learn about our mission and vision'
      },
      {
        name: 'Leadership',
        path: '/about/leadership',
        description: 'Meet our leadership team'
      },
      {
        name: 'Board of Advisors',
        path: '/about/board',
        description: 'Our distinguished board members'
      },
      {
        name: 'Careers',
        path: '/careers',
        description: 'Join our mission to empower entrepreneurs'
      }
    ]
  },
  {
    name: 'Discover',
    path: '/programs',
    icon: BookOpen,
    subItems: [
      {
        name: 'Programs Overview',
        path: '/programs',
        description: 'Explore all our programs'
      },
      {
        name: 'S3 Incubator',
        path: '/programs/s3-incubator',
        description: 'Our flagship 6-month incubation program'
      },
      {
        name: 'Start Young',
        path: '/programs/start-young',
        description: 'Youth entrepreneurship programs'
      },
      {
        name: 'Startup Dojo',
        path: '/programs/startup-dojo',
        description: 'Summer incubation for students'
      },
      {
        name: 'Access Sharjah Challenge',
        path: '/programs/access-sharjah-challenge',
        description: 'Global competition for growth-stage startups'
      }
    ]
  },
  {
    name: 'Community',
    path: '/community',
    icon: Users2,
    subItems: [
      {
        name: 'Join Community',
        path: '/community/join',
        description: 'Become part of our ecosystem'
      },
      {
        name: 'Startup Directory',
        path: '/community/startups',
        description: 'Explore our portfolio companies'
      },
      {
        name: 'Partnerships',
        path: '/community/partnerships',
        description: 'Partner with Sheraa'
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
        description: 'Join our upcoming events'
      },
      {
        name: 'Past Events',
        path: '/events/past',
        description: 'Browse past event highlights'
      }
    ]
  },
  {
    name: 'Resources',
    path: '/resources',
    icon: FileText,
    subItems: [
      {
        name: 'Guides & Toolkits',
        path: '/resources/guides',
        description: 'Download practical resources'
      },
      {
        name: 'Articles & Insights',
        path: '/resources/articles',
        description: 'Read the latest insights'
      },
      {
        name: 'Advisory Services',
        path: '/resources/advisory',
        description: 'Get expert guidance'
      }
    ]
  },
  {
    name: 'SEF',
    path: '/events/sef',
    special: true,
    icon: Star
  }
];
