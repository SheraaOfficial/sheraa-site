import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Users, Layout, Award, Calendar, MapPin, FileUp, Upload, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
type OpportunityType = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  requirements: string[];
  deadlines?: string;
  contactInfo?: string;
  buttonText: string;
  buttonLink: string;
  icon: React.ElementType;
  requiresDocuments?: boolean;
};
const SEFBePartPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("speak");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<{
    [key: string]: File | null;
  }>({
    resume: null,
    identification: null,
    portfolio: null
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const {
    toast
  } = useToast();

  // Opportunities data
  const opportunities: Record<string, OpportunityType[]> = {
    speak: [{
      id: "keynote",
      title: "Keynote Speaker",
      description: "Share your insights, experience, and vision with the SEF community through a keynote presentation on one of our main stages.",
      benefits: ["Address 1000+ attendees on the Impact Stage", "Professional recording of your session", "Media coverage and promotion", "VIP access to all festival areas", "Networking opportunities with fellow speakers and VIPs"],
      requirements: ["Recognized industry leader, successful entrepreneur, or thought leader", "Compelling story or insights relevant to the entrepreneurial journey", "Previous public speaking experience preferred", "Ability to deliver an engaging 20-30 minute presentation"],
      deadlines: "Speaker applications close on September 30, 2025",
      contactInfo: "For inquiries: speakers@sheraa.ae",
      buttonText: "Apply to Speak",
      buttonLink: "#apply-form",
      icon: Mic,
      requiresDocuments: true
    }, {
      id: "panel",
      title: "Panel Participant",
      description: "Join a curated discussion with fellow experts to explore key entrepreneurship topics, industry trends, or emerging opportunities.",
      benefits: ["Share your expertise alongside other thought leaders", "Professional recording of your panel", "Media features and promotion", "Full access to the festival", "Dedicated speaker support team"],
      requirements: ["Subject matter expertise in relevant topic areas", "Professional experience in entrepreneurship, investment, or innovation", "Ability to articulate insights clearly and engage in meaningful discussion", "Available for pre-panel briefing and coordination"],
      deadlines: "Panel participant applications close on October 15, 2025",
      contactInfo: "For inquiries: speakers@sheraa.ae",
      buttonText: "Join a Panel",
      buttonLink: "#apply-form",
      icon: Users
    }, {
      id: "workshop",
      title: "Workshop Facilitator",
      description: "Lead a hands-on workshop or masterclass that provides practical skills, tools, or knowledge for entrepreneurs at different stages.",
      benefits: ["Showcase your expertise and methodology", "Direct impact on entrepreneurs' skill development", "Workshop materials included in digital resources", "Promotion as a subject matter expert", "Festival pass and networking opportunities"],
      requirements: ["Practical expertise in a relevant business or technical area", "Experience in teaching, training, or workshop facilitation", "Interactive and engaging presentation style", "Ability to deliver tangible value in a 60-90 minute session"],
      deadlines: "Workshop proposals due by October 30, 2025",
      contactInfo: "For inquiries: workshops@sheraa.ae",
      buttonText: "Propose a Workshop",
      buttonLink: "#apply-form",
      icon: Layout
    }],
    exhibit: [{
      id: "startup",
      title: "Startup Exhibitor",
      description: "Showcase your startup at Startup Town, the heart of SEF where promising ventures connect with investors, customers, and partners.",
      benefits: ["Branded exhibition space for two days", "Inclusion in the startup directory", "Opportunity to participate in pitch competitions", "Access to Investor Connect program", "2 exhibitor passes and discounted team tickets"],
      requirements: ["Tech-enabled startup with market traction", "Incorporated business with an MVP/product", "Founder or key team member present during exhibition hours", "Prepared pitch and marketing materials"],
      deadlines: "Exhibition applications close on December 15, 2025",
      contactInfo: "For inquiries: startups@sheraa.ae",
      buttonText: "Apply to Exhibit",
      buttonLink: "#apply-form",
      icon: Layout,
      requiresDocuments: true
    }, {
      id: "ecosystem",
      title: "Ecosystem Partner",
      description: "Represent your incubator, accelerator, university program, or support organization with a dedicated presence at the festival.",
      benefits: ["Branded booth space in the Ecosystem Zone", "Opportunity to host a side event or meetup", "Featured in ecosystem partner communications", "Access to startup database for recruitment", "3 representative passes"],
      requirements: ["Active organization supporting entrepreneurial growth", "Clear value proposition for entrepreneurs", "Ability to staff booth during festival hours", "Prepared to engage with visitors and startups"],
      deadlines: "Partner applications close on November 30, 2025",
      contactInfo: "For inquiries: partners@sheraa.ae",
      buttonText: "Become a Partner",
      buttonLink: "#apply-form",
      icon: Users
    }, {
      id: "creative",
      title: "Creative Showcase",
      description: "Display innovative products, artworks, designs, or creative business concepts in the dedicated Creative Zone.",
      benefits: ["Showcase space in the Creative Zone", "Opportunity to conduct demonstrations", "Featured in creative economy spotlights", "Network with creative industry partners", "2 exhibitor passes"],
      requirements: ["Original creative work or innovative products", "Business model related to creative economy", "Interactive or visually engaging display", "Creator or representative present during showcase hours"],
      deadlines: "Creative submissions due by December 1, 2025",
      contactInfo: "For inquiries: creative@sheraa.ae",
      buttonText: "Submit Creative Work",
      buttonLink: "#apply-form",
      icon: Layout
    }],
    sponsor: [{
      id: "main",
      title: "Main Partner",
      description: "Position your organization as a key enabler of entrepreneurship and innovation in the region through comprehensive festival partnership.",
      benefits: ["Premium branding across all festival assets", "Main stage speaking opportunity", "Dedicated exhibition area (6x6m)", "VIP access for 10 representatives", "Co-branded content and media coverage", "First right of refusal for next year"],
      requirements: ["Alignment with entrepreneurship and innovation values", "Commitment to supporting the startup ecosystem", "Senior leadership engagement", "Promotional activation plan"],
      contactInfo: "For partnership details: partnerships@sheraa.ae",
      buttonText: "Discuss Partnership",
      buttonLink: "#apply-form",
      icon: Award,
      requiresDocuments: true
    }, {
      id: "zone",
      title: "Zone Sponsor",
      description: "Sponsor one of SEF's specialized experience zones, aligning your brand with specific themes like tech innovation, sustainability, or creative industries.",
      benefits: ["Naming rights for a festival zone", "Branded space within the zone", "Programming input for zone activities", "5 sponsor passes", "Targeted audience engagement", "Zone-specific media coverage"],
      requirements: ["Brand alignment with zone theme", "Commitment to enhancing zone experience", "Promotional assets and staff", "Activation plan for the zone"],
      contactInfo: "For zone sponsorship: partnerships@sheraa.ae",
      buttonText: "Sponsor a Zone",
      buttonLink: "#apply-form",
      icon: Layout
    }, {
      id: "competition",
      title: "Competition Sponsor",
      description: "Support entrepreneurial talent by sponsoring one of SEF's pitch competitions, hackathons, or challenges with prizes and recognition.",
      benefits: ["Naming rights for the competition", "Jury participation opportunity", "Brand visibility in all competition materials", "Direct engagement with participating startups", "Award presentation on stage", "3 sponsor passes"],
      requirements: ["Prize contribution (cash or in-kind)", "Judge representative (if desired)", "Support in competition promotion", "Commitment to follow-up with winners"],
      contactInfo: "For competition details: competitions@sheraa.ae",
      buttonText: "Sponsor a Competition",
      buttonLink: "#apply-form",
      icon: Award
    }],
    volunteer: [{
      id: "event",
      title: "Event Volunteer",
      description: "Support the smooth execution of SEF by assisting with logistics, attendee experience, and general festival operations.",
      benefits: ["Full festival access when not on duty", "Official SEF volunteer certificate", "Exclusive volunteer t-shirt and swag", "Networking opportunities with speakers and partners", "Training in event management", "Food and refreshments during shifts"],
      requirements: ["Available for at least 2 shifts (4-6 hours each)", "Customer service orientation", "Fluent in English (Arabic a plus)", "Attendance at pre-event training session", "Minimum age of 18 years"],
      deadlines: "Volunteer applications close on December 20, 2025",
      contactInfo: "For inquiries: volunteers@sheraa.ae",
      buttonText: "Join as Volunteer",
      buttonLink: "#apply-form",
      icon: Users,
      requiresDocuments: true
    }, {
      id: "student",
      title: "Student Ambassador",
      description: "Represent SEF at your university and help mobilize student participation through campus activities and promotion.",
      benefits: ["Leadership experience in event promotion", "SEF Ambassador certificate and reference", "Exclusive training and development sessions", "VIP access to certain festival areas", "Networking with industry leaders", "Special ambassador merchandise"],
      requirements: ["Currently enrolled student in UAE university", "Strong communication skills", "Active on campus and social media", "Able to organize at least one pre-event campus activity", "Passion for entrepreneurship"],
      deadlines: "Ambassador applications close on November 15, 2025",
      contactInfo: "For inquiries: campus@sheraa.ae",
      buttonText: "Become an Ambassador",
      buttonLink: "#apply-form",
      icon: Award
    }, {
      id: "media",
      title: "Content Creator",
      description: "Capture the SEF experience through photography, videography, social media content, or written articles as part of our media team.",
      benefits: ["Portfolio-building opportunity", "Byline/credit on official content", "Access to exclusive areas and moments", "Media team mentorship", "Content creator certificate", "Networking with industry professionals"],
      requirements: ["Portfolio of previous work", "Own equipment (camera, smartphone, etc.)", "Ability to create and edit content quickly", "Available for pre-event briefing", "Active on relevant social platforms"],
      deadlines: "Content creator applications close on December 15, 2025",
      contactInfo: "For inquiries: media@sheraa.ae",
      buttonText: "Join Media Team",
      buttonLink: "#apply-form",
      icon: Layout
    }]
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (event.target.files && event.target.files[0]) {
      setFiles(prev => ({
        ...prev,
        [type]: event.target.files![0]
      }));
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!agreeTerms) {
      toast({
        title: "Please agree to the terms",
        description: "You must accept the terms and conditions to submit your application.",
        variant: "destructive"
      });
      return;
    }

    // Validate required fields
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      toast({
        title: "Missing required information",
        description: "Please fill in all required fields and try again.",
        variant: "destructive"
      });
      return;
    }

    // Simulating form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application submitted successfully!",
        description: "We've received your application and will contact you soon."
      });
      form.reset();
      setFiles({
        resume: null,
        identification: null,
        portfolio: null
      });
      setAgreeTerms(false);
    }, 1500);
  };
  return <MainLayout backgroundStyle={{
    background: "linear-gradient(to right, rgba(110, 89, 165, 0.05), rgba(26, 31, 44, 0.05))"
  }}>
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }}>
            <Sparkles>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sheraa-primary mb-4">
                Be Part of SEF'26
              </h1>
            </Sparkles>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Contribute to the region's premier entrepreneurship festival as a speaker, exhibitor, sponsor, or volunteer
            </p>
          </motion.div>
        </div>
        
        {/* Event Overview */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.7,
        delay: 0.3
      }} className="mb-16">
          <div className="bg-gradient-to-r from-sheraa-primary/10 to-purple-100/30 rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">When</p>
                  <p className="font-medium">January 31-February 1, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Where</p>
                  <p className="font-medium">Sharjah Research, Technology and Innovation Park</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <Users className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="font-medium">14,000+ participants</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/80 p-3 rounded-full">
                  <Layout className="h-6 w-6 text-sheraa-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-medium">10+ zones, 250+ activities</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Participation Options */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">How You Can Participate</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are multiple ways to contribute to the SEF experience and showcase your expertise, brand, or support
            </p>
          </div>
          
          <Tabs defaultValue="speak" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols md:grid-cols-4 w-full mb-8 py-[85px] my-[19px] bg-inherit">
              <TabsTrigger value="speak" className="text-base py-3 bg-gray-800 hover:bg-gray-700 mx-[8px]">
                <div className="flex flex-col items-center gap-1">
                  <Mic className="h-5 w-5" />
                  <span>Speak</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="exhibit" className="text-base py-3 bg-gray-800 hover:bg-gray-700">
                <div className="flex flex-col items-center gap-1">
                  <Layout className="h-5 w-5" />
                  <span>Exhibit</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="sponsor" className="text-base py-3 text-gray-50 bg-gray-800 hover:bg-gray-700 rounded-lg font-normal mx-[8px]">
                <div className="flex flex-col items-center gap-1">
                  <Award className="h-5 w-5" />
                  <span>Sponsor</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="text-base py-3 bg-gray-800 hover:bg-gray-700 mx-[8px]">
                <div className="flex flex-col items-center gap-1">
                  <Users className="h-5 w-5" />
                  <span>Volunteer</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(opportunities).map(key => <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities[key].map(opp => <motion.div key={opp.id} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-sheraa-primary/10 text-sheraa-primary">
                            <opp.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-sheraa-primary">{opp.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-5">{opp.description}</p>
                        
                        <div className="mb-5">
                          <h4 className="text-sm uppercase text-gray-500 font-medium mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {opp.benefits.map((benefit, idx) => <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-sheraa-teal mt-1">•</span>
                                <span>{benefit}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        <div className="mb-5">
                          <h4 className="text-sm uppercase text-gray-500 font-medium mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {opp.requirements.map((req, idx) => <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-sheraa-teal mt-1">•</span>
                                <span>{req}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        {opp.deadlines && <p className="text-sm text-gray-500 mb-3">
                            <span className="font-medium">Deadline:</span> {opp.deadlines}
                          </p>}
                        
                        {opp.contactInfo && <p className="text-sm text-gray-500 mb-6">
                            {opp.contactInfo}
                          </p>}
                        
                        {opp.requiresDocuments && <p className="text-sm flex items-center text-sheraa-primary mb-6">
                            <FileUp className="h-4 w-4 mr-1" />
                            <span>Requires ID/passport documentation</span>
                          </p>}
                        
                        <div className="mt-auto">
                          <Button className="w-full flex items-center justify-center gap-2">
                            {opp.buttonText}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>)}
                </div>
              </TabsContent>)}
          </Tabs>
        </div>
        
        {/* Enhanced Application Form with File Uploads */}
        <div className="mb-20" id="apply-form">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Express Your Interest</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the form below and our team will get in touch with next steps for your selected opportunity
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-6 md:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</Label>
                    <Input type="text" id="firstName" className="w-full" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</Label>
                    <Input type="text" id="lastName" className="w-full" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</Label>
                    <Input type="email" id="email" className="w-full" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</Label>
                    <Input type="tel" id="phone" className="w-full" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization / Company *</Label>
                  <Input type="text" id="organization" className="w-full" required />
                </div>
                
                <div>
                  <Label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role / Position *</Label>
                  <Input type="text" id="role" className="w-full" required />
                </div>
                
                <div>
                  <Label htmlFor="opportunity" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in: *</Label>
                  <select id="opportunity" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary" required>
                    <option value="">Select an opportunity</option>
                    <optgroup label="Speaking">
                      <option value="keynote">Keynote Speaker</option>
                      <option value="panel">Panel Participant</option>
                      <option value="workshop">Workshop Facilitator</option>
                    </optgroup>
                    <optgroup label="Exhibiting">
                      <option value="startup">Startup Exhibitor</option>
                      <option value="ecosystem">Ecosystem Partner</option>
                      <option value="creative">Creative Showcase</option>
                    </optgroup>
                    <optgroup label="Sponsoring">
                      <option value="main">Main Partner</option>
                      <option value="zone">Zone Sponsor</option>
                      <option value="competition">Competition Sponsor</option>
                    </optgroup>
                    <optgroup label="Volunteering">
                      <option value="event">Event Volunteer</option>
                      <option value="student">Student Ambassador</option>
                      <option value="media">Content Creator</option>
                    </optgroup>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us more about your interest *</Label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary" placeholder="Please share any relevant experience, ideas, or questions related to your interest..." required></textarea>
                </div>

                {/* File Upload Section */}
                <div className="space-y-6 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-sheraa-primary flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Required Documentation
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    Please upload the following documents to complete your application. Accepted formats include PDF, JPG, and PNG files. Maximum file size: 5MB per file.
                  </p>
                  
                  {/* Identification Document */}
                  <div className="space-y-2">
                    <Label htmlFor="identification" className="font-medium flex items-center gap-2">
                      Passport or ID Card Copy <span className="text-red-500">*</span>
                    </Label>
                    
                    <div className="flex flex-col space-y-3">
                      <div className="border border-dashed border-sheraa-primary/40 rounded-lg p-6 text-center bg-sheraa-primary/5 relative">
                        <input id="identification" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => handleFileChange(e, 'identification')} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="flex flex-col items-center justify-center gap-2">
                          <FileUp className="h-8 w-8 text-sheraa-primary/70" />
                          <p className="text-sm font-medium text-gray-700">
                            {files.identification ? `Selected: ${files.identification.name}` : 'Drag & drop or click to upload'}
                          </p>
                          <p className="text-xs text-gray-500">PDF, JPG or PNG (Max. 5MB)</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        This document is required for verification purposes and will be handled securely
                      </p>
                    </div>
                  </div>
                  
                  {/* Resume/CV */}
                  <div className="space-y-2">
                    <Label htmlFor="resume" className="font-medium flex items-center gap-2">
                      Resume/CV <span className="text-red-500">*</span>
                    </Label>
                    
                    <div className="flex flex-col space-y-3">
                      <div className="border border-dashed border-sheraa-primary/40 rounded-lg p-6 text-center bg-sheraa-primary/5 relative">
                        <input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={e => handleFileChange(e, 'resume')} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="flex flex-col items-center justify-center gap-2">
                          <FileUp className="h-8 w-8 text-sheraa-primary/70" />
                          <p className="text-sm font-medium text-gray-700">
                            {files.resume ? `Selected: ${files.resume.name}` : 'Drag & drop or click to upload'}
                          </p>
                          <p className="text-xs text-gray-500">PDF or DOC (Max. 5MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Portfolio/Samples (Optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="portfolio" className="font-medium flex items-center gap-2">
                      Portfolio or Work Samples <span className="text-gray-500">(Optional)</span>
                    </Label>
                    
                    <div className="flex flex-col space-y-3">
                      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 relative">
                        <input id="portfolio" type="file" accept=".pdf,.jpg,.jpeg,.png,.zip" onChange={e => handleFileChange(e, 'portfolio')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="flex flex-col items-center justify-center gap-2">
                          <FileUp className="h-8 w-8 text-gray-400" />
                          <p className="text-sm font-medium text-gray-700">
                            {files.portfolio ? `Selected: ${files.portfolio.name}` : 'Drag & drop or click to upload'}
                          </p>
                          <p className="text-xs text-gray-500">PDF, JPG, PNG or ZIP (Max. 10MB)</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500">
                        For speakers, exhibitors, and content creators, please share examples of your previous work
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Terms and Conditions */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center h-5">
                      <Switch id="terms" checked={agreeTerms} onCheckedChange={setAgreeTerms} required />
                    </div>
                    <div className="ml-3 text-sm">
                      <Label htmlFor="terms" className="text-gray-600">
                        I consent to Sheraa contacting me about this opportunity and storing my information in accordance with the <Link to="/privacy-policy" className="text-sheraa-primary hover:underline">Privacy Policy</Link>. I confirm that all submitted documents are authentic and accurate.
                      </Label>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="text-center">
                  <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                    {isSubmitting ? <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        <span>Submitting...</span>
                      </div> : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Key Dates & Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important deadlines for SEF'26 participation opportunities
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-sheraa-primary/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem date="September 30, 2025" title="Speaker Applications Close" description="Final date to submit applications for keynote and featured speaking opportunities." side="right" />
              
              <TimelineItem date="October 15, 2025" title="Panel Participant Deadline" description="Last day to apply for participation in panel discussions and fireside chats." side="left" />
              
              <TimelineItem date="October 30, 2025" title="Workshop Proposals Due" description="Deadline for submitting workshop and masterclass proposals." side="right" />
              
              <TimelineItem date="November 15, 2025" title="Student Ambassador Applications Close" description="Final date for university students to apply for the ambassador program." side="left" />
              
              <TimelineItem date="November 30, 2025" title="Ecosystem Partner Applications Due" description="Deadline for organizations to secure exhibition space in the Ecosystem Zone." side="right" />
              
              <TimelineItem date="December 1, 2025" title="Creative Showcase Submissions" description="Last day to submit work for consideration in the Creative Zone." side="left" />
              
              <TimelineItem date="December 15, 2025" title="Multiple Deadlines" description="Final date for startup exhibitor applications, content creator applications, and sponsor commitments." side="right" />
              
              <TimelineItem date="December 20, 2025" title="Volunteer Applications Close" description="Last opportunity to join the SEF volunteer team." side="left" />
              
              <TimelineItem date="January 31 - February 1, 2026" title="SEF'26 Festival Dates" description="The main event! Two days of inspiration, connection, and growth." side="right" isLast={true} />
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about participating in SEF'26
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">Do speakers need to pay for festival tickets?</h3>
              <p className="text-gray-600">No, approved speakers receive complimentary access to the festival for the day of their session, with full festival passes provided for keynote speakers and those leading multiple sessions.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">What costs are associated with exhibiting?</h3>
              <p className="text-gray-600">Startup exhibition packages start at AED 3,500 for early applications, while ecosystem partner and creative showcase fees vary based on space requirements and organization type. Non-profit rates are available.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">Can international participants apply?</h3>
              <p className="text-gray-600">Yes, SEF welcomes international speakers, exhibitors, and sponsors. We can provide invitation letters to support visa applications. Note that travel and accommodation costs are typically self-funded.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">Are there networking opportunities for participants?</h3>
              <p className="text-gray-600">All participants receive access to networking events relevant to their role. Exhibitors can participate in Investor Connect, speakers join speaker networking sessions, and volunteers attend a special appreciation event.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">What is the selection process and timeline?</h3>
              <p className="text-gray-600">Applications are reviewed on a rolling basis by the SEF program team. You'll typically receive a response within 2-3 weeks of application, with detailed information provided to selected participants.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">What documentation is required for applications?</h3>
              <p className="text-gray-600">All applicants need to submit identification (passport/ID) and a resume/CV. Additional documents like portfolios are recommended for speakers and content creators. International applicants may need to provide extra documentation for visa purposes.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/events/sef/faq" className="inline-flex items-center text-sheraa-primary hover:text-sheraa-teal font-medium">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        {/* Related Links */}
        <div>
          <h3 className="text-xl font-semibold text-sheraa-primary mb-6">Explore More</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/events/sef/agenda" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Event Agenda</h4>
              <p className="text-gray-600 mt-2 text-sm">Browse the full schedule of keynotes, panels, and workshops.</p>
            </Link>
            
            <Link to="/events/sef/speakers" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Featured Speakers</h4>
              <p className="text-gray-600 mt-2 text-sm">Meet the minds shaping the future of entrepreneurship.</p>
            </Link>
            
            <Link to="/events/sef/experience" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">SEF Experience</h4>
              <p className="text-gray-600 mt-2 text-sm">Discover the unique zones and experiences at SEF'26.</p>
            </Link>
            
            <Link to="/events/sef/register" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <h4 className="font-medium text-lg text-sheraa-primary group-hover:text-sheraa-teal transition-colors">Register to Attend</h4>
              <p className="text-gray-600 mt-2 text-sm">Secure your spot at the region's premier entrepreneurship festival.</p>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>;
};

// Helper component for timeline items
type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  isLast?: boolean;
};
const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  side,
  isLast = false
}) => {
  return <div className={`flex items-center justify-between ${side === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4">
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 
          ${side === 'right' ? 'ml-12 md:ml-0 mr-0 md:mr-6' : 'ml-12 md:ml-6'}`}>
          <span className="text-sheraa-teal font-semibold block mb-2">{date}</span>
          <h3 className="text-lg font-semibold text-sheraa-primary mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-sheraa-primary rounded-full shadow-lg z-10"></div>
    </div>;
};
export default SEFBePartPage;