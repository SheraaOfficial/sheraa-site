
import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  path: string;
  icon?: LucideIcon;
  special?: boolean;
  subItems?: {
    name: string;
    path: string;
    description?: string;
  }[];
}
