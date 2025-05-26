
import { Star } from 'lucide-react';

export const navigationItems = [
  {
    name: 'About',
    path: '/about',
    subItems: [
      { name: 'Our Story', path: '/about' },
      { name: 'Leadership', path: '/about/leadership' },
      { name: 'Board of Advisors', path: '/about/board' }
    ]
  },
  {
    name: 'Programs',
    path: '/programs',
    subItems: [
      { name: 'S3 Incubator', path: '/programs/s3-incubator' },
      { name: 'Start Young', path: '/programs/start-young' },
      { name: 'Startup Dojo', path: '/programs/startup-dojo' },
      { name: 'Access Sharjah Challenge', path: '/programs/access-sharjah-challenge' },
      { name: 'SME Support', path: '/programs/sme-support' }
    ]
  },
  {
    name: 'Community',
    path: '/community',
    subItems: [
      { name: 'Join Community', path: '/community/join' },
      { name: 'Partnerships', path: '/community/partnerships' },
      { name: 'Startups', path: '/community/startups' }
    ]
  },
  {
    name: 'Resources',
    path: '/resources',
    subItems: [
      { name: 'Guides & Toolkits', path: '/resources/guides' },
      { name: 'Advisory Services', path: '/resources/advisory' },
      { name: 'Articles & Insights', path: '/resources/articles' },
      { name: 'Impact Reports', path: '/resources/impact-reports' }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    subItems: [
      { name: 'Upcoming Events', path: '/events/upcoming' },
      { name: 'Past Events', path: '/events/past' },
      { name: 'SEF 2026', path: '/events/sef' }
    ]
  },
  {
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'SEF 2026',
    path: '/events/sef',
    icon: Star,
    special: true
  }
];
