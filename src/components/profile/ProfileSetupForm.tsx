
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const profileSchema = z.object({
  headline: z.string().min(5, { message: "Headline is required and should be at least 5 characters" }),
  bio: z.string().min(10, { message: "Bio is required and should be at least 10 characters" }),
  currentPosition: z.string().optional(),
  currentCompany: z.string().optional(),
  location: z.string().min(2, { message: "Location is required" }),
  website: z.string().url({ message: "Website must be a valid URL" }).optional().or(z.literal('')),
  skills: z.array(z.string()).min(1, { message: "At least one skill is required" })
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ProfileSetupForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  // Redirect if no logged in user
  React.useEffect(() => {
    if (!loggedInUser) {
      toast({
        title: "Not logged in",
        description: "Please log in to set up your profile",
      });
      navigate("/login");
    }
  }, [loggedInUser, navigate, toast]);
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      headline: "",
      bio: "",
      currentPosition: "",
      currentCompany: "",
      location: "",
      website: "",
      skills: []
    }
  });
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      const newSkills = [...skills, currentSkill.trim()];
      setSkills(newSkills);
      form.setValue('skills', newSkills);
      setCurrentSkill("");
    }
  };
  
  const removeSkill = (skillToRemove: string) => {
    const newSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(newSkills);
    form.setValue('skills', newSkills);
  };

  const onSubmit = (data: ProfileFormValues) => {
    if (!loggedInUser) return;
    
    const updatedUser = {
      ...loggedInUser,
      profile: {
        ...data
      },
      profileImage: profileImage,
      profileComplete: true
    };
    
    setLoggedInUser(updatedUser);
    
    toast({
      title: "Profile saved",
      description: "Your profile has been set up successfully",
    });
    
    navigate("/profile");
  };
  
  // Early return if no logged in user
  if (!loggedInUser) return null;
  
  const userInitials = `${loggedInUser.firstName?.[0] || ''}${loggedInUser.lastName?.[0] || ''}`;
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Card className="shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileImage || undefined} alt="Profile" />
                <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary text-xl">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <label 
                htmlFor="profile-image" 
                className="absolute bottom-0 right-0 bg-sheraa-primary text-white p-1 rounded-full cursor-pointer hover:bg-sheraa-primary/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
                <input 
                  id="profile-image" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <p className="text-sm text-gray-500">Click the camera icon to upload your profile picture</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headline</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Frontend Developer | UI/UX Enthusiast" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about yourself..."
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="currentPosition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Position</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. CEO, Founder, Developer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="currentCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company/Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Where do you work?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Sharjah, UAE" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourwebsite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="skills"
                render={() => (
                  <FormItem>
                    <FormLabel>Skills & Expertise</FormLabel>
                    <div className="flex">
                      <Input 
                        value={currentSkill} 
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        placeholder="e.g. JavaScript, UX Design, Marketing"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                        className="flex-1"
                      />
                      <Button 
                        type="button" 
                        onClick={addSkill}
                        className="ml-2 bg-sheraa-primary hover:bg-sheraa-primary/90"
                      >
                        Add
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.map((skill, index) => (
                        <div 
                          key={index} 
                          className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          {skill}
                          <button 
                            type="button" 
                            className="ml-2 text-sheraa-primary hover:text-sheraa-primary/80"
                            onClick={() => removeSkill(skill)}
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4 flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/")}
                >
                  Skip for Now
                </Button>
                <Button 
                  type="submit" 
                  className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                >
                  Save Profile
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSetupForm;
