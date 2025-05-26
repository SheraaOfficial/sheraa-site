
import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  path: string;
  icon?: LucideIcon;
  subItems?: {
    name: string;
    path: string;
    description?: string;
  }[];
  special?: boolean;
}

export interface Language {
  code: 'en' | 'ar';
  name: string;
  flag: string;
}
