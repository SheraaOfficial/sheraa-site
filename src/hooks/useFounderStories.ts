import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import type { Tables } from '@/integrations/supabase/types';

export type FounderStory = Tables<'founder_stories'>;
export type StoryInteraction = Tables<'story_interactions'>;

export const useFounderStories = () => {
  const [stories, setStories] = useState<FounderStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStories();
    setupRealtimeSubscription();
  }, []);

  const fetchStories = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('founder_stories')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;

      setStories(data || []);
    } catch (err) {
      console.error('Error fetching founder stories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch stories');
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeSubscription = () => {
    const channel = supabase
      .channel('story-interactions-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'story_interactions'
        },
        (payload) => {
          const interaction = payload.new as StoryInteraction;
          
          setStories(prev => prev.map(story => {
            if (story.id === interaction.story_id) {
              if (interaction.interaction_type === 'like') {
                return { ...story, likes_count: story.likes_count + 1 };
              } else if (interaction.interaction_type === 'comment') {
                return { ...story, comments_count: story.comments_count + 1 };
              } else if (interaction.interaction_type === 'share') {
                return { ...story, shares_count: story.shares_count + 1 };
              }
            }
            return story;
          }));
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'story_interactions'
        },
        (payload) => {
          const interaction = payload.old as StoryInteraction;
          
          setStories(prev => prev.map(story => {
            if (story.id === interaction.story_id) {
              if (interaction.interaction_type === 'like') {
                return { ...story, likes_count: Math.max(0, story.likes_count - 1) };
              } else if (interaction.interaction_type === 'comment') {
                return { ...story, comments_count: Math.max(0, story.comments_count - 1) };
              } else if (interaction.interaction_type === 'share') {
                return { ...story, shares_count: Math.max(0, story.shares_count - 1) };
              }
            }
            return story;
          }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  return {
    stories,
    loading,
    error,
    refetch: fetchStories
  };
};

export const useStoryInteractions = () => {
  const { user } = useAuth();
  const [userInteractions, setUserInteractions] = useState<StoryInteraction[]>([]);

  useEffect(() => {
    if (!user) {
      setUserInteractions([]);
      return;
    }

    fetchUserInteractions();
  }, [user]);

  const fetchUserInteractions = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('story_interactions')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;

      setUserInteractions(data || []);
    } catch (err) {
      console.error('Error fetching user interactions:', err);
    }
  };

  const toggleLike = async (storyId: string) => {
    if (!user) throw new Error('User not authenticated');

    const existingLike = userInteractions.find(
      interaction => interaction.story_id === storyId && interaction.interaction_type === 'like'
    );

    try {
      if (existingLike) {
        // Remove like
        const { error } = await supabase
          .from('story_interactions')
          .delete()
          .eq('id', existingLike.id);

        if (error) throw error;

        setUserInteractions(prev => prev.filter(interaction => interaction.id !== existingLike.id));
        return false;
      } else {
        // Add like
        const { data, error } = await supabase
          .from('story_interactions')
          .insert({
            user_id: user.id,
            story_id: storyId,
            interaction_type: 'like'
          })
          .select()
          .single();

        if (error) throw error;

        setUserInteractions(prev => [...prev, data]);
        return true;
      }
    } catch (err) {
      console.error('Error toggling like:', err);
      throw err;
    }
  };

  const addComment = async (storyId: string, commentText: string) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error } = await supabase
        .from('story_interactions')
        .insert({
          user_id: user.id,
          story_id: storyId,
          interaction_type: 'comment',
          comment_text: commentText
        })
        .select()
        .single();

      if (error) throw error;

      setUserInteractions(prev => [...prev, data]);
      return data;
    } catch (err) {
      console.error('Error adding comment:', err);
      throw err;
    }
  };

  const shareStory = async (storyId: string) => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { data, error } = await supabase
        .from('story_interactions')
        .insert({
          user_id: user.id,
          story_id: storyId,
          interaction_type: 'share'
        })
        .select()
        .single();

      if (error) throw error;

      setUserInteractions(prev => [...prev, data]);
      return data;
    } catch (err) {
      console.error('Error sharing story:', err);
      throw err;
    }
  };

  const hasLiked = (storyId: string) => {
    return userInteractions.some(
      interaction => interaction.story_id === storyId && interaction.interaction_type === 'like'
    );
  };

  return {
    userInteractions,
    toggleLike,
    addComment,
    shareStory,
    hasLiked,
    refetch: fetchUserInteractions
  };
};