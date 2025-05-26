
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, Target, Heart, Globe, Coffee, Zap, 
  MapPin, Clock, DollarSign, Star, ArrowRight,
  Briefcase, GraduationCap, Code, Megaphone,
  UserCheck, Upload, Send, CheckCircle, TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CareersPage: React.FC = () => {
  const { toast } = useToast();

  const values = [
    {
      title: "Founder-First Mindset",
      description: "We put entrepreneurs at the center of everything we do. Every decision is made with founders in mind.",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Collaborative Spirit", 
      description: "We believe the best ideas come from diverse minds working together towards a common goal.",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Impact-Driven",
      description: "Every role contributes to building the next generation of successful startups and entrepreneurs.",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Global Perspective",
      description: "We think globally while acting locally, connecting Sharjah to the worldwide startup ecosystem.",
      icon: Globe,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Market-leading compensation packages",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Flexible Work",
      description: "Hybrid work options and flexible hours",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses and conferences",
      icon: GraduationCap,
      color: "text-purple-600"
    },
    {
      title: "Health Coverage",
      description: "Comprehensive health insurance",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Startup Exposure",
      description: "Work directly with innovative startups",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      title: "Career Growth",
      description: "Clear progression paths and mentorship",
      icon: TrendingUp,
      color: "text-indigo-600"
    }
  ];

  const openRoles = [
    {
      title: "Senior Program Manager",
      department: "Programs",
      type: "Full-time",
      location: "Sharjah, UAE",
      description: "Lead our flagship incubation programs and drive startup success",
      icon: Briefcase,
      requirements: ["5+ years program management", "Startup ecosystem experience", "Strong leadership skills"]
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Full-time", 
      location: "Sharjah, UAE",
      description: "Drive awareness and engagement across our digital channels",
      icon: Megaphone,
      requirements: ["3+ years marketing experience", "Digital marketing expertise", "Creative thinking"]
    },
    {
      title: "Community Manager",
      department: "Community",
      type: "Full-time",
      location: "Sharjah, UAE", 
      description: "Build and nurture our thriving entrepreneur community",
      icon: Users,
      requirements: ["Community building experience", "Excellent communication", "Event management skills"]
    },
    {
      title: "Tech Product Manager",
      department: "Technology",
      type: "Full-time",
      location: "Sharjah, UAE",
      description: "Drive our digital platform and entrepreneur-facing tools",
      icon: Code,
      requirements: ["Product management experience", "Technical background", "User-centric approach"]
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 1 week.",
    });
  };

  return (
    <MainLayout>
      <div className="relative bg-gradient-to-br from-white via-sheraa-light/10 to-white dark:from-sheraa-dark/30 dark:via-sheraa-dark/50 dark:to-sheraa-dark/30 min-h-screen">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sheraa-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-sheraa-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Star className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Join Our Mission
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Build the Future of Entrepreneurship
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join a team that's transforming how startups are built, funded, and scaled. At Sheraa, you're not just taking a job—you're becoming part of a movement that's shaping the future of innovation in the Middle East.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
                <a href="#open-roles" className="flex items-center gap-2">
                  View Open Roles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                <a href="#application" className="flex items-center gap-2">
                  Submit General Application
                  <Send className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values Drive Everything We Do</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These aren't just words on a wall. They guide every decision we make and every interaction we have.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl ${value.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why You'll Love Working Here</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We believe in taking care of our team so they can take care of our entrepreneurs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center p-4">
                    <benefit.icon className={`w-8 h-8 mx-auto mb-3 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                    <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Open Roles Section */}
          <motion.section
            id="open-roles"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to make an impact? Here are the roles we're actively hiring for.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {openRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/20 hover:border-sheraa-primary/40 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-sheraa-primary/10 flex items-center justify-center flex-shrink-0">
                          <role.icon className="w-6 h-6 text-sheraa-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold">{role.title}</h3>
                            <Badge variant="outline" className="text-xs">{role.type}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {role.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {role.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{role.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {role.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                        Apply for This Role
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Application Section */}
          <motion.section
            id="application"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <UserCheck className="w-16 h-16 mx-auto text-sheraa-primary mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Role?</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      We're always looking for exceptional talent. Submit a general application and we'll reach out when something that fits your skills opens up.
                    </p>
                  </div>
                  
                  <form onSubmit={handleApplicationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input placeholder="+971 XX XXX XXXX" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Area of Interest</label>
                      <Input placeholder="e.g., Marketing, Programs, Technology" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Tell us about yourself *</label>
                      <Textarea 
                        placeholder="What makes you excited about working at Sheraa? What unique perspective would you bring to our team?"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Resume/CV *</label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Click to upload or drag and drop your resume
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                      </div>
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                      Submit Application
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary/5 to-sheraa-teal/5 border-sheraa-primary/20">
              <CardContent className="p-8">
                <Coffee className="w-16 h-16 mx-auto text-sheraa-primary mb-6" />
                <h2 className="text-2xl font-bold mb-4">Questions About Working at Sheraa?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  We'd love to chat! Whether you have questions about our culture, growth opportunities, 
                  or what it's really like to work here, don't hesitate to reach out.
                </p>
                <Button asChild variant="outline" size="lg" className="border-sheraa-primary/30 text-sheraa-primary hover:bg-sheraa-primary/10">
                  <a href="mailto:careers@sheraa.ae" className="flex items-center gap-2">
                    Email Our HR Team
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CareersPage;
