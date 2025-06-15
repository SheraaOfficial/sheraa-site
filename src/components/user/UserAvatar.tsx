
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { User, FileText, LogOut, LayoutDashboard } from 'lucide-react';

const UserAvatar = () => {
  const { user, profile, signOut, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  if (loading || !user) {
    return null;
  }
  
  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const getInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`;
    }
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-8 w-8 border border-sheraa-primary/20 cursor-pointer">
          <AvatarImage 
            src={profile?.avatar_url || ''} 
            alt={profile ? `${profile.first_name} ${profile.last_name}` : 'User'}
          />
          <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary">
            {getInitials()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{profile?.first_name} {profile?.last_name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="flex items-center cursor-pointer">
            <LayoutDashboard className="w-4 h-4 mr-2" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center cursor-pointer">
            <User className="w-4 h-4 mr-2" />
            <span>My Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/feed" className="flex items-center cursor-pointer">
            <FileText className="w-4 h-4 mr-2" />
            <span>My Feed</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500 flex items-center cursor-pointer">
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
