
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Upload, 
  Building, Users, DollarSign, Target, Lightbulb,
  Calendar, Mail, Phone, Globe, Crown, Sparkles,
  FileText, Camera, Award, TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  
  // Startup Information
  companyName: string;
  website: string;
  industry: string;
  stage: string;
  foundedYear: string;
  teamSize: string;
  
  // Business Details
  description: string;
  problem: string;
  solution: string;
  targetMarket: string;
  businessModel: string;
  currentRevenue: string;
  fundingRaised: string;
  
  // Goals & Motivation
  goals: string;
  challenges: string;
  whySheraa: string;
  
  // Additional
  referralSource: string;
  additionalInfo: string;
}

const MembershipApplication: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier] = useState(searchParams.get('tier') || 'founder');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', linkedin: '',
    companyName: '', website: '', industry: '', stage: '', foundedYear: '', teamSize: '',
    description: '', problem: '', solution: '', targetMarket: '', businessModel: '',
    currentRevenue: '', fundingRaised: '', goals: '', challenges: '', whySheraa: '',
    referralSource: '', additionalInfo: ''
  });

  const steps = [
    { 
      id: 1, 
      title: 'Personal Info', 
      description: 'Tell us about yourself',
      icon: Users,
      fields: ['firstName', 'lastName', 'email', 'phone', 'linkedin']
    },
    { 
      id: 2, 
      title: 'Startup Details', 
      description: 'Your company information',
      icon: Building,
      fields: ['companyName', 'website', 'industry', 'stage', 'foundedYear', 'teamSize']
    },
    { 
      id: 3, 
      title: 'Business Model', 
      description: 'How your startup works',
      icon: Target,
      fields: ['description', 'problem', 'solution', 'targetMarket', 'businessModel']
    },
    { 
      id: 4, 
      title: 'Traction & Funding', 
      description: 'Your progress so far',
      icon: TrendingUp,
      fields: ['currentRevenue', 'fundingRaised']
    },
    { 
      id: 5, 
      title: 'Goals & Motivation', 
      description: 'What you hope to achieve',
      icon: Award,
      fields: ['goals', 'challenges', 'whySheraa', 'referralSource', 'additionalInfo']
    }
  ];

  const tierInfo = {
    explorer: { name: 'Explorer', price: 'Free', color: 'from-blue-500 to-cyan-500' },
    founder: { name: 'Founder', price: 'AED 500/month', color: 'from-sheraa-primary to-sheraa-teal' },
    scale: { name: 'Scale', price: 'AED 1,200/month', color: 'from-purple-500 to-pink-500' }
  };

  const currentTier = tierInfo[selectedTier as keyof typeof tierInfo];

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (stepId: number): boolean => {
    const step = steps.find(s => s.id === stepId);
    if (!step) return false;
    
    return step.fields.every(field => {
      const value = formData[field as keyof FormData];
      return value && value.trim().length > 0;
    });
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      toast({
        title: "Please complete all fields",
        description: "All fields in this step are required to continue.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your application. Our team will review it and contact you within 2-3 business days.",
    });
    
    navigate('/community/membership/confirmation');
    setIsSubmitting(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Your first name"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Your last name"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="your@email.com"
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <Input
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="+971 50 123 4567"
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">LinkedIn Profile *</label>
              <Input
                value={formData.linkedin}
                onChange={(e) => updateFormData('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name *</label>
                <Input
                  value={formData.companyName}
                  onChange={(e) => updateFormData('companyName', e.target.value)}
                  placeholder="Your startup name"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Website *</label>
                <Input
                  value={formData.website}
                  onChange={(e) => updateFormData('website', e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Industry *</label>
                <Input
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  placeholder="e.g., FinTech, HealthTech, EdTech"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Current Stage *</label>
                <Input
                  value={formData.stage}
                  onChange={(e) => updateFormData('stage', e.target.value)}
                  placeholder="e.g., Pre-seed, Seed, Series A"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Founded Year *</label>
                <Input
                  value={formData.foundedYear}
                  onChange={(e) => updateFormData('foundedYear', e.target.value)}
                  placeholder="2023"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Team Size *</label>
                <Input
                  value={formData.teamSize}
                  onChange={(e) => updateFormData('teamSize', e.target.value)}
                  placeholder="e.g., 2-5 people"
                  className="border-sheraa-primary/20 focus:border-sheraa-primary"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company Description *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                placeholder="Briefly describe what your startup does..."
                rows={3}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Problem You're Solving *</label>
              <Textarea
                value={formData.problem}
                onChange={(e) => updateFormData('problem', e.target.value)}
                placeholder="What specific problem does your startup address?"
                rows={3}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Your Solution *</label>
              <Textarea
                value={formData.solution}
                onChange={(e) => updateFormData('solution', e.target.value)}
                placeholder="How does your product/service solve this problem?"
                rows={3}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Target Market *</label>
              <Textarea
                value={formData.targetMarket}
                onChange={(e) => updateFormData('targetMarket', e.target.value)}
                placeholder="Who are your customers? Market size, demographics, etc."
                rows={3}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Business Model *</label>
              <Textarea
                value={formData.businessModel}
                onChange={(e) => updateFormData('businessModel', e.target.value)}
                placeholder="How do you make money? Revenue streams, pricing, etc."
                rows={3}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Current Monthly Revenue *</label>
              <Input
                value={formData.currentRevenue}
                onChange={(e) => updateFormData('currentRevenue', e.target.value)}
                placeholder="e.g., AED 50,000 or Pre-revenue"
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Total Funding Raised *</label>
              <Input
                value={formData.fundingRaised}
                onChange={(e) => updateFormData('fundingRaised', e.target.value)}
                placeholder="e.g., AED 500,000 or Bootstrapped"
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-sheraa-primary" />
                  <h3 className="font-semibold">Traction Metrics</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Feel free to share any additional metrics that showcase your startup's progress:
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• User growth, customer acquisition</li>
                  <li>• Product milestones, partnerships</li>
                  <li>• Awards, recognition, media coverage</li>
                  <li>• Team additions, advisory board</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">What are your main goals for the next 12 months? *</label>
              <Textarea
                value={formData.goals}
                onChange={(e) => updateFormData('goals', e.target.value)}
                placeholder="Specific goals you want to achieve with Sheraa's support..."
                rows={4}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">What are your biggest challenges right now? *</label>
              <Textarea
                value={formData.challenges}
                onChange={(e) => updateFormData('challenges', e.target.value)}
                placeholder="What obstacles are preventing you from reaching your goals?"
                rows={4}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Why do you want to join Sheraa? *</label>
              <Textarea
                value={formData.whySheraa}
                onChange={(e) => updateFormData('whySheraa', e.target.value)}
                placeholder="What specifically attracts you to the Sheraa community?"
                rows={4}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">How did you hear about Sheraa? *</label>
              <Input
                value={formData.referralSource}
                onChange={(e) => updateFormData('referralSource', e.target.value)}
                placeholder="e.g., SEF event, referral from member, social media"
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Anything else you'd like us to know?</label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                placeholder="Optional: Additional information, special circumstances, etc."
                rows={3}
                className="border-sheraa-primary/20 focus:border-sheraa-primary"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 dark:from-sheraa-dark dark:via-gray-900 dark:to-purple-900/10 min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/community/membership')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Membership
            </Button>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-teal/20 border border-sheraa-primary/30 mb-6">
              <Crown className="w-4 h-4 text-sheraa-primary" />
              <span className="text-sm font-medium">
                Applying for {currentTier.name} Membership
              </span>
              <Badge className={`bg-gradient-to-r ${currentTier.color} text-white border-0`}>
                {currentTier.price}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
              Join the Elite
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1]?.description}
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isCompleted = currentStep > step.id;
                const isCurrent = currentStep === step.id;
                
                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                      ${isCompleted 
                        ? 'bg-sheraa-primary border-sheraa-primary text-white' 
                        : isCurrent 
                          ? 'border-sheraa-primary text-sheraa-primary bg-sheraa-primary/10' 
                          : 'border-gray-300 text-gray-400'
                      }
                    `}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <IconComponent className="w-6 h-6" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 text-center ${isCurrent ? 'text-sheraa-primary font-medium' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-sheraa-primary to-sheraa-teal rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Form Content */}
          <Card className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {steps[currentStep - 1]?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    onClick={nextStep}
                    className="bg-sheraa-primary hover:bg-sheraa-primary/90 flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={submitApplication}
                    disabled={isSubmitting || !validateStep(currentStep)}
                    className="bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MembershipApplication;
