
import { Home, Info, Rocket, Users, Calendar, Mail, Award, Users2, Building2, Crown } from 'lucide-react';
import type { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: Home
  },
  {
    name: 'About',
    path: '/about',
    icon: Info,
    subItems: [
      { name: 'Overview', path: '/about' },
      { name: 'Leadership Team', path: '/about/leadership' },
      { name: 'Our Hubs', path: '/about#hubs' }
    ]
  },
  {
    name: 'Programs',
    path: '/programs',
    icon: Rocket,
    subItems: [
      { name: 'All Programs', path: '/programs' },
      { name: 'Start Young', path: '/programs/start-young' },
      { name: 'S3 Incubator', path: '/programs/s3-incubator' },
      { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' },
      { name: 'Deal Dock', path: '/programs/deal-dock' },
      { name: 'SME Support', path: '/programs/sme-support' }
    ]
  },
  {
    name: 'Community',
    path: '/community',
    icon: Users,
    subItems: [
      { name: 'Overview', path: '/community' },
      { name: 'Membership', path: '/community/membership' },
      { name: 'Startups', path: '/community/startups' },
      { name: 'Partnerships', path: '/community/partnerships' }
    ]
  },
  {
    name: 'SEF 2026',
    path: '/events/sef',
    icon: Award,
    special: true
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Mail
  }
];
