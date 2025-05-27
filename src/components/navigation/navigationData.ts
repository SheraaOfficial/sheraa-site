
import { Home, BookOpen, Users, Calendar, Info, Mail, Rocket } from 'lucide-react';
import { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    name: 'Discover',
    path: '/programs',
    icon: Rocket,
    subItems: [
      { name: 'Programs Overview', path: '/programs', description: 'Explore all our programs' },
      { name: 'Start Young', path: '/programs/start-young', description: 'Youth entrepreneurship programs' },
      { name: 'S3 Incubator', path: '/programs/s3', description: 'Flagship incubator program' },
      { name: 'Access Sharjah Challenge', path: '/programs/asc', description: 'Global startup competition' },
      { name: 'SME Support', path: '/programs/sme', description: 'Support for established businesses' },
    ]
  },
  {
    name: 'Community',
    path: '/community',
    icon: Users,
    subItems: [
      { name: 'Join Community', path: '/community/join', description: 'Become a member' },
      { name: 'Our Startups', path: '/community/startups', description: 'Portfolio showcase' },
      { name: 'Partnerships', path: '/community/partnerships', description: 'Partner with us' },
    ]
  },
  {
    name: 'Resources',
    path: '/resources',
    icon: BookOpen,
    subItems: [
      { name: 'Guides & Toolkits', path: '/resources/guides', description: 'Practical resources' },
      { name: 'Advisory Services', path: '/resources/advisory', description: 'Expert guidance' },
      { name: 'Articles & Insights', path: '/resources/articles', description: 'Latest insights' },
    ]
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
    subItems: [
      { name: 'Upcoming Events', path: '/events/upcoming', description: 'Join our events' },
      { name: 'SEF', path: '/events/sef', description: 'Entrepreneurship festival' },
      { name: 'Workshops', path: '/events/workshops', description: 'Skill-building sessions' },
    ]
  },
  {
    name: 'About',
    path: '/about',
    icon: Info,
    subItems: [
      { name: 'Our Story', path: '/about/story', description: 'Learn about Sheraa' },
      { name: 'Team', path: '/about/team', description: 'Meet our team' },
      { name: 'Impact', path: '/about/impact', description: 'Our achievements' },
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Mail
  },
  {
    name: 'SEF',
    path: '/events/sef',
    icon: Calendar,
    special: true
  }
];
