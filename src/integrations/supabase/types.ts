export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      application_steps: {
        Row: {
          application_id: string
          completed: boolean | null
          created_at: string | null
          data: Json | null
          id: string
          step_name: string
          step_number: number
          updated_at: string | null
        }
        Insert: {
          application_id: string
          completed?: boolean | null
          created_at?: string | null
          data?: Json | null
          id?: string
          step_name: string
          step_number: number
          updated_at?: string | null
        }
        Update: {
          application_id?: string
          completed?: boolean | null
          created_at?: string | null
          data?: Json | null
          id?: string
          step_name?: string
          step_number?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_steps_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          created_at: string
          form_data: Json | null
          id: string
          program_name: string
          status: Database["public"]["Enums"]["application_status"]
          submitted_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          form_data?: Json | null
          id?: string
          program_name: string
          status?: Database["public"]["Enums"]["application_status"]
          submitted_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          form_data?: Json | null
          id?: string
          program_name?: string
          status?: Database["public"]["Enums"]["application_status"]
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      challenge_participations: {
        Row: {
          challenge_id: string
          challenge_title: string
          challenge_type: string
          completed_at: string | null
          created_at: string
          id: string
          prizes: string[] | null
          rank: number | null
          registered_at: string
          score: number | null
          status: string
          submission_data: Json | null
          submitted_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          challenge_id: string
          challenge_title: string
          challenge_type: string
          completed_at?: string | null
          created_at?: string
          id?: string
          prizes?: string[] | null
          rank?: number | null
          registered_at?: string
          score?: number | null
          status?: string
          submission_data?: Json | null
          submitted_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          challenge_id?: string
          challenge_title?: string
          challenge_type?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          prizes?: string[] | null
          rank?: number | null
          registered_at?: string
          score?: number | null
          status?: string
          submission_data?: Json | null
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "challenge_participations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      founder_stories: {
        Row: {
          achievements: string[] | null
          age: number
          category: string
          comments_count: number | null
          company: string
          created_at: string
          description: string
          hashtags: string[] | null
          id: string
          is_featured: boolean | null
          is_published: boolean | null
          likes_count: number | null
          name: string
          published_at: string | null
          shares_count: number | null
          stats: Json | null
          story_content: string
          thumbnail_url: string | null
          updated_at: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          achievements?: string[] | null
          age: number
          category: string
          comments_count?: number | null
          company: string
          created_at?: string
          description: string
          hashtags?: string[] | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          likes_count?: number | null
          name: string
          published_at?: string | null
          shares_count?: number | null
          stats?: Json | null
          story_content: string
          thumbnail_url?: string | null
          updated_at?: string
          user_id: string
          video_url?: string | null
        }
        Update: {
          achievements?: string[] | null
          age?: number
          category?: string
          comments_count?: number | null
          company?: string
          created_at?: string
          description?: string
          hashtags?: string[] | null
          id?: string
          is_featured?: boolean | null
          is_published?: boolean | null
          likes_count?: number | null
          name?: string
          published_at?: string | null
          shares_count?: number | null
          stats?: Json | null
          story_content?: string
          thumbnail_url?: string | null
          updated_at?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "founder_stories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      idea_validator_sessions: {
        Row: {
          completed_at: string | null
          created_at: string
          feedback: string | null
          id: string
          idea_description: string
          idea_title: string
          problem_statement: string | null
          responses: Json | null
          score: number | null
          solution_description: string | null
          target_market: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          feedback?: string | null
          id?: string
          idea_description: string
          idea_title: string
          problem_statement?: string | null
          responses?: Json | null
          score?: number | null
          solution_description?: string | null
          target_market?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          feedback?: string | null
          id?: string
          idea_description?: string
          idea_title?: string
          problem_statement?: string | null
          responses?: Json | null
          score?: number | null
          solution_description?: string | null
          target_market?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "idea_validator_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_text: string | null
          action_url: string | null
          category: string | null
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          action_text?: string | null
          action_url?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          action_text?: string | null
          action_url?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      peer_matches: {
        Row: {
          common_interests: string[] | null
          common_skills: string[] | null
          compatibility_score: number | null
          conversation_started: boolean | null
          created_at: string
          id: string
          match_reason: string | null
          match_type: string
          matched_user_id: string
          requester_id: string
          status: string
          updated_at: string
        }
        Insert: {
          common_interests?: string[] | null
          common_skills?: string[] | null
          compatibility_score?: number | null
          conversation_started?: boolean | null
          created_at?: string
          id?: string
          match_reason?: string | null
          match_type: string
          matched_user_id: string
          requester_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          common_interests?: string[] | null
          common_skills?: string[] | null
          compatibility_score?: number | null
          conversation_started?: boolean | null
          created_at?: string
          id?: string
          match_reason?: string | null
          match_type?: string
          matched_user_id?: string
          requester_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "peer_matches_matched_user_id_fkey"
            columns: ["matched_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "peer_matches_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          first_name: string | null
          headline: string | null
          id: string
          industry: string | null
          last_name: string | null
          linkedin_url: string | null
          location: string | null
          portfolio_data: Json | null
          profile_completion_score: number | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          first_name?: string | null
          headline?: string | null
          id: string
          industry?: string | null
          last_name?: string | null
          linkedin_url?: string | null
          location?: string | null
          portfolio_data?: Json | null
          profile_completion_score?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          first_name?: string | null
          headline?: string | null
          id?: string
          industry?: string | null
          last_name?: string | null
          linkedin_url?: string | null
          location?: string | null
          portfolio_data?: Json | null
          profile_completion_score?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      story_interactions: {
        Row: {
          comment_text: string | null
          created_at: string
          id: string
          interaction_type: string
          story_id: string
          user_id: string
        }
        Insert: {
          comment_text?: string | null
          created_at?: string
          id?: string
          interaction_type: string
          story_id: string
          user_id: string
        }
        Update: {
          comment_text?: string | null
          created_at?: string
          id?: string
          interaction_type?: string
          story_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_interactions_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "founder_stories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "story_interactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      young_entrepreneur_profiles: {
        Row: {
          created_at: string
          entrepreneurship_experience: string | null
          goals: string[] | null
          graduation_year: number | null
          id: string
          interests: string[] | null
          progress_data: Json | null
          skills: string[] | null
          study_field: string | null
          university: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entrepreneurship_experience?: string | null
          goals?: string[] | null
          graduation_year?: number | null
          id?: string
          interests?: string[] | null
          progress_data?: Json | null
          skills?: string[] | null
          study_field?: string | null
          university?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entrepreneurship_experience?: string | null
          goals?: string[] | null
          graduation_year?: number | null
          id?: string
          interests?: string[] | null
          progress_data?: Json | null
          skills?: string[] | null
          study_field?: string | null
          university?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "young_entrepreneur_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_profile_completion: {
        Args: { profile_id: string }
        Returns: number
      }
    }
    Enums: {
      application_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "accepted"
        | "rejected"
        | "withdrawn"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: [
        "draft",
        "submitted",
        "under_review",
        "accepted",
        "rejected",
        "withdrawn",
      ],
    },
  },
} as const
