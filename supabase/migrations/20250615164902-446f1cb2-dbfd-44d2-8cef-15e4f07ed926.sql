
-- Create application_steps table to track multi-step form progress
CREATE TABLE public.application_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  step_number INTEGER NOT NULL,
  step_name TEXT NOT NULL,
  data JSONB DEFAULT '{}',
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'info', -- 'info', 'success', 'warning', 'error'
  category TEXT DEFAULT 'general', -- 'application', 'event', 'system', 'general'
  read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  action_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Extend profiles table with additional fields
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS industry TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS location TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS website TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS linkedin_url TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS portfolio_data JSONB DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS profile_completion_score INTEGER DEFAULT 0;

-- Add RLS policies for application_steps
ALTER TABLE public.application_steps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own application steps"
  ON public.application_steps FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.applications 
      WHERE applications.id = application_steps.application_id 
      AND applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create their own application steps"
  ON public.application_steps FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.applications 
      WHERE applications.id = application_steps.application_id 
      AND applications.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their own application steps"
  ON public.application_steps FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.applications 
      WHERE applications.id = application_steps.application_id 
      AND applications.user_id = auth.uid()
    )
  );

-- Add RLS policies for notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own notifications"
  ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications"
  ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);

-- Add indexes for performance
CREATE INDEX idx_application_steps_application_id ON public.application_steps(application_id);
CREATE INDEX idx_application_steps_step_number ON public.application_steps(step_number);
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_read ON public.notifications(read);
CREATE INDEX idx_notifications_created_at ON public.notifications(created_at DESC);

-- Trigger to update updated_at on application_steps
CREATE TRIGGER update_application_steps_updated_at
  BEFORE UPDATE ON public.application_steps
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to calculate profile completion score
CREATE OR REPLACE FUNCTION public.calculate_profile_completion(profile_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  score INTEGER := 0;
  profile_record RECORD;
BEGIN
  SELECT * INTO profile_record FROM public.profiles WHERE id = profile_id;
  
  IF profile_record.first_name IS NOT NULL AND LENGTH(profile_record.first_name) > 0 THEN
    score := score + 15;
  END IF;
  
  IF profile_record.last_name IS NOT NULL AND LENGTH(profile_record.last_name) > 0 THEN
    score := score + 15;
  END IF;
  
  IF profile_record.avatar_url IS NOT NULL AND LENGTH(profile_record.avatar_url) > 0 THEN
    score := score + 10;
  END IF;
  
  IF profile_record.headline IS NOT NULL AND LENGTH(profile_record.headline) > 0 THEN
    score := score + 10;
  END IF;
  
  IF profile_record.bio IS NOT NULL AND LENGTH(profile_record.bio) > 0 THEN
    score := score + 15;
  END IF;
  
  IF profile_record.industry IS NOT NULL AND LENGTH(profile_record.industry) > 0 THEN
    score := score + 10;
  END IF;
  
  IF profile_record.company IS NOT NULL AND LENGTH(profile_record.company) > 0 THEN
    score := score + 10;
  END IF;
  
  IF profile_record.location IS NOT NULL AND LENGTH(profile_record.location) > 0 THEN
    score := score + 5;
  END IF;
  
  IF profile_record.linkedin_url IS NOT NULL AND LENGTH(profile_record.linkedin_url) > 0 THEN
    score := score + 5;
  END IF;
  
  IF profile_record.website IS NOT NULL AND LENGTH(profile_record.website) > 0 THEN
    score := score + 5;
  END IF;
  
  RETURN score;
END;
$$;

-- Trigger to automatically update profile completion score
CREATE OR REPLACE FUNCTION public.update_profile_completion()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  NEW.profile_completion_score := public.calculate_profile_completion(NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profile_completion_trigger
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_profile_completion();
