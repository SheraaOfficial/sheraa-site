
import { Home, Info, Rocket, Users, Calendar, Mail, Award, Users2, Building2, Crown, Palette, BarChart3, BookOpen, Mic, Shield, FileText, Briefcase, Target, Search, Zap, Coffee } from 'lucide-react';
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
      { name: 'Board of Advisors', path: '/about/board' },
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
      { name: 'Startup Dojo', path: '/programs/startup-dojo' },
      { name: 'Startup Dojo Plus', path: '/programs/startup-dojo-plus' },
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
      { name: 'Partnerships', path: '/community/partnerships' },
      { name: 'Feed', path: '/feed' }
    ]
  },
  {
    name: 'Events',
    path: '/events',
    icon: Calendar,
    subItems: [
      { name: 'All Events', path: '/events' },
      { name: 'Upcoming Events', path: '/events/upcoming' },
      { name: 'Past Events', path: '/events/past' },
      { name: 'SEF 2026', path: '/events/sef' }
    ]
  },
  {
    name: 'Insights',
    path: '/insights',
    icon: Search,
    subItems: [
      { name: 'Overview', path: '/insights' },
      { name: 'Guides & Toolkits', path: '/insights/guides' },
      { name: 'Advisory Services', path: '/insights/advisory' },
      { name: 'Articles & Insights', path: '/insights/articles' },
      { name: 'Impact Reports', path: '/insights/impact-reports' }
    ]
  },
  {
    name: 'Resources',
    path: '/reports',
    icon: FileText,
    subItems: [
      { name: 'Reports', path: '/reports' },
      { name: 'Blog', path: '/blog' },
      { name: 'Podcast', path: '/podcast' },
      { name: 'Impact Report', path: '/impact-report' }
    ]
  },
  {
    name: 'More',
    path: '#',
    icon: Target,
    subItems: [
      { name: 'Careers', path: '/careers' },
      { name: 'Eligibility Checker', path: '/eligibility' },
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'Profile', path: '/profile' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Use', path: '/terms-of-use' },
      { name: 'Themes', path: '/themes/preview' }
    ]
  },
  {
    name: 'Sharjah Perfume',
    path: '/perfume',
    icon: Palette,
    subItems: [
      { name: 'Overview', path: '/perfume' },
      { name: 'About', path: '/perfume/about' },
      { name: 'Buy Now', path: '/perfume/buy' },
      { name: 'Gallery', path: '/perfume/gallery' },
      { name: 'Pricing', path: '/perfume/pricing' }
    ]
  },
  {
    name: 'SEF 2026',
    path: '/events/sef',
    icon: Award,
    special: true
  }
];
