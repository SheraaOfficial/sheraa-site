
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { FileUpload } from '@/components/ui/file-upload';
import { 
  User, 
  Building, 
  Globe, 
  Camera, 
  Save,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const EnhancedProfileSetupForm: React.FC = () => {
  const { user, profile } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: profile?.first_name || '',
    lastName: profile?.last_name || '',
    headline: profile?.headline || '',
    bio: profile?.bio || '',
    industry: profile?.industry || '',
    company: profile?.company || '',
    location: profile?.location || '',
    website: profile?.website || '',
    linkedinUrl: profile?.linkedin_url || '',
    portfolioData: profile?.portfolio_data || {}
  });
  
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [completionScore, setCompletionScore] = useState(0);

  const industries = [
    'Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 
    'Manufacturing', 'Agriculture', 'Energy', 'Real Estate', 
    'Transportation', 'Entertainment', 'Consulting', 'Other'
  ];

  useEffect(() => {
    calculateCompletionScore();
  }, [formData, avatarFile]);

  const calculateCompletionScore = () => {
    let score = 0;
    const totalFields = 9;
    
    if (formData.firstName) score += 1;
    if (formData.lastName) score += 1;
    if (formData.headline) score += 1;
    if (formData.bio && formData.bio.length > 50) score += 1;
    if (formData.industry) score += 1;
    if (formData.company) score += 1;
    if (formData.location) score += 1;
    if (formData.linkedinUrl) score += 1;
    if (avatarFile || profile?.avatar_url) score += 1;
    
    setCompletionScore(Math.round((score / totalFields) * 100));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpload = async (file: File) => {
    if (!user) return null;
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      return publicUrl;
    } catch (error) {
      console.error('Avatar upload failed:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    try {
      let avatarUrl = profile?.avatar_url;
      
      if (avatarFile) {
        avatarUrl = await handleAvatarUpload(avatarFile);
      }

      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          headline: formData.headline,
          bio: formData.bio,
          industry: formData.industry,
          company: formData.company,
          location: formData.location,
          website: formData.website,
          linkedin_url: formData.linkedinUrl,
          avatar_url: avatarUrl,
          portfolio_data: formData.portfolioData,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated successfully!",
        description: `Your profile is now ${completionScore}% complete.`
      });

      // Refresh the page to show updated profile
      window.location.reload();
      
    } catch (error) {
      console.error('Profile update failed:', error);
      toast({
        title: "Profile update failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const getCompletionColor = () => {
    if (completionScore >= 80) return 'text-green-600';
    if (completionScore >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCompletionIcon = () => {
    if (completionScore >= 80) return <CheckCircle className="w-5 h-5 text-green-600" />;
    return <AlertCircle className="w-5 h-5 text-yellow-600" />;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Progress Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Complete Your Profile
            </CardTitle>
            <div className="flex items-center gap-2">
              {getCompletionIcon()}
              <span className={`font-semibold ${getCompletionColor()}`}>
                {completionScore}% Complete
              </span>
            </div>
          </div>
          <Progress value={completionScore} className="mt-4" />
        </CardHeader>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Avatar Upload */}
            <div>
              <Label>Profile Picture</Label>
              <FileUpload
                accept="image/*"
                onFileSelect={setAvatarFile}
                maxSize={2 * 1024 * 1024} // 2MB
                description="Upload a profile picture (JPG, PNG, max 2MB)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="headline">Professional Headline</Label>
              <Input
                id="headline"
                value={formData.headline}
                onChange={(e) => handleInputChange('headline', e.target.value)}
                placeholder="e.g., Serial Entrepreneur & Tech Innovation Expert"
              />
            </div>

            <div>
              <Label htmlFor="bio">About Me</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about your background, experience, and what drives you as an entrepreneur..."
                rows={4}
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.bio.length}/500 characters (minimum 50 recommended)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Professional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="company">Current Company/Startup</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your current company or startup"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="City, Country"
              />
            </div>
          </CardContent>
        </Card>

        {/* Online Presence */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Online Presence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
              <Input
                id="linkedinUrl"
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={saving} size="lg">
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Profile'}
          </Button>
        </div>
      </form>

      {/* Profile Completion Tips */}
      {completionScore < 80 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Complete your profile to unlock more opportunities!</h3>
            <div className="space-y-1 text-sm text-blue-800">
              {!formData.headline && <p>• Add a professional headline</p>}
              {!formData.bio || formData.bio.length < 50 && <p>• Write a compelling bio (at least 50 characters)</p>}
              {!formData.industry && <p>• Select your industry</p>}
              {!formData.company && <p>• Add your current company</p>}
              {!formData.location && <p>• Add your location</p>}
              {!formData.linkedinUrl && <p>• Connect your LinkedIn profile</p>}
              {!avatarFile && !profile?.avatar_url && <p>• Upload a profile picture</p>}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EnhancedProfileSetupForm;
