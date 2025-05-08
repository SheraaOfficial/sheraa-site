
import React from 'react';
import { Link } from 'react-router-dom';
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
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useToast } from '@/hooks/use-toast';
import { User, Feed } from 'lucide-react';

const UserAvatar = () => {
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const { toast } = useToast();
  
  if (!loggedInUser) {
    return null;
  }
  
  const handleLogout = () => {
    setLoggedInUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const getInitials = () => {
    return `${loggedInUser.firstName?.[0] || ''}${loggedInUser.lastName?.[0] || ''}`;
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-8 w-8 border border-sheraa-primary/20 cursor-pointer">
          <AvatarImage 
            src={loggedInUser.profileImage} 
            alt={`${loggedInUser.firstName} ${loggedInUser.lastName}`} 
          />
          <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary">
            {getInitials()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{loggedInUser.firstName} {loggedInUser.lastName}</p>
            <p className="text-xs leading-none text-muted-foreground">{loggedInUser.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center cursor-pointer">
            <User className="w-4 h-4 mr-2" />
            <span>My Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/feed" className="flex items-center cursor-pointer">
            <Feed className="w-4 h-4 mr-2" />
            <span>My Feed</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
