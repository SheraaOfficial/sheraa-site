
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Globe, 
  Building2, 
  Calendar,
  Award,
  Users,
  MessageSquare,
  TrendingUp,
  Settings,
  Edit,
  ExternalLink,
  Star,
  Briefcase,
  GraduationCap,
  User
} from "lucide-react";

// Import existing components
import PostsSection from "./PostsSection";
import AboutSection from "./AboutSection";
import ActivitySection from "./ActivitySection";

const EnhancedUserProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!loggedInUser) {
      toast({
        title: "Not logged in",
        description: "Please log in to view your profile",
      });
      navigate("/auth");
      return;
    }
    
    if (!loggedInUser.profileComplete) {
      toast({
        title: "Profile incomplete",
        description: "Please complete your profile",
      });
      navigate("/profile-setup");
      return;
    }
  }, [loggedInUser, navigate, toast]);
  
  if (!loggedInUser) {
    return null;
  }
  
  const profile = loggedInUser.profile || {};
  const userInitials = `${loggedInUser.firstName?.[0] || ''}${loggedInUser.lastName?.[0] || ''}`;
  
  const stats = [
    { label: "Posts", value: loggedInUser.posts?.length || 0, icon: MessageSquare },
    { label: "Connections", value: loggedInUser.connections?.length || 0, icon: Users },
    { label: "Projects", value: profile.projects?.length || 0, icon: Briefcase },
    { label: "Skills", value: profile.skills?.length || 0, icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark dark:to-sheraa-dark/80">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-sheraa-primary/10 via-sheraa-teal/10 to-sheraa-primary/10">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start gap-6"
          >
            {/* Avatar and Basic Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-1">
              <div className="relative">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white shadow-lg">
                  <AvatarImage src={loggedInUser.profileImage} alt="Profile" />
                  <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary text-2xl md:text-3xl font-bold">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white rounded-full w-6 h-6"></div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {loggedInUser.firstName} {loggedInUser.lastName}
                </h1>
                
                {profile.headline && (
                  <p className="text-lg text-sheraa-primary font-medium mb-3">
                    {profile.headline}
                  </p>
                )}
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                  {profile.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {profile.location}
                    </div>
                  )}
                  {profile.currentCompany && (
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {profile.currentCompany}
                    </div>
                  )}
                  {profile.website && (
                    <a 
                      href={profile.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sheraa-primary hover:underline"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined {new Date(loggedInUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </div>

                {/* Skills */}
                {profile.skills && profile.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {profile.skills.slice(0, 5).map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-sheraa-primary/10 text-sheraa-primary">
                        {skill}
                      </Badge>
                    ))}
                    {profile.skills.length > 5 && (
                      <Badge variant="outline">+{profile.skills.length - 5} more</Badge>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => navigate("/profile-setup")}
                className="flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-sheraa-primary/10 p-2 rounded-full">
                          <stat.icon className="w-5 h-5 text-sheraa-primary" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-sheraa-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p>Posted an update about project progress</p>
                      <p className="text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p>Connected with 3 new entrepreneurs</p>
                      <p className="text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p>Completed profile setup</p>
                      <p className="text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-sheraa-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Award className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Profile Master</p>
                      <p className="text-xs text-gray-500">Completed profile</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Networker</p>
                      <p className="text-xs text-gray-500">First connections</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className={`grid grid-cols-3 ${isMobile ? 'mb-4' : 'mb-8'} w-full`}>
                <TabsTrigger value="posts" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Posts
                </TabsTrigger>
                <TabsTrigger value="about" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  About
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Activity
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="space-y-6">
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
    </div>
  );
};

export default EnhancedUserProfile;
