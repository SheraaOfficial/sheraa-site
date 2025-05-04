
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Edit, 
  MapPin, 
  Link as LinkIcon, 
  Briefcase, 
  Building2, 
  Network, 
  MessageSquare,
  Share,
  Bookmark,
  Globe
} from "lucide-react";
import PostForm from "../posts/PostForm";
import PostsList from "../posts/PostsList";

const UserProfile = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  
  if (!loggedInUser) {
    navigate("/login");
    return null;
  }
  
  const profile = loggedInUser.profile || {};
  
  if (!loggedInUser.profileComplete) {
    navigate("/profile-setup");
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-1 space-y-6">
          {/* Profile Card */}
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
          
          {/* Stats Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Profile Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-sheraa-primary">
                    {loggedInUser.posts?.length || 0}
                  </p>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-sheraa-primary">
                    {loggedInUser.connections?.length || 0}
                  </p>
                  <p className="text-sm text-gray-600">Connections</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-sheraa-primary">
                    {profile.projects?.length || 0}
                  </p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-sheraa-primary">
                    {Math.floor(Math.random() * 100) + 1}
                  </p>
                  <p className="text-sm text-gray-600">Profile Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Content */}
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <PostForm />
                </CardContent>
              </Card>
              
              <PostsList userId={loggedInUser.id} />
            </TabsContent>
            
            <TabsContent value="about">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">About</h3>
                    <p className="text-gray-600 whitespace-pre-line">{profile.about}</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium">Experience</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                    
                    {profile.experience?.length > 0 ? (
                      <div className="space-y-4">
                        {profile.experience.map((exp: any, index: number) => (
                          <div key={index} className="border-b pb-4 last:border-none">
                            <div className="flex gap-4">
                              <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-gray-500" />
                              </div>
                              <div>
                                <h4 className="font-medium">{exp.position}</h4>
                                <p className="text-sm text-gray-600">{exp.company}</p>
                                <p className="text-sm text-gray-500">{exp.duration}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No experience added yet</p>
                    )}
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium">Education</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                    
                    {profile.education?.length > 0 ? (
                      <div className="space-y-4">
                        {/* Education items would go here */}
                        <p className="text-sm text-gray-500">No education added yet</p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No education added yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <p className="text-gray-500">No recent activity</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
