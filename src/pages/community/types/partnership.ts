
import { LucideIcon } from 'lucide-react';

export interface PartnershipType {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  examples: string;
}
