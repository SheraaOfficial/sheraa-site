
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  Ticket, Users, Building, Star, Check, Calendar, 
  MapPin, Clock, Mail, Phone, User, Briefcase 
} from 'lucide-react';

const SEFRegisterPage: React.FC = () => {
  const [selectedPass, setSelectedPass] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    industry: '',
    interests: [] as string[],
    dietary: '',
    newsletter: false,
    updates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const passes = [
    {
      id: 'standard',
      name: 'Standard Pass',
      price: 'Free',
      description: 'Full access to SEF main activities',
      features: [
        'Access to all main stages',
        'Workshop participation',
        'Networking areas',
        'SEF Eats & Souq',
        'Welcome kit',
        'Digital networking app'
      ],
      color: 'border-blue-200 bg-blue-50',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'investor',
      name: 'Investor Pass',
      price: 'By Invitation',
      description: 'Exclusive access for qualified investors',
      features: [
        'Everything in Standard Pass',
        'Investor Lounge access',
        'Curated startup meetings',
        'Private dining events',
        'VIP parking',
        'Dedicated concierge'
      ],
      color: 'border-gold-200 bg-gold-50',
      badge: 'Exclusive',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 'startup',
      name: 'Startup Showcase Pass',
      price: 'Application Required',
      description: 'For startups participating in showcase',
      features: [
        'Everything in Standard Pass',
        'Startup Town booth space',
        'Pitch competition entry',
        'Mentor matching',
        'Media exposure',
        'Post-event follow-up'
      ],
      color: 'border-green-200 bg-green-50',
      badge: 'Apply Now',
      badgeColor: 'bg-green-500'
    }
  ];

  const interests = [
    'EdTech', 'FinTech', 'HealthTech', 'Sustainability', 'AI/ML',
    'Blockchain', 'E-commerce', 'SaaS', 'Mobile Apps', 'IoT',
    'Creative Industries', 'Manufacturing', 'AgriTech', 'Real Estate'
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPass) {
      toast({
        title: "Please select a pass type",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Registration Successful!",
        description: "Check your email for confirmation details."
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        industry: '',
        interests: [],
        dietary: '',
        newsletter: false,
        updates: false
      });
      setSelectedPass('');
      
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout
      seoTitle="Register for SEF 2026 - Sharjah Entrepreneurship Festival"
      seoDescription="Secure your pass to the region's largest entrepreneurship festival. Free registration available."
    >
      <div className="bg-white dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-sheraa-sef-primary/10 via-sheraa-sef-secondary/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-secondary/20 border border-sheraa-sef-primary/30 mb-8">
                <Ticket className="w-5 h-5 text-sheraa-sef-primary" />
                <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent">
                  SEF 2026 Registration
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-secondary to-sheraa-sef-primary bg-clip-text text-transparent">
                Secure Your Spot at SEF 2026
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Join 14,000+ entrepreneurs, investors, and innovators at the region's most impactful entrepreneurship festival.
              </p>
              
              {/* Event Details */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-sheraa-sef-primary" />
                  <span>January 31 - February 1, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sheraa-sef-primary" />
                  <span>SRTIP, Sharjah</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sheraa-sef-primary" />
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pass Selection */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-secondary bg-clip-text text-transparent">Pass Type</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Select the pass that best fits your goals and get access to tailored experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {passes.map((pass, index) => (
                <motion.div
                  key={pass.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="relative"
                >
                  <Card 
                    className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedPass === pass.id 
                        ? 'border-sheraa-sef-primary shadow-lg ring-2 ring-sheraa-sef-primary/20' 
                        : pass.color
                    }`}
                    onClick={() => setSelectedPass(pass.id)}
                  >
                    {pass.badge && (
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 ${pass.badgeColor} text-white text-sm rounded-full font-bold`}>
                        {pass.badge}
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold">{pass.name}</CardTitle>
                      <div className="text-3xl font-bold text-sheraa-sef-primary">{pass.price}</div>
                      <p className="text-gray-600 dark:text-gray-400">{pass.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3">
                        {pass.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {selectedPass === pass.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-4 p-3 bg-sheraa-sef-primary/10 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-sheraa-sef-primary" />
                            <span className="text-sheraa-sef-primary font-medium">Selected</span>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Registration Form */}
            {selectedPass && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Complete Your Registration</CardTitle>
                    <p className="text-center text-gray-600">Fill in your details to secure your SEF 2026 pass</p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="position">Position/Title</Label>
                          <Input
                            id="position"
                            value={formData.position}
                            onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Areas of Interest (Select all that apply)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                          {interests.map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={(checked) => handleInterestChange(interest, !!checked)}
                              />
                              <Label htmlFor={interest} className="text-sm">{interest}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="dietary">Dietary Restrictions/Preferences</Label>
                        <Textarea
                          id="dietary"
                          placeholder="Please let us know about any dietary restrictions or food allergies..."
                          value={formData.dietary}
                          onChange={(e) => setFormData(prev => ({ ...prev, dietary: e.target.value }))}
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: !!checked }))}
                          />
                          <Label htmlFor="newsletter">Subscribe to Sheraa newsletter for latest updates</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="updates"
                            checked={formData.updates}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, updates: !!checked }))}
                          />
                          <Label htmlFor="updates">Receive SEF event updates and reminders</Label>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-sheraa-sef-primary hover:bg-sheraa-sef-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing Registration...' : 'Complete Registration'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SEFRegisterPage;
