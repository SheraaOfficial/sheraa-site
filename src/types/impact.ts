
export interface ImpactMetric {
  id: string;
  key: string;
  value: string;
  previousValue?: string;
  change?: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  trend: 'up' | 'down' | 'stable';
  category: 'startups' | 'financial' | 'employment' | 'education' | 'ecosystem';
}

export interface AnnualReport {
  id: string;
  year: string;
  title: string;
  description: string;
  pages: string;
  downloadCount: string;
  featured: boolean;
  highlights: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  fileUrl?: string;
  fileSize?: string;
}

export interface SuccessStory {
  id: string;
  companyName: string;
  founderName: string;
  founderImage?: string;
  sector: string;
  program: string;
  fundingRaised: string;
  jobsCreated: string;
  description: string;
  achievements: string[];
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  featured: boolean;
}

export interface ProgramImpact {
  programName: string;
  programId: string;
  startupsSupported: number;
  successRate: string;
  totalFunding: string;
  averageFunding: string;
  jobsCreated: number;
  color: string;
  description: string;
}

export interface ImpactTimelineEntry {
  year: string;
  quarter?: string;
  title: string;
  description: string;
  metrics: Pick<ImpactMetric, 'key' | 'value' | 'label'>[];
  milestones: string[];
}

export interface ImpactReportData {
  year: string;
  metrics: ImpactMetric[];
  reports: AnnualReport[];
  successStories: SuccessStory[];
  programImpacts: ProgramImpact[];
  timeline: ImpactTimelineEntry[];
  lastUpdated: string;
}
