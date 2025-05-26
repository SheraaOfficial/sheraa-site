
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  Upload, 
  Check, 
  X, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  FileText,
  Send,
  CheckCircle
} from "lucide-react";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const applicationSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  position: z.string().min(1, { message: "Please select a position" }),
  experience: z.string().min(50, { message: "Please provide at least 50 characters about your experience" }),
  skills: z.array(z.string()).min(1, { message: "Please select at least one skill" }),
  portfolio: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  linkedin: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  coverLetter: z.string().min(100, { message: "Please write a cover letter (min. 100 characters)" }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  agreeNewsletter: z.boolean().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const positions = [
  "Program Manager", 
  "Community Manager", 
  "Marketing Specialist", 
  "Business Development Executive", 
  "Events Coordinator",
  "Startup Advisor",
  "Content Creator",
  "Partnership Manager",
  "Operations Specialist",
  "Other"
];

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
  "Community Building",
  "Project Management",
  "Data Analysis",
  "Digital Marketing",
  "Partnership Development"
];

const ApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      skills: [],
      portfolio: '',
      linkedin: '',
      coverLetter: '',
      agreeTerms: false,
      agreeNewsletter: false,
    },
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(null);
    
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setFileError("Please upload a PDF or Word document");
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File size should not exceed 5MB");
        return;
      }
      
      setResumeFile(file);
    }
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => {
      const isSelected = prev.includes(skill);
      const newSkills = isSelected 
        ? prev.filter(s => s !== skill)
        : [...prev, skill];
      
      form.setValue('skills', newSkills);
      return newSkills;
    });
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!resumeFile) {
      setFileError("Please upload your resume");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Thank you for applying to join the Sheraa team. We appreciate your interest and will review your application carefully.
          Our team will be in touch with you soon.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Button onClick={() => window.location.href = "/"} variant="outline">
            Return to Homepage
          </Button>
          <Button onClick={() => {
            setSubmitSuccess(false);
            form.reset();
            setSelectedSkills([]);
            setResumeFile(null);
          }}>
            Submit Another Application
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Apply to Join Our Team</CardTitle>
        <p className="text-center text-gray-600">
          Take the first step towards becoming part of the Sheraa family
        </p>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-sheraa-primary" />
                <h3 className="text-lg font-semibold">Personal Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+971 XX XXX XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Professional Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-sheraa-primary" />
                <h3 className="text-lg font-semibold">Professional Background</h3>
              </div>
              
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position Applying For *</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                <FormLabel>Your Skills *</FormLabel>
                <div className="flex flex-wrap gap-2">
                  {availableSkills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        selectedSkills.includes(skill) 
                          ? 'bg-sheraa-primary text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                      {selectedSkills.includes(skill) && (
                        <Check className="w-3 h-3 inline ml-1" />
                      )}
                    </button>
                  ))}
                </div>
                {form.formState.errors.skills && (
                  <p className="text-sm font-medium text-destructive">
                    {form.formState.errors.skills.message}
                  </p>
                )}
              </div>
              
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Experience *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Briefly describe your relevant experience and achievements"
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Tell us about your professional background and how it relates to the role
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
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
                  control={form.control}
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
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-sheraa-primary" />
                <h3 className="text-lg font-semibold">Application Documents</h3>
              </div>
              
              <div className="space-y-2">
                <FormLabel>Resume/CV *</FormLabel>
                <div className="flex items-center gap-3">
                  <Input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx"
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sheraa-primary file:text-white hover:file:bg-sheraa-primary/90"
                  />
                  {resumeFile && (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">{resumeFile.name}</span>
                    </div>
                  )}
                </div>
                {fileError && <p className="text-sm font-medium text-destructive">{fileError}</p>}
                <FormDescription>
                  Upload your resume (PDF or Word, max 5MB)
                </FormDescription>
              </div>
              
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us why you'd like to join the Sheraa team and what you can bring to the role"
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Share your motivation and how you align with Sheraa's mission
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium">
                        I agree to Sheraa's Privacy Policy and Terms & Conditions *
                      </FormLabel>
                      <FormDescription>
                        By checking this box, you consent to Sheraa processing your application data.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreeNewsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium">
                        Subscribe to Sheraa newsletter for ecosystem updates
                      </FormLabel>
                      <FormDescription>
                        Stay updated with the latest news and opportunities from Sheraa.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90 text-white"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ApplicationForm;
