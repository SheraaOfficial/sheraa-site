import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import type { Tables } from '@/integrations/supabase/types';

export type YoungEntrepreneurProfile = Tables<'young_entrepreneur_profiles'>;
export type IdeaValidatorSession = Tables<'idea_validator_sessions'>;
export type ChallengeParticipation = Tables<'challenge_participations'>;

export const useYoungEntrepreneurData = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<YoungEntrepreneurProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('young_entrepreneur_profiles')
        .select('*')
        .eq('user_id', user?.id)
        .maybeSingle();

      if (fetchError) throw fetchError;

      setProfile(data);
    } catch (err) {
      console.error('Error fetching young entrepreneur profile:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  const createProfile = async (profileData: {
    university?: string;
    study_field?: string;
    graduation_year?: number;
    entrepreneurship_experience?: string;
    interests?: string[];
    skills?: string[];
    goals?: string[];
  }) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error: createError } = await supabase
        .from('young_entrepreneur_profiles')
        .insert({
          user_id: user.id,
          ...profileData
        })
        .select()
        .single();

      if (createError) throw createError;

      setProfile(data);
      return data;
    } catch (err) {
      console.error('Error creating young entrepreneur profile:', err);
      throw err;
    }
  };

  const updateProfile = async (updates: Partial<Omit<YoungEntrepreneurProfile, 'id' | 'user_id' | 'created_at' | 'updated_at'>>) => {
    if (!user || !profile) throw new Error('User not authenticated or profile not found');

    try {
      const { data, error: updateError } = await supabase
        .from('young_entrepreneur_profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single();

      if (updateError) throw updateError;

      setProfile(data);
      return data;
    } catch (err) {
      console.error('Error updating young entrepreneur profile:', err);
      throw err;
    }
  };

  const updateProgress = async (progressKey: string, progressValue: any) => {
    if (!profile) return;

    const currentProgress = profile.progress_data as Record<string, any> || {};
    const newProgressData = {
      ...currentProgress,
      [progressKey]: progressValue,
      lastUpdated: new Date().toISOString()
    };

    await updateProfile({ progress_data: newProgressData });
  };

  return {
    profile,
    loading,
    error,
    createProfile,
    updateProfile,
    updateProgress,
    refetch: fetchProfile
  };
};

export const useIdeaValidatorSessions = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<IdeaValidatorSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setSessions([]);
      setLoading(false);
      return;
    }

    fetchSessions();
  }, [user]);

  const fetchSessions = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('idea_validator_sessions')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setSessions(data || []);
    } catch (err) {
      console.error('Error fetching idea validator sessions:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch sessions');
    } finally {
      setLoading(false);
    }
  };

  const createSession = async (sessionData: {
    idea_title: string;
    idea_description: string;
    target_market?: string;
    problem_statement?: string;
    solution_description?: string;
  }) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error: createError } = await supabase
        .from('idea_validator_sessions')
        .insert({
          user_id: user.id,
          ...sessionData
        })
        .select()
        .single();

      if (createError) throw createError;

      setSessions(prev => [data, ...prev]);
      return data;
    } catch (err) {
      console.error('Error creating idea validator session:', err);
      throw err;
    }
  };

  const updateSession = async (sessionId: string, updates: Partial<Omit<IdeaValidatorSession, 'id' | 'user_id' | 'created_at' | 'updated_at'>>) => {
    try {
      const { data, error: updateError } = await supabase
        .from('idea_validator_sessions')
        .update(updates)
        .eq('id', sessionId)
        .eq('user_id', user?.id)
        .select()
        .single();

      if (updateError) throw updateError;

      setSessions(prev => prev.map(session => 
        session.id === sessionId ? data : session
      ));
      return data;
    } catch (err) {
      console.error('Error updating idea validator session:', err);
      throw err;
    }
  };

  return {
    sessions,
    loading,
    error,
    createSession,
    updateSession,
    refetch: fetchSessions
  };
};

export const useChallengeParticipations = () => {
  const { user } = useAuth();
  const [participations, setParticipations] = useState<ChallengeParticipation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setParticipations([]);
      setLoading(false);
      return;
    }

    fetchParticipations();
    
    // Setup realtime subscription
    const channel = supabase
      .channel('challenge-participations-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'challenge_participations',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setParticipations(prev => [payload.new as ChallengeParticipation, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setParticipations(prev => prev.map(p => 
              p.id === payload.new.id ? payload.new as ChallengeParticipation : p
            ));
          } else if (payload.eventType === 'DELETE') {
            setParticipations(prev => prev.filter(p => p.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  const fetchParticipations = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('challenge_participations')
        .select('*')
        .eq('user_id', user?.id)
        .order('registered_at', { ascending: false });

      if (fetchError) throw fetchError;

      setParticipations(data || []);
    } catch (err) {
      console.error('Error fetching challenge participations:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch participations');
    } finally {
      setLoading(false);
    }
  };

  const joinChallenge = async (challengeData: {
    challenge_id: string;
    challenge_title: string;
    challenge_type: string;
  }) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error: createError } = await supabase
        .from('challenge_participations')
        .insert({
          user_id: user.id,
          ...challengeData,
          status: 'registered'
        })
        .select()
        .single();

      if (createError) throw createError;

      return data;
    } catch (err) {
      console.error('Error joining challenge:', err);
      throw err;
    }
  };

  const updateParticipation = async (participationId: string, updates: Partial<Omit<ChallengeParticipation, 'id' | 'user_id' | 'created_at' | 'updated_at'>>) => {
    try {
      const { data, error: updateError } = await supabase
        .from('challenge_participations')
        .update(updates)
        .eq('id', participationId)
        .eq('user_id', user?.id)
        .select()
        .single();

      if (updateError) throw updateError;

      return data;
    } catch (err) {
      console.error('Error updating challenge participation:', err);
      throw err;
    }
  };

  return {
    participations,
    loading,
    error,
    joinChallenge,
    updateParticipation,
    refetch: fetchParticipations
  };
};