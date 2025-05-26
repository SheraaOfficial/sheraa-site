
export interface NavigationItem {
  name: string;
  path: string;
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
