
import { LucideIcon } from 'lucide-react';

export interface NavigationSubItem {
  name: string;
  path: string;
}

export interface NavigationItem {
  name: string;
  path: string;
  icon: LucideIcon;
  subItems?: NavigationSubItem[];
  special?: boolean;
}
