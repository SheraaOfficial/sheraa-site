
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Upload, CheckCircle, AlertCircle, 
  DollarSign, Building, Users, Globe, Crown,
  ArrowLeft, ArrowRight, FileText, Calendar
} from 'lucide-react';

const DealDockApplyPage: React.FC = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    website: '',
    foundingYear: '',
    incorporationCountry: '',
    businessModel: '',
    industry: '',
    
    // Founder Information
    founderName: '',
    founderEmail: '',
    founderPhone: '',
    founderLinkedIn: '',
    coFounders: '',
    
    // Business Details
    problemStatement: '',
    solution: '',
    targetMarket: '',
    businessStage: '',
    currentRevenue: '',
    fundingStage: '',
    fundingAmount: '',
    useOfFunds: '',
    
    // Traction & Metrics
    customers: '',
    monthlyGrowth: '',
    teamSize: '',
    keyMetrics: '',
    
    // Investment Details
    previousFunding: '',
    currentInvestors: '',
    intellectualProperty: '',
    
    // Additional Information
    whyDealDock: '',
    timeline: '',
    additionalInfo: '',
    
    // Agreements
    agreeToTerms: false,
    agreeToDataUse: false
  });

  const totalSteps = 5;

  const businessStages = [
    'Idea Stage',
    'MVP Developed',
    'Product Launched',
    'Early Traction',
    'Growing Revenue',
    'Scaling'
  ];

  const industries = [
    'FinTech',
    'EdTech',
    'HealthTech',
    'E-commerce',
    'B2B SaaS',
    'AgriTech',
    'PropTech',
    'DeepTech',
    'Sustainability',
    'Creative Industries',
    'Other'
  ];

  const fundingStages = [
    'Pre-Seed',
    'Seed',
    'Series A',
    'Series B',
    'Later Stage'
  ];

  const fundingAmounts = [
    'Under $100K',
    '$100K - $500K',
    '$500K - $1M',
    '$1M - $3M',
    '$3M - $10M',
    'Over $10M'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.companyName && formData.foundingYear && formData.industry);
      case 2:
        return !!(formData.founderName && formData.founderEmail && formData.founderPhone);
      case 3:
        return !!(formData.problemStatement && formData.solution && formData.businessStage);
      case 4:
        return !!(formData.customers && formData.teamSize && formData.fundingStage);
      case 5:
        return !!(formData.whyDealDock && formData.agreeToTerms && formData.agreeToDataUse);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast({
        title: 'Please complete all required fields',
        variant: 'destructive'
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log('Form submitted:', formData);
      toast({
        title: 'Application Submitted!',
        description: 'We\'ll review your application and get back to you within 5 business days.'
      });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Company Information</h3>
              <p className="text-gray-600">Tell us about your startup</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Your startup name"
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://yourcompany.com"
                />
              </div>
              <div>
                <Label htmlFor="foundingYear">Founding Year *</Label>
                <Select onValueChange={(value) => handleInputChange('foundingYear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="incorporationCountry">Country of Incorporation</Label>
                <Input
                  id="incorporationCountry"
                  value={formData.incorporationCountry}
                  onChange={(e) => handleInputChange('incorporationCountry', e.target.value)}
                  placeholder="UAE, USA, etc."
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="businessModel">Business Model</Label>
                <Input
                  id="businessModel"
                  value={formData.businessModel}
                  onChange={(e) => handleInputChange('businessModel', e.target.value)}
                  placeholder="B2B, B2C, Marketplace, etc."
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Founder Information</h3>
              <p className="text-gray-600">Tell us about the founding team</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="founderName">Primary Founder Name *</Label>
                <Input
                  id="founderName"
                  value={formData.founderName}
                  onChange={(e) => handleInputChange('founderName', e.target.value)}
                  placeholder="Full name"
                />
              </div>
              <div>
                <Label htmlFor="founderEmail">Email Address *</Label>
                <Input
                  id="founderEmail"
                  type="email"
                  value={formData.founderEmail}
                  onChange={(e) => handleInputChange('founderEmail', e.target.value)}
                  placeholder="founder@company.com"
                />
              </div>
              <div>
                <Label htmlFor="founderPhone">Phone Number *</Label>
                <Input
                  id="founderPhone"
                  value={formData.founderPhone}
                  onChange={(e) => handleInputChange('founderPhone', e.target.value)}
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
              <div>
                <Label htmlFor="founderLinkedIn">LinkedIn Profile</Label>
                <Input
                  id="founderLinkedIn"
                  value={formData.founderLinkedIn}
                  onChange={(e) => handleInputChange('founderLinkedIn', e.target.value)}
                  placeholder="linkedin.com/in/yourprofile"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="coFounders">Co-Founders (if any)</Label>
              <Textarea
                id="coFounders"
                value={formData.coFounders}
                onChange={(e) => handleInputChange('coFounders', e.target.value)}
                placeholder="List co-founders with their roles and backgrounds"
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Business Details</h3>
              <p className="text-gray-600">Describe your business and solution</p>
            </div>
            
            <div>
              <Label htmlFor="problemStatement">Problem Statement *</Label>
              <Textarea
                id="problemStatement"
                value={formData.problemStatement}
                onChange={(e) => handleInputChange('problemStatement', e.target.value)}
                placeholder="What problem are you solving? Who experiences this problem?"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="solution">Solution Description *</Label>
              <Textarea
                id="solution"
                value={formData.solution}
                onChange={(e) => handleInputChange('solution', e.target.value)}
                placeholder="How does your product/service solve the problem?"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="targetMarket">Target Market</Label>
              <Textarea
                id="targetMarket"
                value={formData.targetMarket}
                onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                placeholder="Who are your customers? Market size and characteristics?"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="businessStage">Current Business Stage *</Label>
                <Select onValueChange={(value) => handleInputChange('businessStage', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessStages.map(stage => (
                      <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="currentRevenue">Current Monthly Revenue (USD)</Label>
                <Input
                  id="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                  placeholder="0 if pre-revenue"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Traction & Funding</h3>
              <p className="text-gray-600">Share your progress and funding needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="customers">Number of Customers *</Label>
                <Input
                  id="customers"
                  value={formData.customers}
                  onChange={(e) => handleInputChange('customers', e.target.value)}
                  placeholder="Current customer count"
                />
              </div>
              <div>
                <Label htmlFor="monthlyGrowth">Monthly Growth Rate (%)</Label>
                <Input
                  id="monthlyGrowth"
                  value={formData.monthlyGrowth}
                  onChange={(e) => handleInputChange('monthlyGrowth', e.target.value)}
                  placeholder="e.g., 15%"
                />
              </div>
              <div>
                <Label htmlFor="teamSize">Team Size *</Label>
                <Input
                  id="teamSize"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  placeholder="Number of employees"
                />
              </div>
              <div>
                <Label htmlFor="fundingStage">Funding Stage *</Label>
                <Select onValueChange={(value) => handleInputChange('fundingStage', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {fundingStages.map(stage => (
                      <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fundingAmount">Funding Amount Seeking</Label>
                <Select onValueChange={(value) => handleInputChange('fundingAmount', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    {fundingAmounts.map(amount => (
                      <SelectItem key={amount} value={amount}>{amount}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="previousFunding">Previous Funding (if any)</Label>
                <Input
                  id="previousFunding"
                  value={formData.previousFunding}
                  onChange={(e) => handleInputChange('previousFunding', e.target.value)}
                  placeholder="Amount and investors"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="useOfFunds">Use of Funds</Label>
              <Textarea
                id="useOfFunds"
                value={formData.useOfFunds}
                onChange={(e) => handleInputChange('useOfFunds', e.target.value)}
                placeholder="How will you use the investment?"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="keyMetrics">Key Business Metrics</Label>
              <Textarea
                id="keyMetrics"
                value={formData.keyMetrics}
                onChange={(e) => handleInputChange('keyMetrics', e.target.value)}
                placeholder="CAC, LTV, retention rate, etc."
                rows={3}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Final Details</h3>
              <p className="text-gray-600">Complete your application</p>
            </div>
            
            <div>
              <Label htmlFor="whyDealDock">Why are you interested in Deal Dock? *</Label>
              <Textarea
                id="whyDealDock"
                value={formData.whyDealDock}
                onChange={(e) => handleInputChange('whyDealDock', e.target.value)}
                placeholder="What do you hope to achieve through Deal Dock?"
                rows={4}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="timeline">Funding Timeline</Label>
                <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need funding?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="6months">Within 6 months</SelectItem>
                    <SelectItem value="12months">Within 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="intellectualProperty">Intellectual Property</Label>
                <Input
                  id="intellectualProperty"
                  value={formData.intellectualProperty}
                  onChange={(e) => handleInputChange('intellectualProperty', e.target.value)}
                  placeholder="Patents, trademarks, etc."
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Anything else you'd like us to know?"
                rows={3}
              />
            </div>
            
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the <Link to="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</Link> and understand that submitting this application does not guarantee acceptance into Deal Dock. *
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToDataUse"
                  checked={formData.agreeToDataUse}
                  onCheckedChange={(checked) => handleInputChange('agreeToDataUse', checked as boolean)}
                />
                <Label htmlFor="agreeToDataUse" className="text-sm">
                  I consent to Sheraa using the information provided for evaluation purposes and potential investor introductions. *
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Deal Dock Application
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 bg-clip-text text-transparent">
              Apply to Deal Dock
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with vetted investors and unlock funding opportunities for your startup.
              Complete the application below to get started.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md">
            <CardContent className="p-8">
              {renderStepContent()}
              
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Submit Application
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help with your application? <Link to="/contact?type=deal-dock" className="text-purple-600 hover:underline">Contact our team</Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DealDockApplyPage;
