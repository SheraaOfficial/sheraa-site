
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check, Briefcase, UserCheck, FileText, Sparkles } from "lucide-react";
import { useCareers } from '../context/CareersContext';

// Components
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define the form schema for each step
const personalInfoSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

const professionalInfoSchema = z.object({
  position: z.string().min(1, { message: "Please select a position" }),
  experience: z.string().min(1, { message: "Please tell us about your experience" }),
  skills: z.array(z.string()).min(1, { message: "Please select at least one skill" }),
  portfolio: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  linkedin: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
});

const applicationDetailsSchema = z.object({
  coverLetter: z.string().min(50, { message: "Please write a cover letter (min. 50 characters)" }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  })
});

// Available positions
const positions = [
  "Program Manager", 
  "Community Manager", 
  "Marketing Specialist", 
  "Business Development Executive", 
  "Events Coordinator",
  "Startup Advisor",
  "Other"
];

// Available skills
const availableSkills = [
  "Entrepreneurship", 
  "Event Management", 
  "Marketing", 
  "Business Development", 
  "Program Management",
  "Public Relations",
  "Startup Mentoring", 
  "Investor Relations",
  "Content Creation",
  "Community Building"
];

const CareersForm: React.FC = () => {
  const { 
    candidate, 
    updateCandidate, 
    currentStep, 
    setCurrentStep, 
    isSubmitting, 
    setIsSubmitting, 
    submitSuccess, 
    setSubmitSuccess 
  } = useCareers();

  const [selectedSkills, setSelectedSkills] = useState<string[]>(candidate.skills || []);
  const [fileError, setFileError] = useState<string | null>(null);

  // Create form for each step
  const personalForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: candidate.fullName,
      email: candidate.email,
      phone: candidate.phone,
    },
  });

  const professionalForm = useForm<z.infer<typeof professionalInfoSchema>>({
    resolver: zodResolver(professionalInfoSchema),
    defaultValues: {
      position: candidate.position,
      experience: candidate.experience,
      skills: candidate.skills,
      portfolio: candidate.portfolio,
      linkedin: candidate.linkedin,
    },
  });

  const applicationForm = useForm<z.infer<typeof applicationDetailsSchema>>({
    resolver: zodResolver(applicationDetailsSchema),
    defaultValues: {
      coverLetter: candidate.coverLetter,
      agreeTerms: candidate.agreeTerms,
    },
  });

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);
    
    if (file) {
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setFileError("Please upload a PDF or Word document");
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size should not exceed 5MB");
        return;
      }
      
      updateCandidate('resumeFileName', file.name);
    }
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => {
      const isSelected = prev.includes(skill);
      const newSkills = isSelected 
        ? prev.filter(s => s !== skill)
        : [...prev, skill];
      
      updateCandidate('skills', newSkills);
      return newSkills;
    });
  };

  const onSubmitPersonalInfo = (data: z.infer<typeof personalInfoSchema>) => {
    updateCandidate('fullName', data.fullName);
    updateCandidate('email', data.email);
    updateCandidate('phone', data.phone);
    setCurrentStep(1);
  };

  const onSubmitProfessionalInfo = (data: z.infer<typeof professionalInfoSchema>) => {
    updateCandidate('position', data.position);
    updateCandidate('experience', data.experience);
    updateCandidate('portfolio', data.portfolio);
    updateCandidate('linkedin', data.linkedin);
    setCurrentStep(2);
  };

  const onSubmitApplication = async (data: z.infer<typeof applicationDetailsSchema>) => {
    updateCandidate('coverLetter', data.coverLetter);
    updateCandidate('agreeTerms', data.agreeTerms);
    
    // Final submission
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success handling
      setSubmitSuccess(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for applying. We'll be in touch soon.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form steps component mapping
  const formSteps = [
    {
      title: "Personal Information",
      icon: UserCheck,
      description: "Let's start with your basic details",
      form: (
        <Form {...personalForm}>
          <form onSubmit={personalForm.handleSubmit(onSubmitPersonalInfo)} className="space-y-6">
            <FormField
              control={personalForm.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={personalForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormDescription>We'll never share your email with anyone else.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={personalForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-[#8B5CF6] hover:bg-[#7C3AED]">
                Next Step
              </Button>
            </div>
          </form>
        </Form>
      )
    },
    {
      title: "Professional Background",
      icon: Briefcase,
      description: "Tell us about your professional experience",
      form: (
        <Form {...professionalForm}>
          <form onSubmit={professionalForm.handleSubmit(onSubmitProfessionalInfo)} className="space-y-6">
            <FormField
              control={professionalForm.control}
              name="position"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Position Applying For</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select a position</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>{pos}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-3">
              <FormLabel>Your Skills</FormLabel>
              <div className="flex flex-wrap gap-2 mt-2">
                {availableSkills.map((skill) => (
                  <div
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`
                      px-3 py-1 rounded-full text-sm cursor-pointer transition-all
                      ${selectedSkills.includes(skill) 
                        ? 'bg-[#8B5CF6] text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                    `}
                  >
                    {skill}
                    {selectedSkills.includes(skill) && (
                      <Check className="w-3 h-3 inline ml-1" />
                    )}
                  </div>
                ))}
              </div>
              {professionalForm.formState.errors.skills && (
                <p className="text-sm font-medium text-destructive">
                  {professionalForm.formState.errors.skills.message}
                </p>
              )}
            </div>
            
            <FormField
              control={professionalForm.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Experience</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe your relevant experience"
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={professionalForm.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfolio Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://your-portfolio.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={professionalForm.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://linkedin.com/in/your-profile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setCurrentStep(0)}
              >
                Previous Step
              </Button>
              <Button type="submit" className="bg-[#8B5CF6] hover:bg-[#7C3AED]">
                Next Step
              </Button>
            </div>
          </form>
        </Form>
      )
    },
    {
      title: "Final Details",
      icon: FileText,
      description: "Complete your application",
      form: (
        <Form {...applicationForm}>
          <form onSubmit={applicationForm.handleSubmit(onSubmitApplication)} className="space-y-6">
            <FormItem className="space-y-2">
              <FormLabel>Resume/CV</FormLabel>
              <div className="flex items-center gap-3">
                <Input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="max-w-md"
                />
              </div>
              {fileError && <p className="text-sm font-medium text-destructive">{fileError}</p>}
              <FormDescription>
                Upload your resume (PDF or Word, max 5MB)
              </FormDescription>
            </FormItem>
            
            <FormField
              control={applicationForm.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us why you'd like to join the Sheraa team and what you can bring to the role"
                      className="min-h-[150px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={applicationForm.control}
              name="agreeTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-stone-50">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to Sheraa's Privacy Policy and Terms & Conditions
                    </FormLabel>
                    <FormDescription>
                      By checking this box, you consent to Sheraa processing your application data.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setCurrentStep(1)}
              >
                Previous Step
              </Button>
              <Button 
                type="submit" 
                className="bg-[#8B5CF6] hover:bg-[#7C3AED]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      )
    }
  ];

  if (submitSuccess) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
              <Sparkles className="h-10 w-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for applying to join the Sheraa team. We appreciate your interest and will review your application carefully.
              Our team will be in touch with you soon.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button onClick={() => window.location.href = "/"} variant="outline">
                Return to Homepage
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Apply to Join Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards becoming part of the Sheraa family by completing
            this application. We're excited to learn more about you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            value={currentStep.toString()} 
            className="w-full"
            onValueChange={(value) => setCurrentStep(parseInt(value))}
          >
            <TabsList className="w-full mb-8">
              {formSteps.map((step, index) => (
                <TabsTrigger 
                  key={index}
                  value={index.toString()} 
                  disabled={index > currentStep}
                  className="flex-1 py-3"
                >
                  <div className="flex items-center justify-center gap-2">
                    <step.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{step.title}</span>
                    <span className="sm:hidden">Step {index + 1}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <Card className="p-6">
              {formSteps.map((step, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {step.form}
                </TabsContent>
              ))}
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CareersForm;
