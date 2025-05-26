
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  Phone, 
  FileText
} from 'lucide-react';
import { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  { name: 'Home', path: '/', icon: Home },
  { 
    name: 'About', 
    path: '/about', 
    icon: Users,
    subItems: [
      { name: 'Our Story', path: '/about' },
      { name: 'Leadership', path: '/about/leadership' },
      { name: 'Board', path: '/about/board' }
    ]
  },
  { 
    name: 'Programs', 
    path: '/programs', 
    icon: BookOpen,
    subItems: [
      { name: 'Overview', path: '/programs' },
      { name: 'S3 Incubator', path: '/programs/s3-incubator' },
      { name: 'Startup Dojo', path: '/programs/startup-dojo' },
      { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' }
    ]
  },
  { 
    name: 'Community', 
    path: '/community', 
    icon: Users,
    subItems: [
      { name: 'Overview', path: '/community' },
      { name: 'Join', path: '/community/join' },
      { name: 'Partnerships', path: '/community/partnerships' }
    ]
  },
  { 
    name: 'Resources', 
    path: '/resources', 
    icon: FileText,
    subItems: [
      { name: 'Overview', path: '/resources' },
      { name: 'Guides & Toolkits', path: '/resources/guides' },
      { name: 'Advisory', path: '/resources/advisory' },
      { name: 'Articles', path: '/resources/articles' },
      { name: 'Impact Reports', path: '/resources/impact-reports' }
    ]
  },
  { 
    name: 'Events', 
    path: '/events', 
    icon: Calendar,
    subItems: [
      { name: 'Overview', path: '/events' },
      { name: 'Upcoming Events', path: '/events/upcoming' },
      { name: 'Past Events', path: '/events/past' }
    ]
  },
  { name: 'Contact', path: '/contact', icon: Phone }
];
