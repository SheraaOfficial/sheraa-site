
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Users, Building, Handshake } from 'lucide-react';

interface CommunityPageProps {
  section?: string;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ section }) => {
  const [activeSection, setActiveSection] = useState<string>(section || 'overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'join':
        return <MembershipSection />;
      case 'startups':
        return <StartupsSection />;
      case 'partnerships':
        return <PartnershipsSection />;
      default:
        return <CommunityOverview />;
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-sheraa-primary mb-4">Community & Partnerships</h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            At Sheraa, we believe that groundbreaking innovation happens through connection and collaboration. 
            We are the central hub uniting Sharjah's dynamic ecosystem of ambitious founders, seasoned mentors, 
            strategic investors, forward-thinking corporations, and supportive government entities.
          </p>
        </div>
        
        <Tabs
          defaultValue="overview"
          value={activeSection}
          onValueChange={setActiveSection}
          className="w-full mb-12"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="join">Join the Community</TabsTrigger>
            <TabsTrigger value="startups">Our Startups</TabsTrigger>
            <TabsTrigger value="partnerships">Partnership Opportunities</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {renderContent()}
      </div>
    </MainLayout>
  );
};

// Community Overview Component
const CommunityOverview: React.FC = () => {
  const communitySections = [
    {
      title: "Join Our Community",
      icon: Users,
      description: "Access essential resources, co-working spaces, and our vibrant network on your terms. Sheraa Membership offers a flexible pathway to support for founders with a market-ready product.",
      linkText: "Explore Membership Benefits",
      linkPath: "/community/join",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Our Startups",
      icon: Building,
      description: "Discover the diverse and impactful startups nurtured within the Sheraa ecosystem. Our portfolio spans key sectors generating significant economic value and creating thousands of jobs.",
      linkText: "Discover Our Startups",
      linkPath: "/community/startups",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Partnership Opportunities",
      icon: Handshake,
      description: "Collaboration is key to building a world-class ecosystem. We invite corporations, government entities, investors, and experienced mentors to partner with Sheraa.",
      linkText: "Explore Partnership Opportunities",
      linkPath: "/community/partnerships",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];
  
  return (
    <div>
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communitySections.map((section, idx) => {
            const IconComponent = section.icon;
            return (
              <Card key={idx} className={`${section.color} border-none hover:shadow-lg transition-all`}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
                    <IconComponent className={`h-6 w-6 ${section.iconColor}`} />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{section.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className={section.iconColor}>
                    <Link to={section.linkPath} className="flex items-center">
                      {section.linkText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">The Power of Our Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6">
              Our ecosystem is built on the principle that collective strength fuels individual success. By joining Sheraa, 
              you tap into a powerful network designed to accelerate growth, foster partnerships, and unlock opportunities.
            </p>
            <p className="text-gray-600 mb-6">
              This interconnectedness is not just a feature; it's the foundation of how we create impact, providing startups 
              with the validation, resources, and market access needed to thrive. With over 140 diverse partners, our reach 
              extends across industries and borders.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-sheraa-primary mb-2">140+</h3>
                <p className="text-gray-600">Ecosystem Partners</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-sheraa-primary mb-2">71%</h3>
                <p className="text-gray-600">Startup Survival Rate</p>
              </div>
            </div>
          </div>
          <div className="bg-sheraa-primary/10 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Community Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-sheraa-primary/20 flex items-center justify-center mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Founder-First Mindset</h4>
                  <p className="text-gray-600">We prioritize the needs and growth of our founders in everything we do.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-sheraa-primary/20 flex items-center justify-center mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Collaborative Spirit</h4>
                  <p className="text-gray-600">Our strength lies in bringing together diverse talents and resources.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-sheraa-primary/20 flex items-center justify-center mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Impact-Driven</h4>
                  <p className="text-gray-600">We focus on creating meaningful economic and social impact in Sharjah and beyond.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-sheraa-primary/20 flex items-center justify-center mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Innovation Orientation</h4>
                  <p className="text-gray-600">We embrace new ideas and approaches to solve pressing challenges.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-gradient-to-r from-sheraa-primary/5 to-sheraa-primary/10 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're a startup seeking support, an established company looking to innovate, or an 
          investor searching for the next big thing, the Sheraa community is where you belong.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            <Link to="/community/join">Join the Community</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/community/partnerships">Partner with Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Membership Section Component
const MembershipSection: React.FC = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Unlock Your Potential: Flexible Support with Sheraa Membership</h2>
        <p className="text-gray-600 max-w-3xl">
          Designed for founders with a product in the market, Sheraa Membership provides flexible, on-demand 
          access to the resources and connections you need to grow, without the structure of a long-term program. 
          It's the ideal way to stay connected to Sharjah's vibrant ecosystem and tap into support as required.
        </p>
      </div>
      
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Who is Membership For?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-10 w-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Founders with a Launched Product</h4>
              <p className="text-gray-600">
                Entrepreneurs who have already developed and launched their product or service in the market.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-10 w-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Startups Seeking Flexibility</h4>
              <p className="text-gray-600">
                Companies looking for community, networking, and ad-hoc resources without committing to a structured program.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-50 border-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-10 w-10 rounded-full bg-sheraa-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Connection-Focused Entrepreneurs</h4>
              <p className="text-gray-600">
                Business owners who value ecosystem connections and occasional support rather than intensive programming.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Membership Benefits</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 border border-gray-200">Benefit Category</th>
                <th className="text-left p-4 border border-gray-200">Specific Benefit</th>
                <th className="text-left p-4 border border-gray-200">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-gray-200 font-medium" rowSpan={1}>Workspace & Facilities</td>
                <td className="p-4 border border-gray-200">Free Co-working Access</td>
                <td className="p-4 border border-gray-200">Utilize inspiring co-working spaces at Sheraa HQ (SRTIP) and university hubs (AUS & UOS).</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 font-medium" rowSpan={4}>Network & Connections</td>
                <td className="p-4 border border-gray-200">Community Platform Access</td>
                <td className="p-4 border border-gray-200">Connect with fellow founders, mentors, and the Sheraa team via our exclusive Slack workspace.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200">Investor & Partner Introductions</td>
                <td className="p-4 border border-gray-200">Get facilitated connections to VCs, angel investors, potential customers, and corporate/government partners through events and mixers.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200">Mentor & Expert Network</td>
                <td className="p-4 border border-gray-200">Access our network of subject matter experts, coaches, and mentors for guidance.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200">Exclusive Event Invitations</td>
                <td className="p-4 border border-gray-200">Receive invitations to key ecosystem events, conferences, and potential speaking opportunities.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 font-medium" rowSpan={2}>Resources & Support</td>
                <td className="p-4 border border-gray-200">Perks & Credits</td>
                <td className="p-4 border border-gray-200">Benefit from credits for free or discounted services (limited time) to help get started.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200">Discounted Professional Services</td>
                <td className="p-4 border border-gray-200">Access vetted service providers (legal, HR, accounting, marketing, IT, business setup) at preferential rates.</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 font-medium" rowSpan={1}>Cost Savings</td>
                <td className="p-4 border border-gray-200">Subsidized Free Zone Incorporation</td>
                <td className="p-4 border border-gray-200">Take advantage of discounted packages for setting up your business in a Sharjah free zone (starting from $600 USD).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6">How to Apply</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-sheraa-primary text-white rounded-full mx-auto mb-4 text-xl font-bold">1</div>
            <h4 className="font-semibold mb-2">Check Eligibility</h4>
            <p className="text-gray-600">
              Ensure you meet the criteria (founder with a market-ready product).
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-sheraa-primary text-white rounded-full mx-auto mb-4 text-xl font-bold">2</div>
            <h4 className="font-semibold mb-2">Complete Application</h4>
            <p className="text-gray-600">
              Fill out the online form with details about your startup.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-sheraa-primary text-white rounded-full mx-auto mb-4 text-xl font-bold">3</div>
            <h4 className="font-semibold mb-2">Application Review</h4>
            <p className="text-gray-600">
              The Sheraa team will review and contact you regarding the outcome.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-sheraa-primary/10 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Join the Community?</h3>
          <p className="text-gray-600 mb-6">
            Take the first step to accessing Sheraa's network and resources. Apply for membership today.
          </p>
          <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            <Link to="/eligibility">Apply for Membership</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Startups Section Component
const StartupsSection: React.FC = () => {
  const sampleStartups = [
    {
      id: 1,
      name: "Baytuki",
      description: "Digital platform connecting homeowners with trusted home service providers.",
      sector: "Home Services",
      logo: "https://via.placeholder.com/150",
      website: "#"
    },
    {
      id: 2,
      name: "Exhale",
      description: "Mental wellness app offering guided meditation and stress reduction techniques.",
      sector: "HealthTech",
      logo: "https://via.placeholder.com/150",
      website: "#"
    },
    {
      id: 3,
      name: "Fifth Wall",
      description: "AR/VR solutions for architecture visualization and property touring.",
      sector: "PropTech",
      logo: "https://via.placeholder.com/150",
      website: "#"
    },
    {
      id: 4,
      name: "Caena",
      description: "Supply chain management software optimizing logistics operations.",
      sector: "LogisticsTech",
      logo: "https://via.placeholder.com/150",
      website: "#"
    },
    {
      id: 5,
      name: "KRISPR",
      description: "Innovative agricultural technology for sustainable crop production.",
      sector: "AgriTech",
      logo: "https://via.placeholder.com/150",
      website: "#"
    },
    {
      id: 6,
      name: "Lune",
      description: "Financial wellness platform helping users manage spending and save money.",
      sector: "FinTech",
      logo: "https://via.placeholder.com/150",
      website: "#"
    }
  ];

  const sectors = ["All Sectors", "AgriTech", "EdTech", "FinTech", "HealthTech", "LogisticsTech", "PropTech"];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Innovation in Action: The Sheraa Startup Portfolio</h2>
        <p className="text-gray-600 max-w-3xl">
          Sheraa is proud to support a dynamic and diverse portfolio of over 180 startups. These ventures are 
          tackling challenges, creating jobs, generating significant revenue ($248M+), and attracting substantial 
          investment ($171M+). Explore the innovative companies building the future from Sharjah.
        </p>
      </div>
      
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 mb-8">
          {sectors.map((sector, idx) => (
            <button 
              key={idx} 
              className={`px-4 py-2 rounded-full text-sm ${idx === 0 ? 'bg-sheraa-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {sector}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStartups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="max-h-24 max-w-[80%]"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{startup.name}</CardTitle>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {startup.sector}
                  </span>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {startup.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t pt-4">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={startup.website} target="_blank" rel="noopener noreferrer">
                    Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Success Stories</h3>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="h-64 lg:h-auto bg-gray-200"></div>
              <div className="p-8 lg:col-span-2">
                <h4 className="text-xl font-bold mb-2">El Grocer</h4>
                <p className="text-sm text-gray-500 mb-4">Food & Beverage</p>
                <p className="text-gray-600 mb-4">
                  El Grocer revolutionized grocery shopping in the UAE with their on-demand delivery app. Through Sheraa's accelerator program, 
                  they secured a crucial partnership with Sharjah Coop, enabling rapid market expansion.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">The Challenge</p>
                      <p className="text-sm text-gray-600">Gaining access to major grocery chains and scaling operations.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Sheraa's Support</p>
                      <p className="text-sm text-gray-600">Facilitated strategic partnerships and provided mentorship on operational scaling.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Impact & Milestones</p>
                      <p className="text-sm text-gray-600">Secured $3M in funding, expanded to 3 emirates, and achieved 300% year-over-year growth.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href="#" className="flex items-center">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href="#">Visit El Grocer</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="#" className="flex items-center mx-auto">
              View More Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-sheraa-primary/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">For Investors & Partners</h3>
          <p className="text-gray-600 mb-6">
            Interested in investing in or collaborating with our portfolio companies? Sheraa facilitates connections 
            with innovative startups aligned with your strategic goals.
          </p>
          <Button asChild className="bg-sheraa-primary hover:bg-sheraa-primary/90">
            <Link to="/community/partnerships">Connect with Startups</Link>
          </Button>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">For Founders</h3>
          <p className="text-gray-600 mb-6">
            Ready to join our portfolio of innovative startups? Explore our programs and become part of 
            Sharjah's thriving entrepreneurship ecosystem.
          </p>
          <Button asChild>
            <Link to="/programs">Explore Our Programs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Partnerships Section Component
const PartnershipsSection: React.FC = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Collaborate with Sheraa: Invest in Sharjah's Innovative Future</h2>
        <p className="text-gray-600 max-w-3xl">
          Sheraa thrives on collaboration. We partner with a diverse range of organizations – from government bodies 
          and multinational corporations to investors and academic institutions – to build a robust and dynamic 
          entrepreneurial ecosystem in Sharjah. Partnering with Sheraa offers unique opportunities to access 
          innovation, support emerging talent, and contribute to the region's economic growth.
        </p>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Why Partner with Sheraa?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mb-4">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <CardTitle>Access Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Tap into a curated pipeline of vetted startups across key sectors for potential investment, 
                pilot projects, or acquisition opportunities.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mb-4">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <CardTitle>Drive Strategic Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Collaborate on initiatives aligned with your corporate social responsibility objectives, 
                industry challenges, or national strategic priorities.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mb-4">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <CardTitle>Enhance Brand Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Position your organization as a leader in innovation and a key supporter of the regional 
                entrepreneurship ecosystem through event sponsorships and program partnerships.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mb-4">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <CardTitle>Connect with Talent</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Engage with bright, entrepreneurial talent emerging from Sharjah's strong academic base 
                and Sheraa's youth programs.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mb-4">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
              <CardTitle>Shape the Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Contribute your expertise as a mentor, advisor, or speaker, playing a direct role 
                in nurturing the next generation of successful ventures.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Opportunities for Collaboration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-sheraa-primary/5 to-sheraa-primary/10 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Corporate Partners</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Sponsor programs or events (SEF Zones)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Provide industry expertise and mentorship</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Offer pilot opportunities for startups</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sheraa-primary mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Offer perks/services to our community</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Government & Public Sector</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Collaborate on strategic initiatives</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Co-develop challenges for startups</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Align programs with national agendas</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Support policy development</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Investors (VCs, Angels, CVCs)</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Gain access to vetted deal flow</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Co-invest alongside Sheraa partners</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Participate as judges or mentors</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Mentors & Experts</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Share knowledge and experience</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Lead workshops or masterclasses</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mr-3 mt-1">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span className="text-gray-600">Provide pro-bono consultations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Our Esteemed Partners</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Founding Partners</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Array(7).fill(0).map((_, idx) => (
                <div key={idx} className="h-32 bg-gray-100 flex items-center justify-center rounded-lg">
                  <div className="text-gray-400 text-sm">Partner Logo</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Government & Strategic Partners</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Array(4).fill(0).map((_, idx) => (
                <div key={idx} className="h-32 bg-gray-100 flex items-center justify-center rounded-lg">
                  <div className="text-gray-400 text-sm">Partner Logo</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Corporate Partners</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Array(8).fill(0).map((_, idx) => (
                <div key={idx} className="h-32 bg-gray-100 flex items-center justify-center rounded-lg">
                  <div className="text-gray-400 text-sm">Partner Logo</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center bg-sheraa-primary/10 p-12 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can collaborate to achieve shared goals and make a lasting impact on 
          Sharjah's entrepreneurial ecosystem.
        </p>
        <Button asChild size="lg" className="bg-sheraa-primary hover:bg-sheraa-primary/90">
          <Link to="/contact">Contact Us About Partnership</Link>
        </Button>
      </div>
    </div>
  );
};

export default CommunityPage;
