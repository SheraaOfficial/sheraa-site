
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Sparkles } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Users, Layout, Award, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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
};

const SEFBePartPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("speak");
  
  // Opportunities data
  const opportunities: Record<string, OpportunityType[]> = {
    speak: [
      {
        id: "keynote",
        title: "Keynote Speaker",
        description: "Share your insights, experience, and vision with the SEF community through a keynote presentation on one of our main stages.",
        benefits: [
          "Address 1000+ attendees on the Impact Stage",
          "Professional recording of your session",
          "Media coverage and promotion",
          "VIP access to all festival areas",
          "Networking opportunities with fellow speakers and VIPs"
        ],
        requirements: [
          "Recognized industry leader, successful entrepreneur, or thought leader",
          "Compelling story or insights relevant to the entrepreneurial journey",
          "Previous public speaking experience preferred",
          "Ability to deliver an engaging 20-30 minute presentation"
        ],
        deadlines: "Speaker applications close on September 30, 2025",
        contactInfo: "For inquiries: speakers@sheraa.ae",
        buttonText: "Apply to Speak",
        buttonLink: "#apply-form",
        icon: Mic
      },
      {
        id: "panel",
        title: "Panel Participant",
        description: "Join a curated discussion with fellow experts to explore key entrepreneurship topics, industry trends, or emerging opportunities.",
        benefits: [
          "Share your expertise alongside other thought leaders",
          "Professional recording of your panel",
          "Media features and promotion",
          "Full access to the festival",
          "Dedicated speaker support team"
        ],
        requirements: [
          "Subject matter expertise in relevant topic areas",
          "Professional experience in entrepreneurship, investment, or innovation",
          "Ability to articulate insights clearly and engage in meaningful discussion",
          "Available for pre-panel briefing and coordination"
        ],
        deadlines: "Panel participant applications close on October 15, 2025",
        contactInfo: "For inquiries: speakers@sheraa.ae",
        buttonText: "Join a Panel",
        buttonLink: "#apply-form",
        icon: Users
      },
      {
        id: "workshop",
        title: "Workshop Facilitator",
        description: "Lead a hands-on workshop or masterclass that provides practical skills, tools, or knowledge for entrepreneurs at different stages.",
        benefits: [
          "Showcase your expertise and methodology",
          "Direct impact on entrepreneurs' skill development",
          "Workshop materials included in digital resources",
          "Promotion as a subject matter expert",
          "Festival pass and networking opportunities"
        ],
        requirements: [
          "Practical expertise in a relevant business or technical area",
          "Experience in teaching, training, or workshop facilitation",
          "Interactive and engaging presentation style",
          "Ability to deliver tangible value in a 60-90 minute session"
        ],
        deadlines: "Workshop proposals due by October 30, 2025",
        contactInfo: "For inquiries: workshops@sheraa.ae",
        buttonText: "Propose a Workshop",
        buttonLink: "#apply-form",
        icon: Layout
      }
    ],
    exhibit: [
      {
        id: "startup",
        title: "Startup Exhibitor",
        description: "Showcase your startup at Startup Town, the heart of SEF where promising ventures connect with investors, customers, and partners.",
        benefits: [
          "Branded exhibition space for two days",
          "Inclusion in the startup directory",
          "Opportunity to participate in pitch competitions",
          "Access to Investor Connect program",
          "2 exhibitor passes and discounted team tickets"
        ],
        requirements: [
          "Tech-enabled startup with market traction",
          "Incorporated business with an MVP/product",
          "Founder or key team member present during exhibition hours",
          "Prepared pitch and marketing materials"
        ],
        deadlines: "Exhibition applications close on December 15, 2025",
        contactInfo: "For inquiries: startups@sheraa.ae",
        buttonText: "Apply to Exhibit",
        buttonLink: "#apply-form",
        icon: Layout
      },
      {
        id: "ecosystem",
        title: "Ecosystem Partner",
        description: "Represent your incubator, accelerator, university program, or support organization with a dedicated presence at the festival.",
        benefits: [
          "Branded booth space in the Ecosystem Zone",
          "Opportunity to host a side event or meetup",
          "Featured in ecosystem partner communications",
          "Access to startup database for recruitment",
          "3 representative passes"
        ],
        requirements: [
          "Active organization supporting entrepreneurial growth",
          "Clear value proposition for entrepreneurs",
          "Ability to staff booth during festival hours",
          "Prepared to engage with visitors and startups"
        ],
        deadlines: "Partner applications close on November 30, 2025",
        contactInfo: "For inquiries: partners@sheraa.ae",
        buttonText: "Become a Partner",
        buttonLink: "#apply-form",
        icon: Users
      },
      {
        id: "creative",
        title: "Creative Showcase",
        description: "Display innovative products, artworks, designs, or creative business concepts in the dedicated Creative Zone.",
        benefits: [
          "Showcase space in the Creative Zone",
          "Opportunity to conduct demonstrations",
          "Featured in creative economy spotlights",
          "Network with creative industry partners",
          "2 exhibitor passes"
        ],
        requirements: [
          "Original creative work or innovative products",
          "Business model related to creative economy",
          "Interactive or visually engaging display",
          "Creator or representative present during showcase hours"
        ],
        deadlines: "Creative submissions due by December 1, 2025",
        contactInfo: "For inquiries: creative@sheraa.ae",
        buttonText: "Submit Creative Work",
        buttonLink: "#apply-form",
        icon: Layout
      }
    ],
    sponsor: [
      {
        id: "main",
        title: "Main Partner",
        description: "Position your organization as a key enabler of entrepreneurship and innovation in the region through comprehensive festival partnership.",
        benefits: [
          "Premium branding across all festival assets",
          "Main stage speaking opportunity",
          "Dedicated exhibition area (6x6m)",
          "VIP access for 10 representatives",
          "Co-branded content and media coverage",
          "First right of refusal for next year"
        ],
        requirements: [
          "Alignment with entrepreneurship and innovation values",
          "Commitment to supporting the startup ecosystem",
          "Senior leadership engagement",
          "Promotional activation plan"
        ],
        contactInfo: "For partnership details: partnerships@sheraa.ae",
        buttonText: "Discuss Partnership",
        buttonLink: "#apply-form",
        icon: Award
      },
      {
        id: "zone",
        title: "Zone Sponsor",
        description: "Sponsor one of SEF's specialized experience zones, aligning your brand with specific themes like tech innovation, sustainability, or creative industries.",
        benefits: [
          "Naming rights for a festival zone",
          "Branded space within the zone",
          "Programming input for zone activities",
          "5 sponsor passes",
          "Targeted audience engagement",
          "Zone-specific media coverage"
        ],
        requirements: [
          "Brand alignment with zone theme",
          "Commitment to enhancing zone experience",
          "Promotional assets and staff",
          "Activation plan for the zone"
        ],
        contactInfo: "For zone sponsorship: partnerships@sheraa.ae",
        buttonText: "Sponsor a Zone",
        buttonLink: "#apply-form",
        icon: Layout
      },
      {
        id: "competition",
        title: "Competition Sponsor",
        description: "Support entrepreneurial talent by sponsoring one of SEF's pitch competitions, hackathons, or challenges with prizes and recognition.",
        benefits: [
          "Naming rights for the competition",
          "Jury participation opportunity",
          "Brand visibility in all competition materials",
          "Direct engagement with participating startups",
          "Award presentation on stage",
          "3 sponsor passes"
        ],
        requirements: [
          "Prize contribution (cash or in-kind)",
          "Judge representative (if desired)",
          "Support in competition promotion",
          "Commitment to follow-up with winners"
        ],
        contactInfo: "For competition details: competitions@sheraa.ae",
        buttonText: "Sponsor a Competition",
        buttonLink: "#apply-form",
        icon: Award
      }
    ],
    volunteer: [
      {
        id: "event",
        title: "Event Volunteer",
        description: "Support the smooth execution of SEF by assisting with logistics, attendee experience, and general festival operations.",
        benefits: [
          "Full festival access when not on duty",
          "Official SEF volunteer certificate",
          "Exclusive volunteer t-shirt and swag",
          "Networking opportunities with speakers and partners",
          "Training in event management",
          "Food and refreshments during shifts"
        ],
        requirements: [
          "Available for at least 2 shifts (4-6 hours each)",
          "Customer service orientation",
          "Fluent in English (Arabic a plus)",
          "Attendance at pre-event training session",
          "Minimum age of 18 years"
        ],
        deadlines: "Volunteer applications close on December 20, 2025",
        contactInfo: "For inquiries: volunteers@sheraa.ae",
        buttonText: "Join as Volunteer",
        buttonLink: "#apply-form",
        icon: Users
      },
      {
        id: "student",
        title: "Student Ambassador",
        description: "Represent SEF at your university and help mobilize student participation through campus activities and promotion.",
        benefits: [
          "Leadership experience in event promotion",
          "SEF Ambassador certificate and reference",
          "Exclusive training and development sessions",
          "VIP access to certain festival areas",
          "Networking with industry leaders",
          "Special ambassador merchandise"
        ],
        requirements: [
          "Currently enrolled student in UAE university",
          "Strong communication skills",
          "Active on campus and social media",
          "Able to organize at least one pre-event campus activity",
          "Passion for entrepreneurship"
        ],
        deadlines: "Ambassador applications close on November 15, 2025",
        contactInfo: "For inquiries: campus@sheraa.ae",
        buttonText: "Become an Ambassador",
        buttonLink: "#apply-form",
        icon: Award
      },
      {
        id: "media",
        title: "Content Creator",
        description: "Capture the SEF experience through photography, videography, social media content, or written articles as part of our media team.",
        benefits: [
          "Portfolio-building opportunity",
          "Byline/credit on official content",
          "Access to exclusive areas and moments",
          "Media team mentorship",
          "Content creator certificate",
          "Networking with industry professionals"
        ],
        requirements: [
          "Portfolio of previous work",
          "Own equipment (camera, smartphone, etc.)",
          "Ability to create and edit content quickly",
          "Available for pre-event briefing",
          "Active on relevant social platforms"
        ],
        deadlines: "Content creator applications close on December 15, 2025",
        contactInfo: "For inquiries: media@sheraa.ae",
        buttonText: "Join Media Team",
        buttonLink: "#apply-form",
        icon: Layout
      }
    ]
  };

  return (
    <MainLayout
      backgroundStyle={{
        background: "linear-gradient(to right, rgba(110, 89, 165, 0.05), rgba(26, 31, 44, 0.05))",
      }}
    >
      <section className="container mx-auto py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
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
          
          <Tabs 
            defaultValue="speak" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              <TabsTrigger value="speak" className="text-base py-3">
                <div className="flex flex-col items-center gap-1">
                  <Mic className="h-5 w-5" />
                  <span>Speak</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="exhibit" className="text-base py-3">
                <div className="flex flex-col items-center gap-1">
                  <Layout className="h-5 w-5" />
                  <span>Exhibit</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="sponsor" className="text-base py-3">
                <div className="flex flex-col items-center gap-1">
                  <Award className="h-5 w-5" />
                  <span>Sponsor</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="volunteer" className="text-base py-3">
                <div className="flex flex-col items-center gap-1">
                  <Users className="h-5 w-5" />
                  <span>Volunteer</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(opportunities).map((key) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {opportunities[key].map((opp) => (
                    <motion.div
                      key={opp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                    >
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
                            {opp.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-sheraa-teal mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-5">
                          <h4 className="text-sm uppercase text-gray-500 font-medium mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {opp.requirements.map((req, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-sheraa-teal mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {opp.deadlines && (
                          <p className="text-sm text-gray-500 mb-3">
                            <span className="font-medium">Deadline:</span> {opp.deadlines}
                          </p>
                        )}
                        
                        {opp.contactInfo && (
                          <p className="text-sm text-gray-500 mb-6">
                            {opp.contactInfo}
                          </p>
                        )}
                        
                        <div className="mt-auto">
                          <Button className="w-full flex items-center justify-center gap-2">
                            {opp.buttonText}
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Application Form */}
        <div className="mb-20" id="apply-form">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-sheraa-primary mb-4">Express Your Interest</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the form below and our team will get in touch with next steps for your selected opportunity
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization / Company *</label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Your Role / Position *</label>
                  <input
                    type="text"
                    id="role"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="opportunity" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in: *</label>
                  <select
                    id="opportunity"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                    required
                  >
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us more about your interest *</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sheraa-primary focus:border-sheraa-primary"
                    placeholder="Please share any relevant experience, ideas, or questions related to your interest..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I consent to Sheraa contacting me about this opportunity and storing my information in accordance with the <Link to="/privacy-policy" className="text-sheraa-primary hover:underline">Privacy Policy</Link>.
                  </label>
                </div>
                
                <div className="text-center">
                  <Button type="submit" size="lg" className="px-8">
                    Submit Application
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
              <TimelineItem 
                date="September 30, 2025"
                title="Speaker Applications Close"
                description="Final date to submit applications for keynote and featured speaking opportunities."
                side="right"
              />
              
              <TimelineItem 
                date="October 15, 2025"
                title="Panel Participant Deadline"
                description="Last day to apply for participation in panel discussions and fireside chats."
                side="left"
              />
              
              <TimelineItem 
                date="October 30, 2025"
                title="Workshop Proposals Due"
                description="Deadline for submitting workshop and masterclass proposals."
                side="right"
              />
              
              <TimelineItem 
                date="November 15, 2025"
                title="Student Ambassador Applications Close"
                description="Final date for university students to apply for the ambassador program."
                side="left"
              />
              
              <TimelineItem 
                date="November 30, 2025"
                title="Ecosystem Partner Applications Due"
                description="Deadline for organizations to secure exhibition space in the Ecosystem Zone."
                side="right"
              />
              
              <TimelineItem 
                date="December 1, 2025"
                title="Creative Showcase Submissions"
                description="Last day to submit work for consideration in the Creative Zone."
                side="left"
              />
              
              <TimelineItem 
                date="December 15, 2025"
                title="Multiple Deadlines"
                description="Final date for startup exhibitor applications, content creator applications, and sponsor commitments."
                side="right"
              />
              
              <TimelineItem 
                date="December 20, 2025"
                title="Volunteer Applications Close"
                description="Last opportunity to join the SEF volunteer team."
                side="left"
              />
              
              <TimelineItem 
                date="January 31 - February 1, 2026"
                title="SEF'26 Festival Dates"
                description="The main event! Two days of inspiration, connection, and growth."
                side="right"
                isLast={true}
              />
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
              <h3 className="text-lg font-semibold text-sheraa-primary mb-3">Can I participate in multiple ways?</h3>
              <p className="text-gray-600">Yes, many organizations both sponsor and exhibit, while individuals might speak and volunteer. Please indicate all areas of interest in your application, and our team will work with you on the best approach.</p>
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
    </MainLayout>
  );
};

// Helper component for timeline items
type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  isLast?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, side, isLast = false }) => {
  return (
    <div className={`flex items-center justify-between ${side === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4">
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 
          ${side === 'right' ? 'ml-12 md:ml-0 mr-0 md:mr-6' : 'ml-12 md:ml-6'}`}>
          <span className="text-sheraa-teal font-semibold block mb-2">{date}</span>
          <h3 className="text-lg font-semibold text-sheraa-primary mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-sheraa-primary rounded-full shadow-lg z-10"></div>
    </div>
  );
};

export default SEFBePartPage;
