
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { X, Plus, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface StartupSubmissionFormProps {
  trigger?: React.ReactNode;
}

const StartupSubmissionForm: React.FC<StartupSubmissionFormProps> = ({ trigger }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    foundedYear: '',
    sector: '',
    stage: '',
    location: '',
    teamSize: '',
    fundingRaised: '',
    description: '',
    founderName: '',
    founderEmail: '',
    founderLinkedIn: '',
    phoneNumber: '',
    sheraaConnection: '',
    achievements: '',
    lookingFor: ''
  });

  const sectors = [
    'Sustainability', 'EdTech', 'HealthTech', 'FinTech', 'AgriTech', 
    'Creative Industries', 'Advanced Manufacturing', 'Food & Beverage',
    'Retail', 'Travel & Tourism', 'Deep Tech', 'Other'
  ];

  const stages = [
    'Idea Stage', 'Pre-Seed', 'Seed', 'Series A', 'Series B+', 'Growth Stage'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your submission. We'll review your startup and get back to you within 5 business days.",
    });
    
    setIsSubmitting(false);
    setOpen(false);
    setFormData({
      companyName: '', website: '', foundedYear: '', sector: '', stage: '',
      location: '', teamSize: '', fundingRaised: '', description: '',
      founderName: '', founderEmail: '', founderLinkedIn: '', phoneNumber: '',
      sheraaConnection: '', achievements: '', lookingFor: ''
    });
  };

  const defaultTrigger = (
    <Button className="bg-sheraa-primary hover:bg-sheraa-primary/90 text-white" size="lg">
      <Plus className="w-4 h-4 mr-2" />
      Add Your Startup
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building className="w-5 h-5 text-sheraa-primary" />
            Submit Your Startup to Sheraa Directory
          </DialogTitle>
          <DialogDescription>
            Join our portfolio showcase and connect with the Sheraa ecosystem. Fill out the form below to get your startup featured.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://..."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="foundedYear">Founded Year</Label>
                  <Input
                    id="foundedYear"
                    type="number"
                    min="2000"
                    max="2024"
                    value={formData.foundedYear}
                    onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="sector">Sector *</Label>
                  <Select value={formData.sector} onValueChange={(value) => handleInputChange('sector', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map(sector => (
                        <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="stage">Stage *</Label>
                  <Select value={formData.stage} onValueChange={(value) => handleInputChange('stage', value)}>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
                <div>
                  <Label htmlFor="teamSize">Team Size</Label>
                  <Input
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange('teamSize', e.target.value)}
                    placeholder="e.g., 5-10 employees"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Company Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Brief description of your startup and what problem you solve..."
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Founder Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Founder Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="founderName">Founder Name *</Label>
                  <Input
                    id="founderName"
                    value={formData.founderName}
                    onChange={(e) => handleInputChange('founderName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="founderEmail">Email *</Label>
                  <Input
                    id="founderEmail"
                    type="email"
                    value={formData.founderEmail}
                    onChange={(e) => handleInputChange('founderEmail', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="founderLinkedIn">LinkedIn Profile</Label>
                  <Input
                    id="founderLinkedIn"
                    value={formData.founderLinkedIn}
                    onChange={(e) => handleInputChange('founderLinkedIn', e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="sheraaConnection">Connection to Sheraa</Label>
                <Select value={formData.sheraaConnection} onValueChange={(value) => handleInputChange('sheraaConnection', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your connection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s3-graduate">S3 Incubator Graduate</SelectItem>
                    <SelectItem value="asc-participant">Access Sharjah Challenge Participant</SelectItem>
                    <SelectItem value="dojo-participant">Startup Dojo Participant</SelectItem>
                    <SelectItem value="community-member">Community Member</SelectItem>
                    <SelectItem value="sef-participant">SEF Participant</SelectItem>
                    <SelectItem value="none">No prior connection</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="achievements">Key Achievements</Label>
                <Textarea
                  id="achievements"
                  value={formData.achievements}
                  onChange={(e) => handleInputChange('achievements', e.target.value)}
                  placeholder="Awards, funding raised, major partnerships, user milestones..."
                  rows={2}
                />
              </div>
              
              <div>
                <Label htmlFor="lookingFor">What are you looking for?</Label>
                <Textarea
                  id="lookingFor"
                  value={formData.lookingFor}
                  onChange={(e) => handleInputChange('lookingFor', e.target.value)}
                  placeholder="Funding, partnerships, mentorship, market access..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-sheraa-primary hover:bg-sheraa-primary/90">
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StartupSubmissionForm;
