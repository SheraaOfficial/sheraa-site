
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
  badges?: string[]; // Added badges array for SHERAA ALUMNI, COMMUNITY MEMBER, SEF, SHERAA BACKED
}
