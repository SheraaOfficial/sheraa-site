
/**
 * API Types for Laravel Backend Integration
 */

// Base API Response
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
  meta?: {
    current_page?: number;
    from?: number;
    last_page?: number;
    path?: string;
    per_page?: number;
    to?: number;
    total?: number;
  };
  links?: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  };
}

// Authentication
export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  user: UserData;
  token?: string;
  abilities?: string[];
}

// Programs
export interface ProgramData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  long_description: string;
  icon: string;
  duration: string;
  stage: string;
  application_deadline?: string;
  program_start?: string;
  is_active: boolean;
  is_application_open: boolean;
}

// Applications
export interface ApplicationData {
  id: number;
  program_id: number;
  user_id: number;
  status: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'rejected' | 'waitlisted';
  submitted_at?: string;
  form_data: Record<string, any>;
  program?: ProgramData;
}

// Contact
export interface ContactSubmissionData {
  id: number;
  full_name: string;
  email: string;
  inquiry_type: string;
  subject: string;
  message: string;
  created_at: string;
}
