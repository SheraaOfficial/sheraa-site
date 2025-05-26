
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MainLayout from '@/components/layouts/MainLayout';

const BookConsultation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Consultation booked!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });
    }, 1500);
  };

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <Link to="/programs" className="flex items-center gap-2 text-sheraa-primary hover:text-sheraa-secondary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Programs</span>
              </Link>
            </div>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                  Book a Consultation
                </CardTitle>
                <CardDescription>
                  Schedule a free 30-minute consultation with our program advisors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+971 50 123 4567"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="program">Program of Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="s3">S3 Incubator</SelectItem>
                          <SelectItem value="start-young">Start Young</SelectItem>
                          <SelectItem value="startup-dojo">Startup Dojo</SelectItem>
                          <SelectItem value="access-sharjah">Access Sharjah Challenge</SelectItem>
                          <SelectItem value="sme">SME Support</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Startup Stage</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Idea Stage</SelectItem>
                          <SelectItem value="mvp">MVP Development</SelectItem>
                          <SelectItem value="early">Early Traction</SelectItem>
                          <SelectItem value="growth">Growth Stage</SelectItem>
                          <SelectItem value="scale">Scaling</SelectItem>
                          <SelectItem value="established">Established Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="preferredDate"
                          type="date"
                          className="pl-10"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <Clock className="w-4 h-4 mr-2" />
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time.toLowerCase().replace(/[:\s]/g, '')}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project</Label>
                    <Textarea
                      id="message"
                      placeholder="Briefly describe your startup idea, current challenges, or what you'd like to discuss..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-sheraa-light/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">What to expect:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 30-minute personalized consultation</li>
                      <li>• Program recommendations based on your needs</li>
                      <li>• Answers to your questions about Sheraa</li>
                      <li>• Next steps in your entrepreneurial journey</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Booking consultation..." : "Book Free Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookConsultation;
