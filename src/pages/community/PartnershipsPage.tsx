
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  Building2, TrendingUp, Users, GraduationCap, Globe, Heart,
  Sparkles, CheckCircle, ArrowRight, Star, Crown, Handshake,
  Target, Lightbulb, Award, Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PartnershipsPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    partnershipType: "",
    description: "",
    objectives: ""
  });

  const partnershipTypes = [
    {
      title: "Corporate Partners",
      description: "Partner with us to access innovation, talent, and market opportunities while supporting the startup ecosystem",
      icon: Building2,
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      benefits: [
        "Access to vetted startup pipeline",
        "Pilot project opportunities", 
        "Innovation challenges & hackathons",
        "Brand visibility at events",
        "CSR & community impact"
      ],
      examples: ["Industry Mentorship", "Market Access", "Pilot Programs", "Investment Opportunities"]
    },
    {
      title: "Government & Public Sector",
      description: "Collaborate on strategic initiatives aligned with national priorities and economic diversification goals",
      icon: Crown,
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600", 
      benefits: [
        "Policy development collaboration",
        "Strategic initiative alignment",
        "Economic impact measurement",
        "Youth development programs",
        "Innovation ecosystem growth"
      ],
      examples: ["Challenge Programs", "Policy Innovation", "Economic Development", "Talent Programs"]
    },
    {
      title: "Investors (VCs, Angels, CVCs)",
      description: "Join our network to access high-quality deal flow and co-investment opportunities",
      icon: TrendingUp,
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
      benefits: [
        "Curated deal flow access",
        "Co-investment opportunities", 
        "Due diligence support",
        "Portfolio company connections",
        "Market insights & trends"
      ],
      examples: ["Demo Day Participation", "Mentor Network", "Investment Committee", "Portfolio Support"]
    },
    {
      title: "Academic Institutions",
      description: "Partner on youth programs, research collaborations, and talent pipeline development",
      icon: GraduationCap,
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-600",
      benefits: [
        "Student entrepreneur programs",
        "Research collaboration",
        "Faculty engagement",
        "Innovation challenges",
        "Career development pathways"
      ],
      examples: ["Student Incubation", "Research Projects", "Startup Competitions", "Internship Programs"]
    }
  ];

  const whyPartner = [
    {
      title: "Access Innovation",
      description: "Tap into a curated pipeline of vetted startups across key sectors for investment, pilots, or acquisition",
      icon: Lightbulb,
      color: "text-yellow-600"
    },
    {
      title: "Drive Strategic Goals", 
      description: "Collaborate on initiatives aligned with your CSR objectives and national strategic priorities",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Enhance Brand Visibility",
      description: "Position your organization as an innovation leader through event sponsorships and partnerships",
      icon: Star,
      color: "text-purple-600"
    },
    {
      title: "Connect with Talent",
      description: "Engage with bright, entrepreneurial talent from Sharjah's strong academic and startup base",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Shape the Ecosystem",
      description: "Contribute your expertise as a mentor, advisor, or speaker in nurturing the next generation",
      icon: Award,
      color: "text-red-600"
    },
    {
      title: "Measurable Impact",
      description: "Achieve tangible outcomes and ROI through structured partnership programs and KPIs",
      icon: Zap,
      color: "text-orange-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Inquiry Submitted!",
      description: "Thank you for your interest. Our partnerships team will review your inquiry and contact you within 2-3 business days.",
    });
    setFormData({
      organization: "",
      contact: "",
      email: "",
      partnershipType: "",
      description: "",
      objectives: ""
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/20 to-sheraa-secondary/20 border border-sheraa-primary/30 mb-6">
              <Handshake className="w-5 h-5 text-sheraa-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-secondary bg-clip-text text-transparent">
                Shape the Future Together
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-primary bg-clip-text text-transparent leading-tight">
              Collaborate with Sheraa: Invest in Sharjah's Innovative Future
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Sheraa thrives on collaboration. Partner with us to access innovation, support emerging talent, 
              and contribute to the region's economic growth through our diverse partnership ecosystem.
            </p>
          </motion.div>

          {/* Why Partner Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with Sheraa?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join our ecosystem and unlock unique opportunities to drive innovation, access talent, and create measurable impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0.1 * index), duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-sheraa-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <reason.icon className={`w-8 h-8 ${reason.color}`} />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Find the partnership model that aligns with your goals and expertise</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.5 }}
                  className="group"
                >
                  <Card className="relative bg-white/80 dark:bg-sheraa-dark/80 backdrop-blur-sm rounded-3xl border border-sheraa-primary/10 hover:border-sheraa-primary/30 transition-all duration-300 hover:shadow-xl h-full overflow-hidden">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <CardContent className="relative z-10 p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-sheraa-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <type.icon className={`w-8 h-8 ${type.iconColor}`} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            {type.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {type.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sheraa-primary">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sheraa-primary">Partnership Examples:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, idx) => (
                            <span key={idx} className="px-3 py-1 bg-sheraa-light/50 text-sheraa-primary text-xs rounded-full">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <Card className="bg-white/90 dark:bg-sheraa-dark/90 backdrop-blur-sm border border-sheraa-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-2">Partner with Sheraa</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">Let's discuss how we can collaborate to achieve shared goals and create lasting impact</p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Organization Name *</label>
                      <Input
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="Your organization name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Person *</label>
                      <Input
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Partnership Interest *</label>
                      <Input
                        required
                        value={formData.partnershipType}
                        onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                        placeholder="e.g., Corporate, Investment, Academic"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">About Your Organization *</label>
                    <Textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Brief description of your organization, industry, and current focus areas..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Partnership Objectives *</label>
                    <Textarea
                      required
                      value={formData.objectives}
                      onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                      placeholder="What are you hoping to achieve through this partnership? What value can you bring to the Sheraa ecosystem?"
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90">
                    Submit Partnership Inquiry
                    <Handshake className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Current Partners Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-sheraa-primary to-sheraa-secondary text-white border-none overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <CardContent className="relative z-10 p-12">
                <Globe className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h2 className="text-3xl font-bold mb-4">Join Our Esteemed Partners</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  We're proud to work with a growing network of 140+ leading organizations committed to fostering entrepreneurship and innovation in Sharjah.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-sheraa-primary hover:bg-gray-50">
                    <Link to="/about/partners">View All Partners</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/contact">Schedule a Meeting</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PartnershipsPage;
