
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "./ProfileCard";
import ProfileStats from "./ProfileStats";
import PostsSection from "./PostsSection";
import AboutSection from "./AboutSection";
import ActivitySection from "./ActivitySection";
import { useIsMobile } from "@/hooks/use-mobile";

const UserProfile = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const isMobile = useIsMobile();
  
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
    <div className="container mx-auto px-4 py-4 md:py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-1 space-y-4 md:space-y-6">
          <ProfileCard loggedInUser={loggedInUser} profile={profile} />
          
          <ProfileStats 
            posts={loggedInUser.posts?.length || 0}
            connections={loggedInUser.connections?.length || 0}
            projects={profile.projects?.length || 0}
          />
        </div>
        
        {/* Right Column - Content */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className={`grid grid-cols-3 ${isMobile ? 'mb-3' : 'mb-6'}`}>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="space-y-4 md:space-y-6">
              <PostsSection userId={loggedInUser.id} />
            </TabsContent>
            
            <TabsContent value="about">
              <AboutSection profile={profile} />
            </TabsContent>
            
            <TabsContent value="activity">
              <ActivitySection userId={loggedInUser.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
