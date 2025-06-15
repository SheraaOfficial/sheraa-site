
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileUpload } from '@/components/ui/file-upload';

// Step 1: Personal Information
export const PersonalInformationStep: React.FC<{
  data: any;
  onUpdate: (data: any) => void;
  isValid: boolean;
}> = ({ data, onUpdate, isValid }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={data.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            placeholder="Your first name"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={data.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={data.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={data.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+971 XX XXX XXXX"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          id="nationality"
          value={data.nationality || ''}
          onChange={(e) => handleChange('nationality', e.target.value)}
          placeholder="Your nationality"
        />
      </div>

      <div>
        <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
        <Input
          id="linkedinProfile"
          value={data.linkedinProfile || ''}
          onChange={(e) => handleChange('linkedinProfile', e.target.value)}
          placeholder="https://linkedin.com/in/yourname"
        />
      </div>
    </div>
  );
};

// Step 2: Startup Information
export const StartupInformationStep: React.FC<{
  data: any;
  onUpdate: (data: any) => void;
  isValid: boolean;
}> = ({ data, onUpdate, isValid }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  const industries = [
    'FinTech', 'HealthTech', 'EdTech', 'AgriTech', 'Sustainability', 
    'Creative Industries', 'Advanced Manufacturing', 'Food & Beverage',
    'Retail', 'Travel & Tourism', 'Deep Tech', 'Other'
  ];

  const stages = [
    'Idea Stage', 'MVP', 'Early Revenue', 'Growth', 'Scale'
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startupName">Startup Name *</Label>
          <Input
            id="startupName"
            value={data.startupName || ''}
            onChange={(e) => handleChange('startupName', e.target.value)}
            placeholder="Your startup name"
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={data.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://yourcompany.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="startupDescription">Startup Description *</Label>
        <Textarea
          id="startupDescription"
          value={data.startupDescription || ''}
          onChange={(e) => handleChange('startupDescription', e.target.value)}
          placeholder="Describe your startup and what problem you solve..."
          rows={4}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="industry">Industry *</Label>
          <Select value={data.industry || ''} onValueChange={(value) => handleChange('industry', value)}>
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
          <Label htmlFor="stage">Stage *</Label>
          <Select value={data.stage || ''} onValueChange={(value) => handleChange('stage', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select stage" />
            </SelectTrigger>
            <SelectContent>
              {stages.map(stage => (
                <SelectItem key={stage} value={stage}>{stage}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="teamSize">Team Size</Label>
          <Input
            id="teamSize"
            value={data.teamSize || ''}
            onChange={(e) => handleChange('teamSize', e.target.value)}
            placeholder="Number of team members"
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={data.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="City, Country"
          />
        </div>
      </div>
    </div>
  );
};

// Step 3: Business Model & Traction
export const BusinessModelStep: React.FC<{
  data: any;
  onUpdate: (data: any) => void;
  isValid: boolean;
}> = ({ data, onUpdate, isValid }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessModel">Business Model *</Label>
        <Textarea
          id="businessModel"
          value={data.businessModel || ''}
          onChange={(e) => handleChange('businessModel', e.target.value)}
          placeholder="How do you make money? Describe your revenue streams..."
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="targetMarket">Target Market *</Label>
        <Textarea
          id="targetMarket"
          value={data.targetMarket || ''}
          onChange={(e) => handleChange('targetMarket', e.target.value)}
          placeholder="Who are your customers? Describe your target market..."
          rows={3}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="currentRevenue">Current Monthly Revenue</Label>
          <Input
            id="currentRevenue"
            value={data.currentRevenue || ''}
            onChange={(e) => handleChange('currentRevenue', e.target.value)}
            placeholder="USD amount"
          />
        </div>
        <div>
          <Label htmlFor="customerCount">Number of Customers</Label>
          <Input
            id="customerCount"
            value={data.customerCount || ''}
            onChange={(e) => handleChange('customerCount', e.target.value)}
            placeholder="Total customers"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="fundingHistory">Previous Funding</Label>
        <Textarea
          id="fundingHistory"
          value={data.fundingHistory || ''}
          onChange={(e) => handleChange('fundingHistory', e.target.value)}
          placeholder="Any previous funding rounds or investments..."
          rows={3}
        />
      </div>
    </div>
  );
};

// Step 4: Program Fit & Motivation
export const ProgramFitStep: React.FC<{
  data: any;
  onUpdate: (data: any) => void;
  isValid: boolean;
}> = ({ data, onUpdate, isValid }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="whyProgram">Why this program? *</Label>
        <Textarea
          id="whyProgram"
          value={data.whyProgram || ''}
          onChange={(e) => handleChange('whyProgram', e.target.value)}
          placeholder="Why is this program right for your startup?"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="expectedOutcomes">Expected Outcomes *</Label>
        <Textarea
          id="expectedOutcomes"
          value={data.expectedOutcomes || ''}
          onChange={(e) => handleChange('expectedOutcomes', e.target.value)}
          placeholder="What do you hope to achieve through this program?"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="challenges">Main Challenges</Label>
        <Textarea
          id="challenges"
          value={data.challenges || ''}
          onChange={(e) => handleChange('challenges', e.target.value)}
          placeholder="What are the biggest challenges your startup faces?"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="commitment">Commitment Level</Label>
        <Textarea
          id="commitment"
          value={data.commitment || ''}
          onChange={(e) => handleChange('commitment', e.target.value)}
          placeholder="Confirm your availability and commitment to the program..."
          rows={3}
        />
      </div>
    </div>
  );
};

// Step 5: Documents & Final Review
export const DocumentsStep: React.FC<{
  data: any;
  onUpdate: (data: any) => void;
  isValid: boolean;
}> = ({ data, onUpdate, isValid }) => {
  const handleFileUpload = (field: string, file: File | null) => {
    onUpdate({ [field]: file });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Pitch Deck (Required) *</Label>
        <FileUpload
          accept=".pdf,.ppt,.pptx"
          onFileSelect={(file) => handleFileUpload('pitchDeck', file)}
          maxSize={10 * 1024 * 1024} // 10MB
          description="Upload your pitch deck (PDF or PowerPoint, max 10MB)"
        />
      </div>

      <div>
        <Label>Business Plan (Optional)</Label>
        <FileUpload
          accept=".pdf,.doc,.docx"
          onFileSelect={(file) => handleFileUpload('businessPlan', file)}
          maxSize={5 * 1024 * 1024} // 5MB
          description="Upload your business plan (PDF or Word, max 5MB)"
        />
      </div>

      <div>
        <Label>Financial Projections (Optional)</Label>
        <FileUpload
          accept=".pdf,.xlsx,.xls"
          onFileSelect={(file) => handleFileUpload('financials', file)}
          maxSize={5 * 1024 * 1024} // 5MB
          description="Upload financial projections (PDF or Excel, max 5MB)"
        />
      </div>

      <div>
        <Label htmlFor="demoLink">Product Demo Link</Label>
        <Input
          id="demoLink"
          value={data.demoLink || ''}
          onChange={(e) => onUpdate({ demoLink: e.target.value })}
          placeholder="Link to product demo or video"
        />
      </div>

      <div>
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          value={data.additionalInfo || ''}
          onChange={(e) => onUpdate({ additionalInfo: e.target.value })}
          placeholder="Any additional information you'd like to share..."
          rows={3}
        />
      </div>
    </div>
  );
};
