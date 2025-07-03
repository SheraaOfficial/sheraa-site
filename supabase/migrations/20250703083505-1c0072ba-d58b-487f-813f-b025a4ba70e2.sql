-- Create young entrepreneur specific tables for v3/young features

-- Extended profiles for young entrepreneurs
CREATE TABLE public.young_entrepreneur_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  university TEXT,
  study_field TEXT,
  graduation_year INTEGER,
  entrepreneurship_experience TEXT CHECK (entrepreneurship_experience IN ('none', 'beginner', 'intermediate', 'advanced')),
  interests TEXT[], -- array of interests like 'edtech', 'sustainability', etc.
  skills TEXT[], -- array of skills
  goals TEXT[], -- array of goals
  progress_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Idea validator sessions tracking
CREATE TABLE public.idea_validator_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  idea_title TEXT NOT NULL,
  idea_description TEXT NOT NULL,
  target_market TEXT,
  problem_statement TEXT,
  solution_description TEXT,
  responses JSONB DEFAULT '{}'::jsonb, -- store all Q&A responses
  score INTEGER DEFAULT 0,
  feedback TEXT,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Challenge participation tracking
CREATE TABLE public.challenge_participations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  challenge_id TEXT NOT NULL, -- internal challenge identifier
  challenge_title TEXT NOT NULL,
  challenge_type TEXT NOT NULL CHECK (challenge_type IN ('weekly', 'monthly', 'hackathon', 'pitch', 'networking')),
  submission_data JSONB DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'registered' CHECK (status IN ('registered', 'in_progress', 'submitted', 'completed', 'withdrawn')),
  score INTEGER DEFAULT 0,
  rank INTEGER,
  prizes TEXT[],
  registered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  submitted_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Peer matching system
CREATE TABLE public.peer_matches (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  requester_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  matched_user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  match_type TEXT NOT NULL CHECK (match_type IN ('co_founder', 'mentor', 'collaborator', 'study_buddy')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'blocked')),
  compatibility_score DECIMAL(3,2) DEFAULT 0.0,
  common_interests TEXT[],
  common_skills TEXT[],
  match_reason TEXT,
  conversation_started BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(requester_id, matched_user_id, match_type)
);

-- Founder stories for the spotlight feature
CREATE TABLE public.founder_stories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  company TEXT NOT NULL,
  description TEXT NOT NULL,
  story_content TEXT NOT NULL,
  video_url TEXT,
  thumbnail_url TEXT,
  stats JSONB DEFAULT '{}'::jsonb, -- revenue, users, team size, funding, etc.
  achievements TEXT[],
  category TEXT NOT NULL,
  hashtags TEXT[],
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  shares_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Story interactions (likes, comments, shares)
CREATE TABLE public.story_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES public.founder_stories(id) ON DELETE CASCADE,
  interaction_type TEXT NOT NULL CHECK (interaction_type IN ('like', 'comment', 'share')),
  comment_text TEXT, -- only for comment interactions
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, story_id, interaction_type)
);

-- Enable Row Level Security
ALTER TABLE public.young_entrepreneur_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.idea_validator_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_participations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.peer_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.founder_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.story_interactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for young_entrepreneur_profiles
CREATE POLICY "Users can view all young entrepreneur profiles" ON public.young_entrepreneur_profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can create their own young entrepreneur profile" ON public.young_entrepreneur_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own young entrepreneur profile" ON public.young_entrepreneur_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for idea_validator_sessions
CREATE POLICY "Users can view their own idea sessions" ON public.idea_validator_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own idea sessions" ON public.idea_validator_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own idea sessions" ON public.idea_validator_sessions
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for challenge_participations
CREATE POLICY "Users can view their own challenge participations" ON public.challenge_participations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own challenge participations" ON public.challenge_participations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own challenge participations" ON public.challenge_participations
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for peer_matches
CREATE POLICY "Users can view their own peer matches" ON public.peer_matches
  FOR SELECT USING (auth.uid() = requester_id OR auth.uid() = matched_user_id);

CREATE POLICY "Users can create peer match requests" ON public.peer_matches
  FOR INSERT WITH CHECK (auth.uid() = requester_id);

CREATE POLICY "Users can update peer matches they're involved in" ON public.peer_matches
  FOR UPDATE USING (auth.uid() = requester_id OR auth.uid() = matched_user_id);

-- RLS Policies for founder_stories
CREATE POLICY "Anyone can view published founder stories" ON public.founder_stories
  FOR SELECT USING (is_published = true);

CREATE POLICY "Users can view their own founder stories" ON public.founder_stories
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own founder stories" ON public.founder_stories
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own founder stories" ON public.founder_stories
  FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for story_interactions
CREATE POLICY "Users can view story interactions" ON public.story_interactions
  FOR SELECT USING (true);

CREATE POLICY "Users can create their own story interactions" ON public.story_interactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own story interactions" ON public.story_interactions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own story interactions" ON public.story_interactions
  FOR DELETE USING (auth.uid() = user_id);

-- Create updated_at triggers
CREATE TRIGGER update_young_entrepreneur_profiles_updated_at
  BEFORE UPDATE ON public.young_entrepreneur_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_idea_validator_sessions_updated_at
  BEFORE UPDATE ON public.idea_validator_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_challenge_participations_updated_at
  BEFORE UPDATE ON public.challenge_participations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_peer_matches_updated_at
  BEFORE UPDATE ON public.peer_matches
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_founder_stories_updated_at
  BEFORE UPDATE ON public.founder_stories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for tables that need it
ALTER TABLE public.challenge_participations REPLICA IDENTITY FULL;
ALTER TABLE public.peer_matches REPLICA IDENTITY FULL;
ALTER TABLE public.story_interactions REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.challenge_participations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.peer_matches;
ALTER PUBLICATION supabase_realtime ADD TABLE public.story_interactions;