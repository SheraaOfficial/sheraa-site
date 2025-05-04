
import React from "react";
import { Link } from "react-router-dom";
import { 
  Edit, 
  MapPin, 
  Link as LinkIcon, 
  Briefcase 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  loggedInUser: any;
  profile: any;
}

const ProfileCard = ({ loggedInUser, profile }: ProfileCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-sheraa-primary to-sheraa-teal"></div>
      <CardContent className="pt-0 relative">
        <div className="flex justify-between">
          <div className="h-24 w-24 rounded-full border-4 border-white bg-white -mt-12 overflow-hidden flex items-center justify-center text-3xl font-bold text-sheraa-primary">
            {loggedInUser.firstName[0]}{loggedInUser.lastName[0]}
          </div>
          <Button size="sm" variant="ghost" className="mt-2" asChild>
            <Link to="/edit-profile">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Link>
          </Button>
        </div>
        
        <div className="mt-4 space-y-4">
          <div>
            <h2 className="text-xl font-bold">
              {loggedInUser.firstName} {loggedInUser.lastName}
            </h2>
            <p className="text-sheraa-primary font-medium">{profile.headline}</p>
          </div>
          
          <div className="text-sm space-y-2">
            {profile.currentPosition && profile.currentCompany && (
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-gray-400" />
                <span>{profile.currentPosition} at {profile.currentCompany}</span>
              </div>
            )}
            
            {profile.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{profile.location}</span>
              </div>
            )}
            
            {profile.website && (
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-gray-400" />
                <a 
                  href={profile.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sheraa-primary hover:underline"
                >
                  {profile.website.replace(/https?:\/\/(www\.)?/, '')}
                </a>
              </div>
            )}
          </div>
          
          <div className="pt-4">
            <h3 className="text-sm font-medium mb-2">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills?.map((skill: string, index: number) => (
                <span 
                  key={index}
                  className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
