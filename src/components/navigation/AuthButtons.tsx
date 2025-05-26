
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { User as SupabaseUser } from '@supabase/supabase-js';

export const AuthButtons: React.FC = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been logged out.",
      });
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">{user.email}</span>
        </div>
        <Button
          onClick={handleSignOut}
          variant="ghost"
          size="sm"
          className="text-gray-600 dark:text-gray-300 hover:text-sheraa-primary"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline ml-1">Sign Out</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 hover:text-sheraa-primary">
        <Link to="/auth">Sign In</Link>
      </Button>
      <Button asChild size="sm" className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white">
        <Link to="/auth">Sign Up</Link>
      </Button>
    </div>
  );
};
