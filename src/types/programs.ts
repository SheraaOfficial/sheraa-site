
import { LucideIcon } from 'lucide-react';

export interface ProgramStage {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface ProgramRequirement {
  category: 'eligibility' | 'documentation' | 'commitment';
  title: string;
  description: string;
  isMandatory: boolean;
}

export interface ProgramBenefit {
  category: 'funding' | 'mentorship' | 'network' | 'resources' | 'market-access';
  title: string;
  description: string;
  value?: string;
  icon: LucideIcon;
}

export interface ProgramTimeline {
  phase: string;
  duration: string;
  description: string;
  milestones: string[];
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  
  // Program Details
  duration: string;
  stage: ProgramStage;
  cohortSize?: number;
  applicationDeadline?: string;
  programStart?: string;
  
  // Program Structure
  timeline: ProgramTimeline[];
  benefits: ProgramBenefit[];
  requirements: ProgramRequirement[];
  
  // Eligibility
  targetAudience: string[];
  eligibilityCriteria: string[];
  idealCandidate: string;
  
  // Application
  applicationProcess: string[];
  selectionCriteria: string[];
  
  // Success Metrics
  stats: Array<{
    icon: LucideIcon;
    number: string;
    label: string;
    color: string;
  }>;
  
  // Content
  curriculum?: string[];
  mentors?: string[];
  partners?: string[];
  successStories?: string[];
  
  // Navigation
  href: string;
  applicationHref: string;
  gradient: string;
  
  // Status
  isActive: boolean;
  isApplicationOpen: boolean;
  isFeatured?: boolean;
}

export interface ProgramApplication {
  id: string;
  programId: string;
  applicantId: string;
  status: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'rejected' | 'waitlisted';
  submittedAt?: Date;
  reviewedAt?: Date;
  reviewNotes?: string;
  score?: number;
  formData: any;
}

export interface ProgramCohort {
  id: string;
  programId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  applicationDeadline: Date;
  maxParticipants: number;
  currentParticipants: number;
  status: 'planning' | 'recruiting' | 'active' | 'completed';
}

export interface ProgramParticipant {
  id: string;
  cohortId: string;
  userId: string;
  startupId?: string;
  joinedAt: Date;
  status: 'active' | 'graduated' | 'dropped-out';
  progress: {
    completedMilestones: string[];
    currentPhase: string;
    overallProgress: number;
  };
}
