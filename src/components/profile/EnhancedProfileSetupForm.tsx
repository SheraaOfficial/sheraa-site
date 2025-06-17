
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Camera, MapPin, Building2, Globe, User, Award, Plus, X, ArrowRight, ArrowLeft } from "lucide-react";

const profileSchema = z.object({
  headline: z.string().min(5, { message: "Headline must be at least 5 characters" }),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters" }),
  currentPosition: z.string().optional(),
  currentCompany: z.string().optional(),
  location: z.string().min(2, { message: "Location is required" }),
  website: z.string().url({ message: "Website must be a valid URL" }).optional().or(z.literal('')),
  industry: z.string().min(1, { message: "Please select an industry" }),
  skills: z.array(z.string()).min(1, { message: "Add at least one skill" }),
  interests: z.array(z.string()).optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const industries = [
  "Technology", "Healthcare", "Finance", "Education", "E-commerce", 
  "Manufacturing", "Sustainability", "Media & Entertainment", "Real Estate",
  "Food & Beverage", "Transportation", "Energy", "Agriculture", "Tourism",
  "Fashion", "Sports", "Government", "Non-profit", "Other"
];

const EnhancedProfileSetupForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentInterest, setCurrentInterest] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  React.useEffect(() => {
    if (!loggedInUser) {
      toast({
        title: "Not logged in",
        description: "Please log in to set up your profile",
      });
      navigate("/auth");
    } else if (loggedInUser.profile?.skills) {
      setSkills(loggedInUser.profile.skills);
    }
  }, [loggedInUser, navigate, toast]);
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      headline: loggedInUser?.profile?.headline || "",
      bio: loggedInUser?.profile?.bio || "",
      currentPosition: loggedInUser?.profile?.currentPosition || "",
      currentCompany: loggedInUser?.profile?.currentCompany || "",
      location: loggedInUser?.profile?.location || "",
      website: loggedInUser?.profile?.website || "",
      industry: loggedInUser?.profile?.industry || "",
      skills: loggedInUser?.profile?.skills || [],
      interests: loggedInUser?.profile?.interests || []
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

  const addInterest = () => {
    if (currentInterest.trim() && !interests.includes(currentInterest.trim())) {
      const newInterests = [...interests, currentInterest.trim()];
      setInterests(newInterests);
      form.setValue('interests', newInterests);
      setCurrentInterest("");
    }
  };
  
  const removeInterest = (interestToRemove: string) => {
    const newInterests = interests.filter(interest => interest !== interestToRemove);
    setInterests(newInterests);
    form.setValue('interests', newInterests);
  };

  const onSubmit = async (data: ProfileFormValues) => {
    if (!loggedInUser) return;
    
    setIsSubmitting(true);
    
    const updatedUser = {
      ...loggedInUser,
      profile: {
        ...data,
        skills,
        interests
      },
      profileImage: profileImage || loggedInUser.profileImage,
      profileComplete: true
    };
    
    // Update user in users array
    const updatedUsers = users.map(user => 
      user.id === loggedInUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setLoggedInUser(updatedUser);
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    toast({
      title: "Profile completed! 🎉",
      description: "Welcome to the Sheraa community. Your profile is now live.",
    });
    
    navigate("/profile");
  };
  
  if (!loggedInUser) return null;
  
  const userInitials = `${loggedInUser.firstName?.[0] || ''}${loggedInUser.lastName?.[0] || ''}`;
  const totalSteps = 3;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Tell us about yourself</h2>
              <p className="text-gray-600">Let's start with the basics and your professional background</p>
            </div>

            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileImage || loggedInUser.profileImage} alt="Profile" />
                  <AvatarFallback className="bg-sheraa-primary/10 text-sheraa-primary text-xl">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <label 
                  htmlFor="profile-image" 
                  className="absolute bottom-0 right-0 bg-sheraa-primary text-white p-2 rounded-full cursor-pointer hover:bg-sheraa-primary/90 transition-colors shadow-lg"
                >
                  <Camera className="w-4 h-4" />
                  <input 
                    id="profile-image" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <p className="text-sm text-gray-500">Upload a profile picture</p>
            </div>

            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Professional Headline
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Startup Founder | AI Enthusiast | Product Manager" {...field} />
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
                    <FormLabel>About You</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your background, interests, and what you're passionate about..."
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Professional Details</h2>
              <p className="text-gray-600">Share your current role and professional information</p>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="currentPosition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Current Position
                      </FormLabel>
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
                      <FormLabel className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Sharjah, UAE" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Website (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourwebsite.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Skills & Interests</h2>
              <p className="text-gray-600">Help others find you by adding your skills and interests</p>
            </div>

            <div className="space-y-6">
              <FormField
                control={form.control}
                name="skills"
                render={() => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Skills & Expertise
                    </FormLabel>
                    <div className="flex gap-2">
                      <Input 
                        value={currentSkill} 
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        placeholder="e.g. JavaScript, Marketing, UX Design"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                        className="flex-1"
                      />
                      <Button 
                        type="button" 
                        onClick={addSkill}
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                        size="icon"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skills.map((skill, index) => (
                        <div 
                          key={index} 
                          className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {skill}
                          <button 
                            type="button" 
                            className="hover:text-sheraa-primary/80"
                            onClick={() => removeSkill(skill)}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel>Interests (Optional)</FormLabel>
                    <div className="flex gap-2">
                      <Input 
                        value={currentInterest} 
                        onChange={(e) => setCurrentInterest(e.target.value)}
                        placeholder="e.g. Sustainability, AI, Blockchain"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addInterest())}
                        className="flex-1"
                      />
                      <Button 
                        type="button" 
                        onClick={addInterest}
                        variant="outline"
                        size="icon"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {interests.map((interest, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {interest}
                          <button 
                            type="button" 
                            className="hover:text-gray-500"
                            onClick={() => removeInterest(interest)}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Profile Setup</span>
            <span className="text-sm text-gray-500">{step} of {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Complete Your Profile
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {renderStep()}
                
                <div className="flex justify-between pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => step > 1 ? setStep(step - 1) : navigate("/")}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {step > 1 ? 'Previous' : 'Skip for Now'}
                  </Button>
                  
                  {step < totalSteps ? (
                    <Button 
                      type="button" 
                      onClick={() => setStep(step + 1)}
                      className="bg-sheraa-primary hover:bg-sheraa-primary/90 flex items-center gap-2"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Completing...' : 'Complete Profile'}
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedProfileSetupForm;
