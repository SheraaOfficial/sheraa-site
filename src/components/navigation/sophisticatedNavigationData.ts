
import { Home, Users, BookOpen, Calendar, Phone, Star } from 'lucide-react';

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
        description: 'Learn about our mission'
      },
      {
        name: 'Leadership',
        path: '/about/leadership',
        description: 'Meet our executive team'
      },
      {
        name: 'Board',
        path: '/about/board',
        description: 'Our advisory board'
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
        description: 'Our flagship program'
      },
      {
        name: 'Startup Dojo',
        path: '/programs/startup-dojo',
        description: 'Youth entrepreneurship'
      },
      {
        name: 'Access Challenge',
        path: '/programs/access-sharjah-challenge',
        description: 'Global competition'
      }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
    subItems: [
      {
        name: 'Upcoming',
        path: '/events/upcoming',
        description: 'Join our next events'
      },
      {
        name: 'Past Events',
        path: '/events/past',
        description: 'Event highlights'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Phone
  },
  {
    name: 'SEF',
    path: '/events/sef-landing',
    icon: Star,
    special: true
  }
];
