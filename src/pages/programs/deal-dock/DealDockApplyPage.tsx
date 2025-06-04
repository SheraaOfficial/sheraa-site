
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
  TrendingUp, Upload, CheckCircle, 
  Building, Users, DollarSign, 
  FileText, ArrowRight, AlertCircle,
  Globe, ChevronDown
} from 'lucide-react';

const DealDockApplyPage: React.FC = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>('financial');

  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    website: '',
    foundedDate: '',
    industry: '',
    location: '',
    stageOfFunding: '',
    
    // Founder Information
    founderName: '',
    founderEmail: '',
    founderPhone: '',
    founderLinkedIn: '',
    teamSize: '',
    
    // Financial Information
    currentRevenue: '',
    profitMargin: '',
    runwayMonths: '',
    previousInvestment: '',
    valuationEstimate: '',
    
    // Investment Goals
    amountSeeking: '',
    equityOffering: '',
    useOfFunds: '',
    targetClosingDate: '',
    
    // Supporting Documents
    pitchDeck: null,
    financialModel: null,
    executiveSummary: null
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (!formData.companyName || !formData.founderEmail || !formData.pitchDeck) {
        toast({
          title: "Missing required fields",
          description: "Please fill out all required fields and upload a pitch deck",
          variant: "destructive"
        });
        return;
      }

      console.log('Submitting Deal Dock application:', formData);
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your startup profile and get back to you within 3-5 days.",
      });

      // In a real app, you would redirect to a confirmation page
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
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
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Deal Dock Startup Application
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Funding Ready</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Submit your startup for review and get matched with investors from our exclusive network.
            </p>
          </motion.div>

          {/* Application Form */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Startup Profile</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Company Information */}
                <div className="mb-8">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold mb-4" 
                    onClick={() => toggleSection('company')}
                  >
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-purple-600" />
                      Company Information
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {(expandedSection === 'company') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 mb-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
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

                      <div className="grid md:grid-cols-3 gap-4">
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
                          <Label htmlFor="industry">Industry *</Label>
                          <Input
                            id="industry"
                            value={formData.industry}
                            onChange={(e) => handleInputChange('industry', e.target.value)}
                            placeholder="e.g., FinTech, HealthTech, EdTech"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Headquarters Location</Label>
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            placeholder="City, Country"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="stageOfFunding">Current Funding Stage *</Label>
                        <select
                          id="stageOfFunding"
                          className="w-full border rounded-md p-2"
                          value={formData.stageOfFunding}
                          onChange={(e) => handleInputChange('stageOfFunding', e.target.value)}
                        >
                          <option value="">Select stage</option>
                          <option value="pre-seed">Pre-Seed</option>
                          <option value="seed">Seed</option>
                          <option value="series-a">Series A</option>
                          <option value="series-b">Series B</option>
                          <option value="growth">Growth</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Founder Information */}
                <div className="mb-8">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold mb-4" 
                    onClick={() => toggleSection('founder')}
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Founder & Team Information
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'founder' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {(expandedSection === 'founder') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 mb-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
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

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="founderPhone">Phone Number</Label>
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

                      <div>
                        <Label htmlFor="teamSize">Team Size</Label>
                        <select
                          id="teamSize"
                          className="w-full border rounded-md p-2"
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                        >
                          <option value="">Select team size</option>
                          <option value="solo">Solo Founder</option>
                          <option value="2-5">2-5 employees</option>
                          <option value="6-10">6-10 employees</option>
                          <option value="11-20">11-20 employees</option>
                          <option value="21+">21+ employees</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Financial Information */}
                <div className="mb-8">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold mb-4" 
                    onClick={() => toggleSection('financial')}
                  >
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      Financial Information
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'financial' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {(expandedSection === 'financial') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 mb-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="currentRevenue">Annual Revenue (USD)</Label>
                          <Input
                            id="currentRevenue"
                            value={formData.currentRevenue}
                            onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                            placeholder="e.g., 100000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="profitMargin">Profit Margin (%)</Label>
                          <Input
                            id="profitMargin"
                            value={formData.profitMargin}
                            onChange={(e) => handleInputChange('profitMargin', e.target.value)}
                            placeholder="e.g., 15"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="runwayMonths">Current Runway (Months)</Label>
                          <Input
                            id="runwayMonths"
                            value={formData.runwayMonths}
                            onChange={(e) => handleInputChange('runwayMonths', e.target.value)}
                            placeholder="e.g., 6"
                          />
                        </div>
                        <div>
                          <Label htmlFor="previousInvestment">Previous Investment (USD)</Label>
                          <Input
                            id="previousInvestment"
                            value={formData.previousInvestment}
                            onChange={(e) => handleInputChange('previousInvestment', e.target.value)}
                            placeholder="e.g., 500000"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="valuationEstimate">Valuation Estimate (USD)</Label>
                        <Input
                          id="valuationEstimate"
                          value={formData.valuationEstimate}
                          onChange={(e) => handleInputChange('valuationEstimate', e.target.value)}
                          placeholder="e.g., 5000000"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Investment Goals */}
                <div className="mb-8">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold mb-4" 
                    onClick={() => toggleSection('investment')}
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-orange-600" />
                      Investment Goals
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'investment' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {(expandedSection === 'investment') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 mb-6"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="amountSeeking">Amount Seeking (USD) *</Label>
                          <Input
                            id="amountSeeking"
                            value={formData.amountSeeking}
                            onChange={(e) => handleInputChange('amountSeeking', e.target.value)}
                            placeholder="e.g., 1000000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="equityOffering">Equity Offering (%)</Label>
                          <Input
                            id="equityOffering"
                            value={formData.equityOffering}
                            onChange={(e) => handleInputChange('equityOffering', e.target.value)}
                            placeholder="e.g., 15"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="useOfFunds">Use of Funds *</Label>
                        <Textarea
                          id="useOfFunds"
                          value={formData.useOfFunds}
                          onChange={(e) => handleInputChange('useOfFunds', e.target.value)}
                          placeholder="Explain how you plan to use the investment"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="targetClosingDate">Target Closing Date</Label>
                        <Input
                          id="targetClosingDate"
                          type="date"
                          value={formData.targetClosingDate}
                          onChange={(e) => handleInputChange('targetClosingDate', e.target.value)}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Supporting Documents */}
                <div className="mb-8">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-semibold mb-4" 
                    onClick={() => toggleSection('documents')}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      Supporting Documents
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'documents' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {(expandedSection === 'documents') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6 mb-6"
                    >
                      <div>
                        <Label htmlFor="pitchDeck">Pitch Deck (Required) *</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-600 mb-2">Upload your pitch deck (PDF, max 10MB)</p>
                          <Input
                            type="file"
                            accept=".pdf,.pptx,.ppt"
                            onChange={(e) => handleFileUpload('pitchDeck', e.target.files?.[0] || null)}
                            className="max-w-xs mx-auto"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="financialModel">Financial Model (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-600 mb-2">Upload financial projections (Excel/PDF, max 5MB)</p>
                          <Input
                            type="file"
                            accept=".pdf,.xlsx,.xls"
                            onChange={(e) => handleFileUpload('financialModel', e.target.files?.[0] || null)}
                            className="max-w-xs mx-auto"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="executiveSummary">Executive Summary (Optional)</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-600 mb-2">Upload executive summary (PDF, max 5MB)</p>
                          <Input
                            type="file"
                            accept=".pdf,.docx,.doc"
                            onChange={(e) => handleFileUpload('executiveSummary', e.target.files?.[0] || null)}
                            className="max-w-xs mx-auto"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Submit Section */}
                <div className="pt-6 border-t">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">What Happens Next?</h4>
                        <p className="text-sm text-blue-700">
                          After submission, our investment team will review your startup profile within 3-5 business days. 
                          If there's a potential match, we'll guide you through our investor introductions process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-6 text-lg font-semibold"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DealDockApplyPage;
