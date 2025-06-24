
export interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  sector: string;
  program?: string;
  stage?: string;
  website?: string;
  achievement?: string;
  impact?: string;
  stats?: string;
  badges?: string[];
  tags?: string[];
  foundedYear?: number;
  technologies?: string[];
  founderStory?: string;
  achievements?: string[];
  metrics?: {
    revenue?: string;
    funding?: string;
    employees?: number;
    customers?: string;
    growth?: string;
  };
}
