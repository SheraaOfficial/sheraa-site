import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import type { Tables } from '@/integrations/supabase/types';

export type PeerMatch = Tables<'peer_matches'>;

export interface PeerMatchWithProfile extends PeerMatch {
  requester_profile?: {
    first_name: string;
    last_name: string;
    avatar_url?: string;
  };
  matched_user_profile?: {
    first_name: string;
    last_name: string;
    avatar_url?: string;
  };
}

export const usePeerMatching = () => {
  const { user } = useAuth();
  const [matches, setMatches] = useState<PeerMatchWithProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setMatches([]);
      setLoading(false);
      return;
    }

    fetchMatches();
    setupRealtimeSubscription();
  }, [user]);

  const fetchMatches = async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('peer_matches')
        .select(`
          *,
          requester_profile:profiles!peer_matches_requester_id_fkey(
            first_name,
            last_name,
            avatar_url
          ),
          matched_user_profile:profiles!peer_matches_matched_user_id_fkey(
            first_name,
            last_name,
            avatar_url
          )
        `)
        .or(`requester_id.eq.${user.id},matched_user_id.eq.${user.id}`)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setMatches(data || []);
    } catch (err) {
      console.error('Error fetching peer matches:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch matches');
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeSubscription = () => {
    if (!user) return;

    const channel = supabase
      .channel('peer-matches-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'peer_matches',
          filter: `or(requester_id.eq.${user.id},matched_user_id.eq.${user.id})`
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            // Re-fetch to get profile data
            fetchMatches();
          } else if (payload.eventType === 'UPDATE') {
            setMatches(prev => prev.map(match => 
              match.id === payload.new.id ? { ...match, ...payload.new } : match
            ));
          } else if (payload.eventType === 'DELETE') {
            setMatches(prev => prev.filter(match => match.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const createMatchRequest = async (matchData: {
    matched_user_id: string;
    match_type: string;
    match_reason?: string;
  }) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error } = await supabase
        .from('peer_matches')
        .insert({
          requester_id: user.id,
          ...matchData
        })
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (err) {
      console.error('Error creating match request:', err);
      throw err;
    }
  };

  const respondToMatch = async (matchId: string, status: 'accepted' | 'declined') => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error } = await supabase
        .from('peer_matches')
        .update({ 
          status,
          conversation_started: status === 'accepted'
        })
        .eq('id', matchId)
        .eq('matched_user_id', user.id) // Only the matched user can respond
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (err) {
      console.error('Error responding to match:', err);
      throw err;
    }
  };

  const findPotentialMatches = async (filters: {
    match_type: string;
    interests?: string[];
    skills?: string[];
    university?: string;
  }) => {
    if (!user) throw new Error('User not authenticated');

    try {
      // Get users with similar interests/skills from young entrepreneur profiles
      let query = supabase
        .from('young_entrepreneur_profiles')
        .select(`
          *,
          profiles:user_id(
            id,
            first_name,
            last_name,
            avatar_url
          )
        `)
        .neq('user_id', user.id); // Exclude current user

      // Apply filters
      if (filters.university) {
        query = query.eq('university', filters.university);
      }

      if (filters.interests && filters.interests.length > 0) {
        query = query.overlaps('interests', filters.interests);
      }

      if (filters.skills && filters.skills.length > 0) {
        query = query.overlaps('skills', filters.skills);
      }

      const { data, error } = await query.limit(20);

      if (error) throw error;

      // Filter out users we already have matches with
      const existingMatchUserIds = matches.map(match => 
        match.requester_id === user.id ? match.matched_user_id : match.requester_id
      );

      const potentialMatches = (data || []).filter(profile => 
        !existingMatchUserIds.includes(profile.user_id)
      );

      return potentialMatches;
    } catch (err) {
      console.error('Error finding potential matches:', err);
      throw err;
    }
  };

  const calculateCompatibility = (
    userProfile: any,
    potentialMatch: any
  ): { score: number; commonInterests: string[]; commonSkills: string[] } => {
    const userInterests = userProfile?.interests || [];
    const userSkills = userProfile?.skills || [];
    const matchInterests = potentialMatch?.interests || [];
    const matchSkills = potentialMatch?.skills || [];

    const commonInterests = userInterests.filter((interest: string) => 
      matchInterests.includes(interest)
    );
    
    const commonSkills = userSkills.filter((skill: string) => 
      matchSkills.includes(skill)
    );

    // Calculate compatibility score (0-1)
    const interestWeight = 0.6;
    const skillWeight = 0.4;
    
    const interestScore = commonInterests.length > 0 ? 
      (commonInterests.length / Math.max(userInterests.length, matchInterests.length)) : 0;
    
    const skillScore = commonSkills.length > 0 ? 
      (commonSkills.length / Math.max(userSkills.length, matchSkills.length)) : 0;

    const score = Math.min(1, (interestScore * interestWeight + skillScore * skillWeight));

    return { score, commonInterests, commonSkills };
  };

  return {
    matches,
    loading,
    error,
    createMatchRequest,
    respondToMatch,
    findPotentialMatches,
    calculateCompatibility,
    refetch: fetchMatches
  };
};