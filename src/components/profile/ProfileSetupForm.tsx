
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  GraduationCap, 
  Map, 
  Plus, 
  Award, 
  Star, 
  Trash2, 
  Camera
} from "lucide-react";

// Form schema
const formSchema = z.object({
  headline: z.string().min(5, "Headline must be at least 5 characters"),
  about: z.string().min(20, "About section must be at least 20 characters"),
  location: z.string().min(2, "Please enter your location"),
  skills: z.array(z.string()).min(1, "Add at least one skill"),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  currentPosition: z.string().optional(),
  currentCompany: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ProfileSetupForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [skill, setSkill] = useState("");
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  
  if (!loggedInUser) {
    navigate("/login");
    return null;
  }
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      headline: "",
      about: "",
      location: "",
      skills: [],
      website: "",
      currentPosition: "",
      currentCompany: "",
    },
  });
  
  const skills = form.watch("skills");
  
  const addSkill = () => {
    if (skill.trim() && !skills.includes(skill.trim())) {
      form.setValue("skills", [...skills, skill.trim()]);
      setSkill("");
    }
  };
  
  const removeSkill = (skillToRemove: string) => {
    form.setValue("skills", skills.filter(s => s !== skillToRemove));
  };
  
  const onSubmit = (data: FormValues) => {
    // Update user profile
    const updatedUser = {
      ...loggedInUser,
      profileComplete: true,
      profile: {
        headline: data.headline,
        about: data.about,
        location: data.location,
        skills: data.skills,
        website: data.website,
        currentPosition: data.currentPosition,
        currentCompany: data.currentCompany,
        experience: [],
        education: [],
        projects: [],
      }
    };
    
    // Update in local storage
    setLoggedInUser(updatedUser);
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    
    toast({
      title: "Profile updated!",
      description: "Your founder profile has been created successfully.",
    });
    
    navigate("/profile");
  };
  
  return (
    <div className="max-w-3xl mx-auto py-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-sheraa-primary">Complete Your Founder Profile</h2>
        <p className="text-muted-foreground">
          Tell us about yourself so the community can get to know you better
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border p-6">
        {/* Profile Picture Upload */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-gray-100 border flex items-center justify-center overflow-hidden">
              <span className="text-gray-400 text-5xl">
                {loggedInUser.firstName[0]}{loggedInUser.lastName[0]}
              </span>
            </div>
            <Button 
              size="icon" 
              className="absolute bottom-0 right-0 h-10 w-10 rounded-full shadow-lg"
              type="button"
            >
              <Camera className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="headline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Headline</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Star className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Founder & CEO at My Startup | AI Enthusiast"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Position</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Founder & CEO"
                          className="pl-10"
                          {...field}
                        />
                      </div>
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
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="My Startup"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Me</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your entrepreneurial journey, passions, and goals..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Map className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Sharjah, UAE"
                          className="pl-10"
                          {...field}
                        />
                      </div>
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
                    <FormLabel>Website (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://mywebsite.com"
                        {...field}
                      />
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
                  <div className="flex space-x-2 mb-2">
                    <Input
                      placeholder="Enter a skill (e.g. Leadership, AI, Product Development)"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addSkill();
                        }
                      }}
                    />
                    <Button type="button" onClick={addSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 rounded-full flex items-center text-sm"
                      >
                        <span>{skill}</span>
                        <button 
                          type="button" 
                          onClick={() => removeSkill(skill)}
                          className="ml-2 rounded-full hover:bg-sheraa-primary/20 p-1"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    {skills.length === 0 && (
                      <p className="text-sm text-muted-foreground">
                        Add skills to showcase your expertise
                      </p>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-4 mt-8">
              <Button variant="outline" type="button" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit">
                Save Profile
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileSetupForm;
