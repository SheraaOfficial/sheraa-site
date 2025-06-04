
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Rocket, Upload, CheckCircle, AlertCircle, 
  Building, Users, DollarSign, TrendingUp,
  FileText, Video, Link as LinkIcon
} from 'lucide-react';

const S3IncubatorApplicationPage: React.FC = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    website: '',
    foundedDate: '',
    industry: '',
    location: '',
    
    // Founder Information
    founderName: '',
    founderEmail: '',
    founderPhone: '',
    founderLinkedIn: '',
    coFounders: '',
    
    // Product & Business
    productDescription: '',
    problemStatement: '',
    solutionUniqueness: '',
    targetMarket: '',
    businessModel: '',
    
    // Traction & Metrics
    currentRevenue: '',
    monthlyGrowthRate: '',
    customerCount: '',
    teamSize: '',
    fundingHistory: '',
    
    // Technical & Scalability
    techStack: '',
    scalabilityPlan: '',
    competitiveAdvantage: '',
    
    // Program Fit
    whyS3: '',
    expectedOutcomes: '',
    commitmentLevel: '',
    
    // Supporting Documents
    pitchDeck: null,
    financialProjections: null,
    productDemo: ''
  });

  const steps = [
    { number: 1, title: 'Company & Founder Info', icon: Building },
    { number: 2, title: 'Product & Business Model', icon: Rocket },
    { number: 3, title: 'Traction & Metrics', icon: TrendingUp },
    { number: 4, title: 'Technical & Scale', icon: Users },
    { number: 5, title: 'Program Fit', icon: CheckCircle },
    { number: 6, title: 'Supporting Documents', icon: FileText }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async () => {
    // Validate required fields based on current step
    const requiredFields = getRequiredFieldsForStep(currentStep);
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please complete all required fields",
        description: `Missing: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit final application
      try {
        console.log('Submitting S3 application:', formData);
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll review your application and get back to you within 2 weeks.",
        });
        // Here you would typically send the data to your backend
      } catch (error) {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact support.",
          variant: "destructive"
        });
      }
    }
  };

  const getRequiredFieldsForStep = (step: number): string[] => {
    switch (step) {
      case 1: return ['companyName', 'founderName', 'founderEmail', 'founderPhone'];
      case 2: return ['productDescription', 'problemStatement', 'targetMarket'];
      case 3: return ['currentRevenue', 'customerCount', 'teamSize'];
      case 4: return ['techStack', 'scalabilityPlan'];
      case 5: return ['whyS3', 'expectedOutcomes'];
      case 6: return ['pitchDeck'];
      default: return [];
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Your company name"
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="foundedDate">Founded Date</Label>
                <Input
                  id="foundedDate"
                  type="date"
                  value={formData.foundedDate}
                  onChange={(e) => handleInputChange('foundedDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  placeholder="e.g., FinTech, HealthTech, EdTech"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Current Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="City, Country"
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Founder Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="founderName">Founder Name *</Label>
                  <Input
                    id="founderName"
                    value={formData.founderName}
                    onChange={(e) => handleInputChange('founderName', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="founderEmail">Email *</Label>
                  <Input
                    id="founderEmail"
                    type="email"
                    value={formData.founderEmail}
                    onChange={(e) => handleInputChange('founderEmail', e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
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
                    placeholder="https://linkedin.com/in/yourname"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="coFounders">Co-founders (if any)</Label>
                <Textarea
                  id="coFounders"
                  value={formData.coFounders}
                  onChange={(e) => handleInputChange('coFounders', e.target.value)}
                  placeholder="List co-founder names, roles, and backgrounds"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="productDescription">Product/Service Description *</Label>
              <Textarea
                id="productDescription"
                value={formData.productDescription}
                onChange={(e) => handleInputChange('productDescription', e.target.value)}
                placeholder="Describe your product or service in detail"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="problemStatement">Problem Statement *</Label>
              <Textarea
                id="problemStatement"
                value={formData.problemStatement}
                onChange={(e) => handleInputChange('problemStatement', e.target.value)}
                placeholder="What specific problem does your startup solve?"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="solutionUniqueness">What makes your solution unique?</Label>
              <Textarea
                id="solutionUniqueness"
                value={formData.solutionUniqueness}
                onChange={(e) => handleInputChange('solutionUniqueness', e.target.value)}
                placeholder="Explain your competitive advantage and differentiation"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="targetMarket">Target Market *</Label>
              <Textarea
                id="targetMarket"
                value={formData.targetMarket}
                onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                placeholder="Describe your ideal customers and market size"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="businessModel">Business Model</Label>
              <Textarea
                id="businessModel"
                value={formData.businessModel}
                onChange={(e) => handleInputChange('businessModel', e.target.value)}
                placeholder="How do you make money? What are your revenue streams?"
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentRevenue">Current Monthly Revenue *</Label>
                <Input
                  id="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                  placeholder="USD 0 - 50,000+"
                />
              </div>
              <div>
                <Label htmlFor="monthlyGrowthRate">Monthly Growth Rate</Label>
                <Input
                  id="monthlyGrowthRate"
                  value={formData.monthlyGrowthRate}
                  onChange={(e) => handleInputChange('monthlyGrowthRate', e.target.value)}
                  placeholder="% growth month-over-month"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="customerCount">Number of Customers *</Label>
                <Input
                  id="customerCount"
                  value={formData.customerCount}
                  onChange={(e) => handleInputChange('customerCount', e.target.value)}
                  placeholder="Total active customers"
                />
              </div>
              <div>
                <Label htmlFor="teamSize">Team Size *</Label>
                <Input
                  id="teamSize"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  placeholder="Number of full-time team members"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="fundingHistory">Previous Funding History</Label>
              <Textarea
                id="fundingHistory"
                value={formData.fundingHistory}
                onChange={(e) => handleInputChange('fundingHistory', e.target.value)}
                placeholder="Any previous funding rounds, investors, or grants received"
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="techStack">Technology Stack *</Label>
              <Textarea
                id="techStack"
                value={formData.techStack}
                onChange={(e) => handleInputChange('techStack', e.target.value)}
                placeholder="Technologies, frameworks, and platforms you use"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="scalabilityPlan">Scalability Plan *</Label>
              <Textarea
                id="scalabilityPlan"
                value={formData.scalabilityPlan}
                onChange={(e) => handleInputChange('scalabilityPlan', e.target.value)}
                placeholder="How do you plan to scale your product and business?"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="competitiveAdvantage">Competitive Advantage</Label>
              <Textarea
                id="competitiveAdvantage"
                value={formData.competitiveAdvantage}
                onChange={(e) => handleInputChange('competitiveAdvantage', e.target.value)}
                placeholder="What gives you a sustainable competitive advantage?"
                rows={4}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="whyS3">Why S3 Incubator? *</Label>
              <Textarea
                id="whyS3"
                value={formData.whyS3}
                onChange={(e) => handleInputChange('whyS3', e.target.value)}
                placeholder="Why is S3 the right program for your startup?"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="expectedOutcomes">Expected Outcomes *</Label>
              <Textarea
                id="expectedOutcomes"
                value={formData.expectedOutcomes}
                onChange={(e) => handleInputChange('expectedOutcomes', e.target.value)}
                placeholder="What do you hope to achieve during the 6-month program?"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="commitmentLevel">Commitment Level</Label>
              <Textarea
                id="commitmentLevel"
                value={formData.commitmentLevel}
                onChange={(e) => handleInputChange('commitmentLevel', e.target.value)}
                placeholder="Confirm your full-time commitment and availability"
                rows={3}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="pitchDeck">Pitch Deck (Required) *</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-2">Upload your pitch deck (PDF, max 10MB)</p>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileUpload('pitchDeck', e.target.files?.[0] || null)}
                  className="max-w-xs mx-auto"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="financialProjections">Financial Projections (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-2">Upload financial projections (Excel/PDF, max 5MB)</p>
                <Input
                  type="file"
                  accept=".pdf,.xlsx,.xls"
                  onChange={(e) => handleFileUpload('financialProjections', e.target.files?.[0] || null)}
                  className="max-w-xs mx-auto"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="productDemo">Product Demo Link</Label>
              <Input
                id="productDemo"
                value={formData.productDemo}
                onChange={(e) => handleInputChange('productDemo', e.target.value)}
                placeholder="Link to product demo video or live demo"
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
      <div className="min-h-screen bg-gradient-to-br from-white via-sheraa-light/10 to-sheraa-teal/5 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-sheraa-primary/10 text-sheraa-primary">
              <Rocket className="w-4 h-4 mr-2" />
              S3 Incubator Application
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply to S3 Incubator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the next cohort and get $30,000 equity-free funding plus 6 months of intensive support.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {steps.map((step) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div
                    key={step.number}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${
                      isActive 
                        ? 'border-sheraa-primary bg-sheraa-primary/10 text-sheraa-primary' 
                        : isCompleted
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white text-gray-500'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-sheraa-primary text-white' : 
                      isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : <IconComponent className="w-4 h-4" />}
                    </div>
                    <span className="font-medium text-sm">{step.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sheraa-primary text-white rounded-full flex items-center justify-center">
                    {currentStep}
                  </div>
                  Step {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {renderStepContent()}

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  <Button
                    onClick={handleSubmit}
                    className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                  >
                    {currentStep === 6 ? 'Submit Application' : 'Next Step'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
                    <p className="text-blue-800 mb-3">
                      Our team is here to support you through the application process. 
                      If you have questions or need assistance, don't hesitate to reach out.
                    </p>
                    <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default S3IncubatorApplicationPage;
